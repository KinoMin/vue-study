<template>
    <ul>
        <Item
            v-for="todoObj in todos"
            :key="todoObj.id"
            :todo="todoObj"
            :deleteTodo="deleteTodo"
            :checkTodo="checkTodo"
        />
    </ul>
</template>

<script>
import Item from '@/components/Item'
export default {
    name: 'List',
    props: ["todos", "deleteTodo", "checkTodo"],
    components: {
        Item
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
