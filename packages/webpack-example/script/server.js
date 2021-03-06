const Koa = require('koa')

const app = new Koa()


app.use((ctx,next)=>{
    ctx.body = ctx.req.url
})

app.listen('9001')