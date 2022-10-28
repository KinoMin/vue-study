<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <button @click="sendStudentName">把学生名给 School 组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'Student',
    data () {
        return {
            name: 'kino',
            sex: '男'
        }
    },
    methods: {
        sendStudentName(){
            pubsub.publish('hello', this.name);
        }
    }
}
</script>

<style>

</style>