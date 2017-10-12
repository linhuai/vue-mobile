<template>
	<div class="main">
		<div class="w">
			<div v-html="info.content"></div>
		</div>
	</div>
</template>

<script>
export default{
	data: function(){
		return {

		}
	},
	created: function(){
		this.$store.dispatch('LOAD_ABOUT_INFO')
	},
	mounted: function(){

	},
	computed: {
		info(){
			return this.$store.state.about.info
		}
	}
}
</script>