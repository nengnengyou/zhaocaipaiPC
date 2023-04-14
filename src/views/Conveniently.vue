<template>
	<div class="auc" ref="auc" style="border: 2px solid #ccc;
    margin: 0px auto 0 auto;
    width: 1200px;">
	
	
		<!-- <div class="sousuo">  顶部预留位置		</div> -->

		<div class="sort-bar-wrap">
			<div class="sort-orders">
				<div class="sort-orders">
					<div class="sou">						

						<el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin: auto;">
							<el-form-item label="急速拍" style="font-size: 16px;">
								<el-input v-model="formInline.carNum_or_carVin" placeholder="输入车牌号"></el-input>
							</el-form-item>

							<el-form-item>
								<el-button type="primary" @click="onSubmit">查询</el-button>
								<el-button type="primary" @click="getcarlist">重置</el-button>

							</el-form-item>
							<div style="height: 42px; margin: 0 20px;width: 2px;background-color: #c0c4cc;display: inline-block;"></div>






							<el-button type="primary" round @click="goBulk" style="float: right;margin-left: 10px;">保证金</el-button>



							<!--<router-link to="/person/myauction" tag="button" style="float: right;">
								<el-button type="primary" round>竞拍记录</el-button>
							</router-link>


							<router-link to="/person/collect/pai" tag="button" style="float: right;">
								<el-button type="primary" round>竞拍收藏</el-button>
							</router-link> -->

							<el-button type="primary" round @click='goCollection' style="float: right;">拍物提醒</el-button>

							<el-button type="primary" round @click='goRecord' style="float: right;">我的竞拍</el-button>











						</el-form>



					</div>

				</div>

			</div>

		</div>


		<div class="main" ref='main'>
			<div class="main_content">
				<div class="main_item" v-for="(item, index) in carlist" :key="item.id" @click="tiaozhuan(item.id)">
					<el-row>
						<el-col :span="1" style="width: 275px;">
							<el-card :body-style="{
                    padding: '0px' ,
                    display: 'block',
                    background: '#f6f6f6',
                    position: 'relative',
                    width: '270px',
                    height: '345px',
                    }">
								<img :src="carlist[index].cover" class="image">
								<div style="padding-left: 10px;padding-top: 16px;;">
									<span>{{carlist[index].title}}</span>
									<div class="bottom clearfix" style="position: absolute; bottom: 5px;">

										<div class="Starting_price">起拍价: <span class="price">¥{{carlist[index].start_price}}</span></div>

										<div class="end_time">剩余:
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[0]}}</span>天
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[1]}}</span>时
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[2]}}</span>分
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[3]}}</span>秒

										</div>

									</div>
									<!-- <div class="time">类型：{{ carlist[index].car_type}}</div> -->
								</div>
							</el-card>
						</el-col>
					</el-row>

				</div>


			</div>

		</div>



	</div>




</template>

<script>
	export default {
		name: 'Conveniently',
		data() {
			return {
				session_id: {
					auction_session_id: ''
				},

				carlist: [],

				//搜索表单
				formInline: {
					auction_session_id: '',
					carNum_or_carVin: '',
					page: 1,
				},

				cardtxt: {
					bt: '----',
					gs: '----',
					sl: '----',

				},




			}
		},
		created: function() {

			this.getid(); //获取传值id，获取后直接执行显示函数

		},

		methods: {

			//批量报价
			goBulk() {
				//let id = this.$route.query.id
				window.open(`index.html#/person/wallet/pledge`, '_blank')
			},
			
			//竞拍收藏
			goCollection() {
				//let id = this.$route.query.id
				window.open(`index.html#/person/collect/pai`, '_blank')
			},
			
			//竞拍记录
			goRecord() {
				//let id = this.$route.query.id  
				window.open(`index.html#/person/myauction`, '_blank')
			},
			

			//搜索按钮
			onSubmit() {
				this.formInline.auction_session_id = this.session_id.auction_session_id;
				//this.formInline.auction_session_id=
				this.$api.getSessionList(this.formInline).then(res => {
					console.log(res);
					this.carlist = res.data.data;
					console.log(this.carlist);
					var h = Math.ceil(this.carlist.length / 4); //this.carlist.length%4==0?this.carlist.length/4:this.carlist.length/4+1;
					console.log(h);
					this.$refs.main.style.height = h * 372 + 'px';
					console.log(this.carlist);
				})


			},


			//获取传值id
			getid() {
				/* let loc = location.href;
				let n1 = loc.length; //地址的总长度
				console.log(loc)
				let n2 = loc.indexOf("?"); //取得?号的位置
				let id = decodeURI(loc.substring(n2 + 4, n1));
				console.log(id)
				this.session_id.auction_session_id = id;
				this.getcarlist(); */

				let id = this.$route.query.id;
				this.session_id.auction_session_id = id;
				this.getcarlist();

			},

			//获取车辆列表
			getcarlist() {

				// var a=ax.post('api/auction/getCarList',{'auction_session_id':id,});

				this.$api.getSessionList(this.session_id).then(res => {
					console.log(res);
					this.carlist = res.data.data;
					console.log(this.carlist);
					var h = Math.ceil(this.carlist.length / 4); //this.carlist.length%4==0?this.carlist.length/4:this.carlist.length/4+1;
					console.log(h);
					this.$refs.main.style.height = h * 372 + 'px';
					console.log(this.carlist);
				})


				//加载上方卡片信息
				this.cardtxt.bt = this.$route.query.pc;
				this.cardtxt.gs = this.$route.query.gs;
				this.cardtxt.sl = this.$route.query.sl;




			},

			tiaozhuan(id) {
				//this.$router.push('/auctionhome/AuctionDetail?id=' + id);
				window.open('index.html#/auctionhome/AuctionDetail?id=' + id, '_blank')


			},

			//计算结束剩余时间
			countTime(time) {
				//获取当前时间
				var date = new Date();
				var now = date.getTime();
				//设置截止时间
				var end = time * 1000;
				//时间差
				var leftTime = end - now;
				//定义变量 d,h,m,s保存倒计时的时间
				if (leftTime >= 0) {
					var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
					var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
					var m = Math.floor(leftTime / 1000 / 60 % 60);
					var s = Math.floor(leftTime / 1000 % 60);
				}
				//递归每秒调用countTime方法，显示动态时间效果
				//setTimeout(this.countTime(), 1000);

				return ([d, h, m, s])
			}


		},


	}
</script>

<style lang="less" scoped>
	.sousuo {
		box-sizing: border-box;
		width: 1200px;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0 9px 9px 0 rgba(0, 0, 0, .04);
		border-radius: 10px;
		padding: 40px;
	}

	.main {
		/* border: 1px solid #000;*/
		width: 1200px;
		/*height: 1400px;*/
		/*    height: 332px; *n  */
		margin: 20px auto 0 auto;
	}

	.main_content {

		/*height: 515px;*/
		margin: 0 auto 0 auto;
		background-color: bisque;
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

	.sort-bar-wrap {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
		width: 1190px;
		padding-top: 35px;
	}

	.sort-orders {
		border: 1px solid #dedede;
		background-color: #fafafa;
	}


	.sort-orders {
		text-align: left;
		font-size: 12px;

	}

	.sou {
		display: flex;
	}

	.sou .el-form-item {
		margin-bottom: 0;

	}

	.shoucang,
	.jilu {
		cursor: pointer;
		position: relative;
	}

	.bulk {
		height: 51px;
		width: 60px;
		background-color: #800019;
	}



	.card {
		width: 276px;
		height: 156px;
		background-color: #A4DA89;
		margin-right: 102px;
		margin: 20px;
		position: relative;
	}
</style>
