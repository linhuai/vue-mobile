import axios from 'axios'

axios.defaults.baseURL = 'http://www.zhendongshai.xin/returndata';

export function fetch(url) {
	return new Promise((resolve, reject) => {
		axios.get(url)
			.then(response => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error);
			})
	})
}

export default {
	//获取页面后台数据
	mineBaseMsgApi() {
		console.log("进处API.js");
		return fetch('/index');
	},
	commonApi(url) {
		return fetch(url)
	}
}

