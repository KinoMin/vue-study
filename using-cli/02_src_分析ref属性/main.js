// 引入 Vue
import Vue from 'vue';
// 引入 App
import App from './App';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#root');