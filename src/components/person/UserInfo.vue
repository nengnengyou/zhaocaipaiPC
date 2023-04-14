<template>
	<div class="user-info">

		<el-dialog title="修改昵称" v-if="nicheng" :visible.sync="nicheng" :modal="false" width="30%">

			<el-form >

				<el-form-item label="昵称: ">
					<el-input type="text" v-model="xiugainicheng"></el-input>
				</el-form-item>


			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="nicheng = false">取 消</el-button>
				<el-button type="primary" @click="xigai">确 定</el-button>
			</span>
		</el-dialog>



		<el-card class="box-card">
			<div class="user-left">
				<!-- <img class="avatar" :src="userInfo.avatar" alt /> -->

				<div class="userinfo-img">
					<el-upload name="file" class="avatar" :action="baseURL+'api/common/upload'" :show-file-list="false" :on-success="handleAvatarSuccess">
						<img v-if="!imageUrl" src="../../assets/images/userimg.png" class="avatar1" />
						<img v-if="imageUrl" :src="imageUrl" class="avatar" />
						<!--          <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
						<button v-else class="up-img">上传头像</button>
					</el-upload>

				</div>

				<div class="userinfo">
					<span class="title">{{nickname==""?userInfo.mobile:nickname}} <span @click="nicheng=true" style="font-size: 12px;
    color: #808080;cursor: pointer;">
							{{"<修改昵称>"}}
						</span></span>
						<span style="margin-top: 8px;" class="huiyuan-time">
							{{userInfo.province_name+'/'+userInfo.city_name+'/'+userInfo.district_name}}
						</span>
					<span class="check">
						<i style="color:#2BCBA7;margin-right:10px;" class="iconfont icon-duihao"></i>已通过手机验证
					</span>
					<span class="huiyuan-time">尊享服务：
						<span v-if="userInfo.level > 1"> {{getVipTime(userInfo.end_time)}}  {{userInfo.level_text}}</span><!-- {{getVipTime(actionTime)}} -->
						<span v-else>
							未开通尊享服务
						</span>

					</span>
				</div>
			</div>
			<div class="user-right">
				<div class="mon-item">
					<div class="price user1">{{userInfo.balance}}</div>
					<span class="intro">账户余额</span>
					<router-link to="/person/wallet/balance" tag="button" class="enter">查看</router-link>
				</div>
				<div class="mon-item">
					<div class="price user2">{{userInfo.amount}}</div>
					<span class="intro">招财币</span>
					<router-link to="/person/wallet/zhaocai" tag="button" class="enter">查看</router-link>
				</div>
				<div class="mon-item">
					<div class="price user3">{{userInfo.sum_bond}}</div>
					<span class="intro">保证金</span>
					<router-link to="/person/wallet/pledge" tag="button" class="enter">查看</router-link>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {
		name: 'user-info',
		data() {
			return {
				nickname:"",
				nicheng: false,
				xiugainicheng: "",
				userInfo: {
					mobile:''
				},
				baseURL: baseURL,
				imageUrl: '',
				actionTime: null,
				endTime: null
			}
		},
		methods: {


			//修改昵称
			xigai() {
				// if (this.xiugainicheng == "") {
				// 	this.$message.error("昵称不能为空")
				// } else {
					this.$api.editAvatar({	
						username:this.userInfo.username,
						avatar:this.imageUrl,
						nickname: this.xiugainicheng,
						bio:'',
						province_id: this.userInfo.province_id,
						city_id: this.userInfo.city_id,
						district_id:this.userInfo.district_id,
					}).then(res => {
						this.nicheng=false
						this.$message.success(res.msg)
						this.getUserInfo()
						this.getnickname()
					})
				// }

			},


			handleAvatarSuccess(res, file) {
				this.imageUrl = res.data
				console.log(this.imageUrl)
				/* 修改用户头像 */
				console.log(this.xiugainicheng)
				this.$api.editAvatar({
					username:this.userInfo.username,
					avatar: this.imageUrl.url,
					nickname: this.xiugainicheng,
					bio:''
				}).then(res => {
					this.$message.success(res.msg)
					this.getUserInfo()	
					this.getnickname()
				})
			},
			getUserInfo() {
				//console.log(this.$store.getters.getToken)
				this.$api.getUserInfo().then(res => {
					this.userInfo = res.data
					this.imageUrl = res.data.avatar
					this.username=res.data.username
					this.actionTime = this.userInfo.action_time
					this.endTime = this.userInfo.end_time					
					//console.log(this.userInfo);
					this.getnickname()

				})
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
			
			getnickname(){
				this.$api.userzx().then(res=>{
					//console.log(res)
					this.nickname=res.data.welcome
					this.xiugainicheng=res.data.welcome
					if(res.data.welcome==''||res.data.welcome==null){
						this.xiugainicheng='尾号'+ this.userInfo.mobile.substring(7, this.userInfo.mobile.length)
						//console.log(this.xiugainicheng)
						//this.xigai()
					}
					if(this.userInfo.province_name==''||this.userInfo.city_name==''||this.userInfo.district_name==''||this.userInfo.main_module==''||this.userInfo.nickname==''){
						this.$router.push('/person/wallet/xiugaidiqu')
						this.$message.info('请填写个人资料')
					}
				})
			},
			
		},
		created() {
			this.getUserInfo()
			// this.getnickname()
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	.user-info {
		width: 100%;
		background: rgba(255, 255, 255, 1);
		height: 200px;
	}

	.user-left {
		// width: 200px;
		float: left;
		height: 180px;
		position: relative;

		.userinfo-img {
			width: 200px;
		}

		.userinfo {
			margin-top: 38px;
			width: 100%;

		}

		.avatar {
			padding-top: 20px;
			width: 106px;
			height: 106px;
			// border-radius: 50%;
			vertical-align: top;
			float: left;
			padding-right: 27px;
			position: relative;
		}

		.title {
			font-size: 20px;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			/*padding-bottom: 36px;*/
			display: block;
			width: 450px;
			// line-height: 97px;
		}

		.check {
			/*padding-bottom: 10px;*/
			margin-top: 8px;
			margin-bottom: 8px;
		}

		.check,
		.huiyuan-time {
			display: block;
			width: 450px;
			font-size: 16px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(128, 128, 128, 1);
			// line-height:75px;
		}

		.up-img {
			width: 120px;
			height: 40px;
			background-color: #15a0f1;
			border-radius: 3px;
			cursor: pointer;
			position: absolute;
			bottom: -48px;
			left: -6px;
			color: white;
		}
	}

	.user-right {
		height: 180px;
		display: inline-block;

		.mon-item {
			margin-top: 38px;
			/*padding-top: 10px;*/
			/*padding-right: 40px;*/
			width: 156px;
			box-sizing: border-box;
			display: inline-block;
			text-align: center;
			border-left: 1px solid #eeeeee;

			.user1 {
				background-image: -webkit-linear-gradient(#57caf8, #579def);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.user2 {
				background-image: -webkit-linear-gradient(#f98087, rgb(240, 62, 122));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.user3 {
				background-image: -webkit-linear-gradient(#b790ff, #1c35ad);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}

		.price {
			font-size: 26px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			/*padding-bottom: 20px;*/
		}

		.intro {
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgb(0, 0, 0);
			display: block;
			/*padding-bottom: 7px;*/
			margin: 15px 0;
		}

		.enter {
			/*width: 80px;*/
			/*height: 25px;*/
			border: 1px solid rgba(230, 230, 230, 1);
			/*border-radius: 13px;*/
			cursor: pointer;
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: #15a0f1;
			line-height: 0px;
			background-color: #fff;
			width: 90px;
			height: 30px;
			border-radius: 15px;
			border: solid 1px #15a0f1;
		}
	}

	.box-card {
		text-align: left;
		/*height: 133px;*/
		height: 100%;
		box-sizing: border-box;
	}

	/deep/ .el-card__header,
	/deep/ .el-card__body {
		padding: 12px 30px;
	}
</style>
