<template>
  <div>
    <h2 @click="showName">学生名称: {{ name }}</h2>
    <h2>学生地址: {{ address }}</h2>
    <h2>学生坐标轴 x: {{ x }} - y: {{ y }}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'kino',
            address: '湖北',
        }
    },
}
</script>

<style>

</style>