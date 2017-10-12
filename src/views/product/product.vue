<template>
	<div class="main">
		<div class="left-cont">
			<ul class="catelist">
				<li class="cateitem" v-for="(item, index) in products">
					<router-link :to="'/product/'+item.id">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<style lang="less">
.left-cont{
	position: fixed;
	top: 2.34rem;
	width: 2.1rem;
	background-color: #f3f5f7;

	.catelist{

	}

	.cateitem{
		margin: 0 .2rem;
		padding: .2rem 0;
		line-height: 1.2em;
	}
}
.right-cont{
	float: right;
	width: 7.9rem;
	margin-top: .3rem;
}
.productlist {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	.item {
		width: 3.5rem;
		margin-left: .3rem;
		text-align: center;

		a {
			display: block;
		}
		img {
			width: 3.5rem;
			height: 2.4rem;
		}
		span {
			display: block;
			height: 2em;
			line-height: 1.5em;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}	
}
</style>

<script>
export default {
	data: function(){
		return {
			curType: 0
		}
	},
	created: function(){
		this.$store.dispatch('LOAD_PRODUCTS_LIST')
	},
	mounted: function(){

	},
	methods: {

	},
	computed: {
		products () {
			return this.$store.state.product.products
		}
	}
}
</script>