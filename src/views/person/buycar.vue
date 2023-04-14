<template>
	<div id="person-order">
		<!-- 确认地址弹出框 -->
		<el-dialog title="确认订单" v-if="centerDialogVisible" :visible.sync="centerDialogVisible" :before-close="close" width="55%">
			<out-modal :dingdan="shop" type="buycar" :type="1" :ids="ids" @close="close"></out-modal>
		</el-dialog>
		<p class="person-big-title">购物车</p>
		<el-table :data="tableData" @selection-change="handleSelectionChange" ref="table" border stripe style="width: 100%">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column label="商品" align="center" min-width="300">
				<template slot-scope="scope">
					<img class="good-img" :src="scope.row.img[0]" alt />
					<p class="title" @click="tiaozhuan(scope.row.goods_id)">{{ scope.row.title }}</p>
					<p class="sub-title">{{scope.row.spec_str}}</p>
				</template>
			</el-table-column>
			<el-table-column prop="price" label="单价/元" align="center"></el-table-column>
			<el-table-column prop="num" label="数量" align="center">
				<template slot-scope="scope">
					<el-input-number @change="countChange(scope.row)" size="mini" v-model="scope.row.num" :min="1" :step="1"></el-input-number>
				</template>
			</el-table-column>
			<el-table-column label="订单操作" align="center">
				<template slot-scope="scope">
					<el-button @click="delCart(scope.row)" size="mini" style="margin:0;color:red" type="text">移除商品</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-form style="margin-top:20px;text-align:right" label-width="80px">
			<el-form-item>
				<span class="priceText">总价格：</span>
				<span class="priceText" style="color:red;margin-right:10px;">{{sumPrice}}元</span>
				<el-button type="danger" @click="nowBuy">结算</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import outModal from '@/components/outModal.vue'
	export default {
		components: {
			outModal
		},
		data() {
			return {
				dingdan:"",
				shop:[],
				type: 'all',
				carts: [],
				tableData: [],
				sumPrice: 0,
				centerDialogVisible: false,
				ids: []
			};
		},
		created() {
			this.type = this.$route.params.type
			this.seeCart()
		},
		beforeRouteUpdate(to, from, next) {
			this.type = to.params.type
			next()
		},
		methods: {
			
			//商品页面跳转
			tiaozhuan(goods_id){
				window.open("index.html#/life/zhaodetail?id="+goods_id)
			},
			
			
			
			close() {
				this.centerDialogVisible = false;
			},
			nowBuy() {
				console.log(this.shop)
				this.centerDialogVisible = true
			},
			handleSelectionChange(val) {
				console.log(val)
				/* 过来的是个数组 */
				this.ids = []
				this.sumPrice=0
				this.shop=val				
				this.shop.forEach(element => {
					this.ids.push(element.id)
					this.sumPrice=this.sumPrice+parseFloat(element.price)*element.num
				});
				
				console.log(this.sumPrice)
				
				// let params = {
				// 	selectGoodsId: this.ids
				// }
				// if (this.ids.length) {
				//   this.$api.getSelectMoney(params).then(res => {
				//     this.sumPrice = res.data
				//   })
				// } else {
				//   this.sumPrice = 0
				// }

			},
			countChange(row) {
				console.log(row)
				let params = {
					id: row.id,
					num: row.num
				}
				this.$api.updateCartGoodNum(params).then(res => {
					this.$message(res.msg)
					console.log(res);
					console.log(this.shop)
					this.sumPrice=0
					this.shop.forEach(item=>{
						if(row.id==item.id){
							this.shop.forEach(element => {
								this.ids.push(element.id)
								this.sumPrice=this.sumPrice+parseFloat(element.price)*element.num
							});
							
						}
					})
					
				})
			},
			getSelectMoney() {
				this.$api.getSelectMoney().then(res => {
					this.$message(res.msg)
				})
			},
			delCart(row) {
				let params = {
					id: row.id
				}
				this.$api.delCart(params).then(res => {
					this.$message.success(res.msg)
					this.seeCart()
				})
			},
			seeCart() {
				this.$api.seeCart().then(res => {
					this.tableData = res.data.marketDatas
				})
			},
			handleClick(tab, event) {
				this.$router.push(`/person/order/${this.type}`)
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

	.priceText {
		font-size: 20px;
	}

	.good-img {
		width: 90px;
		height: 90px;
		vertical-align: middle;
		padding-right: 30px;
		float: left;
	}

	.title {
		cursor: pointer;
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
