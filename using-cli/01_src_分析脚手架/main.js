// 创建 vm 
import Vue from 'vue';
import App from './App.vue';

// new Vue({
//     template: `<App></App>`,
//     components: {
//         App
//     }
// }).$mount('#root')


new Vue({
    render: h => h(App),
}).$mount('#root');