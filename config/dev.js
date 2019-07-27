module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {
    },
    weapp: {},
    h5: {
        devServer: {
            public: "https://tera-wallet.miaowoo.cc",
            disableHostCheck: true,
            proxy: {
                '^/api': {
                    target: 'https://teraapi.sixi.com',
                    ws: true,
                    changeOrigin: true
                }
            }
        },
    }
}
