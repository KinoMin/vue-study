import Vue from 'vue';
import App from './App';

Vue.config.productionTip=false;

import store from './store';

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#root');