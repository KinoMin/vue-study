<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader/>
        <MyList :todos="todos"/>
        <MyFooter :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyList from './components/MyList';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
export default {
  name: 'App',
  components: {MyList, MyHeader, MyFooter},
  data () {
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []  
    }
  },
	methods: {
		// 添加一个todo
		handlerAddTodo(todo){
				this.todos.unshift(todo);
		},
		// 变更一个 todo 的状态
		handlerCheckTodo(id) {
				this.todos.forEach((todo) => {
					if(todo.id === id) {
						todo.done = !todo.done
					}
				})
		},
		// 删除一个 todo
		handlerDeleteTodo(id) {
			this.todos = this.todos.filter( todo => todo.id !== id )
		},
		// 全选 or 全不选
		hadlerCheckAllTodo(done) {
			this.todos.forEach(todo => {
				todo.done = done
			})
		},
		// 清除已选择
		hadlerClearAllTodo() {
			this.todos = this.todos.filter((todo) => {
				return !todo.done
			})
		},
		// 修改一个 todo
		handlerUpdateTodo(id, title) {
			this.todos.forEach((item) => {
				if(item.id === id) {
					item.title = title
				}
			})
		},
	},
  mounted () {
		// 全部使用 全局事件总线完成
    this.$bus.$on('addTodo', this.handlerAddTodo);
		this.$bus.$on('checkTodo', this.handlerCheckTodo);
		this.$bus.$on('deleteTodo', this.handlerDeleteTodo);
		this.$bus.$on('checkAllTodo', this.hadlerCheckAllTodo);
		this.$bus.$on('clearAllTodo', this.hadlerClearAllTodo);
		this.$bus.$on('updateTodo', this.handlerUpdateTodo);
  },
	// 深度监视
	watch: {
		todos: {
			deep: true,
			// 监视数据发生变化时, 把监视数据写入到 localStorage
			handler(value) {
				localStorage.setItem('todos', JSON.stringify(value));
			}
		}
	}
}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-edit {
		color: #fff;
		background-color: skyblue;
		border: 1px solid rgb(103, 159, 180);
		margin-right: 5px;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>