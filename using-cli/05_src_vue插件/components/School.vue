<template>
  <div>
    <h2>学校名称: {{ name | mySlice }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="test">点我测试一下</button>
    <h2>学校坐标轴 x: {{ x }} - y: {{ y }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      name: '武汉大学',
      address: '武汉'
    }
  },
  methods: {
    test() {
      this.hello();
    }
  }
}
</script>

<style>

</style>