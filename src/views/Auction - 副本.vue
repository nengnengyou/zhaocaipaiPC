<template>
	<div class="auc" ref="auc" style="
    margin: 0 auto 0 auto;
    width: 1200px;    margin-bottom: 15px;">



		<!-- 进入批次前弹窗协议 -->

		<el-dialog :close-on-click-modal="false" :show-close="false" :close-on-press-escape="false" title="本批次竞拍规则及描述" v-if="piciVisible"
		 :visible.sync="piciVisible" width="50%">
			<div style="height: 400px; overflow: auto;">
				<p v-html="cardtxt.desc+cardtxt.rule"></p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="tiaozhuan2">不同意</el-button>
				<el-button type="primary" @click="piciVisible = false">同 意</el-button>
			</span>
		</el-dialog>


		<!-- <div class="sousuo">顶部预留位置</div> -->

		<div class="sort-bar-wrap">
			<div class="sort-orders">
				<div class="sort-orders">
					<div class="sou">

						<div class="sou_card">
							<div class="card_bt" style="font-size: 22px;margin: 24px;">
								<span>{{cardtxt.title}}</span>
							</div>

							<div class="card_gs" style="position: absolute;bottom: 0px;font-size: 16px;">
								<span style="font-size: 18px; margin-left: 10px; color: #7f0019;">{{cardtxt.company}}</span>
							</div>

							<div class="card_sl" style="position: absolute;bottom: 0px;font-size: 16px;right: 7px;">
								<span style="font-size: 18px; margin-left: 10px; color: #7f0019;">{{cardtxt.car_num}}辆</span>
							</div>

							<div class="card_sl" style="position: absolute;bottom: 48px;font-size: 16px;">
								竞拍方式:
								<span style="font-size: 18px; color: rgb(127, 0, 25);">{{cardtxt.is_pack=="1"?"打包拍":"单台"}}&nbsp;{{cardtxt.is_vip=="1"?"会员拍":""}}&nbsp;{{cardtxt.session_status=="1"?"实时拍":cardtxt.session_status=="2"?" 暗拍":"明拍"}}</span>
							</div>
							
							<div class="card_sl" style="position: absolute;bottom: 23px;font-size: 16px;">
								二轮竞拍:
							<span style="font-size: 18px; color: rgb(127, 0, 25);">&nbsp;{{cardtxt.second==0?'&nbsp;&nbsp;否':'&nbsp;&nbsp;是'}}</span></div>

						</div>

						<el-form :inline="true" :model="formInline" class="demo-form-inline" >

							<div style="position: relative;
    top: 50%;
    transform: translateY(-50%);">
								<el-form-item label="急速拍" style="font-size: 16px;">
									<el-input v-model="formInline.carNum_or_carVin" placeholder="输入标题或车牌号"></el-input>
								</el-form-item>

								<el-form-item>
									<el-button type="primary" @click="getcarlist(formInline.carNum_or_carVin)">查询</el-button>
									<el-button type="primary" @click="getcarlist(null)">重置</el-button>

								</el-form-item>
								<div style="height: 42px; margin: 0 20px;width: 2px;background-color: #c0c4cc;display: inline-block;"></div>



								<el-button type="primary" round @click="goBulk" style="float: right;margin-left: 10px;background-color: rgb(255, 150, 0);">批量报价</el-button>



								<!--<router-link to="/person/myauction" tag="button" style="float: right;">
								<el-button type="primary" round>竞拍记录</el-button>
							</router-link>


							<router-link to="/person/collect/pai" tag="button" style="float: right;">
								<el-button type="primary" round>竞拍收藏</el-button>
							</router-link> -->

								<el-button type="primary" round @click='goRecord' style="float: right;">竞拍记录</el-button>

								<el-button type="primary" round @click='goCollection' style="float: right;">竞拍收藏</el-button>


							</div>
						</el-form>



					</div>

				</div>

			</div>

		</div>


		<div class="main" ref='main'>
			<div class="main_content">
				<div class="main_item" v-for="(item, index) in carlist" :key="item.id" @click="tiaozhuan(item.id)">
					<div class="jiaobiao" v-if="item.is_pack=='1'"></div>
					<div class="jiaobiaotitle" v-if="item.is_pack=='1'">包{{item.pack}}</div>
					<el-row>
						<el-col :span="1" style="width: 275px;">
							<el-card :body-style="{
                    padding: '0px' ,
                    display: 'block',
                   // background: '#f6f6f6',
                    position: 'relative',
                    width: '270px',
                    height: '345px',
                    }">


								<div style="width: 100%;height: 202px;background: #f6f6f6">
									<img :src="carlist[index].car_pic_url" class="image" alt="暂无图片">
								</div>
								<div style="padding-left: 10px;padding-top: 16px;;">
									<span style="    display: block;
    width: 250px;
    height: 38px;
    overflow: hidden;">{{carlist[index].title}}</span>

									<span style="display: block;
    width: 250px;
    height: 20px;
    overflow: hidden;
    margin-top: 4px;">{{carlist[index].car_number.substring(0,carlist[index].car_number.length-3)+"***"}}|{{carlist[index].car_place}}</span>

									<div class="bottom clearfix" style="position: absolute; bottom: 5px;">

										<!-- <div class="Starting_price">{{cardtxt.status=="2"?'起拍价: ':'当前价:'}}<span class="price">¥{{cardtxt.status=="2"?carlist[index].start_price:carlist[index].high_money}}</span></div> -->
										<div class="Starting_price">{{cardtxt.status!="2"?carlist[index].high_money=="0.00"?"起拍价":"当前价":"起拍价"}}<span
											 class="price">¥{{cardtxt.status!="2"?carlist[index].high_money=="0.00"?carlist[index].start_price:carlist[index].high_money:carlist[index].start_price}}</span></div>
										<div class="end_time" v-if="isend">
											<span>竞拍已结束</span>
										</div>

										<div class="end_time" v-if="!isend">剩余:
											<!-- <span style="color: #800019;">{{ countTime(carlist[index].end_time)[0]}}</span>天
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[1]}}</span>时
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[2]}}</span>分
											<span style="color: #800019;">{{ countTime(carlist[index].end_time)[3]}}</span>秒 -->

											<span style="color: #800019;">{{ time.d }}</span>天
											<span style="color: #800019;">{{ time.h }}</span>时
											<span style="color: #800019;">{{ time.m }}</span>分
											<span style="color: #800019;">{{ time.s }}</span>秒

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


	</div>




</template>

<script>
	export default {
		name: 'auction',
		data() {
			return {

				piciVisible: false,

				isend: false,

				time: {
					endtime: 0,
					d: 0,
					h: 0,
					m: 0,
					s: 0
				},


				auction_session_id: '',


				carlist: [],

				//搜索表单
				formInline: {
					auction_session_id: '',
					carNum_or_carVin: '',
					page: 1,
				},

				cardtxt: {
					title: '----',
					company: '----',
					car_num: '----',
				},

				//分页页数
				conunt: 1,

				p: 1,

				type: true,




			}
		},
		
		mounted() {
			this.getid(); //获取传值id，获取后直接执行显示函数
		},
		
		// created() {
		// 	this.getid(); //获取传值id，获取后直接执行显示函数
		// },

		methods: {

			//不同意协议及规则跳转
			tiaozhuan2() {

				this.$confirm('不同意本页面将会被关闭', '警告', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					window.opener = null
					window.open('', '_self')
					window.close()
				}).catch(() => {

				});


				// this.$route.push('/auctionhome')
			},

			//分页
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.p = val
				this.getcarlist();
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},

			//批量报价
			goBulk() {
				let id = this.$route.query.id
				window.open(`index.html#/auctionhome/blukauction?id=${id}`, '_blank')
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
				this.p = 1;
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
				this.auction_session_id = id;
				this.getcarlist();

			},

			//获取车辆列表
			getcarlist(title) {

				// var a=ax.post('api/auction/getCarList',{'auction_session_id':id,});
				this.carlist.length = 0;
				this.$api.getAuctionCar({
					auction_session_id: this.auction_session_id,
					title: title,
					p: this.p
				}).then(res => {
					//console.log(res);	



					if (this.isend2(res.data.list[0].start_time)) {
						this.$message.warning('预排资源包不能查看车辆')
					} else {


						this.carlist = res.data.list;
						//console.log(this.carlist);
						var h = Math.ceil(this.carlist.length / 4); //this.carlist.length%4==0?this.carlist.length/4:this.carlist.length/4+1;
						//console.log(h);
						this.$refs.main.style.height = h * 372 + 'px';
						//console.log(this.carlist);

						this.conunt = res.data.count;
						//console.log(this.conunt);

						// this.cardtxt = res.data.session
						// this.cardtxt.is_vip=res.data.list[0].is_vip
						// this.cardtxt.is_pack=res.data.list[0].is_pack
						// this.cardtxt.session_status=res.data.list[0].session_status

						//更新time内容
						this.time.endtime = this.carlist[0].end_time;
						//console.log(this.time.endtime);
						this.countTime();
					}

					this.cardtxt = res.data.session
					this.cardtxt.is_vip = res.data.list[0].is_vip
					this.cardtxt.is_pack = res.data.list[0].is_pack
					this.cardtxt.session_status = res.data.list[0].session_status

					if (this.type) {
						this.type = false
						this.piciVisible = true
					}
				})



				// //加载上方卡片信息
				// this.cardtxt.bt = this.$route.query.pc;
				// this.cardtxt.gs = this.$route.query.gs;
				// this.cardtxt.sl = this.$route.query.sl;

			},

			/*是否结束*/
			isend2(endtime) {
				//var time = this.time.endtime;
				//console.log(111)

				//获取当前时间
				var date = new Date();
				var now = date.getTime();
				//设置截止时间
				var end = endtime * 1000;
				//时间差
				var leftTime = end - now;
				//定义变量 d,h,m,s保存倒计时的时间
				if (leftTime > 0) {
					return true;
				} else {
					return false;
				}
			},

			//更新time内容
			/* async settime(){
				console.log(this.carlist);
				for (let i=0;i<=this.carlist.length;i++) {
					console.log(this.carlist[i]);
					this.time.push(
					{endtime:this.carlist[i].end_time,
					d:0,
					h:0,
					m:0,
					s:0})
				}
				console.log(this.time);
			}, */

			tiaozhuan(id) {
				//this.$router.push('/auctionhome/AuctionDetail?id=' + id);
				window.open('index.html#/auctionhome/AuctionDetail?id=' + id, '_blank');
			},

			//计算结束剩余时间
			countTime(nowTimea) {

				//获取结束时间
				var time = this.time.endtime;
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
					//递归每秒调用countTime方法，显示动态时间效果
					this.time.d = d;
					this.time.h = h;
					this.time.m = m;
					this.time.s = s;
					setTimeout(this.countTime, 1000);
				} else {
					this.isend = true;
					//console.log('isend=true');
				}

				return ([d, h, m, s])
			}


		},


	}
</script>

<style lang="less" scoped>
	.jiaobiao {
		position: absolute;
		top: 0;
		width: 0;
		z-index: 10;
		height: 0;
		border-top: 56px solid #00bcd4;
		border-right: 56px solid transparent;
	}

	.jiaobiaotitle {
		position: absolute;
		z-index: 11;
	}


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
		margin: 20px auto 12px auto;
	}

	.main_content {

		/*height: 515px;*/
		margin: 0 auto 0 auto;
		background-color: bisque;
	}

	.main_item {
		position: relative;
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

	.main_item .image {
		object-fit: contain;
		width: 100%;
		height: 100%;
		//height: 207px;
		//display: block;
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



	.sou_card {
		width: 276px;
		height: 156px;
		background-color: #525f751f; // #A4DA89;
		margin-right: 102px;
		margin: 20px;
		position: relative;
	}
	
	/deep/ .el-button--primary{
		border-color:rgba(255, 150, 0, 0)
	}
	
</style>
