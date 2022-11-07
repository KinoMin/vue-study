// 安装 vuex : npm install vuex@3 --save
import Vue from 'vue';
import App from './App.vue';

// 引入插件
import vueResource from 'vue-resource';
import store from './store'

Vue.use(vueResource)

Vue.config.productionTip=false

new Vue({
  render: h => h(App),
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#root');