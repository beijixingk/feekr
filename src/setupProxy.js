const proxy = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        '/api',
        proxy({
            target:'https://wapi.feekr.com',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        })
    )
    app.use(
        '/feekr',
        proxy({
            target:'http://localhost:9000',
            changeOrigin:true
        })
    )
}
