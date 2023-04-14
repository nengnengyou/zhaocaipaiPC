<template>
	<div id="outModal">
		<el-dialog title="输入支付密码" v-if="bzjPayShow" :visible.sync="bzjPayShow" :modal="false" width="30%">

			<el-form label-width="200px">

				<el-form-item label="订单号: ">
					<span>{{res.data.order_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{res.data.money}}元</span>
				</el-form-item>
				<el-form-item label="支付密码 ">
					<el-input type="password" v-model="form.paypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bzjPayShow = false">取 消</el-button>
				<el-button type="primary" @click="upVip">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="设置支付密码" :visible.sync="setpassShow" width="30%">
			<el-form label-width="200px">
				<el-form-item label="支付密码">
					<el-input type="password" v-model="setpaypassword"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input type="password" v-model="setrepaypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="setpassShow = false">取 消</el-button>
				<el-button type="primary" @click="setPass">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog :close-on-press-escape="false" :show-close="false" :destroy-on-close="false" :close-on-click-modal="false"
		 title="二维码" align="center" :visible.sync="erCodeShow" :modal="false">
			<qrcode-vue style="padding:100px;" :size="256" :value="link" bgcolor="#fff" fgColor="#000"></qrcode-vue>
		</el-dialog>
		<div style="position: absolute;
    top: 62px;
    right: 25px;
    font-size: 17px;"> <a style="color: #000;" href="index.html#/person/address"
			 target="_blank">添加地址</a></div>
		<!-- 发布需求 -->
		<el-table ref="multipleTable" highlight-current-row @current-change="handleCurrentChange" :data="tableData" border
		 stripe style="width: 100%">
			<el-table-column prop="user_name" label="收货人" align="center" min-width="100"></el-table-column>
			<el-table-column prop="area" label="所在地区" align="center"></el-table-column>
			<el-table-column prop="address" label="详细地址" align="center"></el-table-column>
			<el-table-column prop="mobile" label="电话/手机" align="center"></el-table-column>
		</el-table>

		<div style="height: 50px;"></div>
		<el-table v-if="type != 'myorder'" highlight-current-row :data="tabdingdan" border stripe style="width: 100%">
			<el-table-column min-width="100" label="商品图片" align="center">
				<img style="width: 50px; height: 50px;" :src="dingdan.image" alt="">
			</el-table-column>

			<el-table-column width="600" prop="title" label="商品名称" align="center" min-width="100"></el-table-column>
			<el-table-column prop="spec_str" label="商品规格" align="center"></el-table-column>
			<el-table-column prop="showprice" label="商品单价" align="center"></el-table-column>
			<el-table-column prop="stock" label="数量" align="center"></el-table-column>
		</el-table>

		<el-table v-if="type == 'myorder'" highlight-current-row :data="tabdingdan[0].getOrderDetails" border stripe style="width: 100%">
			<el-table-column min-width="100" label="商品图片" align="center">
				<img style="width: 50px; height: 50px;" :src="dingdan.img" alt="">
			</el-table-column>

			<el-table-column width="600" prop="title" label="商品名称" align="center" min-width="100"></el-table-column>
			<el-table-column prop="spec_str" label="商品规格" align="center"></el-table-column>
			<el-table-column prop="unit_price" label="商品单价" align="center"></el-table-column>
			<el-table-column prop="stock" label="数量" align="center"></el-table-column>
		</el-table>


		<el-form class="payFangshi" style="position: relative;" ref="form" :model="pay" label-width="200px">

			<el-form-item label="订单金额: "><span>{{tabdingdan[0].money}}元</span></el-form-item>
			<el-form-item label="实付金额: "><span>{{tabdingdan[0].money}}元</span></el-form-item>
			<el-form-item width="100%" label="支付方式:">
				<el-select v-model="pay.type" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<!-- <el-form-item width="100%" label="使用代币:">
        <el-switch v-model="useDaibi" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item> -->
			<!-- <el-form-item width="100%" label="留言:">
        <el-input v-model="msg"></el-input>
      </el-form-item> -->
		</el-form>

		<div slot="footer" style="text-align:right" class="dialog-footer">
			<!-- <div style="position: absolute;
		top: 0;
		right: 0;
		z-index: 10;"> <el-button  @click="addAddress" type="primary">添加地址</el-button></div> -->
			<el-button v-if="type == 'buycar'" @click="submitOrderCar" type="primary">确 定</el-button>
			<el-button v-if="type == 'myorder'" @click="submitMyOrder" type="primary">确 定</el-button>
			<el-button v-if="type == undefined" @click="submitOrder" type="primary">提交订单</el-button>
		</div>
	</div>
</template>
<script>
	import qrcodeVue from 'qrcode-vue'
	export default {
		name: "outModal",
		components: {
			qrcodeVue
		},
		data() {
			return {
				tabdingdan: [],
				//dingdan:{id:0,money:0},


				bzjPayShow: false,
				setpassShow: false,
				setpaypassword: '',
				setrepaypassword: '',
				useDaibi: 0,
				msg: '',
				form: {
					level: 0,
					money: 0,
					paypassword: ''
				},
				erCodeShow: false,
				link: '',
				pay: {
					type: 0
				},
				tableData: [],
				options: [{
					value: 0,
					label: '余额'
				}, {
					value: 1,
					label: '微信'
				}, {
					value: 2,
					label: '支付宝'
				}],
				index: '',
				res: {}
			}
		},
		created() {
			this.addressList()
			if(this.type=="1"){
				console.log(1)
				this.getDingdan()
			}else{
				this.tabdingdan = this.dingdan
			}
			console.log(this.goodid, this.spec, this.goodCount , this.orderid)
			console.log(this.dingdan)
			console.log( this.tabdingdan)
		},
		mounted() {
			// this.setCurrentRow()
			this.$emit('type', this.pay.type)
		},
		props: ['dingdan', 'goodid', 'spec', 'goodCount', 'type', 'ids', 'orderid','type'],
		methods: {
			/* 支付 */
			submitMyOrder() {
				let params = {
					id: this.orderid
				}
				console.log(params)
				this.$api.submitMyOrder(params).then(res => {
					console.log(res);
					let temp = {
						id: res.data.id,
						paytype: this.pay.type
					}
					this.payFlow(temp)

					// this.$message.success(res.msg)
					// this.$emit('close')
				})
			},
			setPass() {
				this.$api.setpaypass({
					password: this.setpaypassword,
					repassword: this.setrepaypassword
				}).then(res => {
					this.$message.success('支付密码设置成功')
					this.setpassShow = false
				})
			},

			upVip() {
				console.log(this.res)
				let params = {
					paypassword: this.form.paypassword,
					out_trade_no: this.res.data.order_no,
					pay_num: this.res.data.money,
					token_money: ''
				}
				this.$api.balancepay(params).then(res => {
					if (res.code == 1) {
						this.$message.success(res.data)
						this.bzjPayShow = false
						this.$router.push('/person/order/deliver')
						this.$emit('close')

					} else {
						this.$message.error(res.msg)
					}

				})
			},

			/* 购物车接口 */
			submitOrderCar() {
				let params = {
					id: this.ids,
					usedabi: this.useDaibi,
					addressid: this.index
				}
				this.$api.submitCartOrder(params).then(res => {
					let temp = {
						id: res.data.id,
						paytype: this.pay.type
					}
					this.payFlow(temp)

				})
			},
			/* gobuy */
			submitOrder() {
				/* 倒序,不要问为什么，问后端 */
				//this.spec.reverse()
				let params = {
					goods_id: this.goodid,
					spec_str: this.spec,
					stock: this.goodCount,
					usedabi: this.useDaibi,
					addressid: this.index,
					// msg: this.msg,
				}

				this.$api.submitOrder(params).then(res => {
					// 转到付款页面
					// console.log(res);
					if(res.code==1){
						this.dingdan = res.data;
						if (res.msg == "地址id不能为空") {
							this.$message.error("请选择收货地址")
						} else {
							this.$message.info(res.msg)
						}
						
						let temp = {
							id: res.data.id,
							paytype: this.pay.type,
						}
						this.payFlow(temp)
					}else{
						this.$message.error(res.msg)
					}

					
				})
			},

			//添加地址
			addAddress() {
				window.open("index.html#/person/address")
			},


			payFlow(temp) {
				this.$api.goodPay(temp).then(res => {
					// console.log(res);
					/* 调用支付接口,判断支付为支付宝还是微信 */
					if(res.code==1){
						if (this.pay.type == 1) {
							let timeOut = setInterval(async () => {
								let status = await this.checkyuepass(res.data.out_trade_no)
								if (status.data.status == 1) {
									clearTimeout(timeOut)
									this.erCodeShow = false
									this.$message.success("支付成功")
									this.getUserInfo()
									this.$emit('close')
								}
							}, 3000);
							this.WxpayInfo(res)
						} else if (this.pay.type == 2) {
							/* 对接支付宝的 */
							this.AliPayInfo(res)
						} else if (this.pay.type == 0) {
							/* 余额支付接口 */
							this.res = res
							this.bzjPayShow = true
						}
					}else{
						this.$message.error(res.msg)
					}
					
				})
			},

			/* 获取订单状态 */
			checkyuepass(no) {
				let params = {
					out_trade_no: no
				}
				return this.$api.checkyuepass(params)
			},
			// zhifubao支付
			AliPayInfo(res) {
				let params =
					`http://zcp.zhaocaipaipai.com/api/moneybag/AliPayPc?body=${res.data.describe}&total_amount=${res.data.money}&out_trade_no=${res.data.out_trade_no}&subject=余额充值&return_url=http://zhaocaipaipai.com/person/order/deliver`
				window.open('index.html#/'+params)
			},
			// 微信支付
			WxpayInfo(res) {
				let params = {
					body: res.data.describe,
					out_trade_no: res.data.out_trade_no,
					total_fee: res.data.money,
					device: 'pc'
				}
				this.$api.WxpayInfo(params).then(res => {
					this.qrShow(res.data.mweb_url)
					this.erCodeShow = true
					//this.$emit('close')
				})
			},
			/* 二维码 */
			qrShow(data) {
				this.link = data
			},
			setCurrentRow() {
				/* 默认选中第一个 */
				setTimeout(() => {
					this.$refs.multipleTable.setCurrentRow(this.$refs.multipleTable.data[0]);
				}, 0);
			},
			handleCurrentChange(row, next) {
				this.index = row.id
			},

			//获取地址
			addressList() {
				this.$api.addressList().then(res => {
					this.tableData = res.data
					// this.setCurrentRow()
				})
			},
			//获取订单详情
			getDingdan() {
				this.tabdingdan.length = 0
				for(let i=0;i<this.dingdan.length;i++){
					this.$api.confirm({
						goods_id: this.goodid,
						spec_str: this.spec,
						stock: this.goodCount
					}).then(res => {
						this.tabdingdan.push(res.data)
						console.log(this.tabdingdan)
					})
				}
				
			},

		}
	};
</script>
<style lang="less" scoped>
	@import url("../assets/base.less");

	.payFangshi {
		margin-top: 20px;
	}

	#person-address {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 30px;
	}

	.address-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.save {
		width: 76px;
		height: 30px;
		background: rgba(51, 133, 255, 1);
		border-radius: 15px;

		font-size: 15px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: -10px;
		padding: 0;
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
