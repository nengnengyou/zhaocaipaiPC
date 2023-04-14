<template>
	<div class="forget" :style="style">
		<!-- 区域 -->
		<el-card class="box-card">
			<p class="title">忘记密码</p>
			<p class="sub-title">
				<router-link to="/reg">快速注册 ></router-link>
			</p>
			<el-form ref="form" :model="sizeForm" label-width="110px" size="mini">
				<el-form-item label="+86(中国)">
					<el-input v-model="sizeForm.mobile"></el-input>
				</el-form-item>
				<el-form-item label="短信验证码">
					<el-input v-model="sizeForm.captcha"></el-input>
					<a @click="getCode" class="send-code" type="text">{{code.text}}</a>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input type="password" v-model="sizeForm.password"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input type="password" v-model="sizeForm.newpassword"></el-input>
				</el-form-item>

				<div style="text-align:center;margin-left:0;" size="large">
					<el-button class="up-btn" type="primary" @click="onSubmit">修改密码</el-button>
					<p class="user-xieyi">
						<!-- <a style="color:#3385FF">忘记密码？</a> -->
					</p>
				</div>
			</el-form>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'forget',
		data() {
			return {
				style: {
					'height': '0px'
				},
				code: {
					text: '发送验证码',
					status: true
				},
				sizeForm: {
					mobile: '',
					password: '',
					newpassword: '',
					captcha: '',
				}
			}
		},
		created() {
			this.style = {
				'height': `100vh`
			}
		},
		methods: {
			onSubmit() {
				this.$api.forget(this.sizeForm).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.$router.push('/login')
					} else {
						this.$message.error(res.msg)
					}
				})
			},
			getCode() {
				let phoneNum = this.sizeForm.mobile
				let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
				if (!valid_rule.test(phoneNum)) {
					this.$message({
						type: 'error',
						message: '手机号码格式有误'
					})
					return false;
				}
				let params = {
					mobile: phoneNum,
					event:'resetpwd'
				}
				this.$api.duanxin(params).then(res => {
					/* 改变等待状态 */
					let time = 60
					let timer = setInterval(() => {
						this.code = {
							text: `${time}s`,
							status: true
						}
						time -= 1
						if (time <= 0) {
							clearInterval(timer)
							this.code = {
								text: `发送验证码`,
								status: false
							}
						}
					}, 1000);

					this.$message({
						type: 'success',
						message: res.msg
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.box-card {
		p {
			margin: 0;
		}

		text-align: left;
		width: 580px;
		padding: 30px;
		// height: 360px;
		padding-top: 20px;
		margin: 0 auto;

		.title {
			font-size: 32px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			// line-height: 90px;
		}

		.send-code {
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translate(0, -50%);
			background-color: transparent;
			color: @base-color;
			cursor: pointer;
		}

		.sub-title {
			padding-top: 15px;
			padding-bottom: 30px;
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			// line-height: 90px;
			text-align: right;

			a {
				text-decoration: none;
				color: @base-color;
			}
		}
	}

	.creat {
		text-align: center;
		margin: 0 auto;
	}

	/deep/ .el-select .el-input .el-select__caret {
		color: @base-color;
	}

	/deep/ .el-form-item__label {
		font-size: 16px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		border-radius: 4px 0 0 4px;
		line-height: 38px;
	}

	/deep/ .el-input__inner {
		font-size: 16px;
		height: 40px;
		border-radius: 0 4px 4px 0;
	}

	/deep/ .el-input__inner,
	/deep/ .el-form-item__label {
		background-color: #f7f7f7;
		border: 1px solid rgba(230, 230, 230, 1);
		box-sizing: border-box;
	}

	/deep/ .el-select {
		width: 100%;
	}

	.forget {
		//margin-top: 70px;
		// height: 780px;
		// height: 70%;
		padding-top: 190px;
		background: url("../assets/images/logoinbg.jpg") no-repeat;
		background-size: cover;
	}

	.user-xieyi {
		padding-top: 20px;
		font-size: 14px;
	}

	.user-xieyi1 {
		padding-bottom: 20px;
		font-size: 14px;
	}

	.up-btn {
		width: 352px;
	}
</style>
