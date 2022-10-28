<template>
    <!-- 组件的交互 -->
    <div class="demo">
        <h2>学校名称: {{ name }}</h2>
        <h2>学校地址: {{ address }}</h2>
        <button @click="showname">点我提示学校名</button>
    </div>
</template>

<style>
    .demo {
        background: styblue;
    }
</style>

<script>
    // 组件交互代码
    export default {
        name: 'School', // 开发者工具打开最终呈现的名字为 School
        data() {
            return {
                name: '武汉大学',
                address: '武汉'
            }
        },
        methods: {
            showname() {
                alert(this.name)
            }
        }
    };

    // export { School }     // 统一暴露
    // export default School // 默认暴露
</script>