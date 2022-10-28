<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>当前求和为: {{ number }}</h2>
    <button @click="add">点我number+1</button>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑 kino 事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'kino',
            sex: '男',
            number: 0
        }
    },
    methods: {
        add() {
            this.number++;
        },
        sendStudentName() {
            // 触发 Student 组件实例身上的 kino 事件
            this.$emit('kino', this.name, 1,2,3);
        },
        unbind() {
            this.$off('kino'); // 解绑一个自定义事件
            // this.$off(['kino', 'demo']); // 解绑多个自定义事件
            // this.$off(); // 解绑所有的自定义事件
        },
        death() {
            this.$destroy(); // 销毁了当前 Student 组件的实例, 销毁后所有 Student 实例的自定义事件全都不奏效。
        }
    }
}
</script>

<style scoped>
    .student {
        background: pink;
        padding: 5px;
        margin-top: 30px;
        border-radius: 30px;
    }
    button {
        border-radius: 40px;
    }
</style>