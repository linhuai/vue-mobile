<template>
	<div>
		<div class="left-cont">
			<ul class="catelist">
				<li class="cateitem" v-for="(item, index) in list">
					<router-link :to="'/product/'+item.id">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
		<div class="right-cont">
			<router-view></router-view>
			<div v-for="(item, index) in list" v-show="index==curType">
				<h3>{{item.name}}</h3>
				<ul class="productlist">
					<li class="item" v-for="product in item.data">
						<router-link :to="'productshow/'+product.id">
							<div class="image"><img :src="product.img"></div>
							<div>{{product.title}}</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less">
.left-cont{
	float: left;
	width: 2rem;
	background-color: #f3f5f7;

	.catelist{

	}

	.cateitem{
		margin-left:.2rem;
		height: 2em;
		line-height: 2em;
	}
}
.right-cont{
	float: left;
	width: 8rem;
}
.productlist{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	.item{
		width: 3.5rem;
		text-align: center;
		img{
			width: 3.2rem;
			height: 2.4rem;
		}
	}	
}
</style>

<script>
export default {
	data: function(){
		return {
			list: [],
			curType: 0
		}
	},
	mounted: function(){
		this.loadList();
	},
	methods: {
		loadList(){
			let _self = this;
			_self.$http.get('/goods')
				.then( function(res){
					console.log(res.data);
					_self.list.push.apply(_self.list,res.data);
				})
		}
	}
}
</script>