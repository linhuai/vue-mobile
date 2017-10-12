import index from './views/index/index.vue'
import about from './views/about/about.vue'
import news from './views/news/news.vue'
import product from './views/product/product.vue'
import proall from './views/product/proall.vue'
import protype from './views/product/protype.vue'
import productshow from './views/productshow/productshow.vue'

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
					path: '/product',
					component: proall
				},
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