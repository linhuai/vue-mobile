import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import axios from 'axios';
axios.defaults.baseURL = 'http://www.zhendongshai.xin/returndata';

import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
Vue.use(Vuex);

import store from './store';

var router = new VueRouter(routerConfig);

new Vue({
	el: "#app",
	router: router,
	store,
	render: h => h(App)
})