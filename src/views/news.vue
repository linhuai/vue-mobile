<template>
	<div>
		<ul>
			<li v-for="item in list">
				{{item.title}} {{item.time}}
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
	mounted: function(){
		let _self = this;
		_self.$http.get('/news').then( res => {
			_self.list = res.data;
		})
	}
}
</script>