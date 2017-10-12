<template>
	<div class="right-cont">
		<ul class="productlist">
			<template v-for="(item, index) in products">
			<li class="item" v-for="product in item.data">
				<router-link :to="'productshow/'+product.id">
					<img :src="product.img">
					<span>{{product.title}}</span>
				</router-link>
			</li>
			</template>
		</ul>
	</div>
</template>


<script>
export default {
	data: function(){
		return {

		}
	},
	computed: {
		products () {
			return this.$store.state.product.products
		}
	}
}
</script>

