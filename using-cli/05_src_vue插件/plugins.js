export default {
    install(Vue) {
        Vue.prototype.hello = function() {
            alert('hello');
        };
        Vue.filter('mySlice', function(val) {
            return val.slice(0, 4);
        });
        Vue.directive('fbind', {
            bind(el, binding){
                // console.log('bind')
                el.value = binding.value;
            },
            //指令被插入页面时
            inserted(el, binding){
                // console.log('inserted')
                el.focus();
            },
            //指令所在模版被重新解析时
            update(el, binding){
                // console.log('update');
                el.value = binding.value;
            }
        });
        Vue.mixin({
            data(){
                return {
                    x:1,
                    y:2
                }
            }
        })
    }
}