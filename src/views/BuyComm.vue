<template>
	<div class="buycomm">
		<div class="option-card">
			<!-- <a style="position: relative;right: -95%;" href="#">发拍车源</a> -->
			<span class="fapai" @click="qufapai">发拍车源</span>
			<div class="bottom-line">
				<span class="search-title">买车</span>
				<input @keydown.native="bayCarList" v-model="option.title" class="search" />
				<button @click="bayCarList" class="search-button">搜索</button>
			</div>
			<div class="options">
				<div class="line clearfloat one-line">
					<span class="line-left fl">品牌</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.category">
							<el-checkbox class="option" v-for="item in filt.carCate" :label="item.name" :key="item.id">{{item.name}}</el-checkbox>
						</el-checkbox-group>
					</div>
					<a @click="showMore" class="line-right option more">{{hiddenText}}</a>
				</div>
				<div class="line clearfloat one-line">
					<span class="line-left fl">属性</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.attribute">
							<el-checkbox class="option" v-for="(item,index) in filt.carAttr" :label="item.name" :key="index">{{item.name}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
				<!-- <div class="line clearfloat one-line">
					<span class="line-left fl">价格</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.pay_num">
							<el-checkbox class="option" v-for="(item,index) in filt.pay_num" :label="item" :key="index">{{item}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div> -->
				<!-- <div class="line clearfloat one-line">
					<span class="line-left fl">车龄</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.card_time">
							<el-checkbox class="option" v-for="(item,index) in filt.card_time" :label="item" :key="index">{{item}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div> -->
				<!-- <div class="line clearfloat one-line">
					<span class="line-left fl">表显里程</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.mileage">
							<el-checkbox class="option" v-for="(item,index) in filt.mileage" :label="item.name" :key="index">{{item.name}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div> -->
				<!-- <div class="line clearfloat one-line">
					<span class="line-left fl">颜色</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.color">
							<el-checkbox class="option" v-for="(item,index) in filt.carColor" :label="item.name" :key="index">{{item.name}}</el-checkbox>
						</el-checkbox-group>
					</div>
				</div> -->

				<!-- <div class="line clearfloat one-line">
					<span class="line-left fl">能否过户</span>
					<div class="line-right-inner" :style="{'height':hiddenWidth}">
						<el-checkbox-group v-model="option.transfer">
							<el-checkbox class="option" v-for="(item,index) in filt.transfer" :label="item" :key="index">{{item}}</el-checkbox>							
						</el-checkbox-group>
						
						不要 <el-radio-group v-model="option.transfer">
							<el-radio-button class="option" label="不限"></el-radio-button>
							<el-radio-button class="option" v-for="(item,index) in filt.transfer" :label="item" :key="index"></el-radio-button>
						</el-radio-group> 不要
						
					</div>
				</div> -->

				<div class="line">
					<span class="line-left">地区</span>
					<el-cascader :options="filt.areaList" v-model="option.province" :props="areaProp" clearable></el-cascader>
				</div>
			</div>
		</div>

		<div class="prolist">
			<div class="inner">
				<!-- <product-big
          @click.native="toDetail(item.id)"
          :isPai="false"
          class="pro-item"
          v-for="item in carList"
          :key="item.id"
          :imgsrc="item.img[0]"
          :title="item.title"
          :subtitle="item.card_time+'丨'+item.city+'丨'+item.carno"
          :price="item.price+'元'"
        ></product-big> -->
				<div class="main_item" v-for="item  in carList" :key="item.id" @click="tiaozhuan(item.id)">
					<el-row>
						<el-col :span="1" style="width: 275px;">
							<el-card :body-style="{padding: '0px' ,display: 'block',background: '#f6f6f6',position: 'relative',width: '270px',height: '345px',}">
								
								<div style="width: 100%;height: 202px;">
								<img :src="item.images[0]" class="image">
								</div>
								<div style="padding-left: 10px;padding-top: 16px;;">
									<span style="display: block;
    width: 250px;
    height: 37px;
    overflow: hidden;">{{item.title}}</span>
									<div class="bottom clearfix" style="position: absolute; bottom: 5px;">

										<!-- <div class="Starting_price">起拍价: <span class="price">¥{{carlist[index].start_price}}</span></div> -->
										
										<div class="end_time">
											{{item.car_place_info}}	丨{{item.car_number}}									
										</div>
										
										<div class="end_time">
											<!-- {{countTime(item.card_time)}}丨{{item.ascription}}丨{{item.carno}} -->
											<span style="color: #800019;">结束日期:{{countTime(item.end_time)}}</span>
										</div>


									</div>
									<!-- <div class="time">类型：{{ carlist[index].car_type}}</div> -->
								</div>
							</el-card>
						</el-col>
					</el-row>

				</div>


			</div>
			
			<!-- <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination> -->
		</div>
		<div style="margin: 0 auto;
    width: 530px;
    text-align: center;">
			<!-- <el-pagination background="true" class="pages" style="margin: 0px auto;" @current-change="handleCurrentChange"  layout="prev, pager, next, jumper" :page-count="conunt" :pager-count='7'> -->
			<el-pagination class="pages" style="margin: 0px auto;" @current-change="handleCurrentChange"  layout="prev, pager, next, jumper" :page-count="conunt" :pager-count='7'>
			</el-pagination>
		</div>val
		
	</div>
</template>

<script>
	//import ProductBig from '@/components/ProductBig.vue'

	export default {
		name: 'buycomm',
		//components: { ProductBig },
		watch: {
			option: {
				handler(val) {
					console.log(val)
					this.bayCarList()
				},
				deep: true
			}
		},

		data() {
			return {
				hiddenText: '更多',
				hiddenWidth: 50 + 'px',
				carList: [],
				conunt:1,
				p:1,
				filt: {
					carCate: [],
					carAttr: [],
					areaList: [],
					pay_num: [],
					carColor: [],
					mileage: [],
					card_time: [],
					transfer: []
				},
				areaProp: {
					checkStrictly: true,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						// const {
						// 	level
						// } = node;
						const nodes = await this.getAreasp(node.value)
						// 通过调用resolve将子节点数据返回，通知组件数据加载完成
						resolve(nodes)
					}.bind(this)
				},
				option: {
					category: [],
					attribute: [],
					province: [],
					pay_num: [],
					mileage: [],
					color: [],
					card_time: [],
					transfer: [],
					title: ''
				},
			}
		},
		created() {
			//this.bayCarList()
			this.getbaycarlist()
			/* 一大波筛选数据的获取 */
			this.getCarCategory()
			this.getCarAttr()
			//this.getCarMileage()
			//this.getCarColor()
			//this.getShoudong()
		},
		methods: {
			
			//获取车辆列表
			getbaycarlist(){
				this.$api.shangjiache({
					p:this.p					
				}).then(res=>{
					console.log(res)
					this.carList = res.data;
					for (let i = 0; i < this.carList.length; i++) {
						let ings = this.carList[i].images.split(",");
						//console.log(ings)
						this.carList[i].images = ings
					}
				})
			},
			
			//去发拍添加
			qufapai(){
				this.$router.push({
					path: '/person/design',					
				});
			},

			//跳转车辆详情页
			tiaozhuan(id) {
				console.log(id)
				window.open(`index.html#/cardetail?id=${id}`, '_blank')
				//this.$router.push('/auctionhome/AuctionDetail?id=' + id);
			},

			showMore() {
				if (this.hiddenWidth == 'auto') {
					this.hiddenWidth = 50 + 'px'
					this.hiddenText = '更多'
				} else {
					this.hiddenWidth = 'auto';
					this.hiddenText = '收起'
				}
			},
			toDetail(id,sid) {
				window.open(`index.html#//cardetail?id=${id}sid=${sid}`, '_blank')
				// this.$router.push(`/cardetail?id=${id}`)
			},
			/* 获取列表 */
			bayCarList() {
				let params = {
					category: this.option.category.toString(),
					attribute: this.option.attribute.toString(),
					// province: this.option.province[this.option.province.length - 1],
					city: this.option.province[1],
					area: this.option.province[2],
					province: this.option.province[0],
					pay_num: this.option.pay_num.toString(),
					mileage: this.option.mileage.toString(),
					color: this.option.color.toString(),
					card_time: this.option.card_time.toString(),
					transfer: this.option.transfer.toString()=='不限'?"":this.option.transfer.toString()=='能'?1:0,
					title: this.option.title,
					p:this.p,
					//row:2
				}
				if (!params.attribute) delete params.attribute
				
				this.$api.bayCarList(params).then(res => {
					// console.log(res);
					this.carList = res.data.list;
					this.conunt=res.data.count

					for (let i = 0; i < this.carList.length; i++) {
						let ings = this.carList[i].image.split(",");
						//console.log(ings)
						this.carList[i].image = ings
					}
					//console.log(this.carList);
				})
			},
			//分页
			handleCurrentChange(val) {
				//console.log(`当前页: ${val}`);
				this.p = val
				this.bayCarList();
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},
			
			/* 一大波筛选数据的获取 */
			getCarCategory() {
				this.$api.getCarCategory().then(res => {
					this.filt.carCate = res.data
				})
			},
			getCarAttr() {
				this.$api.carAttribute().then(res => {
					this.filt.carAttr = res.data
				})
			},
			getCarMileage() {
				this.$api.carMileage().then(res => {
					this.filt.mileage = res.data
					//console.log(this.filt.mileage)
				})
			},
			getCarColor() {
				this.$api.carColor().then(res => {
					this.filt.carColor = res.data
				})
			},
			/* 价格手动 */
			getShoudong() {
				this.filt.pay_num = ['3万元以下', '3-5万', '5-7万', '7-9万', '9万元以上']
				this.filt.card_time = ['1年以内', '1-3年', '3-5年', '5-8年']
				this.filt.transfer = ['能', '不能']
			},

			/* 三级联动 */
			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						value: item.id,
						label: item.name
					})
				});
				return tempArr
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
	@import url("../assets/base.less");
	
	.fapai{
		position: relative;
		right: -95%;
		text-decoration: underline;
		color: blue;
		cursor: pointer;
	}
	
	.buycomm {
		padding-top: 25px;
		background-color: #f5f5f7;
	}

	.bottom-line {
		display: flex;
		margin-bottom: 35px;
		align-items: flex-end;
		position: relative;
	}

	.line-right {
		float: right;
	}

	.line {
		margin-bottom: 22px;
		text-align: left;
		font-size: 18px;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 35px;
	}

	.line-left {
		width: 150px;
		display: inline-block;
		text-align: left;
		font-size: 20px;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}

	/* 此处代码粘贴，可能重复，明白就好了 */

	.bottom-line {
		.b-btn-title {
			font-size: 24px;
			font-family: MicrosoftYaHei;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);
			// line-height: 90px;
			position: absolute;
			top: 10px;
			left: 10px;
		}
	}

	.line {
		position: relative;

		.line-left {
			width: 150px;
			display: inline-block;
			text-align: left;
			font-size: 20px;
			font-weight: 400;
			color: rgba(102, 102, 102, 1);
		}

		.line-right {
			float: right;
		}

		.line-right-inner {
			overflow: hidden;
			height: 50px;
			// width: 960px;
			width: 965px;
			float: right;
		}

		margin-bottom: 22px;
		text-align: left;
		font-size: 18px;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		line-height: 35px;
	}

	/deep/ .el-cascader {
		width: 70%;
	}

	/deep/ .el-checkbox-group {
		display: inline-block;
	}

	/deep/ .el-checkbox__input {
		display: none;
	}

	/deep/ .el-checkbox__label {
		font-size: 18px;
		font-weight: 400;
		color: #666666;
		line-height: 35px;
		padding: 0;
	}

	/deep/ .is-checked {
		background: rgba(51, 133, 255, 1);
		border-radius: 10px;
		color: #fff;
		line-height: 30px;

		/deep/ .el-checkbox__label {
			color: #fff;
		}
	}

	/deep/ .option:first-of-type {
		// margin-left: 0;
		//border: none;
	}

	/deep/ .option {
		padding: 0;
		display: inline-block;
		padding: 0 5px;
		margin: 0 25px 5px 0;
		height: 36px;
	}

	/* 此处代码粘贴，可能重复，明白就好了 --- end */

	.more {
		font-size: 18px;
		cursor: pointer;
		text-decoration: underline;
		color: rgba(239, 26, 26, 1);
		position: absolute;
		right: -30px;
	}

	.option-card {
		width: @conent-width;
		// height: 430px;
		box-sizing: border-box;
		margin: 0 auto;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 9px 9px 0px rgba(0, 0, 0, 0.04);
		border-radius: 10px;
		padding: 40px;
	}

	.bottom-line {
		.search-title {
			font-size: 26px;
			color: rgba(51, 51, 51, 1);
			line-height: 54px;
			margin-right: 50px;
		}

		.search {
			padding-left: 10px;
			width: 356px;
			height: 47px;
			background: rgba(238, 238, 238, 1);
			margin-right: 50px;
			border-radius: 10px;
			left: 309px;
			top: 30px;
		}

		.search-button {
			width: 122px;
			height: 50px;
			background: rgba(51, 133, 255, 1);
			border-radius: 10px;
			cursor: pointer;
			font-size: 22px;
			color: rgba(255, 255, 255, 1);
			left: 539px;
			position: absolute;
		}

		.shoucang {
			width: 209px;
			height: 83px;
			background: rgba(53, 208, 163, 1);
			border-radius: 10px;
		}

		.jilu {
			width: 209px;
			height: 83px;
			background: rgba(255, 204, 40, 1);
			border-radius: 10px;
		}
	}

	/* 列表 */
	.prolist {
		background-color: #fff;
		margin-top: 30px;
		padding: 20px;
		padding-bottom: 30px;

		.inner {
			width: @conent-width;
			margin: 0 auto;
			display: flex;
			// justify-content: space-between;
			flex-wrap: wrap;
			margin-bottom: -20px;

			.pro-item {
				margin-bottom: 20px;
				margin-right: 12px;
			}
		}
	}



	.main_item {
		cursor: pointer;
		/* background-color: #373B41;*/
		/* height: 220px;*/
		height: 348px;
		;
		/*margin: 0 auto 22px auto;*/
		margin: 10px 10px;
		border: 2px solid #dcdcdc;
		float: left;

	}

	.main_item:hover {
		border: 2px solid #800019;

	}



	.el-col-offset-0 {
		margin-left: 0;
		margin-top: 0;
	}

	.main_item .el-card {
		height: 100%;
	}

	.main .Starting_price {
		color: #868686;
		bottom: 0;
	}

	.main .price {
		color: #800019;
		font-size: 24px;
		margin-bottom: 5px;
	}

	.main .end_time {
		color: #868686;
		margin-top: 10px;
	}

	.image {
		object-fit: contain;
		width: 100%;
		height: 100%;
		//height: 253px;
		display: block;
	}
	
	
</style>
