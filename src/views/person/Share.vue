<template>
	<div id="person-share">
		<p class="person-big-title">我的分享</p>

		<p class="person-small-title">推广有收益</p>
		<!-- 二维码 -->
		<div class="share-content clearfloat">
			<div class="left">
				<img class="qrcode" :src="info.invite_qr" alt />
			</div>
			<div class="right">
				<p class="title">我的邀请码:{{info.invite_num}}</p>
				<p class="subtitle">
					<!--          非会员仅可获取收益￥2000，开通-->
					<!--          推广会员即可获取更多推广收益-->
				</p>
			</div>
		</div>

		<el-divider></el-divider>
		<div class="banner">
			<div class="left">
				<p class="title">钱包余额/元</p>
				<p class="num">{{userInfo.money}}</p>
				<span class="shu"></span>
			</div>
			
			<!-- <div class="right">
				<p class="title">招财币可提现金额/元</p>
				<p class="num">{{userInfo.no_extract_num}}</p>
			</div> -->
			
			<!-- <el-button class="tixian" type="text" style="color:#fff;" @click="onSubmit">提现</el-button> -->
		</div>
		<div class="intro">
			<div class="int-title">推广规则：</div>
			<div class="int-content">
				<p v-html="xieyis.content" class="int-content-text"></p>
			</div>
		</div>
		<div class="intro">
			<div class="int-title">推广战绩：</div>
			<div class="int-content">
				<span v-if="!sun_arr">暂无推广信息</span>
				<ul>
					<li v-for="(item,index) in info.sun_arr " :key="index">推广手机号：{{item.son_mobile}} &nbsp;&nbsp;&nbsp;&nbsp;获得的代币：{{item.son_daibi}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				sun_arr:true,
				type: 'balance',
				xieyis: [],
				info: {},
				userInfo: {}
			}
		},
		methods: {
			/* 获取协议信息 */
			getXieyi() {
				this.$api.getFuwuxieyi({name:'tuiguang'}).then(res => {
					this.xieyis = res.data
				})
			},
			Recommend() {
				this.$api.Recommend().then(res => {
					this.info = res.data
					
				})
				
			},
			getUserInfo() {
				this.$api.getUserInfo().then(res => {
					this.userInfo = res.data
				})
			}
		},
		created() {
			this.getXieyi()
			this.type = this.$route.params.type
			this.Recommend()
			this.getUserInfo()
		},

		beforeRouteUpdate(to, from, next) {
			this.type = to.params.type
			next()
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	.qrcode {
		width: 150px;
		height: 150px;
	}

	#person-share {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 35px;
	}

	.share-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.banner {
		height: 133px;
		background: rgba(51, 133, 255, 1);
		margin-bottom: 20px;
		position: relative;
		padding: 22px 22px;
	}

	.left {
		position: relative;
		float: left;
		width: 285px;
		height: 100%;
	}

	.share-content {
		.right {
			float: left;
			margin-left: 42px;

			.title {
				padding-top: 25px;
				font-size: 16px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
			}

			.subtitle {
				width: 215px;
				font-size: 14px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: #808080;
				line-height: 28px;
			}
		}
	}

	.right {
		float: left;
		margin-left: 42px;
	}

	.num {
		font-size: 46px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		// line-height: 293px;
	}

	.title {
		padding-bottom: 30px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(247, 247, 247, 1);
		// line-height:90px;
	}

	.shu {
		width: 2px;
		height: 90px;
		background-color: rgba(230, 230, 230, 1);
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
	}

	.tixian {
		position: absolute;
		bottom: 20px;
		right: 20px;
	}

	.intro {
		.dot {
			display: inline-block;
			vertical-align: middle;
			width: 8px;
			height: 8px;
			background-color: #000;
			border-radius: 50%;
		}

		.int-title {
			font-size: 18px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			// line-height:90px;
		}

		.int-content-text {
			font-size: 16px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
			line-height: 28px;
			padding-top: 15px;
			padding-bottom: 57px;
		}
	}

	/deep/.el-button+.el-button {
		margin: 0;
	}

	/deep/ .el-form-item__label,
	/deep/ .el-checkbox__label {
		font-size: 16px;
	}

	/deep/ .el-table thead {
		background: rgba(247, 247, 247, 1) !important;
		font-size: 15px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		// line-height:43px;
	}

	/deep/ .el-table th,
	.el-table tr {
		background: rgba(247, 247, 247, 1) !important;
	}

	/deep/.el-table {
		color: #333 !important;
	}
</style>
