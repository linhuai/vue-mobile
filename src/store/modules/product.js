import api from './../fetch/api';

const state = {
	products: []
}

const actions = {
	LOAD_PRODUCTS_LIST: function({ commit }) {
		api.commonApi('/goods').then( res => {
			commit('SET_PRODUCTS_LIST', { list: res})
		})
	}
}

const getters = {
	getTodoById: (state, getters) => (id) => {
		return state.products.filter( obj => obj.id === id );
	}
}

const mutations = {
	SET_PRODUCTS_LIST: (state, { list }) => {
		state.products = list
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}