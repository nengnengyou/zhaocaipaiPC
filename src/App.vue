<template>
	<div id="app" ref="app">
		<Header v-if="isjiance" />		
		<Header2 v-if="isjiance" />	
			<div style="min-height:100vh ;"><router-view /></div>
				
		<!-- <AD v-if="showad"></AD> -->
		<Footer v-if="showft&&isjiance" />
		
		<div title="回到顶部" class="comp-to-top" @click="dingbu" v-if="isquan&&isjiance">
			<i class="bui-icon el-icon-arrow-up" style="font-size: 28px; color: rgb(255, 255, 255);"></i>
		</div>
			
			<!-- <div> <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop></div> -->
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	import Header2 from '@/components/Header_dao.vue'
	//import AD from '@/components/AD.vue'
	import Footer from '@/components/Footer.vue'
	export default {
		components: {
			Header,
			Header2,
			Footer, //AD
		},
		data() {
			return {
				isjiance: true,
				showad: true,
				showft: true,
				isquan:false,
			}
		},
		created() {

		},
		watch: {
			$route(to) {
				//console.log(to.path)
				
				let reg = /person/
				this.showad = !reg.test(to.fullPath)
				if (to.path == '/login' || to.path == '/register' || to.path == '/forget') {
					this.showad = false
				}

				if (to.path == '/live' || to.path == '/livehome') { //|| to.path == '/quan'
					this.isquan = false
					this.showft = false
				}else{
					this.showft = true					
					this.isquan = true
				}
				
				if (to.path == '/quan') { 
					this.isquan = false
				}
				
				if (to.path == '/jiance' || to.path == '/jiancexg' || to.path == '/daping') {
					// console.log(to.path)
					this.isjiance = false
					// this.$refs.app.style.minwidth=1200px;
					this.$refs.app.style.minWidth='0'
				}else{
					this.isjiance = true		
					this.$refs.app.style.minwidth='1200px';
				}
				
				
				// if(to.path == '/quan' ){
				// 	this.isquan=false
				// }else{
				// 	this.isquan=true
				// }
			},

		},
		
		methods:{
			dingbu() {
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},
		}
	}
</script>

<style lang="less">
	@import url("./assets/normalize.css");
	@import url("./assets/font-awesome.css");
	@import url("./assets/iconfont.css");
	@import url("./assets/base.less");
	
	// body{size portrait:8.4in 11.8in}

	#app {
		font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/*text-align: center;*/
		color: #3d3d3d;
		background-color: #fff;//#f5f5f7;
		/* min-width: 100%; */
		min-width: @conent-width;
	}
	
	

	.comp-to-top {
	  background-color:#4cacf1;// #4aa557;
	  position: fixed;
	  right: 20px;
	  bottom: 70px;//30px;
	  width: 40px;
	  height: 40px;
	  border-radius: 20px;
	  line-height: 40px;
	  text-align: center;
	  color: #fff;
	  font-weight: 800;
	  cursor: pointer;
	  transition: 0.3s;
	  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	  opacity: 0.5;
	  z-index: 100;
	  &:hover {
	    opacity: 1;
	  }
	  }

</style>
