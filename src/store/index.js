import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'
import product from './modules/product'
import about from './modules/about'
import news from './modules/news'

Vue.use(Vuex)

//导出需要的模块

export default new Vuex.Store({
	modules: {
		index,
		product,
		about,
		news
	}
})