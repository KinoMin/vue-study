<template>
  <div>
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
import Student from '@/components/School.vue';
import School from '@/components/Student.vue';
export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>

<style>

</style>