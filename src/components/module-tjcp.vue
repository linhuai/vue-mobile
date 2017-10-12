<template>
	<div class="module">
		<h2 class="module-title">
			<span class="text-c">{{info.name}}</span>
			<span class="text-e">{{info.eng}}</span>
		</h2>
		<ul class="list">
			<li class="item" v-for="item in info.data">
				<router-link :to="'/productshow/'+item.id">
					<img :src="item.img" />
					{{item.title}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="less" scoped>
.title{
	text-align: center;
	line-height: 2em;
}
.list{
	width: 9.6rem;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;

	.item{
		width: 4.8rem;
		text-align: center;
		line-height: 1.5em;

		a{
			display: block;
		}
		img{
			width: 4.5rem;
		}
	}
}
</style>

<script>
export default{
	props: ['info'],
	data: function(){
		return {

		}
	}
}
</script>