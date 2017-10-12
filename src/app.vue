<template>
	<div>
		<vHeader></vHeader>
		<router-view></router-view>
	</div>
</template>

<style>

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