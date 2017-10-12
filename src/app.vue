<template>
	<div class="wrapper">
		<vHeader></vHeader>
		<router-view></router-view>
	</div>
</template>

<style lang="less">
.wrapper{
	overflow: hidden;
}
.main{
	margin-top: 2.34rem;
}
</style>

<script>
import header from './components/header.vue'
export default{
	data: function(){
		return {

		}
	},
	components:{
		vHeader: header
	}
}
</script>