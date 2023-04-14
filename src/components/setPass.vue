<template>
	<div>

		<el-dialog title="设置支付密码" :visible.sync="dissetPasss" :close-on-click-modal="false" :close-on-press-escape="false" width="400px">
			<el-form label-width="80px">
				<el-form-item label="支付密码">
					<el-input type="password" v-model="form.password"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input type="password" v-model="form.repassword"></el-input>
				</el-form-item>

				<el-form-item label="验证码">
					<!-- <el-input type="text" v-model="bangding.code"></el-input> -->
					<div class="yzm">
						<el-input type="text" v-model="form.code"></el-input>
						<!-- <input type="text" placeholder="请输入验证码" v-model="bangding.code" v-on:keyup.enter="kslogin" /> -->
					</div>
					<div class="bd_send-btn">
						<span v-if="clickCode" class="send-btn-link">{{timeTips}}</span>
						<span @click="getyzm()" v-if="!clickCode" class="send-btn-link" style='cursor: pointer;'>{{timeTips}}</span>
						<!-- <a @click="getyzm('bd')" href="javascript:void(0);" class="bd_send-btn-link">{{timeTips}}</a> -->

					</div>

				</el-form-item>


			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dissetPasss = false">取 消</el-button>
				<el-button type="primary" @click="setPass">确 定</el-button>
			</span>
		</el-dialog>


	</div>
</template>

<script>
	export default {
		name: 'setPass',

		props: ['dissetPasss'],
		
		close() {
			
		},

		data() {
			return {
				timeTips: '发送验证码',
				clickCode: false,
				time: 60,
			
				//setpassShow: false,
				form: {
					mobile: '',
					password: '',
					repassword: '',
					code: '',
				},

				user: '',

			}
		},

		created() {
			this.index()
			this.setpassShow = true;
		},

		methods: {
			setPass() {
				this.$api.setpaypass(this.form).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			index() {
				this.$api.getUserInfo().then(res => {
					this.user = res
					this.form.mobile = res.data.mobile
				})
			},

			//获取验证码
			getyzm() {
				var user = this.form.mobile;
				console.log(user);
				if (user == null) {
					this.$message.error("请输入正确的手机号");
					return;
				}
				if (user.length == 11) {
					this.$api.duanxin({
						mobile: this.form.mobile,
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
	}
</script>

<style  lang="less" scoped>
	
	.bd_send-btn {
		//width: 101px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
