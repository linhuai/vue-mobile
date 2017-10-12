import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import axios from 'axios';
axios.defaults.baseURL = 'http://www.zhendongshai.xin/returndata';

import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$http = axios;

var router = new VueRouter(routerConfig);

new Vue({
	el: "#app",
	store,
	router: router,
	render: h => h(App)
})