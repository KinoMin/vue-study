<template>
  <ul class="todo-main">
		<MyItem 
			v-for="todo in todos"
			:key="todo.id"
            :todo="todo"
		/>
  </ul>
</template>

<script>
import MyItem from '@/components/MyItem'
export default {
    name: 'MyList',
    components: {
        MyItem
    },
    props: ['todos']
}
</script>

<style>

</style>