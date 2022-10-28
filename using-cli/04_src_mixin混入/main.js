// 这里引入的是残缺版的 vue, 是没有模板解析器的，是不能写 template 的, vue.runtime.esm.js
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

// 全局混合
import { mixin, shareData } from '@/mixin.js'
Vue.mixin(mixin);
Vue.mixin(shareData)

new Vue({
    render: h => h(App)
}).$mount('#root');