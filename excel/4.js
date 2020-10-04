

const axios = require('axios')

let url = 'http://www.baidu.com'
async function ttt(){
  axios.get('http://localhost:8888/pachong?url='+url).then(res=>{console.log("1")})
  axios.get('http://localhost:8888/pachong?url='+url).then(res=>{console.log("2")})
  axios.get('http://localhost:8888/pachong?url='+url).then(res=>{console.log("3")})
  axios.get('http://localhost:8888/pachong?url='+url).then(res=>{console.log("4")})
}
ttt()

