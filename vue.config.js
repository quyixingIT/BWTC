const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
module.exports = {
    baseUrl: './', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
        configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else { // 生产环境配置
        }

        // Object.assign(config, { // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@': path.resolve(__dirname, './src'),
        //             '@c': path.resolve(__dirname, './src/components'),
        //             'vue$': 'vue/dist/vue.esm.js'
        //         }
        //     }
        // })
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
        // svg rule loader
        //const svgRule = config.module.rule('svg') // 找到svg-loader
       // console.log(svgRule);
        // svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        // svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        // svgRule // 添加svg新的loader处理
        //     .test(/\.svg$/)
        //     .use('svg-sprite-loader')
        //     .loader('svg-sprite-loader')
        //     .options({
        //         symbolId: 'icon-[name]',
        //     })
        //
        // // 修改images loader 添加svg处理
        // const imagesRule = config.module.rule('images')
        // imagesRule.exclude.add(resolve('src/icons'))
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: false,
        host: '192.168.1.124',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: { // 配置跨域
        //     '/FuelOilService.asmx': {
        //         target: 'http://192.168.1.102:81/FuelOilService.asmx',
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '^/FuelOilService.asmx': '/'
        //         }
        //     }
        // },
        before: app => { }
    }
}
