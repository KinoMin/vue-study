<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="checkTodo(todo.id)"/>
      <span v-show="!flag">{{ todo.title }}</span>
			<input 
				type="text" 
				:value="todo.title" 
				v-show="flag"
				@blur="handleBlur(todo, $event)"
				ref="inputTitle"
			>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
		<button v-show="!flag" class="btn btn-edit" @click="editTodo(todo.id)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'MyItem',
	props: ['todo'],
	data () {
		return {
			flag: false
		}
	},
	methods: {
		checkTodo(id) {
			pubsub.publish('checkTodo', id);
		},
		deleteTodo(id) {
			pubsub.publish('deleteTodo', id);
		},
		editTodo(id) {
			this.flag = !this.flag;
			this.$nextTick(function(){
				this.$refs.inputTitle.focus()
			});
		},
		// 失去焦点
		handleBlur(todo, e) {
			if(!todo.title.trim()) {
				return alert('不能输入空字符');
			}
			this.flag = !this.flag;
			const info = {
				id: todo.id,
				title: e.target.value
			}
			pubsub.publish('updateTodo', info);
		}
	}
}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>