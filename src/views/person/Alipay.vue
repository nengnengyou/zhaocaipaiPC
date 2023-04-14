<template>

	<div ref='alipay'>111</div>

</template>

<script>
	export default {
		name: 'Alipay',
		data() {
			return {

			}

		},
		
		created(){
			this.goaili()
		},
		
		methods:{
			
			goaili(){
				let form=this.$route.query.form
				this.$refs.alipay.html=form
			},
			
		},

	}
	
</script>

<style>
</style>
