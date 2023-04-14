<template>
	<div id="person-design-manage">
		<p class="person-big-title">我的店铺</p>

		<!-- <p>
			<el-radio-group v-model="radio" @change="fenlei">
				<el-radio :label="0">全部</el-radio>
				<el-radio :label="1">已上架</el-radio>
				<el-radio :label="2">已下架</el-radio>
				<el-radio :label="3">审核中</el-radio>
				<el-radio :label="4">未通过</el-radio>
			</el-radio-group>
		</p> -->

		<el-table :data="carList" border stripe style="width: 100%">
			<!-- <el-table-column label="商品" align="center" width="300">
				<template slot-scope="scope">
					<img class="good-img" :src="scope.row.image[0]" alt />
					<p class="title">{{ scope.row.title }}</p>
					<p class="sub-title">{{scope.row.ascription}}</p>
				</template>
			</el-table-column> -->
			<el-table-column prop="id" label="ID" align="center"></el-table-column>
			<el-table-column prop="title" label="标题" align="center"></el-table-column>
			<el-table-column prop="car_number" label="车牌号" align="center"></el-table-column>
			<el-table-column prop="money" label="最高出价" align="center"></el-table-column>
			<el-table-column prop="status_text" label="状态" align="center"></el-table-column>
			<el-table-column prop="is_up2" label="是否上架" align="center"></el-table-column>
			<!-- <template slot-scope="scope">
					<span v-if="scope.row.online == 0">下架</span>
					<span v-if="scope.row.online == 1">上架</span>
					<span v-if="scope.row.status == 0">审核中</span>
					<span v-if="scope.row.status == 1">审核失败</span>
				</template> -->
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button @click="carIsOnline(0,scope.row.id)" v-if="scope.row.is_up == 1" type="text" size="mini">下架</el-button>
					<el-button @click="carIsOnline(1,scope.row.id)" v-if="scope.row.is_up != 1" type="text" size="mini">上架</el-button>
					<br />
					<el-button v-if="scope.row.status_text!='未审核'" @click="edit(scope.row)" type="text" style="color:#3d3d3d" size="mini">编辑</el-button>
					<br />
					<el-button @click="liupai(scope.row)" type="text" style="color:red" size="mini">申请流拍</el-button>
					<br />


					<!-- <el-button @click="liupai(scope.row)" type="text" style="color:red" size="mini">申请流拍</el-button> -->
					<!-- <el-popover
					  placement="bottom"
					  width="160"
					  v-model="quedingshanchu">
					  <p>确定删除吗?</p>
					  <p></p>
					  <div style="text-align: right; margin: 0">
					    <el-button size="mini" type="primary" @click="quedingshanchu = false" style="margin-right: 10px;">取消</el-button>
					    <el-button type="text" size="mini" @click="carDelete(scope.row.id)">确定</el-button>
					  </div>
					  <el-button slot="reference" type="text" style="color:red" size="mini">删除</el-button>
					</el-popover> -->

					<!-- <el-button @click="carDelete(scope.row.id)" type="text" style="color:red" size="mini">删除</el-button> -->
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background :page-size="10" @current-change="handleCurrentChange" layout="prev, pager, next"
		 :page-count="carList.count">
		</el-pagination>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				p: 1,
				type: 'all',
				storeInfo: {},
				carList: [],
				// img:[],
				radio: 0,
				quedingshanchu: false,
				// visible: false,
			};
		},
		created() {
			this.type = this.$route.params.type
			this.shopIndex2()

		},
		beforeRouteUpdate(to, from, next) {
			this.type = to.params.type
			next()
		},
		methods: {

			shopIndex2() {
				this.$api.fapaishenqing().then(res => {
					console.log(res)
					if (res.code == 1) {
						if (res.data == null || res.data.check_status != 1) {
							// if(res.data.check_status == 2){

							// }
							// if (res.data == null) {
							this.$router.push('/sell')
						} else {
							this.storeInfo = res.data
							this.getCarList()
						}
					} else {
						this.$router.push('/sell')

					}
				})
			},

			//分页按钮
			handleCurrentChange(options) {
				this.p = options
				this.getCarList()
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},


			edit(cartxt) {
				console.log(cartxt)

				this.$router.push({
					path: '/person/designs',
					query: {
						cartxt: cartxt.id
					}
				});
				//this.$router.push(`/person/design?id=${id}`)
			},

			carDelete2(id) {
				this.quedingshanchu = false
				this.$api.carDelete({
					id: id
				}).then(res => {
					this.$message.success(res.msg)
					this.getCarList()
				})
			},

			carDelete(id) {
				this.quedingshanchu = false
				this.$api.carDelete({
					id: id
				}).then(res => {
					this.$message.success(res.msg)
					this.getCarList()
				})
			},
			/* s上下架 */
			carIsOnline(state, id) {
				let params = {
					id: id,
					is_up: state
				}
				this.$api.onup(params).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
					this.getCarList()
				})
			},
			handleClick(tab, event) {
				console.log(tab, event)
				this.$router.push(`/person/order/${this.type}`)
			},

			//点击分类单选框
			fenlei() {
				this.p = 1;
				this.getCarList()
			},


			/* 获取车辆列表 */
			getCarList() {
				let params = {}
				if (this.radio == 0) {
					params = {
						//shop_id: this.storeInfo.id,
						p: this.p,
						row: 10,
						//type: 'all'
					}
				} else {
					params = {
						//shop_id: this.storeInfo.id,
						p: this.p,
						row: 10,
						//type: this.radio
					}
				}

				this.$api.my_car(params).then(res => {
					this.carList = res.data
					for (let i = 0; i < this.carList.length; i++) {
						// let ings = this.carList.list[i].image.split(",");
						this.carList[i].status_text=this.carList[i].status_text=='已拒绝'?this.carList[i].status_text+' (原因：'+this.carList[i].cause+')':this.carList[i].status_text
						this.carList[i].is_up2 = this.carList[i].is_up == 1 ? '是' : '否'
						// this.carList.list[i].image = ings
						// this.carList.list[i].card_time=this.countTime(this.carList.list[i].card_time)
					}

					console.log(this.carList)
				})

			},
			shopIndex() {
				this.$api.fapaishenqing().then(res => {
					if (res.data == null) {
						this.$router.push('/sell')
					} else {
						this.storeInfo = res.data
						this.getCarList()
					}
				})
			},

			liupai(row) {
				this.$alert('确定申请流拍？', '提示', {
					confirmButtonText: '确定',
					callback: action => {

					}
				});

				this.$confirm('确定申请流拍？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$api.liupai({
						id: row.id
					}).then(res => {
						console.log(res.msg)
						if (res.code == 1) {
							this.$message.success(res.msg)
						} else {
							this.$message.error(res.msg)
						}
					})
				}).catch(() => {});


			},

			//计算时间戳
			countTime(nowTimea) {
				var date = new Date(nowTimea * 1000);

				let y = date.getFullYear(); // 年
				let MM = date.getMonth() + 1; // 月
				//MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate(); // 日
				return y + '-' + MM + '-' + d
			},


		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-design-manage {
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
		padding-bottom: 18px;
		font-size: 16px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		padding-top: 10px;
		// line-height:59px;
		text-align: left;
	}

	.sub-title {
		font-size: 13px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		text-align: left;
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
