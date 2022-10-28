<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>姓名: {{ myName }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>性别: {{ sex }}</h2>
    <button @click="updateName">修改名字</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '学大汉武立国',
            myName: 'kino'
        }
    },
    methods: {
        updateName() {
            this.myName = 'min'
        }
    },
    // 简单声明接收
    // props: ['name', 'sex', 'age']
    // 限制 props 中属性的类型，类型错误了会提示错误信息
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // },
    // 接收时，不仅限制类型，还加上默认值的指定，并指定它的必须性
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 100
        },
        sex: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>