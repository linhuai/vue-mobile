<template>
	<div class="module">
		<h2 class="module-title">
			<span class="text-c">{{info.name}}</span>
			<span class="text-e">{{info.eng}}</span>
		</h2>
		<div class="cont">{{info.content}}</div>
		<ul class="list">
			<li class="item" v-for="item in info.data">
				<router-link :to="'/productshow/'+item.id" class="link">
					<router-link :to="item.link" class="link">{{item.title}}</router-link>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="less" scoped>
	.module{
		background-color: #333;
		width: 10rem;
		margin-top: 0.2rem;

		.module-title{
			.text-c,.text-e{
				color: #fff;
			}
		}

		.cont{
			width: 9.6rem;
			margin: 0 auto;
			line-height: 1.5em;
			color: #fff;
		}
	}
	.list{
		display: flex;
		justify-content: space-around;
		padding: .5rem 0;

		.item{
			width:2.2rem;
			.link{
				display: block;
				width: 2.2rem;
				height: 2.2rem;
				line-height: 2.2rem;
				text-align: center;
				background-color: #eee;
				border-radius: 1.1rem;
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