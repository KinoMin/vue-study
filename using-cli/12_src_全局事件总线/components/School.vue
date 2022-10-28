<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>学生名: {{ studentName }}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data () {
        return {
            name: '武汉大学',
            address: '武汉',
            studentName: ''
        }
    },
    mounted () {
        this.$bus.$on('hello', (data) => {
            console.log('我是 School 组件, 我收到了数据: ', data);
            this.studentName = data;
        })
    }
}
</script>

<style>
    .school {
        background: skyblue;
        padding: 5px;
    }
</style>