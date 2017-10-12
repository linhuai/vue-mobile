import index from './views/index.vue'
import about from './views/about.vue'
import news from './views/news.vue'
import product from './views/product.vue'
import productshow from './views/productshow.vue'
import protype from './views/protype.vue'

export default {
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: index
		},
		{
			path: '/about',
			component: about
		},
		{
			path: '/news',
			component: news
		},
		{
			path: '/product',
			component: product,
			children: [
				{
					path: '/product/:id',
					component: protype
				}
			]
		},
		{
			path: '/productshow/:id',
			component: productshow
		}
	]
}