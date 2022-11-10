// 安装路由: npm install vue-router@3

import Vue from 'vue'
import App from './App'

// 引入 vueRouter
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip=false

// 应用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#root');