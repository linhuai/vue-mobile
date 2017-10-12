<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in info['data']">
	        	<img :src="item.img" />
	        </div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default{
	props: ['info'],
	data: function(){
		return {

		}
	},
	mounted(){
		var swiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay: 3000,
		    speed:300,

		    pagination: '.swiper-pagination'
		    
		  })

	}
}
</script>

<style lang="less" scoped>
    .swiper-container {
        width: 10rem;
        .swiper-slide{
        	img{
        		width: 100%;
        	}
        }
    }
</style>