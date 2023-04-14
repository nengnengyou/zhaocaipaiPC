<template>
	<div id="person-servelist">

		<el-dialog title="查询结果" v-if="jieguo" :visible.sync="jieguo" :modal="false" width="60%">

			<el-form label-width="">

				<el-form-item label="查询结果: ">
					<span>{{tableData.jieguo}}</span>
				</el-form-item>

				<!-- <el-form-item label="查询结果: ">
					<span>{{tableData.msg}}</span>
				</el-form-item> -->
				
				<el-form-item v-if="order_type=='0'" label="">
					<el-table ref="multipleTable" highlight-current-row :data="tableData.content"
					 border stripe style="width: 100%">
						<el-table-column prop="act" label="违章原因" align="center" width="358px"></el-table-column>
						<el-table-column prop="wzcity" label="违章省份" align="center"></el-table-column>
						<el-table-column prop="area" label="违章地区" align="center"></el-table-column>
						<el-table-column prop="money" label="违章罚款" align="center"></el-table-column>
						<el-table-column prop="fen" label="违章扣分" align="center"></el-table-column>
						<el-table-column prop="weizhang_time" label="违章时间" align="center"></el-table-column>
					</el-table>
				</el-form-item>

				<el-form-item v-if="order_type=='1'" label="">
					<el-table ref="multipleTable" highlight-current-row :data="tableData.content.normalRepairRecords"
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

		<p class="person-big-title">查询记录</p>
		<QueryList v-bind:queryData="queryData" v-bind:queryWeiZhangData='queryWeiZhangData'></QueryList>

		<el-divider></el-divider>
		<el-tabs v-model="activeName">
			<el-tab-pane label="违章查询" name="weizhang">
				<el-table :data="weizhangData" border style="width: 100%">
					<el-table-column prop="out_trade_no" label="查询单号" width="180">
					</el-table-column>
					<el-table-column prop="hphm" label="车牌号" width="180">
					</el-table-column>
					<el-table-column prop="create_time" label="查询时间">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="100">

						<template slot-scope="scope">
							<el-button @click="handleWeiZhangClick(scope.row)" type="text" size="small">查看</el-button>
						</template>

					</el-table-column>
				</el-table>

			</el-tab-pane>

			<el-tab-pane label="维保查询" name="weibao">
				<el-table :data="weibaoData" border style="width: 100%">
					<el-table-column prop="out_trade_no" label="查询单号" width="180">
					</el-table-column>
					<el-table-column prop="frame_num" label="车架号" width="180">
					</el-table-column>
					<el-table-column prop="create_time" label="查询时间">
					</el-table-column>

					<el-table-column prop="order_status" label="查询类型">
					</el-table-column>

					<el-table-column fixed="right" label="操作" width="100">

						<template slot-scope="scope">
							<el-button @click="handleWeiBaoClick(scope.row)" type="text" size="small">点击查看报告</el-button>
						</template>

					</el-table-column>
				</el-table>
			</el-tab-pane>

		</el-tabs>


		<el-pagination class="page-style" background :hide-on-single-page="isShowPage" layout="prev, pager, next" :page-count="lastPage"
		 :current-page="currentPage" @current-change="setWeiZhangPage">
		</el-pagination>

	</div>
</template>

<script>
	import QueryList from "../../components/person/QueryList";
	export default {
		name: "ServeList",
		components: {
			QueryList
		},
		// components: { Query },
		data() {
			return {
				order_type: "0",
				jieguo: false,
				tableData: {
					content: {
						normalRepairRecords: []
					}
				},
				activeName: 'weizhang',
				listData: '',
				weizhangData: [],
				weibaoData: [],
				queryData: [],
				queryWeiZhangData: [],
				lastPage: null, //总页数
				currentPage: null, //当前页
				isShowPage: false,
				page: 1,
				wzCurrentPage: null,
				wbCurrentPage: null,
				wzlastPage: null, //违章总页数
				wblastPage: null //维保总页数
			}
		},
		created() {
			this.getUserServeList();
		},
		methods: {
			getUserServeList() {


				this.getWeizhangList()
				this.getWeiBaoList()


			},
			getWeizhangList() {
				// 首先清空数据
				this.weizhangData = []
				let params = {
					//token: this.$store.getters.getToken,
					type: 0,
					page: this.page
				}

				this.$api.getUserServeList(0,params).then(res => {
					if (res.code == 1) {						
						res.data.data.forEach(item => {
							this.weizhangData.push(item)
						})
					}

					//为了去掉控制台的警告
					// res.data.last_page = Number(res.data.last_page)
					//res.data.current_page = Number(res.data.current_page)

					this.lastPage = res.data.last_page
					this.currentPage = res.data.current_page
					//保存违章当前页和总页数
					this.wzCurrentPage = res.data.current_page
					this.wzlastPage = res.data.last_page
				})
			},
			getWeiBaoList() {
				this.weibaoData = []
				let params = {
					// token: this.$store.getters.getToken,
					type: 1,
					page: this.page
				}
				this.$api.getUserServeList(1,params)
					.then(res => {
						if (res.code == 1) {
							res.data.data.forEach((item, index) => {
								this.weibaoData.push(item)
							})
						} else {
							this.$message.error(res.data)
						}

						// console.log(this.weibaoData)
						// console.log(res.data.last_page)

						// res.data.last_page = Number(res.data.last_page)
						// res.data.current_page = Number(res.data.current_page)

						this.lastPage = res.data.last_page
						this.currentPage = res.data.current_page

						//保存维保当前页和总页数
						this.wbCurrentPage = res.data.current_page
						this.wblastPage = res.data.last_page
					})
			},
			
			//查违章
			handleWeiZhangClick(scope) {
				// console.log(scope)
				this.order_type="0";
				let params = {
					id: scope.id
				}
				this.$api.fuwuIfo(params).then(data => {

					// console.log(data.msg.content)
					if (data.data.content == '车辆信息错误,请确认输入的信息正确' || data.data.content == '车辆信息错误,请确认输入的信息正确, 本次查询不给予退款' || data.data.content == null) {
						// console.log(2)						
						//this.queryData = []
						this.tableData = {
							content: []
						}
						if(data.data.content==null||data.data.content==""){
							this.tableData.jieguo='查询失败'
						}else{
							this.tableData.jieguo = data.data.content
						}
					} else {
						this.tableData=data.data
						this.tableData.jieguo = "查询成功"
					}
					this.jieguo = true
					
				})
			},
			
			//查维保
			handleWeiBaoClick(scope) {
				//console.log(scope)
				
				window.open("#/weibao?vin="+scope.frame_num)
				
				
				// this.order_type="1";
				// let params = {
				// 	id: scope.id,
				// }

				// if (scope.order_status == '基础查询') {
				//     params.is_weibao = 1
				//     params.show_weibao_type = 'pc'
				// } else {
				//     params.is_zonghe = 1
				//     params.show_zonghe_type = 'pc'
				// }
				// this.$api.fuwuIfo(params).then(res => {
				// 	if (res.data.content != null) {
				// 		this.tableData = res.data
				// 		this.tableData.jieguo = "查询成功"
				// 	} else {
				// 		this.tableData = {
				// 			content: {
				// 				normalRepairRecords: []
				// 			}
				// 		}
				// 		this.tableData.jieguo = "查询失败"
				// 	}
				// 	//console.log(this.tableData)
				// 	this.jieguo = true

				// 	// this.queryWeiZhangData = data.data
				// 	// window.open(data.data + '', '_blank')
				// })
			},

			setWeiZhangPage(size) {
				// console.log(size)
				this.page = size
				if (this.activeName == 'weizhang') {
					this.getWeizhangList()
				} else {
					this.getWeiBaoList()
				}
			}
		},
		watch: {
			activeName() {
				//当activeName发生改变时，  更新分页的数据
				if (this.activeName == 'weizhang') {
					this.page = this.wzCurrentPage
					this.lastPage = this.wzlastPage
					this.currentPage = this.wzCurrentPage

				} else {
					this.page = this.wbCurrentPage
					this.lastPage = this.wblastPage
					this.currentPage = this.wbCurrentPage
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-service {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.person-big-title {
		padding-bottom: 0;
	}

	.service-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	#person-servelist .page-style {
		float: right;
		margin-top: 20px;
	}
</style>
