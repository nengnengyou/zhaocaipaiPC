<template>
	<div class="query">
		<!-- <QueryList v-on:setqueryData="setQueryShow" v-bind:queryData="queryData" v-bind:queryWeiZhangData='queryWeiZhangData'></QueryList> -->

		<el-dialog title="设置支付密码" :visible.sync="setpassShow" width="400px">
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



		<el-dialog title="输入支付密码" v-if="zfqrk" :visible.sync="zfqrk" :modal="false" width="500px">

			<el-form label-width="200px">

				<el-form-item label="订单号: ">
					<span>{{dingdan.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{dingdan.pay_num}}元</span>
				</el-form-item>
				<el-form-item label="支付密码 ">
					<el-input type="password" v-model="pay.paypassword"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="zfqrk = false">取 消</el-button>
				<el-button type="primary" @click="fukuan">确 定</el-button>
			</span>
		</el-dialog>


		<!-- 填写信息 -->
		<el-dialog :title="this.title" :visible.sync="dialogVisible" :before-close="handleClose" width="30%">
			<span>
				<el-form ref="form" label-width="80px">
					<el-form-item label="车牌号码">
						<el-input v-model="FuwuIndent.carno"></el-input>
					</el-form-item>
					<el-form-item label="发动机号">
						<el-input v-model="FuwuIndent.engineno"></el-input>
					</el-form-item>
					<el-form-item label="车大架号">
						<el-input v-model="FuwuIndent.classno"></el-input>
					</el-form-item>
				</el-form>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="getFuwuIndent('0')" v-if="type == 0">查 询</el-button>
				<el-button type="primary" @click="getFuwuIndent('1')" v-if="type == 1">基础查询</el-button>
				<el-button type="primary" @click="getFuwuIndent('2')" v-if="type == 1">综合查询</el-button>
			</span>
		</el-dialog>

		<el-dialog title="确认查询" v-if="qrcx" :visible.sync="qrcx" :modal="false" width="900px">

			<el-form label-width="200px">

				<el-form-item label="查询订单号: ">
					<span>{{dingdan.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{dingdan.pay_num}}元</span>
				</el-form-item>

				<el-form-item label="车牌号: ">
					<span>{{FuwuIndent.carno}}</span>
				</el-form-item>
				<el-form-item label="发动机号: ">
					<span>{{FuwuIndent.engineno}}</span>
				</el-form-item>
				<el-form-item label="车架号: ">
					<span>{{FuwuIndent.classno}}</span>
				</el-form-item>
				<el-form-item label="查询协议" >
					<span v-html="xieyi.title"></span>
					<div style="overflow: auto; height: 200px;">
						<span v-html="xieyi.content"></span>
					</div>
				</el-form-item>

			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="qrcx = false">取 消</el-button>
				<el-button type="primary" @click="zfqrk=true">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog title="查询结果" v-if="jieguo" :visible.sync="jieguo" :modal="false" width="60%">

			<el-form label-width="">

				<el-form-item label="查询订单号: ">
					<span>{{dingdan.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="查询结果: ">
					<span>{{tableData.msg}}</span>
				</el-form-item>

				<el-form-item v-if="order_type=='0'" label="">
					<el-table ref="multipleTable" highlight-current-row @current-change="handleCurrentChange" :data="tableData.data"
					 border stripe style="width: 100%">
						<el-table-column prop="act" label="违章原因" align="center" width="358px"></el-table-column>
						<el-table-column prop="wzcity" label="违章省份" align="center"></el-table-column>
						<el-table-column prop="area" label="违章地区" align="center"></el-table-column>
						<el-table-column prop="money" label="违章罚款" align="center"></el-table-column>
						<el-table-column prop="fen" label="违章扣分" align="center"></el-table-column>
						<el-table-column prop="weizhang_time" label="违章时间" align="center"></el-table-column>
					</el-table>
				</el-form-item>

				<el-form-item v-if="order_type!='0'" label="">
					<el-table ref="multipleTable" highlight-current-row @current-change="handleCurrentChange" :data="tableData.data.normalRepairRecords"
					 border stripe style="width: 100%">
						<el-table-column prop="content" label="维修记录" align="center" width="260px"></el-table-column>
						<el-table-column prop="materal" label="维修" align="center" width="260px"></el-table-column>
						<el-table-column prop="mileage" label="里程" align="center"></el-table-column>
						<el-table-column prop="type" label="维修类型" align="center"></el-table-column>
						<el-table-column prop="date" label="维修时间" align="center"></el-table-column>
						<!-- <el-table-column prop="weizhang_time" label="违章时间" align="center"></el-table-column> -->
					</el-table>
				</el-form-item>


			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="jieguo = false">取 消</el-button>
				<el-button type="primary" @click="jieguo = false">确 定</el-button>
			</span>
		</el-dialog>


	</div>
</template>

<script>
	export default {
		name: 'query',
		data() {
			return {
				zfqrk: false,
				qrcx: false,
				paypassword: '',
				bzjPayShow: false,
				setpassShow: false,
				out_trade_no: '',
				pay_num: '',
				setpaypassword: '',
				setrepaypassword: '',
				queryData: [],
				queryWeiZhangData: [],

				weibaoType: '',

				dingdan: {},
				jieguo: false,
				tableData: {
					data:{
						normalRepairRecords:[]
					}
				},

				order_type: "0",
				xieyiname:"",

				FuwuIndent: {
					carno: '',
					engineno: '',
					classno: '',
					out_trade_no: "0",
					type: '',
				},

				xieyi: "",

				//维保记录
				weibao: [],

				pay: {
					out_trade_no: "",
					paypassword: ""
				},

			};
		},
		props: ['dialogVisible', 'title', 'plate', 'type', 'engine', 'frame'],

		methods: {


			//三方查询付款
			fukuan() {
				this.$api.balancepay(this.pay).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.getFuwu()
						this.zfqrk = false
					} else {
						this.$message.error(res.msg)
					}
				})
			},



			//创建服务订单
			getFuwuIndent(t) {
				this.xieyiname="weizhang"
				if (t == "1") {
					this.order_type = "1"
					this.xieyiname="weibao"
				} else if (t == "2") {
					this.order_type = "2"
					this.xieyiname="weibao"
				}
				this.dialogVisible=false
				this.$api.getFuwuIndent({
					order_type: this.order_type
				}).then(res => {
					if (res.code == 1) {
						this.dingdan = res.data
						this.FuwuIndent.out_trade_no = res.data.out_trade_no
						this.pay.out_trade_no = res.data.out_trade_no
						this.$api.getFuwuxieyi({name:this.xieyiname}).then(res => {
							this.xieyi = res.data
							this.qrcx = true
						})

					} else {
						this.$message.error(res.msg)
					}
				})

			},


			getFuwu() {
				  const loading = this.$loading({
				          lock: true,
				          text: 'Loading',
				          spinner: 'el-icon-loading',
				          background: 'rgba(0, 0, 0, 0.7)'
				        });
				this.FuwuIndent.type = this.order_type
				this.$api.setFuwuIndent(this.FuwuIndent).then(res => {
					loading.close();
					if (res.code==1) {
						this.tableData = res
					}else{
						this.tableData.msg=res.msg
					}
					
					this.dialogVisible = false
					this.qrcx = false
					this.bzjPayShow = false
					this.jieguo = true
				}).catch(err=>{
					loading.close();
				})


			},


			setQueryShow(event) {
				console.log(event)
				this.queryData.dialogVisible3 = false
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
			handleClose(done) {
				this.$emit('close')
			},

		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.query {
		text-align: left;
	}
</style>
