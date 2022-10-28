<template>
    <ul class="todo-main">
        <MyItem 
            v-for="todo in todos" :key="todo.id"
            :todo="todo"
            :deleteTodo="deleteTodo"
            :checkTodo="checkTodo"
        />
    </ul>
</template>

<script>
import MyItem from '@/components/MyItem' 
export default {
    name: 'MyList',
    props: ["todos", "deleteTodo", "checkTodo"],
    components: {
        MyItem
    }
}
</script>

<style>

</style>