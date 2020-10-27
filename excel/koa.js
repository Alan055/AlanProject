var Koa = require('koa' );
var Router = require('koa-router' );
var fs= require('fs')
var moment= require('moment')
var send= require('koa-send')
var join = require('path').join
var app = new Koa();
var router = new Router();
var all = require('./All')

app.use(require('koa-static')(join(__dirname, 'static'))) // 静态文件中间件 接口中获取静态资源不需要带static
router.get( '/siwen', async (ctx, next) => {
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}点击了生成文件`)
    const res = await all()
    console.log(`${moment().format('YYYY-MM-DD HH:mm:ss')}生成文件完成`)
    ctx.body = res
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

//使用路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen( 81 )