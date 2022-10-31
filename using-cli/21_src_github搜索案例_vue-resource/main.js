import Vue from 'vue';
import App from './App';

Vue.config.productionTip=false;

// 引入插件 vue-resource: 发送 ajax 请求的库, 用的不太多了, 1.0 时候用的多
import vueResource from 'vue-resource';
// 使用插件
Vue.use(vueResource);


new Vue({
  render:h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount("#root");