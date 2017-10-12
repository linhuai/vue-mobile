<template>
	<div class="main">
		<ul class="list">
			<li class="item" v-for="item in news">
				<router-link :to="'/productshow/'+item.id" class="link">
					<div class="image"><img :src="item.img" /></div>
					<div class="info">
						<i class="info-tit">{{item.title}}</i>
						<span class="info-time">{{item.time}}</span>
						<p class="info-text">{{item.content}}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data: function(){
		return {
			list: []
		}
	},
	created: function(){
		this.$store.dispatch('LOAD_NEWS_LIST')
	},
	mounted: function(){

	},
	computed: {
		news(){
			return this.$store.state.news.news
		}
	}
}
</script>

<style lang="less" scoped>
	.list{

		.item{
			padding: .2rem 0;
			border-bottom: 1px solid #d2d2d2;
			.link{
				display: flex;
				flex-wrap: wrap;
			}

			.image{
				width: 3.6rem;
				height: 2.7rem;
				text-align: center;
				vertical-align: middle;

				img{
					width: 3.2rem;
				}
			}
			.info{
				width: 5.8rem;

				.info-tit{
					display: block;
					font-weight: bold;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.info-time{
					display: block;
					font-size:0.8em;
					color: #999;
					margin-top: 0.1rem;
				}
				.info-text{
					margin-top: 0.1rem;
				}
			}
		}
	}
</style>