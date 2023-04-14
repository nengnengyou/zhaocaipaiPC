<template>
	<div class="header2"  :style="positions">
		<div class="inner2" :style="in2">
			<div id="nav" class="clearfloat">
				<ul class="clearfloat ul">
					<li>
						<router-link class="one" to="/">首页</router-link>
					</li>
					<!-- <li>
						<router-link class="one" to="/auctionhome">拍车专场</router-link> :style="paiActive"
					</li> -->

					<!-- <li> -->
						<!-- <router-link class="one" to="/person/design">我要发拍</router-link> -->
					<!-- 	<span  class="one" @click="lianxi('发拍请联系客服')">我要发拍</span>
					</li> -->

					<!-- <li> -->
						<!-- <router-link to="/conveniently" class="buycar one">
							随手拍物
						</router-link> -->
						<!-- <router-link to="/jiance" class="one">随手拍物</router-link> -->
					<!-- 	<span @click="lianxi('功能开发中！')" class="one">随手拍物</span>
						
					</li> -->
					<!-- <li>
						<router-link to="/buycomm" class="one">商家车源</router-link>
					</li> -->
					<li>
						<router-link class="one" to="/life">配件商城</router-link>
					</li>
					<li>
						<router-link class="one" to="/sell2">商家入驻</router-link>
					</li>
					<li>
						<router-link class="one" to="/login">商家登录</router-link>
					</li>

					<!-- <li>
			  <router-link class="one" to="/service">常用服务</router-link>
			</li> -->

				<!-- 	<li> -->
						<!-- <span @click="lianxi('直播维护升级中！')" class="one">直播</span> -->
					<!-- 	<router-link class="one" to="/livehome" style="margin-right: 0;">直播</router-link>
					</li> -->




					<!-- <li>
			  <router-link class="one" to="/quan">车友圈</router-link>
			</li> -->

				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				positions: '',
				in2:'',
			}
		},

		watch: {
			$route(to) {

				if (to.path == '/live') {
					this.positions = 'position: fixed;margin-top: 60px;z-index: 99;margin-top: 60px;'
				} else {
					this.positions = 'margin-top: 60px;'
				}
				
				if (to.path == '/livehome') {
					this.positions = ''
				} else {
					this.positions = 'margin-top: 60px;z-index: 99;margin-top: 60px;'
				}
			}
		},


		methods: {
			
			lianxi(text){
				this.$alert(text,"提示")
			},

		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.header2 {
		height: 30px;
		min-width: 100%;
		background-color: #FFFFFF;
		border-bottom: 1px solid #e8e8e8;
	}

	.inner {
		//width: @conent-width;
		width: 1200px;
		margin: 0 auto;
		// background-color: pink;
		height: 100%;
		padding: 0 14px;
	}

	.child {
		display: none;
		color: rgba(51, 133, 255, 1) !important;
		width: 100%;
		position: absolute;
		top: 68px;
		/*left: 0;*/
		z-index: 100;
	}

	.buycar:hover {
		.child {
			display: block;

		}
	}

	#nav {
		//float: right;
		box-sizing: border-box;

		ul {
			box-sizing: border-box;
			margin: 0px;
			padding: 0px;
			width: auto;
			margin-right: 27px;
		}

		li {
			list-style: none;
			box-sizing: border-box;
			float: left;
		}

		li {
			position: relative;
		}

		.one {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 26px;
			/* line-height: 70px;*/
			line-height: 30px;
			font-size: 15px;


			position: relative;
		}

		.onea {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 26px;
			line-height: 30px;
			font-size: 18px;
		}

		.tow {
			text-decoration: none;
			display: inline-block;
			width: 100%;
			height: 100%;
			line-height: 30px;
			font-size: 18px;
			background-color: #fff;
			border: 1px solid #dcdcdc;
			color: rgba(51, 133, 255, 1);
			box-sizing: border-box;
		}

		/*.shu {*/
		/*  background-color: #fff;*/
		/*  width: 2px;*/
		/*  height: 42px;*/
		/*  position: absolute;*/
		/*  left: 0px;*/
		/*  top: 50%;*/
		/*  transform: translate(-50%, -50%);*/
		/*}*/
		a.router-link-exact-active {
			color: rgba(51, 133, 255, 1);
			/*<!--background-color: @base-color;-->*/
			//border-bottom: 2px solid white;
		}

		// a:hover {
		// 	/*color: #fff;*/
		// 	/*<!--background-color: @base-color !important;-->*/
		// 	border-bottom: 2px solid white;
		// }	

		a {
			color: #000;
		}


		.person-img {
			position: relative;
			top: 50%;
			transform: translate(-30%, 30%);
		}
	}

	.he2 {
		position: fixed;
		margin-top: 60px;
		min-width: 100%;
	}

	.inner2 {
		//width: 806px;//752px;//890px;
		width: 40%;
		min-width: 769px;
		margin: 0 auto 0;
		height: 100%;
	}
</style>
