<template>
	<div>
		<div v-html="info.content"></div>
	</div>
</template>

<script>
export default{
	data: function(){
		return {
			info: ''
		}
	},
	mounted: function(){
		let _self = this;

		_self.$http.get('/about').then( res => {
			_self.info = res.data;
		})
	}
}
</script>