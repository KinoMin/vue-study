<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader 
          :addTodo="addTodo"
        />
        <List 
          :todos="todos" 
          :deleteTodo="deleteTodo"
          :checkTodo="checkTodo"
        />
        <MyFooter
          :todos="todos" 
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import List from '@/components/List'
import MyFooter from '@/components/MyFooter' 
export default {
  name: 'App',
  components: {
    MyHeader,
    List,
    MyFooter
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', done: true},
        {id: '002', title: "睡觉", done: true},
        {id: '003', title: '打代码', done: false}
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    checkAllTodo(changeCheck){
      this.todos.forEach(todo => todo.done = changeCheck);
    },
    clearAllTodo() {
      this.todos = this.todos.filter(todo => !todo.done)
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