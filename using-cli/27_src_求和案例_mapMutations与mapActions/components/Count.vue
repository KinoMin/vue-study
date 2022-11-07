<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <h3>我在 {{ school }}, 学习 {{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'Count',
    data () {
      return {
        n: 1
      }
    },
    computed: {
      // sum() {
      //   return this.$store.state.sum
      // },
      // school() {
      //   return this.$store.state.school
      // },
      // subject() {
      //   return this.$store.state.subject
      // }
      // bigSum() {
      //   return this.$store.getters.bigSum
      // },

      // 借助 mapState 生成计算属性, 从 state 中获取数据(对象写法)
      // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
      // 借助 mapState 生成计算属性, 从 state 中获取数据(数组写法)
      ...mapState(['sum', 'school', 'subject']),

      // 借助 mapGetters 生成计算属性, 从 getters 中获取数据(对象写法)
      // ...mapGetters({bigSum: 'bigSum'}),
      // 借助 mapGetters 生成计算属性, 从 getters 中获取数据(数组写法)
      ...mapGetters(['bigSum'])
    },
    methods: {
      /** 程序员亲自写方法 */
      // increment() {
      //   this.$store.dispatch('jia', this.n);
      // },
      // decrement() {
      //   this.$store.dispatch('jian', this.n)
      // },
      // incrementOdd() {
      //   this.$store.dispatch('jiaOdd', this.n)
      // }, 
      // incrementWait() {
      //   this.$store.dispatch('jiaWait', this.n)
      // }

      // 借助 mapActions 生成对应的方法, 方法中会调用 dispatch 去联系 actions(对象写法)
      // 注意: 这种写法需要 click 事件中有入参
      // ...mapActions({increment: 'jia', decrement: 'jian', incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
      // 借助 mapActions 生成对应的方法, 方法中会调用 dispatch 去联系 actions(数组写法)
      // 注意: 这种写法需要 actions 中的方法名和 click 事件中的名称保持一致
      // ...mapActions(['increment', 'decrement', 'incrementOdd', 'incrementWait'])

      // 借助 mapMutations 生成对应的方法, 方法中会调用 commit 去练习 mutations(对象写法)
      ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),
      // 借助 mapMutations 生成对应的方法, 方法中会调用 commit 去练习 mutations(数组写法)
      // 注意: 这种写法需要 mutations 中的方法名和 click 事件中的名称保持一致
      // ...mapMutations(['increment','decrement'])
    }
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>