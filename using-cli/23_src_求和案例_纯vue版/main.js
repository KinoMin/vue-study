import Vue from 'vue';
import App from './App.vue';

// 引入插件
import vueResource from 'vue-resource';

// 关闭Vue的生产提示
Vue.config.productionTip=false;

Vue.use(vueResource)

new Vue({
  render: h => h(App)
}).$mount('#root');