import api from './../fetch/api';

const state = {
	news: []
}

const actions = {
	LOAD_NEWS_LIST: function({ commit }) {
		api.commonApi('/news').then( res => {
			commit('SET_NEWS_LIST', { list: res})
		})
	}
}

const getters = {

}

const mutations = {
	SET_NEWS_LIST: (state, { list}) => {
		state.news = list
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}