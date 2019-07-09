const webpack = require('webpack');

module.exports = {
    configureWebpack: {                 // 全域名稱給予
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
            }),
        ]
    },
    publicPath: process.env.BASE_URL,   // 消除 github 提供的網頁伺服器所存在的路徑 bug
}