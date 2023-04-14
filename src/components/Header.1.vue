<template>
	<div class="header" :style="{'position':positions}">
		<div class="inner">
			<img @click="toMain" class="logo" src="../assets/images/logo.png" alt />
			<div id="nav" class="clearfloat">
				<ul class="clearfloat ul">
					<li>
						<router-link class="one" to="/">首页</router-link>
					</li>
					<li>
						<router-link class="one" to="/auctionhome">拍车专场</router-link> <!-- :style="paiActive" -->
					</li>

					<li>
						<router-link class="one" to="/quan">我要发拍</router-link>
					</li>

					<li>
						<router-link to="/conveniently" class="buycar one">
							<!-- :style="linkActive" -->
							随手拍物
						</router-link>
					</li>
					<li>
						<router-link to="/buycomm" class="one">商家车源</router-link>
					</li>
					<li>
						<router-link class="one" to="/life">配件商城</router-link>
					</li>

					<!-- <li>
            <router-link class="one" to="/service">常用服务</router-link>
          </li> -->

					<li>
						<router-link class="one" to="/live">直播</router-link>
					</li>




					<!-- <li>
		    <router-link class="one" to="/quan">车友圈</router-link>
		  </li> -->

					<li>
						<router-link v-if="!$store.getters.getToken" class="one" style="position:relative" to="/login">
							<span class="shu"></span>
							<img class="person-img" src="../assets/images/person.png" alt /> 登陆/注册
						</router-link>
						<router-link v-if="$store.getters.getToken" to="/person" class="buycar onea">
							个人中心
							<div class="child">
								<a class="child-item tow" @click="outLog">退出登录</a>
							</div>
						</router-link>
					</li>
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
				linkActive: {
					'background-color': 'none',
					'color': '#fff'
				},
				paiActive: {
					'background-color': 'none',
					'color': '#fff'
				},
				positions: 'fixed',
			}
		},
		watch: {
			$route(to) {
				if (to.name == 'buycomm' || to.name == 'buystore') {
					this.linkActive = {
						'background-color': 'rgba(51, 133, 255, 1)',
						'color': '#fff'
					}
				} else {
					this.linkActive = {
						'background': 'none',
						'color': '#fff'
					}
				}
				if (to.name == 'auctiondetail' || to.name == 'auction' || to.name == 'auctionhome') {
					this.paiActive = {
						'background-color': 'rgba(51, 133, 255, 1)',
						'color': '#fff'
					}
				} else {
					this.paiActive = {
						'background': 'none',
						'color': '#fff'
					}
				}
				if (to.path == '/') {
					this.positions = 'fixed'
				} else {
					this.positions = 'fixed'
				}
			}
		},
		methods: {
			outLog() {
				this.$api.userLogout().then(res => {
					console.log(res)
					window.localStorage.clear()
					this.$store.commit('clear')
					this.$router.push('/login')
					this.$message.info(res.msg)
				})

			},
			toMain() {
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.header {
		height: 70px;
		min-width: 100%;
		background: rgba(84, 92, 100);
		/* opacity: 0.4; */
		position: absolute;
		top: 0;
		text-align: center;
		z-index: 100;
		color: #fff;
		// margin-bottom: 10px;
	}

	.inner {
		//width: @conent-width;
		width: 1300px;
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
		float: right;
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
			line-height: 68px;
			font-size: 18px;


			position: relative;
		}

		.onea {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 26px;
			line-height: 70px;
			font-size: 18px;
		}

		.tow {
			text-decoration: none;
			display: inline-block;
			width: 100%;
			height: 100%;
			line-height: 70px;
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
			border-bottom: 2px solid white;
		}

		a:hover {
			/*color: #fff;*/
			/*<!--background-color: @base-color !important;-->*/
			border-bottom: 2px solid white;
		}

		a {
			color: #fff;
		}

		.person-img {
			position: relative;
			top: 50%;
			transform: translate(-30%, 30%);
		}
	}

	.logo {
		float: left;
		cursor: pointer;
	}
</style>
