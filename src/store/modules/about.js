import api from './../fetch/api'

const state = {
	info: {}
}

const actions = {
	LOAD_ABOUT_INFO: function({ commit }){
		api.commonApi('/about').then( res => {
			commit('SET_ABOUT_INFO', { info: res})
		})
	}
}

const getters = {

}

const mutations = {
	SET_ABOUT_INFO: ( state, { info }) => {
		state.info = info
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}