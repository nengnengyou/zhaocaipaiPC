<template>
	<div class="blukauction">
		<!--        v-loading.fullscreen.lock="fullscreenLoading">-->
		<div class="search">
			<el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="searchBody">
			</el-input>
			<el-button @click="search()">
				搜索
			</el-button>
		</div>
		<el-table ref="members" :data="carList" stripe border :highlight-current-row="highlight" max-height="1000" style="width: 100%">
			<el-table-column prop="id" label="车辆序号" width="100">
			</el-table-column>
			<el-table-column prop="car_number" label="车牌号" width="150">
			</el-table-column>
			<!--            <el-table-column-->
			<!--                    prop="car_type"-->
			<!--                    label="车辆类型"-->
			<!--                    width="100">-->
			<!--            </el-table-column>-->

			<el-table-column prop="frame_number" label="车辆大架号" width="200">
			</el-table-column>

			<el-table-column prop="car_place_info" label="车辆停放地" width="120">
			</el-table-column>
			<el-table-column :show-overflow-tooltip="tooltip" prop="title" label="车辆标题">

			</el-table-column>

			<el-table-column v-if="!status" :show-overflow-tooltip="tooltip" prop="high_money" label="当前价">
			</el-table-column>

			<el-table-column v-if="status" :show-overflow-tooltip="tooltip" prop="start_price2" label="起拍价">
			</el-table-column>

			<el-table-column prop="start_price" label="报价" width="200">
				<template slot-scope="scope">
					<el-input v-model="scope.row.start_price" placeholder="请输入报价金额" clearable @input="transformMoney(scope.row)"></el-input>
					<span style="font-size: 12px">{{scope.row.transformMoney}}</span>
				</template>

			</el-table-column>

			<el-table-column fixed="right" label="操作" width="100">

				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
				</template>

			</el-table-column>

		</el-table>

		<div style="height: 57px;">
			<el-button @click="sendAuction" class="footer-btn">
				提交报价
			</el-button>
		</div>

	</div>
</template>

<script>
	import {
		Loading
	} from 'element-ui';
	export default {
		name: "BlukAuction",
		components: {
			Loading
		},
		data() {
			return {
				status: true,
				id: '',
				carList: [], //车辆存放的数据
				carListBackup: [], //车辆数据的备份
				input: '',
				fullscreenLoading: true,
				searchBody: '', //要搜索的内容
				highlight: true, //高亮当前行
				tooltip: true, //超出隐藏

			}
		},
		methods: {
			transformMoney: function(item) {
				console.log(item)
				var money = item.start_price;
				// console.log(item.start_price2)
				//汉字的数字
				var cnNums = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
				//基本单位 一十二万
				var cnIntRadice = new Array('', '十', '百', '千');
				//对应整数部分扩展单位
				var cnIntUnits = new Array('', '万', '亿', '兆');
				//对应小数部分单位
				var cnDecUnits = new Array('角', '分', '毫', '厘');
				//整数金额时后面跟的字符
				var cnInteger = '整';
				//整型完以后的单位
				var cnIntLast = '元';
				//最大处理的数字
				var maxNum = 999999999999999.9999;
				//金额整数部分
				var integerNum;
				//金额小数部分
				var decimalNum;
				//输出的中文金额字符串
				var chineseStr = '';
				//分离金额后用的数组，预定义
				var parts;
				if (money == '') {
					return '';
				}
				money = parseFloat(money);
				if (money >= maxNum) {
					//超出最大处理数字
					return '';
				}
				if (money == 0) {
					chineseStr = cnNums[0] + cnIntLast + cnInteger;
					return chineseStr;
				}
				//转换为字符串
				money = money.toString();
				if (money.indexOf('.') == -1) {
					integerNum = money;
					decimalNum = '';
				} else {
					parts = money.split('.');
					integerNum = parts[0];
					decimalNum = parts[1].substr(0, 4);
				}
				//获取整型部分转换
				if (parseInt(integerNum, 10) > 0) {
					var zeroCount = 0;
					var IntLen = integerNum.length;
					for (var i = 0; i < IntLen; i++) {
						var n = integerNum.substr(i, 1);
						var p = IntLen - i - 1;
						var q = p / 4;
						var m = p % 4;
						if (n == '0') {
							zeroCount++;
						} else {
							if (zeroCount > 0) {
								chineseStr += cnNums[0];
							}
							//归零
							zeroCount = 0;
							chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
						}
						if (m == 0 && zeroCount < 4) {
							chineseStr += cnIntUnits[q];
						}
					}
					chineseStr += cnIntLast;
				}
				//小数部分
				if (decimalNum != '') {
					var decLen = decimalNum.length;
					for (var i = 0; i < decLen; i++) {
						var n = decimalNum.substr(i, 1);
						if (n != '0') {
							chineseStr += cnNums[Number(n)] + cnDecUnits[i];
						}
					}
				}
				if (chineseStr == '') {
					chineseStr += cnNums[0] + cnIntLast + cnInteger;
				} else if (decimalNum == '') {
					chineseStr += cnInteger;
				}

				item.transformMoney = chineseStr;
				return chineseStr;
			},
			handleClick(option) {
				let id = option.id
				window.open(`index.html#/auctionhome/auctiondetail?id=${id}`, '_blank')
			},
			sendAuction() {
				// console.log('input'+JSON.stringify(this.carListBackup))

				let arr = []

				for (let i = 0; i < this.carList.length; i++) {
					let auctionCar = {}
					// for (let k = 0; k < this.carListBackup.length; k++) {
					//console.log(this.carList[i].id)
					// if (this.carList[i].id == this.carListBackup[k].id) {
					//console.log('carListBackup:'+parseFloat(this.carListBackup[k].start_price),'carList:'+parseFloat(this.carList[i].start_price))
					// if (parseFloat(this.carListBackup[k].start_price)!= parseFloat(this.carList[i].start_price)) { 
					if (parseFloat(this.carList[i].start_price) != this.carList[i].start_price2 && this.carList[i].start_price != '') {
						/* auctionCar.auction_car_id = this.carList[i].id;
						auctionCar.money = this.carList[i].start_price; */
						// console.log(auctionCar)
						let id = this.carList[i].id + ""
						let price = this.carList[i].start_price + ""
						auctionCar["" + id + ""] = price;

						arr.push(auctionCar)
					}

					//break;
					// }
					// }
				}

				console.log(arr)

				let param = {
					car_list: arr
				}
				this.$api.bidadd(param).then(res => {
					this.$message.success(res.msg)
				})
			},
			search() {
				//显示lodding
				// this.fullscreenLoading = true;

				// let loadingInstance = Loading.service({fullscreen: true,text:'正在搜索'});


				if (this.searchBody == '') {
					this.$message.error('请输入搜索内容');
					return
				}
				this.$loading({
					fullscreen: true,
					text: '正在搜索'
				})

				let num = 0; //记录搜索到的次数
				let fristNum = -1; //记录第一次搜索到的次数
				for (let i = 0; i < this.carList.length; i++) {
					let carnum = this.carList[i].car_number + '';
					let frameNumber = this.carList[i].frame_number + '';
					if (carnum.indexOf(this.searchBody) != -1 || frameNumber.indexOf(this.searchBody) != -1) {
						if (fristNum == -1) {
							fristNum = i;
							console.log('查找到的第一个：' + fristNum)
						}

						num += 1
					}

				}




				console.log(num)
				if (this.carList && this.carList.length > 0 && fristNum != -1) {
					for (let i = 0; i < this.carList.length; i++) {

						// 判断查询的数据是否存在，存在则进行定位操作
						if (i == fristNum) {
							console.log(i)

							this.$message({
								message: '找到' + num + '条数据，并将为您高亮第一条数据',
								type: 'success'
							});

							let height = this.$refs.members.bodyWrapper.scrollHeight / this.carList.length

							setTimeout(() => {
								this.$refs.members.bodyWrapper.scrollTop = (height * (fristNum - 1));
								this.$refs.members.setCurrentRow(this.$refs.members.data[fristNum]);
								// console.log(this.$refs.members.carList[fristNum])
							}, 10)
							// this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
							//     loadingInstance.close();
							// });
							this.$loading().close()
							break;
						}

					}
				} else {
					this.$loading().close()
					this.$message({
						message: '没有找到数据',
						type: 'success'
					});
				}


				// let msg = ''
				// if(num != 0) {
				//     msg = '没有找到数据'
				// }else  {
				//     msg = '找到'+ num + '条数据，并为您高亮第一条数据'
				// }


			},
			async getCaiList() {
				let param = {
					auction_session_id: this.id,
					row: 99999999
				}
				console.log(param)
				let res = await this.$api.getAuctionCar(param)
				console.log(res)
				if (res.code == 1) {
					this.fullscreenLoading = false
					this.carList = res.data.list;
					if (res.data.list[0].session_status == '2') {
						this.status = true
					} else {
						this.status = false
					}

					this.carListBackup = JSON.parse(JSON.stringify(res.data.list))

					//this.carListBackup = res.data.list
					//console.log(this.carListBackup)

					for (let i = 0; i < this.carList.length; i++) {

						this.carList[i].start_price2 = this.carList[i].start_price
						this.carList[i].start_price = ''
					}
					// console.log(this.carList[0].start_price2==this.carList[0].start_price)
					console.log(this.carList)

					this.$loading().close()
				} else {
					this.$alert(res.msg, '获取批量报价错误', {
						confirmButtonText: '确定',

					});
					this.$loading().close()
				}
				console.log(res)
			},






		},
		created() {
			this.id = this.$route.query.id;
			console.log(this.id)
			this.getCaiList()
			this.$loading({
				fullscreen: true,
				text: '正在加载'
			})
		},
	}
</script>

<style lang="less" scoped>
	.blukauction {
		padding-top: 80px;
		background-color: #f5f5f7;
		width: 1200px;
		margin: 0 auto;

		.input-bluk {
			border: 1px solid red;
		}

		.search {
			display: flex;
			padding-bottom: 10px;
		}

		.footer-btn {
			margin-top: 10px;
			background-color: #3385ff;
			color: #fff;
			    float: right;
		}
	}

	/deep/ .el-table {
		font-size: 16px;
	}
</style>
