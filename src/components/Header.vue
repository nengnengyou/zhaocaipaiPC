<template>
	<div class="header" :style="positions">
		
		<img @click="toMain" style="margin-top: 10px;" class="logo" src="../assets/images/logo10.png" alt />
		<div class="inner">
			<div id="nav" class="clearfloat">
				<ul class="clearfloat ul">
					<!-- <li>
						<router-link class="one" to="/">首页</router-link>
					</li>
					<li>
						<router-link class="one" to="/auctionhome">拍车专场</router-link>
					</li>

					<li>
						<router-link class="one" to="/quan">我要发拍</router-link>
					</li>

					<li>
						<router-link to="/conveniently" class="buycar one">						
							随手拍物
						</router-link>
					</li>
					<li>
						<router-link to="/buycomm" class="one">商家车源</router-link>
					</li>
					<li>
						<router-link class="one" to="/life">配件商城</router-link>
					</li> -->

					<!-- <li>
            <router-link class="one" to="/service">常用服务</router-link>
          </li> -->

					<!-- 	<li>
						<router-link class="one" to="/live">直播</router-link>
					</li> -->




					<!-- <li>
		    <router-link class="one" to="/quan">车友圈</router-link>
		  </li> -->

					<!-- <li>
					<span class="one">官方公众号</span>
					
					
				</li> -->

					<!-- <li>
						<span class="one1 app">APP</span>
						<div class="app_div">
						</div>
					</li> -->
					
					<!-- <li>
						<span class="one1 gzh">APP</span>
						<div class="gzh_div">
							<div class="gzh_img">
								<img style="width: 200px; height: 200px;" src="../assets/images/header/gzh.jpg" alt="">
							</div>
					
							<p style="color: #fff;">扫码下载招财拍APP</p>
						</div>
					</li> -->
					
					<li>
						<span class="one1 gzh">公众号</span>
						<div class="gzh_div">
							<div class="gzh_img">
								<img style="width: 200px; height: 200px;" src="../assets/images/header/gzh.jpg" alt="">
							</div>

							<p style="color: #fff;">微信扫码关注招财拍</p>
						</div>
					</li>

					<!-- 	<li>
					<router-link class="one" to="/live">直播</router-link>
				</li> -->

					<li>
						<router-link v-if="!$store.getters.getToken" class="one1" style="position:relative" to="/login">
							<span class="shu"></span>
							<img class="person-img" src="../assets/images/person.png" alt /> 登陆/注册
						</router-link>

						<router-link v-if="$store.getters.getToken" to="/person" class="buycar onea1" >
							<!-- 个人中心 -->
							<span style="color: #fff;width: 100%;height: 100%;display: block;"  @mouseover="getqian()">
								{{$store.getters.getMobile}}
								<!-- {{$store.getters.getToken}} -->
							</span>

						</router-link>

						<div class="child" ref="child">													
							<div>
								<div class="site-nav-menu-bd-panel">
									<div class="site-nav-user-wrapper ">
										<div class="site-nav-user-avatar">
											<!-- <img src="//wwc.alicdn.com/avatar/getAvatar.do?userNick=咖啡太甜丶&amp;_input_charset=UTF-8&amp;width=80&amp;height=80&amp;type=sns"
											 width="80" height="80" > -->

											<img v-if="user.avatar!=''" :src="user.avatar" width="80" height="80">
											<img v-if="user.avatar==''" src="../assets/images/userimg.png" width="80" height="80">
										</div>
										<div>
											<!-- <span style="color: #FFF;line-height: 58px; font-size: 16px;">{{$store.getters.getMobile}}</span> -->
											<a href="#/person" style="line-height: 58px; font-size: 16px;">{{$store.getters.getMobile}}</a>
										</div>
									</div>
									<!-- <div class="site-nav-user-info">
										<p class="site-nav-user-operate" style="width: 145px;">
											<a href="#/person" target="_top">个人中心</a>
											<span class="site-nav-pipe">|</span>
											<a style="cursor: pointer;" @click="outLog">退出</a>
										</p>
										<div style="display: flex;    height: 20px;">
											<span class="level-info tao-score">保证金：{{'541'}}</span>
										</div>
										<div style="display: flex;    height: 20px;">
											<span class="level-info tao-score">余 </span><span style="margin-left: 13px;">额：{{'541'}}</span>
										</div>
										<div style="display: flex;    height: 20px;">
											<span class="level-info">普通会员</span>
										</div>
									</div> -->

									<div class="site-nav-user-info">
										<div style="display: flex;    height: 20px;">
											<img class="site-nav-user-info-img" src="../assets/images/header/icon_coinpurse_line.png" alt="">
											<span class="level-info tao-score">余 </span><span style="margin-left: 13px;">额：{{user.money}}</span>
										</div>
										<div style="display: flex;    height: 20px;">
											<img class="site-nav-user-info-img" src="../assets/images/header/icon-test.png" alt="">
											<span class="level-info tao-score">保证金：{{user.bond}}</span>
										</div>
										<div style="display: flex;    height: 20px;">
											<img class="site-nav-user-info-img" src="../assets/images/header/vip.png" alt="">
											<span v-if="user.level > 1" class="level-info">{{user.level_text}}</span>
											<span v-if="user.level > 1" style="margin-left:3px;" class="level-info">{{getVipTime(user.end_time)}}</span>

											<span v-if="user.level < 2" class="level-info">普通会员</span>


										</div>

									</div>
									<!-- <p class="site-nav-user-operate" style="width: 145px;">
										<a href="#/person" target="_top">个人中心</a>
										<span class="site-nav-pipe">|</span>
										<a style="cursor: pointer;" @click="outLog">退出</a>
									</p> -->

									<div style="height: 20px;">


									</div>

									<div class="header_tan_di">
										<div>
											<a href="#/person" target="_top">个人中心</a>
										</div>
										<div>
											<a style="cursor: pointer;" @click="centerDialogVisible=true">退出</a>
										</div>
									</div>


								</div>

							</div>
							<!-- <a class="child-item tow" @click="outLog">退出登录</a> -->
						</div>


					</li>
				</ul>
			</div>
		</div>
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="300px" center >
			<span>要去看看自己的收藏吗？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible=false,outLog()">不看了</el-button>
				<el-button type="primary" @click="centerDialogVisible=false,qu()">去看看</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {	
				
				centerDialogVisible:false,
				

				user: '',

				linkActive: {
					'background-color': 'none',
					'color': '#fff'
				},
				paiActive: {
					'background-color': 'none',
					'color': '#fff'
				},
				positions: 'position:absolute',
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
				//console.log(to.path)
				if (to.path == '/live') {
					this.positions = 'position:fixed'
				} else {
					this.positions = 'position:absolute'
				}
				// } else {
				// 	this.positions = 'fixed'
				// }
				
				if (to.path == '/livehome') {
					this.positions = ''
				}else{
					this.positions = 'position:absolute'
				}
			}
		},
		mounted() {
			//console.log(this.$store.getters.getToken)
			//this.getqian()
			
		},
		created() {
			// this.getqian()
			// console.log(this.$store.getters.getToken==true)
			// if (this.$store.getters.getToken) {
			// 	console.log(localStorage.getItem("token"))
			// 	this.getqian()
			// }
		},


		methods: {
			qu(){
				this.$router.push('person/collect/pai')
			},

			getVipTime(timestamp) {
				let time = new Date(timestamp * 1000)
				let year = time.getFullYear()
				let month = time.getMonth() + 1
				let day = time.getDate()
				// let hour = time.getHours()
				// let minute = time.getMinutes()
				// let second = time.getSeconds()
				//console.log(year + '-' + month + '-' + day)
				return year + '-' + month + '-' + day

			},

			getqian() {
				//this.loading= true
				//console.log(this.$store.getters.getToken)				
				this.$api.getUserInfo().then(res => {
					//console.log("getqian2")
					this.user = res.data
					//console.log('header')
					//console.log(this.user)
					//this.loading= false
				})
				//console.log('1111')
			},


			outLog() {
				// console.log(22)
				console.log()
				
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
		//z-index: 99999;
		height: 60px;
		min-width: 100%;
		background: #545c64;
		//position: absolute;
		top: 0;
		/* opacity: 0.4; */
		//position: absolute;
		//top: 0;
		//text-align: center;
		//z-index: 100;
		//color: #fff;
		// margin-bottom: 10px;
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
		//color: rgba(51, 133, 255, 1) !important;
		//width: 100%;
		position: absolute;
		top: 68px;
		/*left: 0;*/
		z-index: 100;
		cursor: auto;
	}

	// .buycar:hover> {
	// 	.child {
	// 		display: block;

	// 	}
	// }

	.buycar:hover+.child {
		display: block;

	}

	.child:hover {
		display: block;

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

		.one1 {
			text-decoration: none;
			//cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 26px;
			/* line-height: 70px;*/
			line-height: 68px;
			font-size: 16px;
			//margin: 25px 26px 0;
			color: #fff;
			position: relative;
		}

		.onea1 {
			text-decoration: none;
			//cursor: pointer;
			display: inline-block;
			width: 100%;
			height: 100%;
			margin: 0 26px;
			//margin: 25px 26px 0;
			line-height: 68px;
			font-size: 16px;
		}

		.tow1 {
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
			//color: rgba(51, 133, 255, 1);
			/*<!--background-color: @base-color;-->*/
			//border-bottom: 2px solid white;
		}

		a:hover {
			/*color: #fff;*/
			/*<!--background-color: @base-color !important;-->*/
			//border-bottom: 2px solid white;
		}

		a {
			//color: #fff;
		}

		.person-img {
			width: 30px;
			height: 30px;
			position: relative;
			top: 50%;
			transform: translate(-30%, 30%);
		}
	}

	.logo {
		float: left;
		cursor: pointer;
	}

	.site-nav-menu-bd-panel {
		width: 195px; //248px;
		background: rgba(84, 92, 100);
		font-size: 13px;
		line-height: 20px;
		height: 200px;
	}

	.site-nav-user-wrapper {
		//float: left;
		display: flex;
		margin-right: 10px;
		margin-left: 9px;
		width: 151px; //62px;
		height: 62px;
		padding: 9px;
		padding-top: 12px;
		box-sizing: content-box;
	}

	.site-nav-user-avatar {
		display: block;
		overflow: hidden;
		//border: 3px solid #ffffff00;
		//-moz-border-radius: 50%;
		//-webkit-border-radius: 50%;
		border-radius: 50%;
		width: 56px;
		height: 56px;
	}

	.site-nav-user-avatar img {
		display: block;
		width: 56px;
		height: 56px;
	}

	.site-nav-user-info {
		//height: 80px;
		overflow: hidden;
		color: #fff;
		padding-left: 28px;
	}

	.site-nav-user-operate {
		text-align: right;
	}

	.site-nav-pipe {
		padding: 0 5px;
		font-style: normal;
		color: #ddd;
	}

	.site-nav-user-info p {
		height: 20px;
		line-height: 20px;
		overflow: hidden;
	}

	.site-nav-user-privilege {
		display: block;
		text-align: center;
		border: 1px solid #FFE8DE;
		background: #FFF0E8;
		padding: 4px 0;
	}

	.site-nav .site-nav-bd a {
		color: #3c3c3c;
	}

	.site-nav-menu-bd-panel a,
	.site-nav-menu-bd-panel p {
		color: #fff;
		text-decoration: none;
	}

	.site-nav-user-operate a:hover {
		color: red;
	}

	.header_tan_di {
		display: flex;
		justify-content: space-between;
		padding: 0px 16px;
	}

	.header_tan_di a:hover {
		text-decoration: underline;
	}

	.site-nav-user-info-img {
		width: 14px;
		height: 14px;
		margin-top: 3px;
		margin-right: 5px;
	}

	.gzh:hover+.gzh_div {
		display: block;
	}

	.gzh_div {
		height: 265px;
		width: 265px;
		display: none;
		background-color: rgba(84, 92, 100);
		//width: 100%;
		position: absolute;
		top: 68px;
		right: -61px;
		z-index: 100;
		cursor: auto;
		text-align: center;
	}

	.gzh_img {
		margin: 21px auto 12px;
		width: 200px;
		height: 200px;
	}

	.gzh_div:hover {
		display: block;
	}
</style>
