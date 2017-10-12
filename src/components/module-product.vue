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
					<span>{{item.title}}</span>
				</router-link>
			</li>
		</ul>
		<div>
			<router-link to="/product" class="more">查看更多</router-link>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		.item{
			width: 3rem;
			text-align: center;

			a{
				display: block;
			}
			img{
				width: 100%;
			}
			span{
				display: block;
				line-height: 1.5em;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>

<script>
export default{
	data: function(){
		return {

		}
	},
	props: ['info']
}
</script>