<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">

		<transition-group tag="ul">
			<li v-for="(item, index) in swiperList" :key="index" v-show="index == mark">
				<a :href="item.link" :class="{active: item.actived}"><img :src="item.img" /></a>
			</li>
		</transition-group>


		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default{
	props: ['swiperList'],
	data: function(){
		return {
			mark: 0
		}
	},
	created (){
		this.play()
	},
	methods: {
		autoPlay(){
			this.mark++;
			if(this.mark==4){
				this.mark = 0;
				return;
			}
		},
		play() {
			setInterval(this.autoPlay, 3000);
		}
	}
}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 10rem;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
		}
		swiper-slide{

		}
	}
</style>