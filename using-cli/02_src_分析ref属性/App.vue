<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showH">点我输出上方的dom元素</button>
        <School></School>
    </div>
</template>

<script lang="ts">
import School from './components/School';

export default {
    name: 'App',
    data() {
        return {
            msg: 'hello vue'
        }
    },
    methods: {
        showH(e) {
            console.log(this.$refs.title);  // this ==> vc(app组件)
            console.log(e.target); //发生事件的dom元素
            console.log(this.$refs.valueOf.length); // 可以是 school 组件加 refs 属性，获得的是组件实例对象vc
        }
    },
    components: {
        School
    }
}
</script>