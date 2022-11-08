export default {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      if(context.state.sum % 2){
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 500);
    }
  },
  mutations: {
    JIA(state, value) {
      console.log(state, value)
      state.sum += value
    }, 
    JIAN(state, value) {
      console.log(state, value)
      state.sum -= value
    }
  },
  state: {
    sum: 0,
    school: '武汉大学',
    subject: 'vue'
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}