<template>
	<!-- <div class="sell" style="height: 1380px;"> -->
	<div class="sell">
		<div class="sell-inner">
			<!-- <areaa :title="anniutext=='修改资料'?'资料修改':'商户入驻'" subtitle="Merchant entry"> -->
			<areaa :title="anniutext=='修改资料'?'资料修改':'商户入驻'" subtitle="Merchant entry">
				<div class="title">商家属性</div>
				<div class="form-center">
					<div class="from-item">
						<span class="fc-title">商家属性</span>
						<el-select style="margin-left: 262px;" v-model="form.attribute" placeholder="供应商属性">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
						<!-- <input class="fc-input" placeholder="输入真实姓名  >" type="text" /> -->
					</div>
				</div>
				<div class="title">申请人信息</div>
				<div class="form-center">
					<div class="from-item">
						<span class="fc-title">真实姓名</span>
						<input class="fc-input" v-model="form.real_name" placeholder="请输入姓名" type="text" />
					</div>
					<div class="from-item">
						<span class="fc-title">身份证号</span>
						<input class="fc-input" v-model="form.idcard" placeholder="请输入身份证号" type="text" />
					</div>
					<div class="from-item">
						<span class="fc-title">手机号</span>
						<input class="fc-input" v-model="form.mobile" placeholder="请输入手机号" type="text" />
					</div>
					<!-- <div class="from-item">
						<span class="fc-title">微信号</span>
						<input class="fc-input" v-model="form.wechat" placeholder="请输入微信号" type="text" />
					</div> -->
				</div>
				<div class="title">基本信息</div>
				<div class="form-center">
					<div class="from-item">
						<span class="fc-title">店铺名称</span>
						<input class="fc-input" v-model="form.shop_name" placeholder="请输入店铺名称" type="text" />
					</div>

					<!-- <div class="from-item">
            <span class="fc-title">主营品类</span>
            <input class="fc-input" v-model="form.car_category" placeholder="请输入主营品类" type="text" />clearable :props="areaProp" 
          </div> -->

					<div class="from-item" style="border-bottom: 1px solid #e5e5e5;">
						<span class="fc-title">所在地区</span>
						<el-cascader style="margin-left: 262px;" v-model="form.area" :props="areaProp" clearable></el-cascader>

					</div>

					<div class="from-item" style="border-bottom: 1px solid #e5e5e5;">
						<span class="fc-title">商铺地址</span>
						<input class="fc-input" v-model="form.address" placeholder="请输入商铺地址" type="text" />
					</div>
				</div>
				<!-- 身份证上传 -->
				<div class="idcard">
					<el-upload name="file" class="img-item" :action="baseURL+'api/common/upload'" :show-file-list="false" :on-success="handleAvatarSuccessA">
						<img v-if="imageUrl[0]" :src="imageUrl[0]" class="avatar" />
						<i class="card-icon fa fa-dot-circle-o"></i>
						<span>上传负责人身份证(正面)</span>
					</el-upload>
					<el-upload name="file" class="img-item" :action="baseURL+'api/common/upload'" :show-file-list="false" :on-success="handleAvatarSuccessB">
						<img v-if="imageUrl[1]" :src="imageUrl[1]" class="avatar" />
						<i class="card-icon fa fa-dot-circle-o"></i>
						<span>上传负责人身份证(反面)</span>
					</el-upload>
					<el-upload name="file" class="img-item" :action="baseURL+'api/common/upload'" :show-file-list="false" :on-success="handleAvatarSuccessC">
						<img v-if="imageUrl[2]" :src="imageUrl[2]" class="avatar" />
						<i class="card-icon fa fa-dot-circle-o"></i>
						<span>上传营业执照(个人申请无需上传)</span>
					</el-upload>
				</div>
				<div class="option">
					<p class="user" v-if="anniutext=='申请入住'?true:false">
						申请入驻即代表同意< <a href="#" class="read">平台入驻协议</a>>
					</p>
					<div style="margin: 76px auto 0 auto;;width: 819px;">
						<!-- <button @click="shopSettled" class="ok">{{anniutext}}</button> -->
						<button @click="sheniqng()" class="ok">{{anniutext}}</button>
					</div>

				</div>
				<div>
					<span class="shenqing">我的申请</span>
					<div class="option-body his-list">
					
						<el-tabs style="    width: 100%;" v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="" name="3">
								<el-table :data="storeInfo" border stripe style="width: 100%">
									<el-table-column prop="createtime" label="申请时间" align="center"></el-table-column>
									<el-table-column prop="check_status" label="状态" align="center">
										<!-- <template slot-scope="scope">{{ $moment(scope.row.open_time * 1000 ).format('YYYY-MM-DD')}}</template> -->
									</el-table-column>
									<el-table-column prop="cause" label="原因" align="center"></el-table-column>
									
									
								</el-table>
							</el-tab-pane>						
						</el-tabs>
					
					
					
					</div>
				</div>
			</areaa>

		</div>
	</div>
</template>

<script>
	import Areaa from '@/components/Area.vue'
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {
		name: 'sell',
		components: {
			Areaa
		},
		created() {
			this.shopIndex2()
			//console.log(SSQdata)
		},
		data() {
			return {
				areaProp: {
					checkStrictly: true,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						const {
							level
						} = node;
						try {
							const nodes = await this.getAreasp(node.data.tempValue)
							resolve(nodes)
						} catch (error) {
							const nodes = await this.getAreasp()
							resolve(nodes)
						}
					}.bind(this)
				},

				baseURL: baseURL,
				imageUrl: [],
				options: [{
					value: 0,
					label: '个人'
				}, {
					value: 1,
					label: '法人'
				}],
				shoptxt: {},
				form: {
					id: '',
					attribute: '',
					real_name: '',
					idcard: '',
					mobile: '',
					wechat: '',
					shop_name: '',
					//car_category: '',
					address: '',
					city: '',
					front_image: '',
					back_image: '',
					business_image: '',
					area: "",
				},

				anniutext: '申请入住',
				
				storeInfo:[],
				activeName:'3',


			}
		},

		methods: {
			handleClick (tab, event) {
			
			  console.log(tab, event);
			},
			
			shopIndex2() {
				this.$api.fapaishenqing().then(res => {
					//console.log(res)
					if(res.code==1){
						if(res.data!=null){
							this.storeInfo.push( res.data)
							this.storeInfo[0].createtime=this.timestampToTime(this.storeInfo[0].createtime)
							this.storeInfo[0].check_status=this.storeInfo[0].check_status==0?'未审核':this.storeInfo[0].check_status==1?'通过':this.storeInfo[0].check_status==2?'拒绝':this.storeInfo[0].check_status			
						}						
					}else{
						 this.$alert(res.msg, '提示', {
						          confirmButtonText: '确定',
						          callback: action => {
						           this.$router.push('/person')
						          }
						        });
						//this.$message.error(res.msg)
					}
					
				})
			},

			//申请发拍
			sheniqng() {
				//console.log(11)
				/* 省 市 区 分开 */
				//this.form.province = this.form.area[0]
				if (this.form.area != null) {
					if (this.form.area.length > 0) {
						this.form.city = this.form.area[0] + '/' + this.form.area[1] + '/' + this.form.area[2]
					}
				}
				//console.log(222)
				this.$api.applyshooting(this.form).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
				})
			},


			/* 查询有无商铺 */
			shopIndex() {
				this.$api.shopInfo().then(res => {
					if (res.data) {
						if (this.$route.query.shoptxt) {
							this.shoptxt = this.$route.query.shoptxt
							console.log(this.shoptxt)
							if (this.shoptxt === '[object Object]') { //[object Object]
								this.$router.push('/person/designdata')
							} else {
								//console.log(this.shoptxt)
								this.form.id = Number(this.shoptxt.id)
								this.anniutext = "修改资料"
								this.form = this.shoptxt
								this.form.city = ''

								//this.form.push({area:[]})
							}

						} else {
							this.$router.push('/person/design')
						}

					}
				})
				//console.log(this.arrAll)
			},
			/* 三级联动 */
			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						tempValue: item.id,
						value: item.name,
						label: item.name
					})
				});
				return tempArr
			},

			handleChange(label) {
				console.log(label);
			},
			/* 照片 */
			//处理res
			setRes(res) {
				let g = res.indexOf('{"code"')
				let z = res.length;
				let x = decodeURI(res.substring(g, z));
				//console.log(x)
				return x;
			},

			handleAvatarSuccessA(res, file) {

				this.$set(this.imageUrl, 0, res.data.url)
				this.form.front_image = res.data.url
			},
			handleAvatarSuccessB(res, file) {

				this.$set(this.imageUrl, 1, res.data.url)
				this.form.back_image = res.data.url
			},
			handleAvatarSuccessC(res, file) {
				this.$set(this.imageUrl, 2, res.data.url)
				this.form.business_image = res.data.url

			},
			shopSettled() {
				/* 省 市 区 分开 */
				//this.form.province = this.form.area[0]
				if (this.form.area != null) {
					if (this.form.area.length > 0) {
						this.form.city = this.form.area[0] + '/' + this.form.area[1] + '/' + this.form.area[2]
					}
				}


				//this.form.area = this.form.area[2]
				//this.$delete(this.form,'area')
				this.$api.shopSettled(this.form).then(res => {
					// console.log(res);
					this.$message.success(res.msg)
					if (res.code == 0) {
						this.form.push({
							area: []
						})

					}
				})
			},
			//时间戳转换
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() < 10 ? '0' + date.getHours() +':' : date.getHours() + ':';
				var m = date.getMinutes() < 10 ? '0' + date.getMinutes() +':' : date.getMinutes() + ':';
				var s = date.getSeconds()  < 10 ? '0' + date.getSeconds() : date.getSeconds();
				return Y + M + D + h + m + s;
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.sell {
		//	padding-top: 84px;
	}

	.sell-inner {
		width: @conent-width;
		margin: 0 auto;
	}


	.from-item:last-of-type {
		border-bottom: none;
	}

	.idcard {
		margin-top: 20px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding: 0 20px;

		.img-item {
			width: 356px;
			height: 214px;
			background: rgba(237, 237, 237, 1);
			border-radius: 10px;
			text-align: center;
			position: relative;

			.avatar {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 1;
				left: 0;
				top: 0;
			}
		}

		span {
			font-size: 16px;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
			// line-height: 90px;
			position: absolute;
			left: 50%;
			bottom: 40px;
			transform: translate(-50%, 0);
		}

		.card-icon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -70%);
			font-size: 64px;
			color: @base-color;
			z-index: 2;
		}
	}

	.title {
		width: @conent-width;
		box-sizing: border-box;
		height: 57px;
		background: rgba(51, 133, 255, 1);
		font-size: 22px;
		color: rgba(255, 255, 255, 1);
		line-height: 55px;
		text-align: left;
		padding-left: 140px;
	}

	.fc-title {
		display: inline-block;
		width: 350px;
		font-size: 19px;
		//font-size: 22px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		//padding-left: 400px;
		padding-left: 138px;
		// line-height: 90px;
	}

	.fc-input {
		width: 130px;
		// height:18px;
		font-size: 18px;
		// line-height:90px;
		padding-left: 262px;
	}

	.form-center {
		padding: 20px 0;
		text-align: left;
	}

	.from-item {
		padding: 10px 0;
		border-bottom: 1px solid #e5e5e5;
	}

	.option {
		padding: 25px;

		.read {
			color: @base-color;
			text-decoration: underline;
		}

		.user {
			font-size: 25px;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			float: left;
			padding-left: 60px;
		}

		.ok {
			cursor: pointer;
			width: 819px;
			height: 76px;
			background: rgba(51, 133, 255, 1);
			border-radius: 10px;
			margin-top: 20px;
			font-size: 26px;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			line-height: 76px;
		}
	}

	.shenqing {

		font-size: 22px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: #333333;
	}
	.option-body {
		/*padding-left: 20px;*/
		text-align: left;
	
		.option-item {
			cursor: pointer;
			display: inline-block;
			text-align: center;
			/*padding-right: 90px;*/
			padding-right: 45px;
			padding-left: 45px;
			border-right: 1px solid #eeeeee;
		}
	
		.option-item:last-child {
			border-right: none;
		}
	
		.icon {
			font-size: 42px;
			display: block;
			padding-bottom: 20px;
		}
	
		.intro {
			font-size: 14px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(89, 89, 89, 1);
			// line-height: 83px;
		}
	}
	
	.his-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding-right: 20px;
		margin-bottom: -20px;
	}
</style>
