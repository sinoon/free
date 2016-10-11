/**
 * @author  shangnan
 * @date    2016/10/11
 * @email   shangnan@baidu.com
 */

const Router = require('koa-router')

const router = new Router({
    prefix: '/blog'
})

/**
 * blog list
 */
router.get('/', ctx => {
    ctx.body = 'blog index'
})

router.get('/:name', ctx => {
    console.log(ctx.params.name)
    ctx.body = ctx.params.name
})

module.exports = router.routes()
