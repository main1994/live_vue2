const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/vue-api': {
        target: 'http://*****:9502/', //设置调用接口域名和端口号别忘了加http  //目标接口域名
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/vue-api': '/api' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
        },
      },
    },
  },
})
