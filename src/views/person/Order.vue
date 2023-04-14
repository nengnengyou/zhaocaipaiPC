<template>
	<div id="person-order">
		<!-- 确认地址弹出框 -->
		<el-dialog title="确认订单" v-if="centerDialogVisible" :visible.sync="centerDialogVisible" :before-close="close" width="55%">
			<out-modal :dingdan="dingdan" type="myorder" :orderid="orderid" @close="close"></out-modal>
		</el-dialog>
		<back-order :id="backId" @closea="dialogVisiblea = false" :dialogVisible="dialogVisiblea"></back-order>

		<!-- p评价 -->
		<el-dialog title="评价内容" :visible.sync="dialogFormVisible">
			<el-form :model="estimate">
				<el-form-item label="评价内容">
					<el-input rows="5" type="textarea" v-model="estimate.content" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="图片">

				</el-form-item>
				<el-form-item label="">
					<el-upload action="http://192.168.5.32/api/common/upload" name="file" list-type="picture-card" :on-preview="handlePictureCardPreview"
					 :on-remove="handleRemove" :on-success="updata">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>

				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="estimatePost">确 定</el-button>
			</div>
		</el-dialog>

		<p class="person-big-title">我的订单</p>
		<el-tabs v-model="type" @tab-click="handleClick">
			<el-tab-pane label="全部订单" name="all"></el-tab-pane>
			<el-tab-pane name="waitpay" label="待付款"></el-tab-pane>
			<el-tab-pane name="deliver" label="待发货"></el-tab-pane>
			<el-tab-pane name="take" label="待收货"></el-tab-pane>
			<el-tab-pane name="mark" label="待评价"></el-tab-pane>
			<el-tab-pane name="over" label="已完成"></el-tab-pane>
			<el-tab-pane name="retur" label="退货/退款"></el-tab-pane>
		</el-tabs>

		<el-table :data="tempData" border stripe style="width: 100%">
			<el-table-column label="商品" align="center" width="300">
				<template slot-scope="scope">
					<img class="good-img" :src="scope.row.getOrderDetails[0].img" alt />
					<p class="title" style="overflow: hidden;height: 93px;">
						{{ scope.row.getOrderDetails[0].title }}</p>
					<p class="sub-title">{{"规格: "+scope.row.getOrderDetails[0].spec_str}}</p>
				</template>
			</el-table-column>
			<el-table-column label="单价/元" align="center">
				<template slot-scope="scope">
					<span>{{scope.row.getOrderDetails[0].unit_price}}</span>
				</template>
			</el-table-column>
			<el-table-column label="数量" align="center">
				<template slot-scope="scope">
					<span>{{scope.row.getOrderDetails[0].stock}}</span>
				</template>
			</el-table-column>
			<el-table-column prop="money" label="实付款/元" align="center"></el-table-column>
			<el-table-column prop="ordertime" label="日期" align="center"></el-table-column>
			<el-table-column label="订单状态" align="center">
				<template slot-scope="scope">
					<span v-if="scope.row.status == '0'">待付款</span>
					<span v-if="scope.row.status == '1'">待发货</span>
					<span v-if="scope.row.status == '2'">待收货</span>
					<span v-if="scope.row.status == '3'">待评价</span>
					<span v-if="scope.row.status == '5'">订单取消</span>
					<span v-if="scope.row.status == '4'">订单完成</span>
					<span v-if="scope.row.status == '6'">申请退款</span>
				</template>
			</el-table-column>
			<el-table-column label="订单操作" align="center">
				<template slot-scope="scope">
					<el-button @click="submitMyOrder(scope.row)" v-if="scope.row.status == 0" type="primary" size="mini">立即支付</el-button>
					<el-button @click="confirmGetOrder(scope.row)" v-if="scope.row.status == 2" type="primary" size="mini">确认收货</el-button>

					<el-button style="margin-top:10px ;" @click="backOrder(scope.row)" v-if="scope.row.status == 1||scope.row.status == 2" type="primary" size="mini">申请退款</el-button>

					<el-button @click="estimateNow(scope.row)" v-if="scope.row.status == 3" type="primary" size="mini">评价</el-button>
					<el-button v-if="scope.row.status ==0" @click="cancelOrder(scope.row)" size="mini" style="margin:0;color:red" type="text">取消订单</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	import outModal from '@/components/outModal.vue'
	import backOrder from '@/components/backOrder.vue'
	export default {
		components: {
			outModal,
			backOrder
		},
		data() {
			return {
				//评价图片上传
				dialogImageUrl: '',
				dialogVisible: false,
				fileList: [], //图片列表
				//评价图片上传  结束

				dingdan: [],
				type: 'all',
				tableData: [],
				tempData: [],
				orderid: '',
				centerDialogVisible: false,
				dialogVisiblea: false,
				dialogFormVisible: false,
				estimate: {
					content: ''
				},
				tempRow: {},
				backId: ''
			};
		},
		created() {
			this.type = this.$route.params.type
			this.getMyOrder()
		},
		beforeRouteUpdate(to, from, next) {
			this.type = to.params.type
			next()
		},
		watch: {
			$route(val) {
				this.switchTab(val.params.type)
			}
		},
		methods: {

			//评价图片上传
			handleRemove(file, fileList) {
				console.log(file)
				//console.log(fileList)
				for (let i = 0; i < this.fileList.length; i++) {
					if (this.fileList[i].url == file.response.data.url) {
						console.log(i)
						this.fileList.splice(i, 1);
						break;
					}
				}
				console.log(this.fileList)
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
				console.log(this.dialogImageUrl)
			},

			updata(response, file, fileList) {

				this.fileList.push({
					uid: file.uid,
					name: file.name,
					url: file.response.data.url
				})
				console.log(this.fileList)

			},
			//评价图片上传 结束


			estimateNow(row) {
				this.dialogFormVisible = true
				this.tempRow = row
			},
			estimatePost() {
				this.dialogFormVisible = true
				let images = ""
				for (let i = 0; i < this.fileList.length; i++) {
					if (images == "") {
						images = this.fileList[i].url 
					} else {
						images = images +  "," +this.fileList[i].url 
					}
				}
				let params = {
					order_id: this.tempRow.id,
					goods_id: this.tempRow.getOrderDetails[0].id,
					msg: this.estimate.content,
					img: images
				}
				this.$api.postComment(params).then(res => {
					this.dialogFormVisible = false
					this.getMyOrder()
					if(res.code==1){
						this.$message.success(res.msg)
					}else{
						this.$message.error(res.msg)
					}
				})
			},
			confirmGetOrder(row) {
				let params = {
					id: row.id
				}
				this.$api.confirmGetOrder(params).then(res => {
					this.$message.success(res.msg)
					this.getMyOrder()
				})
			},
			cancelOrder(row) {
				this.$prompt('请输入取消原因', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(({
					value
				}) => {
					let params = {
						id: row.id,
						reason: value
					}
					this.$api.cancelOrder(params).then(res => {
						this.$message.success(res.msg)
						this.getMyOrder()
					})
				}).catch(() => {
					return false
				});


			},
			close() {
				this.centerDialogVisible = false;
				this.getMyOrder()
			},
			closea() {
				this.dialogVisiblea = false;
			},
			submitMyOrder(row) {
				console.log(row.getOrderDetails[0])
				this.dingdan.push(row)
				console.log(row)	
				this.centerDialogVisible = true;
				this.orderid = row.id
				console.log(this.orderid)
			},
			switchTab(tab) {
				switch (tab) {
					case 'all':
						this.tempData = this.tableData
						break;
					case 'waitpay':
						this.tempData = this.tableData.filter(item => {
							return item.status == 0
						})
						break;
					case 'deliver':
						this.tempData = this.tableData.filter(item => {
							return item.status == 1
						})
						break;
					case 'take':
						this.tempData = this.tableData.filter(item => {
							return item.status == 2
						})
						break;
					case 'mark':
						this.tempData = this.tableData.filter(item => {
							return item.status == 3
						})
						break;
					case 'over':
						this.tempData = this.tableData.filter(item => {
							return item.status == 4
						})
						break;
					case 'retur':
						this.tempData = this.tableData.filter(item => {
							return item.status == 6
						})
						break;
					default:
						break;
				}
			},
			/* 退款 */
			backOrder(row) {
				// this.$api.
				this.backId = row.id
				this.dialogVisiblea = true
			},
			getMyOrder() {
				let params = {
					page: 1
				}
				this.$api.getMyOrder(params).then(res => {
					this.tableData = res.data.data
					this.switchTab(this.type)
				})
			},
			handleClick(tab, event) {
				this.$router.push(`/person/order/${this.type}`)
				/* 筛选，动态改变列表的显示形态 */
				this.switchTab(this.type)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-order {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.order-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.good-img {
		width: 90px;
		height: 90px;
		vertical-align: middle;
		padding-right: 30px;
		float: left;
	}

	.title {
		//padding-bottom: 18px;
		font-size: 16px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		//padding-top: 10px;
		// line-height:59px;
		text-align: left;
	}

	.sub-title {
		font-size: 13px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		text-align: right;
		// line-height: 59px;
	}

	/deep/.el-button+.el-button {
		margin: 0;
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
