<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="checkTodo(todo.id)"/>
      <span v-show="!flag">{{ todo.title }}</span>
			<input 
				type="text" 
				:value="todo.title" 
				v-show="flag"
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
			>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
		<button v-show="!flag" class="btn btn-edit" @click="editTodo(todo.id)">编辑</button>
  </li>
</template>

<script>
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
			this.$bus.$emit('checkTodo', id);
		},
		deleteTodo(id) {
			this.$bus.$emit('deleteTodo', id);
		},
		editTodo(id) {
			this.flag = !this.flag;
			// nextTick: 在下一次 DOM 更新结束后执行其指定的回调。
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
			// e.target.value: 拿输入框的值, 此时 todo.title 还是原来的值
			this.$bus.$emit('updateTodo', todo.id, e.target.value);
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