<template>
  <div>
    <h2 @click="showName">学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>学校左表轴 x: {{ x }} - y: {{ y }}</h2>
  </div>
</template>

<script>
// 局部引入混合
import { mixin, shareData } from '@/mixin'
export default {
    name: 'School',
    data() {
        return {
            name: '武汉大学',
            address: '武汉',
            x: 1000,
            y: 2000
        }
    },
    // methods: {
    //     showName() {
    //         console.log(this.name)
    //     }
    // }
    mixins: [ mixin, shareData ]
}
</script>

<style>

</style>