<template>
	<div class="query">
		<QueryList v-on:setqueryData="setQueryShow" v-bind:queryData="queryData" v-bind:queryWeiZhangData='queryWeiZhangData'></QueryList>

		<el-dialog title="设置支付密码" :visible.sync="setpassShow" width="30%">
			<el-form label-width="80px">
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

		<el-dialog title="输入支付密码" :visible.sync="bzjPayShow" width="30%">
			<el-form label-width="80px">
				<el-form-item label="支付密码">
					<el-input type="password" v-model="paypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bzjPayShow = false">取 消</el-button>
				<el-button type="primary" @click="upVip">确 定</el-button>
			</span>
		</el-dialog>

		<!-- 填写信息 -->
		<el-dialog :title="this.title" :visible.sync="dialogVisible" :before-close="handleClose" width="30%">
			<span>
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="车牌号码">
						<el-input v-model="plate"></el-input>
					</el-form-item>
					<el-form-item label="发动机号">
						<el-input v-model="engine"></el-input>
					</el-form-item>
					<el-form-item label="车大架号">
						<el-input v-model="frame"></el-input>
					</el-form-item>
				</el-form>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="getFuwuIndent('')" v-if="type == 0">查 询</el-button>
				<el-button type="primary" @click="getFuwuIndent('base')" v-if="type == 1">基础查询</el-button>
				<el-button type="primary" @click="getFuwuIndent('zonghe')" v-if="type == 1">综合查询</el-button>
			</span>
		</el-dialog>


	</div>
</template>

<script>
	import QueryList from "./person/QueryList";
	export default {
		name: 'query',
		components: {
			QueryList
		},
		data() {
			return {
				paypassword: '',
				bzjPayShow: false,
				setpassShow: false,
				out_trade_no: '',
				pay_num: '',
				setpaypassword: '',
				setrepaypassword: '',
				queryData: [],
				queryWeiZhangData: [],
				form: {
					name: '',
					region: ''
				},
				weibaoType: '',
				
				dingdan:"",

			};
		},
		props: ['dialogVisible', 'title', 'plate', 'type', 'engine', 'frame'],
		methods: {
			setQueryShow(event) {
				console.log(event)
				this.queryData.dialogVisible3 = false
			},
			/* 余额支付 */
			upVip() {
				let params = {
					paypassword: this.paypassword,
					out_trade_no: this.dingdan.out_trade_no,
					// pay_num: this.pay_num,
					//token_money: ''
				}

				this.$api.balancepay(params).then(async data => {
					// this.$message.success(data.msg)

					/* 查询接口 */
					let query = {
						carno: this.plate,
						engineno: this.engine,
						classno: this.frame,
						out_trade_no: this.dingdan.out_trade_no,
						type: 1
					}
					if (this.type) {
						query.type = 1
					} else {
						query.type = 0
					}
					if (query.type == 0) {
						let res = await this.$api.fuwu(query)
						console.log(res);
						if (res.msg == '查询成功') {
							res.data.forEach((item, index) => {
								if (item.handled == 0) {
									res.data[index].handled = '未处理'
								} else if (item.handled == 1) {
									res.data[index].handled = '已处理'
								} else {
									res.data[index].handled = '未知'
								}
							})

							// this.dialogVisible1 = true
							this.queryData = res.data
							this.queryData.dialogVisible3 = true
						}
					} else {
						this.queryWeiZhangData = [];
						//query.weibao_show_type = 'pc';

						//维保  综合查询
						if (this.weibaoType == 'zonghe') {
							query.type = 2
						}
						let res = await this.$api.fuwu(query)
						console.log(res);
						if (res.code == 1) {
							this.queryWeiZhangData.push(res)
						} else {
							this.$message({
								showClose: true,
								message: res.msg
							});
						}


					}
					this.bzjPayShow = false


				}).catch(err => {
					this.bzjPayShow = false
					if (err.msg == '支付密码未设置!') {
						this.bzjPayShow = false
						this.setpassShow = true
					}
				})
			},
			/* 设置支付密码 */
			setPass() {
				this.$api.setpaypass({
					password: this.setpaypassword,
					repassword: this.setrepaypassword
				}).then(res => {
					this.$message.success('支付密码设置成功')
					this.setpassShow = false
				})
			},

			//获取服务订单
			getFuwuIndent(op) {
				let type ={
					order_type:"0"
				};
				
				if(op=="base"){
					type.order_type='1'
				}else if(op=="zonghe"){
					type.order_type='2'
				}
				this.$api.getFuwuIndent(type).then(res=>{
					if(res.code==1){
						this.dingdan=res.data
						this.select(op)
					}
				})
			},

			select(op) {
				this.dialogVisible = false
				let params = {
					//pay_num: 0.01,
					carno: this.plate,
					engineno: this.engine,
					classno: this.frame,
					out_trade_no: this.dingdan.out_trade_no,
					type: 1
				}
				if (this.type) {
					params.order_type = 1
				} else {
					params.order_type = 0
				}

				//如果点击了综合查询   order_type 为2
				if (op != '') {
					this.weibaoType = op
					if (op == 'zonghe') {
						params.order_type = 2
					}
				}

				this.$api.setFuwuIndent(params).then(res => {
					// this.$message.success(res.msg)

					/* 输入支付密码 */
					this.bzjPayShow = true
					this.pay_num = res.data.pay_num
					this.out_trade_no = res.data.out_trade_no

				})
			},
			handleClose(done) {
				this.$emit('close')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.query {
		text-align: left;
	}
</style>
