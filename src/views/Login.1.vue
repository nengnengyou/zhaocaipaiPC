<template>
	<div class="login">
		
		<el-dialog title="请先绑定手机号" v-if="bdsjh" :visible.sync="bdsjh" :modal="false" width="30%">
		
			<el-form >
		
				<el-form-item label="手机号">
					<el-input type="text" v-model="bangding.mobile"></el-input>
				</el-form-item>
		
				<el-form-item label="验证码(测试期无需输入)">
					<el-input type="text" v-model="bangding.code"></el-input>
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
		
		<!-- 注册协议 -->
		<el-dialog title="协议" :visible.sync="dialogVisible" width="50%">
			<p v-html="xieyi"></p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

		<div class="login-box">
			<div class="left">
				<div class="nr">
					<!-- <div id="login_container" @load="wx()"></div> -->

					<!-- <iframe sandbox="allow-top-navigation allow-popups-to-escape-sandbox allow-same-origin allow-scripts" src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=https%3A%2F%2Fwww.zhaocaipaipai.com%2Flife&amp;state=&amp;login_type=jssdk&amp;self_redirect=false&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst="
					 frameborder="0" scrolling="no" width="300px" height="400px"></iframe> -->
					 
					 <iframe sandbox="allow-top-navigation allow-popups-to-escape-sandbox allow-same-origin allow-scripts" src="https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&amp;scope=snsapi_login&amp;redirect_uri=http%3A%2F%2Fnew.zhaocaipaipai.com%2FLoginWechat.html&amp;state=&amp;login_type=jssdk&amp;self_redirect=true&amp;styletype=&amp;sizetype=&amp;bgcolor=&amp;rst="
					  frameborder="0" scrolling="no" width="300px" height="400px"></iframe>
					<!-- <img src='https://open.weixin.qq.com/connect/qrconnect?appid=wx1d111b1ef8083c32&scope=snsapi_login&redirect_uri=https%3A%2F%2Fwww.zhaocaipaipai.com%2Flife&state=&login_type=jssdk&self_redirect=true&styletype=&sizetype=&bgcolor=&rst='alt="" srcset=""> -->

				</div>
				<!-- <div class="nr">
          <div class="ewm">
            <div id="login_container"></div>
          </div>

          <div class="left-wz">微信扫码登录</div>
        </div>-->
			</div>

			<div class="right">
				<div class="right-login">
					<div class="login-type">
						<div @click="typa_ctive('duanxin')" class="login-type-item" :class="{login_type_item_active:loginMode}">短信登录</div>

						<!--密码登录-->
						<div @click="typa_ctive('mima')" class="login-type-item" :class="{login_type_item_active:!loginMode}">密码登录</div>
					</div>

					<div class="right-login-conent">
						<div class="yhm">
							<input type="text" placeholder="请输入手机号" v-model="userLogin.mobile" />
						</div>

						<!--密码登录-->
						<div class="mima" v-if="!loginMode">
							<input type="password" placeholder="请输入密码" v-model="userLogin.password" v-on:keyup.enter="kslogin" />
						</div>

						<!--验证码登录-->
						<div class="yzm" v-if="loginMode">
							<input type="text" name id value placeholder="请输入验证码" v-model="userLogin.code" v-on:keyup.enter="kslogin" />
							<div class="getyzm">
								<!-- <button  class="getyzm_btn" >
                  <span @click="getyzm" :disabled="clickCode" >{{timeTips}}</span>
                </button> -->
								<el-button class="getyzm_btn" @click="getyzm" :disabled="clickCode">{{timeTips}}</el-button>
							</div>
						</div>
					</div>

					<div class="right-login-bottom">
						<button @click="kslogin">
							<span style='cursor: pointer;'>快速登录</span>
							<!-- <el-link type="primary">快速登录</el-link> -->
						</button>
					</div>
					<div  @click="switchTo(0)" style="    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 15px;"> <a style="cursor: pointer;">忘记密码?&gt;</a></div>
				</div>

				<div class="right-wz">
					<div class="checkbox">
						<label class="checkbox2">
							<input type="checkbox" ref="ckb" checked=true />
							<span style='cursor: pointer;'>我已同意</span>
						</label>
						<span @click="dialogVisible = true " style="color: rgb(51, 133, 255);cursor: pointer;">《招财拍平台使用协议》</span>
					</div>

					<div class="loginReg" @click="switchTo(1)">
						<!-- @click="switchTo" -->
						<a style='cursor: pointer;'>快速注册>>></a>
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
				
				bdsjh:false,
				bangding:{
					type:2,
					mobile:"",
					code:"",
					invite_code:"",
					unionid:"",
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
					flash_token: '',
					mobile: "",
					password: "",
					access_token: '',
					code:"",
					open_id: '',

				},

				timeTips: '发送验证码',
				clickCode: false,
				time: 60,

			};
		},

		//启动执行
		mounted() {
			//this.getXieyi();
			if(this.$route.query.code!=''){
				console.log(this.$route.query.code)
				//POST,登录访问
				this.$api.userLogin({type:5,code:this.$route.query.code}).then(res => {
					if(res.code==1){
						this.$message.success(res.msg)
						this.$router.push('/person')
						
						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)
						//console.log(res.data.token)
					}else if(res.code==2){
						this.bdsjh=true
						this.bangding.unionid=res.data
					}
					
					
				})
			}

		},
		
		created:{
			
			
			
		},
		
		
		
		methods: {
			//绑定手机号
			upVip(){
				this.$api.register(this.bangding).then(res=>{
					if(res.code==1){
						this.$message.success(res.msg)
						this.$router.push('/person')						
						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)
						this.bdsjh=false
					}else{
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
				if(t==1){
					console.log('/reg');
					this.$router.push('/reg');
				}else if(t==0){
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
				} else if (ee == "mima") {
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
					if (this.userLogin.code == "") { //判断验证码不为空
						this.userLogin.password = "";
						this.$message.error("请输入验证码");
						return;
					}

				} else {
					if (this.userLogin.password == "") { //判断密码不为空
						this.userLogin.code = ""
						this.$message.error("请输入密码")
						return;
					} else {
						var pwd = this.userLogin.password;
						console.log(pwd);
					}

				}
				//POST,登录访问
				this.$api.userLogin(this.userLogin).then(res => {
					if(res.code==1){
						this.$message.success(res.msg)
						this.$router.push('/person')
						
						window.localStorage.setItem('token', res.data.userinfo.token)
						this.$store.commit('saveToken', res.data.userinfo.token)
						//console.log(res.data.token)
					}else {
						this.$message.error(res.msg)
					}
					
					
				})
			},
			//短信登录
			codeLogin() {

			},
			

			//获取验证码
			getyzm: function() {
				var user = this.userLogin.mobile;
				console.log(user);
				if (user == null) {
					this.$message.error("请输入正确的手机号");
					return;
				}
				if (user.length == 11) {
					this.$api.duanxin({
						mobile: this.userLogin.mobile
					}).then(res => {
						if (res.code == 1) {
							this.$message.success('验证码发送成功！')

							this.timeDown();
						} else {
							this.$message.error('验证码发送失败！')
						}
					})

				} else this.$message.error("请输入正确的手机号");
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
	input,
	button {
		outline: none;
	}


	.login {
		position: relative;
		height: 100vh;
		padding-top: 190px;
		background: url(../assets/images/login1.png) no-repeat;
		background-size: cover;
	}

	.login .login-box {
		position: absolute;
		top: 120px;
		right: 50%;
		width: 800px;
		height: 450px;
		transform: translateX(50%);
		/*margin: auto;*/
		background-color: white;
		border: 1px solid darkgray;
	}

	.login .login-box .left {
		position: relative;
		width: 50%;
		height: 100%;
		margin: 0;
		float: left;
		/*background-color: beige;*/
	}

	.login .login-box .left .nr {
		position: absolute;
		/*width: 70%;
  height: 70%;*/
		top: 50%;
		left: 50%;
		/*background-color: chocolate;	*/
		transform: translate(-50%, -50%);
	}

	.login .login-box .left .nr .ewm {
		position: absolute;
		width: 55%;
		height: 49%;
		top: 13%;
		left: 22%;
	}

	.login .login-box .left .nr .left-wz {
		position: absolute;
		bottom: 28px;
		left: 25%;
		font-size: 24px;
	}

	/**********************/

	.login .login-box {
		border-radius: 5px;
	}

	.login .login-box .right {
		position: relative;
		width: 50%;
		height: 100%;
		margin: 0;
		float: left;
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
		color: #1469e2;
		border-radius: 5px;
		font-size: 22px;
		width: 71%;
		height: 9%;
		margin: 72px auto 1px;
		display: flex;
		justify-content: space-between;
		border: 2px solid #1469e2;
	}

	.login .login-type-item {
		/*border-radius: 20px;	*/
		padding: 2px 17px 0px 21px;
		cursor: pointer;
	}

	.login .login_type_item_active {
		background-color: #1469e2;
		color: white;
	}

	.login .right-login-conent {
		padding: 0px 35px;
		margin: 30px 0 0 0;
	}

	.login .yhm {
		display: inline-table;
		margin-bottom: 20px;
		width: 100%;
	}

	.login .yzm {
		display: inline-table;

		margin-bottom: 20px;
		width: 100%;
	}

	.login .mima {
		display: inline-table;
		margin-bottom: 20px;
		width: 100%;
	}

	.login .right-login-conent input {
		position: relative;
		width: 100%;
		height: 40px;
		font-size: 16px;
		border: none;
		/* background-color: #f7f7f7;*/
		border-bottom: 1px solid darkgray;
		/*padding: 0 0 0 6px;	*/
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
		padding: 0px 35px;
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
		background-color: #1469e2;
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
</style>
