const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      // 入口
      entry: 'src/main.js'
    }
  },
  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:6002'
  // },
  // 开启代理服务器(方式二)
  // devServer: {
  //   proxy: {
  //     '/students': {
  //       target: 'http://localhost:6002',
  //       pathRewrite: {'kino1':''},
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     '/cars': {
  //       target: 'http://localhost:6001',
  //       pathRewrite: {'kino2':''},
  //       ws: true,   // 用于支持 webscoket
  //       changeOrigin: true  // 用于控制请求头中的 host 值
  //     }
  //   }
  // },




  transpileDependencies: true,
  lintOnSave: false // 关闭语法检查
})
