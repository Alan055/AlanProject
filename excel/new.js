const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const iconv = require('iconv-lite');
const xlsx = require('node-xlsx')
console.time('爬虫已完成！耗时：')
let url = encodeURIComponent('https://trade.500.com/jczq/?playid=270&g=2')

async function pachong(){
  let res = await axios.get('http://47.102.219.124:8888/pachong?url='+url)
  let $ = cheerio.load(res.data)
  // 获取表格头
  let tableTop = [
    $('#betTbTheadWrap .th-no').text(),
    $('#betTbTheadWrap .th-evt').text(),
    $('#betTbTheadWrap .th-endtime .tit').text(),
    $('#betTbTheadWrap .th-team .team-l').text(),
    $('#betTbTheadWrap .th-team .team-r').text()
  ];
  let  arr = $('#betTbTheadWrap .th-betbtn span')
  for(let val of Array.from(arr)){
  	tableTop.push($(val).text())
  }
  tableTop = tableTop.concat(['即时大小','初始大小'])
  // 拿到表格内容
  arr = Array.from($('.bet-main>table.bet-tb tr'))
  let tableContent = []

  new Promise( resolve => {
    for(let [index,val] of arr.entries()){
      let obj = {
        date: $(val).find('.td-no a').text(),
        name: $(val).find('.td-evt a').text(),
        startTime: $(val).find('.td-endtime').text(),
        homeTeam: $(val).find('.td-team .team-l a').text(),
        awayTeam: $(val).find('.td-team .team-r a').text(),
      }
      let a = $(val).find('.td-betbtn .betbtn')
      for (let [i, v] of Array.from(a).entries()) {
        obj['ball'+ i] = $(v).text()
      }
      let url_daxiao = $(val).find('.td-data a').eq(1).attr('href')
      url_daxiao = decodeURIComponent(url_daxiao.replace('yazhi', 'daxiao'))
      axios.get('http://47.102.219.124:8888/pachong?url='+encodeURIComponent(url_daxiao)).then(daxiaoHtml=>{
        let $$ = cheerio.load(daxiaoHtml.data)
        let daxiaoEle = Array.from($$('#datatb tbody tr'))
        let ele = daxiaoEle.find(e=>($(e).find('.tb_plgs a').attr('title') == '澳门'))
        if(ele){
          let table0 = $(ele).find('.pl_table_data tbody')[0]
          let table1 = $(ele).find('.pl_table_data tbody')[1]
          obj.currentDX1 = $(table0).find('td').eq(0).text()
          obj.currentDX2 = $(table0).find('td').eq(1).text()
          obj.currentDX3 = $(table0).find('td').eq(2).text()
          obj.startDX1 = $(table1).find('td').eq(0).text()
          obj.startDX2 = $(table1).find('td').eq(1).text()
          obj.startDX3 = $(table1).find('td').eq(2).text()
        }
        tableContent[index] = obj
        if(tableContent.flat().length == arr.length){
          resolve()
        }
      })
    }
  }).then(()=>{
    buildExcel(tableTop,tableContent)
  })
}

// 写入到excel中
function buildExcel(topList, tableList){
  // 写入到表格里面
  const conf = {};
  conf.stylesXmlFile = "styles.xml"
// 定义sheet名称
  conf.name = "爬虫数据";
// 定义列的名称以及数据类型
  conf.cols = topList.map(e=>({caption:e, type:'string'}))
  for(let [i, v] of conf.cols.entries()){
    if(i>12){
      conf.cols.splice(i, 1,[ v,{ caption: ' ', type: 'string' }, { caption: ' ', type: 'string' }])
    }
  }
  conf.cols = conf.cols.flat()
// 定义row的数据
  conf.rows = [];
  for(let val of tableList){
    conf.rows.push(Object.values(val))
  }
  // console.log(conf.cols)

  let dataSheet1 = [conf.cols.map(e=>(e.caption))].concat(conf.rows)
  let range1 = {s: {c: 13, r:0 }, e: {c:15, r:0}}
  let range2 = {s: {c: 16, r:0 }, e: {c:18, r:0}}
  let sheetOptions = {'!merges': [ range1, range2]}
  var result = xlsx.build([{name: "新秘籍", data: dataSheet1,  options: sheetOptions}]); // 转成二进制
  let targetPath = './新秘籍.xlsx'
  // fs将文件写到内存
  fs.writeFile(targetPath, result, 'binary',function(err) {
    if (err) {
      console.log(err);
    }
    console.timeEnd('爬虫已完成！耗时：')
  });
}

pachong()
