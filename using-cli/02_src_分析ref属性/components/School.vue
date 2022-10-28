<template>
    <div class="demo">
        <h1>学校名称: {{ name }}}</h1>
        <h2>学校地址: {{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: '武汉大学',
            address: '武汉'
        }
    }
}
</script>
<style scoped>
    .demo {
        background: aqua;
    }
</style>