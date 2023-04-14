<template>
	<div>
		<!-- <Query :title="info.title" :plate="info.plate" :type="info.type" :engine="info.engine" :frame="info.frame" @close="dialogVisible2 = false"
		 v-if="dialogVisible2" :dialogVisible="dialogVisible2" />
		<Wuliu v-if="dialogVisible1" @close="dialogVisible1 = false" :dialogVisiblee="dialogVisible1"></Wuliu>
		 -->


		<el-dialog :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" title="输入支付密码" v-if="zfqrk"
		 :visible.sync="zfqrk" :modal="false" width="500px">

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

		<el-dialog :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" title="确认查询" v-if="qrcx"
		 :visible.sync="qrcx" :modal="false" width="900px">

			<el-form label-width="200px">

				<el-form-item label="查询订单号: ">
					<span>{{dingdan.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{dingdan.pay_num}}元</span>
				</el-form-item>

				<el-form-item v-if="type==0" label="车牌号: ">
					<span>{{FuwuIndent.carno}}</span>
				</el-form-item>
				<el-form-item v-if="type==0" label="发动机号: ">
					<span>{{FuwuIndent.engineno}}</span>
				</el-form-item>
				<el-form-item label="车架号: ">
					<span>{{FuwuIndent.classno}}</span>
				</el-form-item>
				<el-form-item label="查询协议">
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

		<el-dialog :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" title="查询结果" v-if="jieguo"
		 :visible.sync="jieguo" :modal="false" width="60%">

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
						<el-table-column prop="id" label="违章罚款" align="center"></el-table-column>
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

		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" :title="this.title"
		 :modal="false" :visible.sync="dialogVisibleWZ" :before-close="handleClose" width="30%" style="margin-top: 10px;">
			<span>
				<el-form ref="form" label-width="80px">
					<el-form-item v-if="type == 0" label="车牌号码">
						<el-input v-model="FuwuIndent.carno"></el-input>
					</el-form-item>
					<el-form-item v-if="type == 0" label="发动机号">
						<el-input v-model="FuwuIndent.engineno"></el-input>
					</el-form-item>
					<el-form-item label="车大架号">
						<el-input v-model="FuwuIndent.classno"></el-input>
					</el-form-item>
				</el-form>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisibleWZ = false">取 消</el-button>
				<el-button type="primary" @click="getFuwuIndent('0')" v-if="type == 0">查 询</el-button>
				<!-- <el-button type="primary" @click="get()" v-if="type == 1">查 询2</el-button> -->
				<el-button type="primary" @click="getFuwuIndent('1')" v-if="type == 1">基础查询</el-button>
				<el-button type="primary" @click="getFuwuIndent('2')" v-if="type == 1">综合查询</el-button>
			</span>
		</el-dialog>


		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" title="物流服务"
		 :modal="false" :visible.sync="dialogVisibleeWL" :before-close="handleClose" width="50%">
			<el-form ref="form" :model="form" label-width="100px">
				<el-form-item label="装货地">
					<el-cascader v-model="form.wuliu_start" :props="areaProp" clearable></el-cascader>
				</el-form-item>
				<el-form-item label="详细地址">
					<el-input v-model="form.wuliu_startaddr"></el-input>
				</el-form-item>
				<el-form-item label="卸货地">
					<el-cascader v-model="form.wuliu_end" :props="areaPropA" clearable></el-cascader>
				</el-form-item>
				<el-form-item label="详细地址">
					<el-input v-model="form.wuliu_endaddr"></el-input>
				</el-form-item>
				<el-form-item label="需要的车长">
					<el-input v-model="form.wuliu_cartype"></el-input>
				</el-form-item>

				<el-form :inline="true">
					<el-form-item style="width:46%;margin-left: 30px; " label="货物重量">
						<el-input v-model="form.wuliu_zhongliang" placeholder="货物重量"></el-input>
					</el-form-item>
					<el-form-item style="width:46%;margin-right: 0px;" label="货物体积">
						<el-input v-model="form.wuliu_tiji" placeholder="货物体积"></el-input>
					</el-form-item>
				</el-form>
				<el-divider></el-divider>
				<!-- 货物 -->
				<el-form :inline="true">
					<el-form-item style="width:41%;margin-left: 60px; " label="货名">
						<el-input v-model="form.wuliu_goodsname"></el-input>
					</el-form-item>
					<el-form-item  style="width:46%;margin-right: 0px;" label="保险">
						<el-input v-model="form.wuliu_baoxian"></el-input>
					</el-form-item>
				</el-form>	
				
				
				<el-form :inline="true">
					<el-form-item style="width:46%;margin-left: 30px; " label="支付方式">
						<el-input v-model="form.wuliu_paytype"></el-input>
					</el-form-item>
					<el-form-item style="width:46%;margin-right: 0px;" label="货物运费">
						<el-input v-model="form.wuliu_yunfei"></el-input>
					</el-form-item>
				</el-form>	
					
					<el-form :inline="true">
						<el-form-item  style="width:46%;margin-left: 30px; "  label="装货时间">
							<el-date-picker value-format="yyyy-MM-dd" v-model="form.wuliu_zhuanghuotime" type="date" placeholder="选择日期"></el-date-picker>
						</el-form-item>
						<el-form-item style="width:46%;margin-right: 0px;" label="装卸方式">
							<el-input v-model="form.wuliu_zhuangxietype"></el-input>
						</el-form-item>
					</el-form>						
				
				
				<el-form-item label="备注">
					<el-input v-model="form.wuliu_other"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisibleeWL = false">取 消</el-button>
				<el-button type="primary" @click="select">保 存</el-button>
			</span>
		</el-dialog>


		<div class="card">
			<div class="card-item1 card-item" @click="weizhang">
				<span class="card-title">违章查询</span>
				<a class="card-enter">点击进入 ></a>
				<!--        <img class="bg-img" src="../assets/images/weizhang.png" alt />-->
				<div class="card-item-logo"></div>
			</div>
			<a class="card-item2 card-item" href="https://m.che300.com/partner/zcp" target="_blank">
				<span class="card-title">快速估价</span>
				<a class="card-enter">点击进入 ></a>
				<!--        <img class="bg-img" src="../assets/images/iconfontzhizuobiaozhun09.png" alt />-->
				<div class="card-item-logo"></div>
			</a>
			<div class="card-item3 card-item" @click="weibao2">
				<span class="card-title">查看维保</span>
				<span class="card-enter">点击进入 ></span>
				<!--        <img class="bg-img" src="../assets/images/qichebaoyangweixiushenqing.png" alt />-->
				<div class="card-item-logo"></div>
			</div>
			<div class="card-item4 card-item" @click="dialogVisibleeWL = true">
				<span class="card-title">物流服务</span>
				<a class="card-enter">点击进入 ></a>
				<!--        <img class="bg-img" src="../assets/images/wuliu.png" alt />-->
				<div class="card-item-logo"></div>
			</div>
		</div>
	</div>
</template>

<script>
	// import Query from "@/components/Query.2.vue";
	// import Wuliu from "@/components/Wuliu.1.vue";
	export default {
		name: 'card',
		// components: {
		// 	Query,
		// 	Wuliu
		// },
		data() {
			return {
				info: {
					title: '',
					type: 0,
				},
				dialogVisibleWZ: true,
				dialogVisibleeWL:false,
				//dialogVisible1: false,

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
					data: {
						normalRepairRecords: []
					}
				},

				type: 0,

				order_type: "0",
				xieyiname: "",

				FuwuIndent: {
					carno: '',
					engineno: '',
					classno: '',
					out_trade_no: "",
					type: '',
				},

				xieyi: "",

				//维保记录
				weibao: [],

				pay: {
					out_trade_no: "",
					paypassword: ""
				},

				title: "违章查询",

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
							const nodes = await this.getAreasp(1)
							resolve(nodes)
						}
					}.bind(this)
				},
				areaPropA: {
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
				form: {
					wuliu_start: '',
					wuliu_startaddr: '',
					wuliu_end: '',
					wuliu_endaddr: '',
					wuliu_cartype: '',
					wuliu_zhongliang: '',
					wuliu_tiji: '',
					wuliu_goodsname: '',
					wuliu_baoxian: '',
					wuliu_zhuanghuotime: '',
					wuliu_paytype: '',
					wuliu_zhuangxietype: '',
					wuliu_yunfei: '',
					wuliu_other: '',
					wuliu_status: '',
				},

			}
		},
		methods: {
			/* 违章 */
			weizhang() {
				this.info = {
					title: '查看违章',
					type: 0,
				}
				this.title = '违章查询'
				this.type = 0,
				this.dialogVisibleWZ = true
			},
			/* 查看维保 */
			weibao2() {
				this.info = {
					title: '查看维保',
					type: 1,
				}
				this.type = 1,
				this.title = '维保查询'
				this.dialogVisibleWZ = true
			},
			getQueryResult(res) {
				console.log("13" + res);
			},

			handleClose(done) {
				this.$emit('close')
			},
			
			//查询
			get(){
				this.$api.getweibao({
					vin:"WP1AB29P99LA42865",
					type:'1'
				}).then(res=>{
					console.log(res)
				})
			},

			//创建服务订单
			getFuwuIndent(t) {
				this.xieyiname = "weizhang"
				this.order_type = "0"
				if (t == "1") {
					this.order_type = "1"
					this.xieyiname = "weibao"
					this.FuwuIndent.carno='0'
					this.FuwuIndent.engineno='0'
					//engineno: '0',
				} else if (t == "2") {
					this.order_type = "2"
					this.xieyiname = "weibao"
					this.FuwuIndent.carno='0'
					this.FuwuIndent.engineno='0'
				}
				this.dialogVisibleWZ = false
				this.$api.getFuwuIndent({
					order_type: this.order_type
				}).then(res => {
					if (res.code == 1) {
						this.dingdan = res.data
						this.FuwuIndent.out_trade_no = res.data.out_trade_no
						this.pay.out_trade_no = res.data.out_trade_no
						this.$api.getFuwuxieyi({
							name: this.xieyiname
						}).then(res => {
							this.xieyi = res.data
							this.qrcx = true
						})

					} else {
						this.$message.error(res.msg)
					}
				})

			},

			//三方查询付款
			fukuan() {
				this.$api.balancepay(this.pay).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.getFuwu()
						console.log(res)
						// window.open('#/weibao?vin=');
						this.zfqrk = false
					} else {
						this.$message.error(res.msg)
					}
				})
			},
			
			//付款成功后跳转
			tiaozhuan(){
				
			},
			
			getFuwu() {
				const loading = this.$loading({
					lock: true,
					text: '查询中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.FuwuIndent.type = this.order_type
				this.$api.setFuwuIndent(this.FuwuIndent).then(res => {
					
					if (res.code == 1) {
						// this.tableData = res
						setTimeout(()=>{
							loading.close();
							window.open("#/weibao?vin="+this.FuwuIndent.classno)
							this.dialogVisible = false
							this.qrcx = false
							this.bzjPayShow = false
							//this.jieguo = true
						},20000)
					} else {
						loading.close();
						this.$message.error(res.msg)
						this.dialogVisible = false
						this.qrcx = false
						this.bzjPayShow = false
						//this.jieguo = true
						// this.tableData.msg = res.msg
					}
					
					

					
				}).catch(err => {
					loading.close();
				})
			},


			// handleClose() {
			// 	this.$emit('close')
			// },
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
			select() {
				/* 省 市 区 分开 */
				this.form.wuliu_start_p = this.form.wuliu_start[0]
				this.form.wuliu_start_c = this.form.wuliu_start[1]
				this.form.wuliu_start_a = this.form.wuliu_start[2]

				this.form.wuliu_end_p = this.form.wuliu_end[0]
				this.form.wuliu_end_c = this.form.wuliu_end[1]
				this.form.wuliu_end_a = this.form.wuliu_end[2]

				delete this.form.wuliu_start
				delete this.form.wuliu_end

				this.$api.save(this.form).then(res => {
					this.$message(res.msg)
					this.$emit('close')
				})
			}


		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/base.less");

	.card {
		display: flex;
		flex-wrap: wrap;
		//justify-content: space-between;
	}

	.bg-img {
		position: absolute;
		left: 30px;
		bottom: 5px;
	}

	.card-title {
		/*width: 138px;*/
		/*height: 34px;*/
		/*font-size: 34px;*/
		font-family: MicrosoftYaHei;
		/*font-weight: 400;*/
		position: absolute;
		left: 50%;
		bottom: 60px;
		height: 18px;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0px;
		color: #000000;
		transform: translateX(-50%);

	}

	.card-enter {
		/*width: 95px;*/
		height: 20px;
		font-size: 14px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: #000000 !important;
		/*line-height: 90px;*/
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		text-decoration: none;
	}

	.card-item {
		margin-bottom: 20px;
		position: relative;
		width: 207px;
		height: 202px;
		/*background-color: #ffffff;*/
		border: solid 1px #dcdcdc;
		background: #ffffff url("../assets/images/sebbg.png") no-repeat 50% -129px;
		overflow: hidden;
		box-sizing: border-box;
		cursor: pointer;
		margin-left: 11px;
	}

	.card-item-logo {
		width: 83px;
		height: 83px;
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);

	}

	.card-item:hover {
		background-image: none;
		box-shadow: 0px 0px 14px 2px rgba(69, 67, 65, 0.2);
		border: 1px solid #fd8129;
		border-top: 10px solid #fd8129;

	}

	.card-item1 {
		.card-item-logo {
			background: url("../assets/images/weizhang.c0a130bd.png");
		}
	}

	.card-item1:hover {
		.card-item-logo {
			background: url("../assets/images/weizhangye.png");
			background-size: cover;
		}
	}

	.card-item2 {
		.card-item-logo {
			background-size: 100%;
			background: url("../assets/images/iconfontzhizuobiaozhun09.png") no-repeat center;
		}
	}

	.card-item2:hover {
		.card-item-logo {
			background: url("../assets/images/iconfontzhizuobiaozhun09.e80789fd.png") no-repeat center;

		}
	}

	.card-item3 {
		.card-item-logo {
			background-size: cover;
			background: url("../assets/images/qichebaoyangweixiushenqing.da3f4286.png") no-repeat center;
		}
	}

	.card-item3:hover {
		.card-item-logo {
			background: url("../assets/images/qichebaoyangweixiushenqing.da3f42861111.png") no-repeat center;

		}
	}

	.card-item4 {
		.card-item-logo {
			background-size: cover;
			background: url("../assets/images/wuliu.9dd82298.png") no-repeat;
		}
	}

	.card-item4:hover {
		.card-item-logo {
			background: url("../assets/images/wuliu.9dd82298555.png") no-repeat center;

		}
	}


	/*.card-item1 {*/
	/*  display: inline-block;*/
	/*  width: 570px;*/
	/*  height: 260px;*/
	/*  background: linear-gradient(*/
	/*    45deg,*/
	/*    rgba(251, 112, 97, 1),*/
	/*    rgba(252, 141, 73, 1)*/
	/*  );*/
	/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
	/*  border-radius: 20px;*/
	/*}*/
	/*.card-item2 {*/
	/*  display: inline-block;*/
	/*  width: 570px;*/
	/*  height: 260px;*/
	/*  background: linear-gradient(*/
	/*    45deg,*/
	/*    rgba(250, 152, 52, 1),*/
	/*    rgba(253, 191, 48, 1)*/
	/*  );*/
	/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
	/*  border-radius: 20px;*/
	/*}*/
	/*.card-item3 {*/
	/*  display: inline-block;*/
	/*  width: 570px;*/
	/*  height: 260px;*/
	/*  background: linear-gradient(*/
	/*    45deg,*/
	/*    rgba(69, 202, 255, 1),*/
	/*    rgba(105, 210, 254, 1)*/
	/*  );*/
	/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
	/*  border-radius: 20px;*/
	/*}*/
	/*.card-item4 {*/
	/*  display: inline-block;*/
	/*  width: 570px;*/
	/*  height: 260px;*/
	/*  background: linear-gradient(*/
	/*    45deg,*/
	/*    rgba(50, 199, 173, 1),*/
	/*    rgba(54, 214, 163, 1)*/
	/*  );*/
	/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
	/*  border-radius: 20px;*/
	/*}*/

	/deep/ .el-dialog__wrapper {
		top: 93vh;
		overflow: visible;
	}
	/deep/ .el-date-editor.el-input {
		    width: 180px;
	}
</style>
