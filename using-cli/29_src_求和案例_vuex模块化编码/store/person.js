import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
  namespaced: true,
  actions: {
    addPersonWang(context,value) {
      if(value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('添加的人必须姓王');
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        Response => {
          context.commit('ADD_PERSON',{id:nanoid(),name:Response.data})
        },
        Error => {
          alert(Error.message)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log(state, value)
      state.personList.unshift(value)
    }
  },
  state: {
    personList: [
      {id:'001', name: '张三'}
    ]
  },
  getters: {
    
  }
} 