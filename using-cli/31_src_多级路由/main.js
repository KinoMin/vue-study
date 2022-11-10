import Vue from 'vue'
import App from './App'

// 引入 VueRouter
import VueRouter from 'vue-router'
import router from './router'
// 应用路由器
Vue.use(VueRouter)

Vue.config.productionTip=false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#root')