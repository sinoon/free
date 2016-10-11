/**
 * @author  shangnan
 * @date    2016/10/11
 * @email   shangnan@baidu.com
 */

const Router = require('koa-router')

const router = new Router()

router.get('/', (ctx)=> {
    ctx.body = 'index'
})

module.exports = router.routes()