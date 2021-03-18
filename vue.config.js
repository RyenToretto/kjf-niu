// const path = require('path')
module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = 'kjf测试';
            return args;
        });
        // config.resolve.alias
        //   .set('@common', path.resolve(__dirname, '../common'))
        config.when(
            process.env.NODE_ENV === 'production',
            // production
            (config) => {
                config.set('externals', {
                    "vue": 'Vue',
                    'element-ui': 'ELEMENT'
                });
            },
            // development
            (config) => {
                config.set('externals', {
                    foo: 'bar'
                });
            }
        );
    },
    devServer: {
        disableHostCheck: true,
        port: 4399,
        headers: {},
        open: true,
        openPage: 'mock/',
        proxy: {
            '/api': {
                target: process.env.VUE_APP_API_PROXY,
                changeOrigin: true
                // pathRewrite: { '^/api': '' }
            }
        }
    }
};
