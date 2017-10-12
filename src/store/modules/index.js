import api from './../fetch/api';

const state = {
	modules: []
}

const actions = {
	LOAD_MODULES_LIST: function({ commit }) {
		api.commonApi('/index').then( res => {
			commit('SET_MODULES_LIST', { list: res})
		})
		
	}
}

const getters = {
	getModules: state => state.modules
}

//mutation名常量定义 并且需要在type.js文件下定义常量 mutations 用来向state提交数据的，只能进行同步操作
const mutations = {
    SET_MODULES_LIST: (state, { list }) => {
		state.modules = list
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}