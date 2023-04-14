<template>
	<div class="order-list">
		<!-- <el-card class="box-card">
     
      <div class="history"></div>
    </el-card> -->
		<el-card class="box-card">
			<div class="order-option">
				<div slot="header" class="header2 clearfloat">
					<span class="title">通知中心</span>

				</div>
				<div class="option-body his-list">

					<el-tabs style="    width: 100%;" v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="" name="5">
							<el-table :data="tzlist" border stripe style="width: 100%">
								<el-table-column prop="content" label="通知信息" align="center"></el-table-column>
								<el-table-column prop="create_time" label="时间" align="center">
									<!-- <template slot-scope="scope">{{ $moment(scope.row.open_time * 1000 ).format('YYYY-MM-DD')}}</template> -->
								</el-table-column>
								<!-- <el-table-column prop="count" label="时间" align="center"></el-table-column> -->
								<!-- <el-table-column prop="status_text" label="竞标结果" align="center"></el-table-column> -->
								<!-- <el-table-column align="center" fixed="right" label="点击查看" width="100">
									<template slot-scope="scope">
										<el-button @click="goauction(scope.row)" type="text" size="small">查看</el-button>
									</template>
								</el-table-column> -->
								
							</el-table>
						</el-tab-pane>						
					</el-tabs>



				</div>
			</div>
			<div class="history"></div>
		</el-card>
	</div>
</template>

<script>
	//import Product from '@/components/Product.vue'
	export default {
		name: 'order-list',
		components: {
			//Product
		},
		data() {
			return {
				activeName: '5',
				tzlist:[],
				orderList: []
			}
		},
		created() {
			// this.getMyOrder()
			this.gettongzhi()
		},
		methods: {
			handleClick (tab, event) {
			
			  console.log(tab, event);
			},
			getMyOrder() {
				let params = {
					page: 1
				}
				this.$api.getMyOrder(params).then(res => {
					this.orderList = res.data.data
					this.orderList = this.orderList.slice(0, 9)
				})
			},
			
			gettongzhi(){
				this.$api.getNotice().then(res=>{
					this.tzlist=res.data
				})
				
			},
			
			goauction(row){
				console.log(row)
			},
			
			
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	.order-list {
		width: 100%;
		background: rgba(255, 255, 255, 1);
	}

	.option {
		font-size: 18px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		// line-height: 90px;
	}

	.title {
		float: left;

		font-size: 22px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		// line-height:90px;
	}

	.header {
		/*padding-bottom: 35px;*/
		padding-bottom: 14px;
		border-bottom: 1px solid #eee;
		margin-bottom: 20px;

	}

	/* 修改子组件样式 */
	.pro {
		display: inline-block;
		margin-bottom: 20px;
		width: 210px !important;
		height: 100% !important;

		/deep/ .img {
			width: 100%;
			height: 141px !important;
		}

		/deep/ .pro-con {
			height: 95px !important;
		}

		/deep/ .title {
			font-size: 15px !important;
			height: 35px !important;
		}

		/deep/ .subtitle {
			font-size: 13px !important;
		}

		/deep/ .price {
			font-size: 17px !important;
		}
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

	/deep/ .el-card__header,
	/deep/ .el-card__body {
		// padding: 12px 30px;
	}
</style>
