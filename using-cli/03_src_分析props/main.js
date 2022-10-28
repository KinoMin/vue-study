// 引入 vue
import Vue, { h } from 'vue'
// 引入 App
import App from './App'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#root');