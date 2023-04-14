<template>
	<div id="person-auction">


		<QueryList :queryCarAuctionList="queryCarAuctionList"></QueryList>


		<p class="person-big-title">拍物记录</p>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="竞拍记录" name="3">
				<el-table :data="tableData" border stripe style="width: 100%">
					<el-table-column prop="goods_title" label="商品" align="center"></el-table-column>
					<el-table-column prop="add_time" label="拍卖时间" align="center"></el-table-column>
					<el-table-column prop="money" label="投标价格" align="center"></el-table-column>
						<!-- <template slot-scope="scope">{{ $moment(scope.row.open_time * 1000 ).format('YYYY-MM-DD')}}</template> -->
					<!-- </el-table-column> -->
					<!-- <el-table-column prop="count" label="竞标数量" align="center"></el-table-column> -->
					<el-table-column prop="status_text" label="竞标结果" align="center"></el-table-column>
					<!-- <el-table-column
                  align="center"
                  fixed="right"
                  label="点击查看"
                  width="100">
           <template slot-scope="scope">
              <el-button @click="goCatDetail(scope.row)" type="text" size="small">查看</el-button>

            </template>
          </el-table-column> -->
				</el-table>
			</el-tab-pane>
			<!-- <el-tab-pane label="成功竞价" name="3">
        <el-table :data="tableData2" border stripe style="width: 100%">
          <el-table-column prop="title" label="拍卖场次" align="center"></el-table-column>
          <el-table-column prop="open_time" label="拍卖时间" align="center">
          </el-table-column>
          <el-table-column prop="count" label="竞标数量" align="center"></el-table-column>
          <el-table-column prop="status_text" label="竞标结果" align="center"></el-table-column>
          <el-table-column
                  align="center"
                  fixed="right"
                  label="竞标结果"
                  width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>

            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane> -->
		</el-tabs>
		<div style="text-align:center;margin-top:50px;">
			<div class="fenye">
				<!-- 分页器 -->
				<div style="margin: 0 auto;
			width: 530px;
			text-align: center;">
					<el-pagination :background="true" style="margin: 0px auto;width: 480px;" @current-change="handleCurrentChange"
					 current-page.sync="1" :page-size="20" layout="prev, pager, next, jumper" :page-count="conunt" :pager-count='7'>
					</el-pagination>
				</div>

			</div>
			<!-- <el-button class="save" type="primary" @click="onSubmit">下一页</el-button> -->
		</div>
	</div>
</template>
<script>
	import QueryList from "../../components/person/QueryList";
	export default {
		data() {
			return {
				activeName: '3',
				tableData: [],
				tableData2: [],
				queryCarAuctionList: []
			};
		},
		components: {
			QueryList
		},
		created() {
			this.myauction()
			//this.myauction2()

		},
		methods: {
			goCatDetail(tab, event) {
				console.log(tab)
				let param = {
					auction_session_id: tab.auction_session_id,
					page: 1,
					row: 99999
				}
				if (tab.status_text == '未开标') {
					param.auctStatus = 1;
				} else if (tab.status_text == '竞标中') {
					param.auctStatus = 0;
				} else if (tab.status_text == '已开标') {
					param.auctStatus = 2;
				} else {
					console.log("status错误")
				}
				this.$api.jingpaiResult(param).then(res => {
					res.data.list.forEach((item, idnex) => {
						console.log(item)
						if (item.status == 1) {
							item.status1 = '未开标';
						} else if (item.status == 0) {
							item.status1 = '竞拍中';
						} else if (item.status == 2) {
							item.status1 = '已开标';
						} else {
							console.log("status错误")
						}
					})


					this.queryCarAuctionList = res.data.list;
				})
			},
			handleClick(tab, event) {

				console.log(tab, event);
			},

			openjilu() {
				let id = this.$route.query.id
				for (let i = 0; i < this.tableData.length; i++) {
					if (this.tableData[i].id == id) {
						this.goCatDetail(this.tableData[i])
						break;
					}
				}
			},

			myauction() {
				let params = {
					p: 1,
				}
				this.$api.getpaiwujilu(params).then(res => {
					this.tableData = res.data
					if (this.$route.query.id) {
						this.openjilu()
					}
				})
			},

			myauctionCG() {
				let params = {
					page: 1,
					// status: 0
					status: 1,
					row: 99999
				}
				this.$api.jingpaiJilu(params).then(res => {
					this.tableData = res.data.list
					if (this.$route.query.id) {
						this.openjilu()
					}
				})
			},

			myauction2() {
				let params = {
					// TODO 参数不够
					page: 1,
					status: 0,
					row: 99999
				}
				this.$api.jingpaiResult(params).then(res => {
					this.tableData2 = res.data
				})
			},

			//分页
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.p = val
				this.getcarlist();
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},

		}
	}
</script>

<style lang="less" scoped>
	@import url("../../assets/base.less");

	#person-auction {
		background-color: #fff;
		// padding-top: 90px;
		// padding-bottom: 20px;
	}

	.auction-inner {
		// width: @conent-width;
		// margin: 0 auto;
	}

	.save {
		width: 163px;
		height: 45px;
		background: @base-color;
		border-radius: 4px;

		font-size: 17px;
		font-family: MicrosoftYaHei;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: -10px;
		padding: 0;
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
