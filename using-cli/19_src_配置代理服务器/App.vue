<template>
  <!-- 配合 vue.config.js 中的配置 -->
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/kino1/students').then(
        response => {
          console.log('success', response.data);
        },
        error => {
          console.log('error', error.message);
        }
      );
    },
    getCars() {
      axios.get('http://localhost:8080//kino2/cars').then(
        response => {
          console.log('success', response.data);
        },
        error => {
          console.log('error', error.message);
        }
      );
    }
  }
}
</script>

<style>

</style>