<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'School',
    data () {
        return {
            name: '武汉大学',
            address: '武汉'
        }
    },
    mounted () {
        this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            // console.log(this);
            console.log('有人发布了 hello 消息, hello 消息的回调执行了', msgName, data)
        })
    }
}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>