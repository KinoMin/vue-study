<template>
  <div>
    <h2>姓名: {{ name }}</h2>
    <h2>性别: {{ sex }}</h2>
    <input v-fbind:value="name" v-model="name"/>
    <h2>学生坐标轴 x: {{ x }} - y: {{ y }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      name: 'kino',
      sex: '男',
      x: 1000,
      y: 2000
    }
  }
}
</script>

<style>

</style>