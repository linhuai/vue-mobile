<template>
	<div class="main">
		<template v-for="item in modules">
			<template v-if="item.type == 'slider'">
				<vBanner :info="item"></vBanner>
			</template>
			<template v-if="item.type == 'product'">
				<vProduct :info="item"></vProduct>
			</template>
			<template v-if="item.type == 'news'">
				<vNews :info="item"></vNews>
			</template>
			<template v-if="item.type == 'tjcp'">
				<vTjcp :info="item"></vTjcp>
			</template>
			<template v-if="item.type == 'about'">
				<vAbout :info="item"></vAbout>
			</template>
		</template>
	</div>
</template>

<script>
import banner from '../../components/banner.vue'
import product from '../../components/module-product.vue'
import news from '../../components/module-news.vue'
import tjcp from '../../components/module-tjcp.vue'
import about from '../../components/module-about.vue'

export default {
	data: function(){
		return {

		}
	},
	created: function(){
		this.$store.dispatch('LOAD_MODULES_LIST')
	},
	computed: {
		modules () {
			return this.$store.state.index.modules
		}
	},
	methods: {

	},
	components: {
		vBanner: banner,
		vProduct: product,
		vNews: news,
		vTjcp: tjcp,
		vAbout: about
	}
}
</script>

<style lang="less">
.module{
	width: 9.6rem;
	margin: 0 auto;
	
	.module-title{
		height: 3em;
		line-height: 3em;
		text-align: center;
		font-size: 1.2em;
		.text-c{
			color: #e04840;
		}
		.text-e{
			color: #525252;
			text-transform: uppercase;
		}
	}
}
.more{
	display: block;
	width: 5rem;
	height: 3em;
	line-height: 3em;
	margin: 0.7em auto;
	border: 1px solid #c1c1c1;
	border-radius: 1.5em;
	background-color: #fff;
	text-align: center;
}
</style>