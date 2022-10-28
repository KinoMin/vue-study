import Vue from 'vue';
import App from './App';

Vue.config.productionTip=false;

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus=this;  // 全局事件总线
    }
}).$mount('#root');