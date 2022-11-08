import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import countOptions from './count'
import personOptions from './person'


export default new Vuex.Store({
	modules:{
		countAbout: countOptions,
		personAbout: personOptions
	}
})