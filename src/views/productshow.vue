<template>
	<div>
		<div>
			{{info.title}}
		</div>
		<div>
			<img :src="info.img" />
		</div>
		<div v-html="info.content"></div>
	</div>
</template>

<script>


export default {
	data: function(){
		return {
			info:{}
		}
	},
	mounted: function(){
		this.getProductInfo();
	},
	methods:{
		getProductInfo: function(){
			let _self = this;
			let id = _self.$route.params.id;
			let URL = "productshow?id=" + id;
			_self.$http.get(URL).then( res => {
				_self.info = res.data;
			})
		}
	}
}
</script>