const path = require('path') // 引用path模块
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {  // 这里是commrnt.js语法
    // 入口文件
    entry: "./src/main.js",
    // 打包后的出口文件
    output: {
        // 输出的路径  是绝对路径(导入path模块) 这里是用node来做的
        path: path.resolve(__dirname, 'build'),
        // 输出的文件名称
        filename: 'dist.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }
                ]
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(), // 使用npm 导入使用vue-loader的插件
    ],
    mode: "development"
}
/*
    npm安装时-S -D作用及区别:
        -S 即--save（保存）
        包名会被注册在package.json的dependencies里面，在生产环境下这个包的依赖依然存在
        -D 即--dev（生产）
        包名会被注册在package.json的devDependencies里面，仅在开发环境下存在的包用-D，如babel,sass-loader这些解析器

        打包是在npm上运行命令, 一般来说你在配置完成 webpack.config.js 后,你打包时执行的命令是webpack ,但你也可以执行 npm run build 来进行打包,
        如何实现: 在package.json中的scripts下多加一行 "build": "webpack" ,就可以使用 npm run build
        他们的区别:
            在终端直接执行webpack命令,使用的是全局安装的webpack,
            当在package.js中定义了scripts时, 其包含了webpack命令,那么使用的是局部的webpack 
            
        运行命令
        开发环境: webpack ./src/index.js -o ./build/build.js --mode=development
        生产环境: webpack ./src/index.js -o ./build/build.js --mode=production
        添加能使css一起打包的插件: npm i css-loader style-loader -D
        添加能使scss一起打包的插件: npm install sass-loader node-sass webpack -D  因为你刚刚下载过 css-loader style-loader所以不用再次下载了
        添加能使html一起打包的插件: npm i html-webpack-plugin -D
        添加能使图片打包的插件: npm i url-loader file-loader -D
        添加能使html中图片打包的插件: npm i html-loader -D
        添加能使浏览器自动更新(刷新)的插件: npm i webpack-dev-server -D
*/
/*
    loader 的使用: 1)下载  2)使用 (配置loader)
    plugins 的使用: 1)下载 2)引用 3)使用

    wbepack.config.js  webpack的配置文件
        作用:  指示 webpack 干那些活(当你运行 webpack 指令时, 会加载里面的配置)

        所有构建工具都是基于node.js平台运行的~模块化默认采用commonjs, 
        概念:我们创建的src文件是我们写项目的源代码,用的是ES6模块化
             而wbepack.config.js文件是我们写配置的源代码,默认用的是commonjs
*/
