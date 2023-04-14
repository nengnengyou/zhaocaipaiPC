<template>
	<div>
		<div class="reg">

			<!-- 使用协议 -->
			<el-dialog :title="xieyitxt.title" :visible.sync="xieyibox" width="50%">
				<div style="height: 400px;overflow: auto;">
					<p v-html="xieyitxt.content"></p>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="xieyibox = false">取 消</el-button>
					<el-button type="primary" @click="xieyibox = false">确 定</el-button>
				</span>
			</el-dialog>

			<div class="reg_box el-card ">
				<p class="title">
					用户注册
				</p>

				<p class="sub-title">
					已有招财拍账号
					<!-- <a href="">登陆>> -->
					<router-link to="/login">登陆>></router-link>
					<!-- </a> -->
				</p>

				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

					<el-form-item label="国家/地区" prop="Country">
						<!-- 	<el-select v-model="ruleForm.Country" placeholder="请选择国家/地区">
							<el-option label="中国" value="zhonguo"></el-option>
						</el-select> -->
						<el-cascader style="width: 100%;" v-model="ruleForm.province_id" :props="areaProp">
						</el-cascader>
					</el-form-item>

					<el-form-item label="+86(中国)" prop="mobile">
						<el-input v-model="ruleForm.mobile"></el-input>
					</el-form-item>

					<el-form-item label="验证码" prop="code">
						<el-input v-model="ruleForm.code"></el-input>
						<!-- <div class="send-code" @click="send" :disabled="clickCode">{{timeTips}}</div> -->
						<div class="getyzm">
							<el-button class="send-code" @click="send" :disabled="clickCode">{{timeTips}}</el-button>
						</div>

					</el-form-item>

					<el-form-item label="邀请码(选填)" prop="invite_code">
						<el-input v-model="ruleForm.invite_code"></el-input>
					</el-form-item>

					<el-form-item label="密码" prop="pass">
						<el-input v-model="ruleForm.pass" show-password></el-input>
					</el-form-item>

					<el-form-item label="确认密码" prop="checkPass" style="margin-bottom: 0;">
						<el-input v-model="ruleForm.checkPass" show-password></el-input>
					</el-form-item>

					<div style="    width: 248px;
    margin: 9px auto;    margin-top: 25px;">
						<el-checkbox style="    margin: 0;" v-model="xieyi"> <span style="font-size: 14px;">我已同意</span>
						</el-checkbox>
						<a @click="xieyibox=true"
							style="cursor: pointer; text-decoration:none; font-size: 14px; color: rgb(51,133,255);">《招财拍平台注册协议》</a>
					</div>


					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>


			</div>

		</div>


	</div>

</template>

<script>
	export default {
		name: "Reg",
		mounted() {

			this.getxieyi();

			//判断是否登录
			// this.judge();

		},
		data() {

			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};


			return {
				areaProp: {
					checkStrictly: false,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						console.log(node)
						const {
							level
						} = node;

						try {
							console.log(node.data.value)
							switch (level) {
								case 1:
									this.register.province_id = node.data.value
									break;
								case 2:
									this.register.city_id = node.data.value
									break;
								case 3:
									this.register.district_id = node.data.value
									break;
							}

							const nodes = await this.getAreasp(node.data.tempValue)
							resolve(nodes)
						} catch (error) {
							const nodes = await this.getAreasp()
							resolve(nodes)
						}

					}.bind(this)
				},

				xieyibox: false,
				xieyitxt: '',

				xieyi: false,

				timeTips: '发送验证码',
				clickCode: false,
				time: 60,

				register: {
					type: 1,
					password: '', //确认密码
					mobile: '', //手机号					
					invite_code: '',
					unionid: '',
					nickname: '',
					headimgurl: '',
					openid: '',
					province_id: '',
					city_id: '',
					district_id: '',

				},

				ruleForm: {
					type: 1,
					Country: '', //地区
					mobile: '', //手机号
					code: '', //验证码\微信code
					invite_code: '', //邀请码
					pass: '', //密码
					checkPass: '', //确认密码
					area: '',
				},

				rules: {
					//手机号
					mobile: [{
							required: true,
							message: '请输手机号',
							trigger: 'change'
						},
						{
							min: 11,
							max: 11,
							message: '11位手机号',
							trigger: 'blur'
						}
					],

					//地区
					Country: [{
						required: false,
						message: '请选择国家/地区',
						trigger: 'change'
					}],

					//验证码
					code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'change'
					}],

					//邀请码
					invite_code: [{
						required: false,
						message: '请输入邀请码',
						trigger: 'change'
					}],

					//密码
					pass: [{
						required: true,
						validator: validatePass,
						trigger: 'blur'
					}],

					//确认密码
					checkPass: [{
						required: true,
						validator: validatePass2,
						trigger: 'blur'
					}],
				}
			}
		},

		methods: {

			/* //判断是否登录
			judge() {
			  var token = localStorage.getItem('token');
			  console.log("token");
			  console.log(token);

			  if (token == null || token == "") {
			    this.$message.error("未登录");
			    this.$router.push('/login')

			  } else {
			    //this.pdlogin = "true";
			    this.$message.success(token);
			    console.log(token);
			  }
			}, */

			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						tempValue: item.id,
						value: item.id,
						label: item.name
					})
				});
				return tempArr
			},

			getxieyi() {
				this.$api.getFuwuxieyi({
					name: 'zhuce'
				}).then(res => {
					this.xieyitxt = res.data
				})

			},

			send() {
				console.log(this.ruleForm.mobile)
				if (this.ruleForm.mobile.length == 11) {
					this.$api.duanxin({
						mobile: this.ruleForm.mobile,
						event: 'register'
					}).then(res => {
						if (res.code == 1) {
							this.$message.success(res.msg);
							//发送请求
							//倒计时60s
							this.timeDown();
						} else {
							this.$message.error(res.msg);
						}
					})

				} else {
					this.$message.error('请输入正确的手机号');
				}


			},

			//发送验证码
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

			//注册按钮
			submitForm(formName) {

				if (this.xieyi) {
					this.$refs[formName].validate((valid) => {
						if (valid) { //全部通过  执行注册
							this.register.mobile = this.ruleForm.mobile;
							this.register.password = this.ruleForm.checkPass;
							this.register.code = this.ruleForm.code;
							this.register.invite_code = this.ruleForm.invite_code;

							this.$api.register(this.register).then(res => {
								if (res.code == 1) {
									this.$message.success(res.msg)
									this.$router.push('/login')
								} else {
									this.$message.error(res.msg)
								}

							})


						} else { //有错误
							console.log('error submit!!');
							return false;
						}
					});
				} else {
					this.$alert("请先同意招财平台使用协议")
				}


			},

			//重置按钮
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-select {
		width: 100%;
	}

	.title {
		text-align: center;
		font-size: 32px;
	}

	.sub-title {
		padding-top: 15px;
		padding-bottom: 30px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: #333;
		text-align: right;
	}

	.sub-title a {
		text-decoration: none;
		color: #3385ff;
	}



	.reg {
		height: 100vh;
		display: flex;
		//margin-top: 30px;
		background-image: url(../assets/images/regbj.jpg);
	}

	.reg_box {
		width: 483px;
		margin: 0 auto;
		padding: 20px;
		/*margin-top: 70px;*/
		align-self: center;
		background-color: #FFFFFF;
	}

	.send-code {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		background-color: transparent;
		color: #3385ff;
		cursor: pointer;
	}
</style>
