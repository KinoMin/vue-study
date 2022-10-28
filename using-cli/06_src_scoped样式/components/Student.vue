<template>
    <div class="demo">
      <h2 class="title">姓名:{{  name }}</h2>
      <h2>性别: {{ sex }}</h2>
    </div>
 </template>
 
 <script>
 
 export default {
   name: "Student",
   data(){
     console.log(this);
     return {
        name: '张三',
        sex: '男',
     }
   },
 }
 </script>
 
 <style scoped>
    /** scoped 代表局部的 */
   .demo{
     background: orange;
   }
 </style>
 