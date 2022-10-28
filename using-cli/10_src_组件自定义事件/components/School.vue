<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="sendSchoolName">把学校名给 App</button>
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
        sendSchoolName(){
            this.getSchoolName(this.name);
        }
    },
    props: ["getSchoolName"]
}
</script>

<style scoped>
    .school {
        background: skyblue;
        padding: 5px;
        border-radius: 30px;
    }
    button {
        border-radius: 40px;
    }
</style>