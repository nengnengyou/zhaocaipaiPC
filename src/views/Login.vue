<template>
	<div class="login">

		<!-- 使用协议 -->
		<el-dialog title="" :visible.sync="dialogVisible" width="50%">
			<p v-html="xieyi"></p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>


		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="请先绑定手机号" v-if="bdsjh" :visible.sync="bdsjh"
		 :modal="false" width="455px">

			<el-form>

				<el-form-item label="手机号">
					<el-input type="text" v-model="bangding.mobile"></el-input>
				</el-form-item>

				<el-form-item label="验证码">
					<!-- <el-input type="text" v-model="bangding.code"></el-input> -->
					<div class="yzm">
						<el-input type="text" v-model="bangding.code"></el-input>
						<!-- <input type="text" placeholder="请输入验证码" v-model="bangding.code" v-on:keyup.enter="kslogin" /> -->
					</div>
					<div class="bd_send-btn">
						<span v-if="clickCode" class="send-btn-link">{{timeTips}}</span>
						<span @click="getyzm('bd')" v-if="!clickCode" class="send-btn-link" style='cursor: pointer;'>{{timeTips}}</span>
						<!-- <a @click="getyzm('bd')" href="javascript:void(0);" class="bd_send-btn-link">{{timeTips}}</a> -->

					</div>

				</el-form-item>
				<el-form-item label="邀请码(选填)">
					<el-input type="text" v-model="bangding.invite_code"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bdsjh = false">取 消</el-button>
				<el-button type="primary" @click="upVip">确 定</el-button>
			</span>
		</el-dialog>

		<div class="login-box-warp">

			<div id="container" class="login-box loading">

				<div id="login" class="width-vertical login-label-icon login-view-qrcode taobao_pc">
					<div class="corner-icon-view view-type-qrcode">

						<div class="corner-icon-view view-type-password" v-if="saoma">
							<div class="master-login-title" data-spm-anchor-id="a2107.1.0.i7.27fb11d9ZMdgfM">微信扫码，安全登录</div>
						</div>

						<i v-if="!saoma" @click="saoma=true" class="iconfont icon-qr-code iconfont2"></i><!-- icon-qr-code -->

						<i v-if="saoma" @click="saoma=false" class="iconfont icon-diannaofuben iconfont2" style="right: 3px;top: 2px;font-size: 43px;"></i>




						<div class="login-tip" v-if="!saoma">
							<div class="poptip">
								<div class="poptip-arrow"><em></em><span></span></div>
								<div class="poptip-content">扫码登录更安全</div>
							</div>
						</div>

					</div>

					<div class="right-login" v-if="!saoma">
						<div class="login-type">
							<!--密码登录-->
							<div @click="typa_ctive('mima')" class="login-type-item" :class="{login_type_item_active:!loginMode}">密码登录</div>

							<div @click="typa_ctive('duanxin')" class="login-type-item" :class="{login_type_item_active:loginMode}">短信登录</div>

						</div>

						<div class="right-login-conent">

							<div class="fm-field">
								<div><label class="fm-label-icon"><i class="icon-icon_user iconfont" title="用户名"></i></label></div>
								<div class="yhm">
									<input type="text" placeholder="请输入手机号" v-model="userLogin.mobile" />
								</div>

							</div>


							<div class="fm-field" v-if="!loginMode">
								<div><label class="fm-label-icon"><i class="icon-pwd iconfont" title="密码"></i></label></div>
								<!--密码登录-->
								<div class="mima">
									<input type="password" placeholder="请输入密码" v-model="userLogin.password" v-on:keyup.enter="kslogin" />
								</div>
							</div>

							<div class="fm-field" v-if="loginMode">
								<div><label class="fm-label-icon"><i class="icon-pwd iconfont" title="验证码"></i></label></div>
								<!--验证码登录-->
								<div class="yzm">
									<input type="text" placeholder="请输入验证码" v-model="userLogin.captcha" v-on:keyup.enter="kslogin" />
									<!-- <div class="getyzm"> -->
									<!-- <button  class="getyzm_btn" >
					              <span @click="getyzm" :disabled="clickCode" >{{timeTips}}</span>
					            </button> -->
									<!-- <el-button class="getyzm_btn" @click="getyzm" :disabled="clickCode">{{timeTips}}</el-button> -->
									<!-- </div> -->
								</div>
								<div class="send-btn">
									<span v-if="clickCode" class="send-btn-link">{{timeTips}}</span>
									<span @click="getyzm('dl')" v-if="!clickCode" class="send-btn-link" style='cursor: pointer;'>{{timeTips}}</span>
									<!-- <a @click="getyzm('dl')" :disabled="clickCode" href="javascript:void(0);" class="send-btn-link">{{timeTips}}</a> -->
								</div>
							</div>
						</div>

						<div class="right-login-bottom">
							<button @click="kslogin" style=" cursor: pointer; margin: 0;background-color:# 169bff;">
								<span style='cursor: pointer;'>登录</span>
								<!-- <el-link type="primary">快速登录</el-link> -->
							</button>
						</div>


						<div class="login-blocks sns-login-links">

							<div class="checkbox">
								<label class="checkbox2">
									<input type="checkbox" ref="ckb" checked=true />
									<span style='cursor: pointer;'>我已同意</span>
								</label>
								<span @click="dialogVisible = true " style="color: rgb(51, 133, 255);cursor: pointer;">《招财拍平台使用协议》</span>
							</div>
						</div>

						<div class="login-blocks login-links">

							<a @click="switchTo(0)" style="cursor: pointer;">忘记密码</a>

							<a @click="switchTo(1)" style="cursor: pointer;">立即注册</a>

						</div>



					</div>


					<div class="right-login" v-if="saoma">

						<div class="login-content nc-outer-box">

							<div class="qrcode-login">
								<div>

									<div class="qrcode-img">

										<!-- <iframe src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=http%3A%2F%2Fnew.zhaocaipaipai.com%2FLoginWechat.html&amp;state=&amp;login_type=jssdk&amp;self_redirect=false&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst=&amp;href=data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30uaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7fS5zdGF0dXNfaWNvbiBkaXNwbGF5OiBub25lfS5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9LmltcG93ZXJCb3ggLnN0YXR1c3twYWRkaW5nOiAwO30=" frameborder="0" scrolling="no" width="320px" height="262px"></iframe> -->
										<!-- <iframe src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=http%3A%2F%2Fnew.zhaocaipaipai.com%2FLoginWechat.html&amp;state=&amp;login_type=jssdk&amp;self_redirect=false&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst=&amp;href=data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30uaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7fS5zdGF0dXNfaWNvbiBkaXNwbGF5OiBub25lfS5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9LmltcG93ZXJCb3ggLnN0YXR1c3twYWRkaW5nOiAwO30uaW1wb3dlckJveCAuc3RhdHVzIHB7Zm9udC1zaXplOiAxMXB4O30=" frameborder="0" scrolling="no" width="320px" height="262px"></iframe> -->
										<!-- <iframe src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=http%3A%2F%2Fnew.zhaocaipaipai.com%2FLoginWechat.html&amp;state=&amp;login_type=jssdk&amp;self_redirect=false&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst=&amp;href=data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIyMHB4O30uaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjIwcHg7fS5zdGF0dXNfaWNvbiBkaXNwbGF5OiBub25lfS5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9LmltcG93ZXJCb3ggLnN0YXR1c3twYWRkaW5nOiAwO30uaW1wb3dlckJveCAuc3RhdHVzIHB7Zm9udC1zaXplOiAxMXB4O30=" frameborder="0" scrolling="no" width="320px" height="262px"></iframe> -->
										<iframe sandbox="allow-scripts allow-top-navigation" src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=http%3A%2F%2Fwww.zhaocaipaipai.com%2FPC%2Fmulu%2FLoginWechat.html&amp;state=&amp;login_type=jssdk&amp;self_redirect=false&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst=&amp;href=data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30uaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjIwcHg7fS5zdGF0dXNfaWNvbiBkaXNwbGF5OiBub25lfS5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9LmltcG93ZXJCb3ggLnN0YXR1c3twYWRkaW5nOiAwO30uaW1wb3dlckJveCAuc3RhdHVzIHB7Zm9udC1zaXplOiAxMXB4O30="
										 frameborder="0" scrolling="no" width="320px" height="262px"></iframe>


									</div>

								</div>

							</div>

							<div class="login-blocks login-links">

								<a @click="switchTo(0)" style="cursor: pointer;">忘记密码</a>

								<a @click="switchTo(1)" style="cursor: pointer;">立即注册</a>

							</div>

						</div>


					</div>

				</div>





			</div>

		</div>





	</div>
</template>





<script>
	// import local from "../../api/localstorage";
	//import util from '@/components/Header.vue'

	export default {
		name: "Login",

		data() {
			return {

				saoma: false,

				bdsjh: false,
				bangding: {
					type: 2,
					mobile: "",
					code: "",
					invite_code: "",
					unionid: "",
				},

				dialogVisible: false,
				xieyi: '',

				loginMode: false, //登录类型，真为短信，假为密码

				/* userLogin: {
					username: "",
					password: "",
					device_type: 'web',
					device_info: '6fde4c919e06b3251f709eeca6daaecc',
					code: '',
					agent: 'pc'
				}, */

				userLogin: {
					type: 3,
					//flash_token: '',
					mobile: "",
					code: "",
					password: "",
					access_token: '',
					open_id: '',
					captcha: '',

				},

				timeTips: '发送验证码',
				clickCode: false,
				time: 60,

			};
		},

		//启动执行
		mounted() {


			//this.getXieyi();
			if (this.$route.query.code != '') {
				console.log(this.$route.query.code)
				//POST,登录访问
				this.$api.userLogin({
					type: 5,
					code: this.$route.query.code
				}).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						//this.$router.push('/person')
						console.log(res.data)
						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)						
						
						let m = res.data.userinfo.mobile.substring(0, 3) + '****' + res.data.userinfo.mobile.substring(7, 11)
						
						window.localStorage.setItem('mobile', m)
						this.$store.commit('saveMobile', m)	
						
						// this.setxinxi()
						this.$router.push('/person')
					} else if (res.code == 2) {
						this.bdsjh = true
						this.bangding.unionid = res.data
					}


				})
			}

			//获取使用协议
			this.$api.getFuwuxieyi({
				name: 'shiyong'
			}).then(res => {
				this.xieyi = res.data.content
			})

		},

		// created: {

		// },



		methods: {
			
			//保存mobile
			setxinxi(){
				this.$api.getUserInfo().then(res2 => {
					let m = res2.data.mobile.substring(0, 3) + '****' + res2.data.mobile.substring(7, 11)
					//console.log(res2.data.mobile)
					//console.log(m)
					window.localStorage.setItem('mobile', m)
					this.$store.commit('saveMobile', m)
					//console.log(this.$store.getters.getMobile)
				})
			},
			
			
			//绑定手机号
			upVip() {
				this.$api.register(this.bangding).then(res => {
					if (res.code == 1) {
						this.$message.success("绑定成功")										
						
						console.log(res.data)
						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)
						this.bdsjh = false
						
						let m = res.data.userinfo.mobile.substring(0, 3) + '****' + res.data.userinfo.mobile.substring(7, 11)
						
						window.localStorage.setItem('mobile', m)
						this.$store.commit('saveMobile', m)	
						
						// this.setxinxi()
						this.$router.push('/person')
						
					} else {
						this.$message.error(res.msg)
					}
				})

			},

			//获取登录协议
			getXieyi() {
				this.$api.getXieyi().then(res => {
					this.xieyi = res.data[0].content
				})
			},


			//注册跳转
			switchTo(t) {
				if (t == 1) {
					console.log('/reg');
					this.$router.push('/reg');
				} else if (t == 0) {
					console.log('/forget');
					this.$router.push('/forget');
				}

			},

			//控制登录方式
			typa_ctive: function(ee) {
				if (ee == "duanxin") {
					console.log(ee);
					this.userLogin.password = "";
					this.userLogin.code = "";
					this.loginMode = true;
					this.userLogin.type = 6
				} else if (ee == "mima") {
					this.userLogin.type = 3
					console.log(ee);
					this.userLogin.password = "";
					this.userLogin.code = "";
					this.loginMode = false;
				}
			},

			//登录按钮
			kslogin() {

				console.log(this.$refs.ckb.checked);

				if (!(this.$refs.ckb.checked == true)) {

					this.$message.warning("请同意平台使用协议");


					return;
				}

				if (this.userLogin.mobile == "") {
					this.$message.warning("请输入账号");
					return;

				}

				if (this.loginMode) { //判断登录类型
					if (this.userLogin.captcha == "") { //判断验证码不为空
						this.userLogin.password = "";
						this.$message.error("请输入验证码");
						return;
					}

				} else {
					if (this.userLogin.password == "") { //判断密码不为空
						this.userLogin.captcha = ""
						this.$message.error("请输入密码")
						return;
					}

				}
				//POST,登录访问
				this.$api.userLogin(this.userLogin).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)

						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)
						
						//console.log(this.$store.getters.getToken)
						
						let m = res.data.userinfo.mobile.substring(0, 3) + '****' + res.data.userinfo.mobile.substring(7, 11)
						
						window.localStorage.setItem('mobile', m)
						this.$store.commit('saveMobile', m)				
						
						//this.setxinxi()
						
						this.$router.push('/person')

						//console.log(res.data.token)
					} else {
						this.$message.error(res.msg)
					}


				})
			},
			//短信登录
			codeLogin() {

			},


			//获取验证码
			getyzm(ty) {
				if (ty == "dl") {
					var user = this.userLogin.mobile;
					console.log(user);
					if (user == null) {
						this.$message.error("请输入正确的手机号");
						return;
					}
					if (user.length == 11) {
						this.$api.duanxin({
							mobile: this.userLogin.mobile,
							event: "login"
						}).then(res => {
							if (res.code == 1) {
								this.$message.success(res.msg)

								this.timeDown();
							} else {
								this.$message.error(res.msg)
							}
						})

					} else this.$message.error("请输入正确的手机号");
				} else if (ty == "bd") {
					if (this.bangding.mobile == "" && this.bangding.mobile.length != 11) {
						this.$message.error("请输入正确的手机号");
						return;
					} else {
						this.$api.duanxin({
							mobile: this.bangding.mobile,
							event: 'bind'
						}).then(res => {
							if (res.code == 1) {
								this.$message.success(res.msg)

								this.timeDown();
							} else {
								this.$message.error(res.msg)
							}
						})
					}
				}

			},
			//验证倒计时
			timeDown() {
				let _this = this
				this.clickCode = true
				let timer = setInterval(() => {
					if (this.time > 0) {
						this.time--;
						this.timeTips = '已发送（' + this.time + ')'
					} else {
						this.clickCode = false
						this.time = 60
						this.timeTips = '重新获取验证码'
						clearInterval(timer)
					}
				}, 1000)
			},

		}
	};
</script>






//element-ui
<style lang="less" scoped>
	@import url("../assets/iconfont2.css");

	input,
	button {
		outline: none;
	}


	.login {
		position: relative;
		height: calc(100vh - 190px);
		padding-top: 190px;
		// background: url(../assets/images/login1.png) no-repeat;
		background: url(../assets/images/loginbj3.jpg) no-repeat;
		background-size: cover;
	}

	.login-box-warp {
		position: absolute;
		top: 120px;
		right: 173px;
		width: 350px;
	}

	.login-box-warp .login-box {
		background-color: hsla(0, 0%, 100%, .9);
		position: relative;
	}

	.login-box {
		width: 321px;
		height: 329px;
		padding: 25px 25px 23px;
		color: #6c6c6c;
		background: #fff;
		position: relative;
		margin: 0 auto;
	}

	.width-vertical {
		width: 100%;
		//margin-bottom: 20px;
	}

	.width-vertical {
		margin-bottom: 0;
	}

	.width-vertical {
		width: 100%;
		margin-bottom: 20px;
	}

	.corner-icon-view {
		position: static;
	}

	.login-view-password .corner-icon-view,
	.login-view-sms .corner-icon-view {
		height: 0;
	}

	.iconfont2 {
		position: absolute;
		right: 5px;
		top: 5px;
		font-size: 52px;
		line-height: 52px;
		cursor: pointer;
		//color: #f40;
		color: #169bff;
	}

	#login .master-login-title {
		height: 18px;
		line-height: 18px;
		font-size: 16px;
		color: #3c3c3c;
		margin-top: 9px;
		padding-bottom: 8px;
		font-weight: 700;
	}

	.corner-icon-view .master-login-title {
		border-bottom-width: 0;
	}

	.master-login-title {
		width: 100%;
		font-size: 16px;
		font-weight: 700;
		border-bottom: 1px solid #ccc;
		padding-bottom: 5px;
		margin: 0 auto 10px;
	}

	#login .corner-icon-view .login-tip {
		top: 5px;
		right: 58px;
	}

	.corner-icon-view .login-tip {
		position: absolute;
		top: 0;
		right: 45px;
		display: block;
	}

	#login .corner-icon-view .login-tip .poptip {
		border: 1px solid #f3d995;
		background: #fefcee;
	}

	.corner-icon-view .poptip {
		line-height: 16px;
		position: relative;
		//z-index: 9999;
		background-color: #fefcee;
		border: 1px solid #ff9000;
		padding: 5px 10px;
	}

	.corner-icon-view .poptip .poptip-arrow {
		position: absolute;
		z-index: 10;
		*zoom: 1;
		top: 8px;
		right: 0;
	}

	.corner-icon-view .poptip .poptip-arrow em {
		top: 0;
		left: 1px;
		border-left-color: #ff9000;
		border-width: 6px 0 6px 6px;
	}

	.corner-icon-view .poptip .poptip-arrow em,
	.corner-icon-view .poptip .poptip-arrow span {
		position: absolute;
		*zoom: 1;
		width: 0;
		height: 0;
		border-color: hsla(0, 0%, 100%, 0);
		border-color: transparent \0;
		*border-color: transparent;
		_border-color: tomato;
		_-webkit-filter: chroma(color=tomato);
		_: chroma(color=tomato);
		border-style: solid;
		overflow: hidden;
		top: 0;
		left: 0;
		border-left-color: #ff9000;
	}

	.corner-icon-view .poptip .poptip-content {
		color: #ff9000;
		font-size: 12px;
		font-weight: 400;
	}

	.login .login-box .right .right-login {
		position: absolute;
		width: 89%;
		height: 84%;
		top: 36px;
		margin: auto;
		background-color: white;
		border: 1px solid darkgray;
	}

	.login .login-type {
		color: #3c3c3c;
		font-weight: 700;
		font-size: 19px;
		margin: 32px 0 0px 11px;
		display: flex;
	}

	.login .login-type-item {
		height: 28px;
		cursor: pointer;
		margin-right: 15px;
	}

	.login .login_type_item_active {
		//background-color: #1469e2;
		border-bottom: 2px solid #000;
		//color: white;
	}

	.login .right-login-conent {
		padding: 0px 0px 0px 12px;
		margin: 30px 0 0 0;
	}

	.yhm {
		//display: inline-table;
		//margin-bottom: 20px;
		//width: 100%;
	}

	.yzm {
		//display: inline-table;	
		//margin-bottom: 20px;
		//width: 100%;
	}

	.mima {
		//display: inline-table;
		//margin-bottom: 20px;
		//width: 100%;
	}

	.right-login-conent input {
		border: 1px solid #ccc;
		height: 38px;
		width: 250px;
		outline: none;
		font-size: 14px;
		padding-left: 50px;
	}

	.login .getyzm {
		cursor: pointer;
		background-color: #f5f7fa;
		color: #909399;
		vertical-align: middle;
		display: table-cell;
		position: relative;
		border: 1px solid #dcdfe6;
		border-radius: 4px;
		/*padding: 0 20px;*/
		width: 1px;
		white-space: nowrap;
	}

	.login .getyzm_btn {
		border-color: transparent;
		background-color: transparent;
		color: inherit;
		border-top: 0;
		border-bottom: 0;
		cursor: pointer;
	}

	.login .right-login-bottom {
		padding: 0px 6px 0 14px;
		margin: 17px 0 0 0;
		color: #ffffff;

	}

	.login .right-login-bottom button {
		position: relative;
		width: 100%;
		height: 40px;
		font-size: 16px;
		padding: 0 0 0 6px;
		margin: 21px 0 0 0;
		border: none;
		border-radius: 5px;
		color: white;
		//background-color: #1469e2;
		background-color: #169bff;
	}

	.login .right-wz {
		display: flex;
		font-size: 14px;
		position: absolute;
		bottom: 9px;
		width: 100%;
		justify-content: space-between;
	}

	.login .right-wz input {
		margin: 0 0 0 0;
		padding: 0 0 0 0;
	}

	.login .right-wz .loginReg {
		margin: 0 40px;
	}

	.fm-field {
		position: relative;
		margin-bottom: 20px;
		font-size: 14px;
	}

	.fm-field .fm-label-icon {
		width: 40px;
		height: 41px;
		line-height: 41px;
		text-align: center;
		color: #fff;
		position: absolute;
		left: 1px;
		bottom: 1px;
		background-color: #ccc;
	}

	.fm-field .fm-label-icon .iconfont {
		font-size: 24px;
	}

	.fm-field .send-btn {
		position: absolute;
		right: 15px;
		bottom: 0;
		line-height: 40px;
	}

	.login-box a {
		color: #6c6c6c;
		font-size: 12px;
		margin-left: 10px;
	}

	.login-links {
		margin-top: 16px;
		margin-bottom: 0;
		margin: 8px 0;
		text-align: right;
		zoom: 1;
	}

	.sns-login-links {
		margin-top: 29px;
		margin-bottom: 15px;
		text-align: left;
		margin-left: 15px;
	}

	.bd_send-btn-link {
		color: #6c6c6c;
		font-size: 12px;
		margin-left: 10px;
	}

	.bd_send-btn {
		width: 79px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
