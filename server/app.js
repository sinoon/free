/**
 * @author  shangnan
 * @date    2016/10/10
 * @email   shangnan@baidu.com
 */

/**
 * 主文件
 */
const Koa = require('koa')

/**
 * 中间件
 */
const bodyParser = require('koa-bodyparser')

/**
 * 路由
 */
const index = require('./router/index')
const blog  = require('./router/blog')

const app = new Koa()

app.use(async (ctx, next)=> {
    try {
        await next()
    } catch (err) {
        ctx.body   = { message: err.message }
        ctx.status = err.status || 500
    }
})

app.use(async (ctx, next)=> {
    let start = new Date()
    await next()
    let end = new Date() - start
    console.log(`time: ${end} ms`)
})
app
    .use(bodyParser())

app
    .use(index)
    .use(blog)

app.listen(3000, () => {
    console.log(`listen on 3000`)
})
