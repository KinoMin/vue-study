<template>
  <div class="app">
    <h1>{{ msg }}, 学生姓名是: {{ studentName }}</h1>
    <h1>{{ msg }}, 学校名是: {{ schoolName }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <Student @kino="getStudentName"/>
  </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School';
export default {
    name: 'App',
    components: {
        Student,
        School
    },
    data () {
        return {
            msg: 'hello',
            studentName: '',
            schoolName: ''
        }
    },
    methods: {
        getSchoolName(name) {
            this.schoolName = name;
        },
        getStudentName(name,...params) {
            console.log(name, params);
            this.studentName = name;
        }
    }
}
</script>

<style>
  .app {
    background: grey;
    padding: 5px;
  }
</style>