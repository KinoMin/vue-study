<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件求和为: {{ sum }}</h3>
    <h3>列表中第一个人的名字是: {{ personList[0].name }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPerson">添加一个人, 名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'Person',
    data () {
      return {
        name: ''
      }
    },
    computed: {
      ...mapState('personAbout',{personList: 'personList'}),
      ...mapState('countAbout', ['sum'])
    },
    methods: {
      add() {
        const person = {
          id: nanoid(),
          name: this.name
        }
        // 方法名前一定要加上 多模块名称
        this.$store.commit('personAbout/ADD_PERSON', person)
      },
      addWang() {
        const person = {
          id: nanoid(),
          name: this.name
        }
        this.$store.dispatch('personAbout/addPersonWang', person)
      },
      addPerson() {
        this.$store.dispatch('personAbout/addPersonServer')
      }
    }
  }
</script>

<style>

</style>