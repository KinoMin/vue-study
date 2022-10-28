<template>
    <div>
        <Student name="kino" sex="男" :age="12"></Student>
        <hr>
    </div>
</template>

<script>
import Student from '@/components/Student';
export default {
    name: 'App',
    components: {
        Student
    }
}
</script>