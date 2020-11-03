var Koa = require('koa' );
var Router = require('koa-router' );
var fs= require('fs')
var moment= require('moment')
var send= require('koa-send')
var schedule = require('node-schedule');
var join = require('path').join
var app = new Koa();
var router = new Router();
var all = require('./All')

app.use(require('koa-static')(join(__dirname, 'static'))) // 静态文件中间件 接口中获取静态资源不需要带static
router.get( '/siwen', async (ctx, next) => {
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}点击了生成文件`)
    const res = await all()
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}生成文件完成`)
    let stat = fs.statSync(join(__dirname + '/static/爬虫汇总.xlsx'))
    ctx.body = {msg: res, time: moment(stat.atime).format('YYYY-MM-DD HH:mm:ss')}
});
router.get( '/latestTime', async (ctx, next) => {
    let stat = fs.statSync(join(__dirname + '/static/爬虫汇总.xlsx'))
    ctx.body = moment(stat.atime).format('YYYY-MM-DD HH:mm:ss')
});
router.get( '/', async (ctx, next) => {
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}请求了该页面`)
    ctx.body = fs.readFileSync(join(__dirname, 'index.html'), 'utf-8')
})
router.get( '/download', async (ctx, next) => {
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}下载了excel`)
    const filename = '爬虫汇总.xlsx'
    ctx.attachment(filename)
    await send(ctx, filename, {root: join(__dirname + '/static/')})
})


var j = schedule.scheduleJob({hour: 11, minute: 30, second: 0}, function(){
    console.log('定时任务，执行爬虫任务！');
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    all()
});
//使用路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen( 81 )