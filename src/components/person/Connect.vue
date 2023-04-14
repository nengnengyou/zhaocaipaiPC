<template>
	<div class="connect">

		<el-dialog width="30%" title="提示" :visible.sync="genghuan">
			<el-form :model="form">
				<el-form-item label="申请原因">
					<el-input v-model="form.info" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="">
					<el-button style="float: right;" type="primary" @click="tijiao">确 定</el-button>
					<el-button style="float: right;" @click="genghuan = false">取 消</el-button>
				</el-form-item>

			</el-form>
		</el-dialog>

		<el-card class="box-card">
			<div slot="header" class="header2 clearfloat">
				<el-avatar size="small" :src="userInfo.kefu_avatar"></el-avatar>
				<span class="title">{{userInfo.kefu_nickname}}</span>
			</div>
			<div class="connect-conent">
				<p class="item">
					<i class="fa icon fa-phone"></i>
					{{userInfo.kefu_mobile}}
				</p>
				<p class="item">
					<i class="fa icon fa-wechat"></i>
					{{userInfo.kefu_wx}}
				</p>
				<!-- <textarea style="border-radius: 3px;" placeholder="我是您的专属秘书，您可以给我留言或打电话" v-model="message" id cols="30" rows="10"></textarea> -->
				<button @click="genghuan=true" class="up">申请更换客服</button>
			</div>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'connect',
		created() {
			this.getUserInfo()
		},
		methods: {
			tijiao() {
				this.$api.changeKefu({
					info: this.form.info
				}).then(res => {
					if (res.code == 1) {
						this.genghuan = false
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			getUserInfo() {
				this.$api.getUserInfo().then(res => {
					this.userInfo = res.data
				})
			},
			setMessage() {
				let params = {
					message: this.message
				}
				this.$api.setMessage(params).then(res => {
					this.$message.success(res.msg)
					this.message = ''
				})
			}
		},
		data() {
			return {
				userInfo: {},
				message: '',
				genghuan: false,
				form: {
					info: '',
				},

			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	/deep/.el-avatar img {
		width: 50px;
		vertical-align: middle;
		margin-right: 20px;
	}

	.box-card {
		text-align: left;
	}

	.title {
		font-size: 18px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		// line-height:69px;
	}

	.item {
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgb(0, 0, 0);
		line-height: 25px;
	}

	textarea {
		margin-top: 10px;
		width: 165px;
		height: 128px;
		background: rgba(247, 247, 247, 1);
		border-radius: 10px;
		resize: none;
	}

	.up {
		margin-top: 10px;
		width: 106px;
		height: 25px;
		border: 1px solid rgba(230, 230, 230, 1);
		border-radius: 13px;
		position: relative;
		left: 50%;
		transform: translate(-50%);
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		// line-height:69px;
		cursor: pointer;
	}

	.icon {
		padding-right: 10px;
	}

	/deep/ .el-card__header,
	/deep/ .el-card__body {
		padding: 20px 16px;
		border-bottom: none;
	}

	/deep/ .el-card__body {
		padding-top: 0px;
	}

	.youaa {
		padding-right: 15px;
	}
</style>
