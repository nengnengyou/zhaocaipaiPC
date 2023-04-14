<template>
	<div>
		
		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="本批次竞拍规则及描述" v-if="piciVisible" :visible.sync="piciVisible" width="50%">
			<div style="height: 40%; overflow: auto;">
				<p v-html="xieyi2.txt"></p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="piciVisible = false">取 消</el-button>
				<el-button type="primary" @click="tiaozhuan">同 意</el-button>
			</span>
		</el-dialog>

		<div class="box" ref="box">
			<div class="banner">
				<banner />
				<!-- 搜索框-->
				<!-- <div class="search">					
					<div class="el-input el-input-suffix"> <-el-input -*2 suffix
						<input style="background-color: transparent;  border: 0.5px solid #000;" type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
						<span @click="search1" class="el-input__suffix"><span class="el-input__suffix-inner">
								<i class="el-input__icon el-icon-search"></i>
							</span>
						</span>
					</div>
				</div> -->

				<!-- 竞拍场次 -->

				<div class="Scene">

					<div class="home_top">
						<!-- 场次分类-->

						<div style="margin: 0 auto;width: 1170px;;">
							<ul style="list-style: none;">
								<li @mouseover="hover('86px')" style="float: left;" class="cangciitem item1"> <a href="index.html#/auctionhome" target='_blank'><img
										 class="navimage" id="li1" ref="li1" src="../assets/images/home/home_pczc1.jpg" alt=""></a></li>
								<li @mouseover="hover('285px')" style="float: left;" class="cangciitem item2"> <a href="index.html#/conveniently" target='_blank'><img
										 class="navimage" ref="li2" id="li2" src="../assets/images/home/home_sspw2.jpg" alt=""></a></li>
								<li @mouseover="hover('477px')" style="float: left;" class="cangciitem item3"> <a href="index.html#/buycomm" target='_blank'><img
										 class="navimage" ref="li3" id="li3" src="../assets/images/home/home_sjcy2.jpg" alt=""></a></li>
								<!-- <li @mouseover="hover('581px')" style="float: left;" class="cangciitem item4"><img class="navimage" id="li4" src="../assets/images/home/home_pjsc1.jpg"
									 alt=""></li> -->
								<li @mouseover="hover('670px')" style="float: left;" class="cangciitem item5"><a href="index.html#/service" target='_blank'><img
										 class="navimage" ref="li5" id="li5" src="../assets/images/home/home_cyfw2.jpg" alt=""></a></li>
								<li @mouseover="hover('870px')" style="float: left;" class="cangciitem item6"><a href="index.html#/quan" target='_blank'><img
										 class="navimage" ref="li6" id="li6" src="../assets/images/home/home_cyq2.jpg" alt=""></a></li>
								<li @mouseover="hover('1060px')" style="float: left;" class="cangciitem item7"> <a href="index.html#/live" target='_blank'><img
										 class="navimage" ref="li7" id="li7" src="../assets/images/home/home_jczb2.jpg" alt=""></a></li>
							</ul>

						</div>



						<span class="sanjiao" ref="sj">
							<img src="../assets/images/sanjiao.png" alt="">
						</span>

						<!-- 场次内容-->
						<div class="Venue_content">

							<div class="Venue_content_text" ref="text" style="height: 100%; width: 100%;">
								<!--<div style="width: 300px;height: 300px;text-align: center;background-color: #1469E2; margin: 10px auto 0 auto;">
						
						</div> -->
								<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">
									<p style="margin-bottom: 16px;">竞拍中批次</p>

									<span class="top_che">二手车:{{top.che[1].length}}</span>
									<span class="top_che">债权车:{{top.che[2].length}}</span>
									<span class="top_che">事故车:{{top.che[3].length}}</span>
									<span class="top_che">商用车:{{top.che[4].length}}</span>
									<span class="top_che">公共资源:{{top.che[5].length}}</span>
									<span class="top_che">新车直供:{{top.che[6].length}}</span>
									<span class="top_che">新能源:{{top.che[7].length}}</span>

								</div>

							</div>

						</div>

					</div>


					<!-- 竞拍中-->
					<!-- <div class="Auction" ref="Auction">

						<a href="" class="you">我要发拍</a>

						<el-tabs v-model="activeName" type="card">
							<el-tab-pane :label="AuctionS" name="first">
								<div class="Auction_content">
									<span style="display: block;width: 97px;margin: 0 auto;" v-if="zhanwu">暂无竞拍车辆</span>
									<div v-if="!zhanwu" class="Auction_content_item" v-for="item in package" :key="item.id" @click="tiaozhuan(item.id,item.title,item.company,item.car_num)">

										<div class="Auction_content_item_left">
											<p style="font-size: 15px;display: block;height: 197px;overflow: hidden;" v-html="item.desc"></p>
											<span style="padding-left: 14px;">{{item.company}}</span>

										</div>

										<div class="Auction_content_item_right">
											<div style="float: left;">

												<p class="item-title">{{item.title}}</p>

												<div class="item-store">													
													<div>
														竞拍方式:
														<span class="item-text">{{item.is_pack=="1"?"打包拍":""}}{{item.is_vip=="1"?" 会员拍":""}}{{" "+item.status_text}}</span>
													</div>

												</div>

												<div class="item-store">





													<div>
														开始时间:
														<span class="item-text"> {{timestampToTime(item.start_time)}} </span>
													</div>

													<div>结束时间:

														<span class="item-text"> {{timestampToTime(item.end_time)}} </span>
													</div>

												</div>

											</div>

											<div style="
											background-color: #008060; 
											color: #f6f6ea;
											width: 80px; 
											height:  102px; 
											float: right;
											text-align: center;">
												<p><span class="side-text">{{item.car_num}}</span></p>
												<p><span class="side-num">辆</span></p>


											</div>

										</div>

									</div>

								</div>

							</el-tab-pane>
						</el-tabs>

						<a href="/auctionhome" style="    position: absolute;
    right: 0;
    bottom: 0;     font-size: 16px;
    color: rgb(123, 121, 121);">更多>></a>
					</div> -->


					<!-- 竞拍中-->

					<div class="Auction" ref="Auction">
						<span class="Auction_title">{{AuctionS}}</span>
						<a href="" class="you">我要发拍</a>
						<div style="padding-top: 30px;">


							<div class="Auction_content">
								<span style="display: block;width: 97px;margin: 0 auto;" v-if="zhanwu">暂无竞拍车辆</span>
								<!-- <div class="Auction_content_item" v-for="(item,index) in package" :key="index" @click="tiaozhuan(item.id,item.title,item.company,item.car_num)"> -->
								<!-- <div v-if="!zhanwu" class="Auction_content_item" v-for="item in package" :key="item.id" @click="tanchutieyi(item.id,item.start_time,item.desc+item.rule)"> -->
									<div v-if="!zhanwu" class="Auction_content_item" v-for="item in package" :key="item.id" @click="tiaozhuan(item.id)">
									
									<div class="Auction_content_item_left">
										<!-- <img src="../assets/images/jp_you3.jpg" alt=""> -->

									</div>

									<div class="Auction_content_item_right">
										<div style="float: left;">

											<p class="item-title">{{item.title}}</p>

											<div class="item-store_2">
												<!-- 送拍机构:
											<span class="item-text">{{item.company}}</span> -->
												<div>
													<span class="item-text" style="padding: 0;">{{item.is_pack=="1"?"打包":"单台"}}{{item.status_text}}{{item.is_vip=="1"?" 会员拍":""}}</span>
												</div>

											</div>
										</div>


										<!-- <div style="background-color:#919191; height: 75px; line-height: 75px; float: right; text-align: center; padding: 0px 10px;">
											<p><span class="side-text">已结束</span></p> -->

										<div style="background-color:#0f94fa; height: 75px; line-height: 75px; float: right; text-align: center; padding: 0px 10px;">
											<p><span class="side-text">{{item.car_num}}辆</span></p>

											<!-- <p><span class="side-num">辆</span></p> -->


										</div>
										<p style="    padding-top: 5px;
    font-size: 14px;
    color: rgb(125, 125, 125);
    padding-left: 20px;
    display: block;
    height: 113px;
    width: 527px;
    overflow: hidden;
    float: left;"
										 v-html="item.desc"></p>


										<div style=" padding-left: 8px; float: left;display: flex;">

											<!-- 
											<div>
												开始时间:
												<span class="item-text"> {{timestampToTime(item.start_time)}} </span>
											</div>
										
											<div>结束时间:
										
												<span class="item-text"> {{timestampToTime(item.end_time)}} </span>
											</div> -->
											<div>
												<span class="item-text">{{item.company}}</span>
											</div>

											<div class="item-text" style="position: absolute;right: 148px;">结束时间:

												<span class="item-text" style="color: #f42121;"> {{timestampToTime(item.end_time)}} </span>
											</div>

										</div>
									</div>

								</div>

							</div>

						</div>

						<a href="index.html#/auctionhome" style="    position: absolute;
					right: 10px;
					bottom: 7px;     font-size: 16px;
					color: rgb(123, 121, 121);">更多>></a>
					</div>


					<!-- 随手拍物 -->
					<div class="Auction2">
						<span class="Auction_title">随手拍</span>

						<!-- <el-tabs v-model="activeName" type="card"> -->
						<!-- <el-tab-pane label="随手拍物" name="first"> -->

						<div style="padding-top: 30px;">
							<el-row style="width: 1100px; margin: 0 auto;">
								<el-col :span="3" v-for="(o, index) in Conveniently" :key="index" style="
									    width: 255px;
									    margin: 10px 10px 0px;">

									<!-- 24.7% :offset="index > 0 ? 2 : 0" -->
									<el-card :body-style="{ padding: '0px', }">
										<img :src="Conveniently[index].imgSrc" class="image">
										<div style="padding: 11px;">
											<span style="
												width: 252px;
												display: block;
												height: 18px;
												overflow: hidden;">商品名称:{{Conveniently[index].Name}}</span>
											<div class="bottom clearfix">

												<div class="time">当前价格:{{ Conveniently[index].Price }}</div>

												<div class="time">出价次数:{{ Conveniently[index].Frequency }}</div>

											</div>
											<div class="time" style="float: right;">{{ Conveniently[index].Time}}</div>
										</div>
									</el-card>
								</el-col>
							</el-row>

						</div>



						<!-- </el-tab-pane> -->

						<!-- </el-tabs> -->

						<a href="index.html#/conveniently" style="   position: absolute;
					right: 10px;
					bottom: 7px;     font-size: 16px;
					color: rgb(123, 121, 121);">更多>></a>
					</div>


					<!-- 商家车源-->
					<div class="Auction3">

						<span class="Auction_title">商家车源</span>

						<div style="padding-top: 30px;">


							<div class="Auction3_item">

								<!-- <el-tabs v-model="activeName" type="card"> -->
								<!-- <el-tab-pane label="商家车源" name="first"> -->

								<el-row>
									<el-col :span="8" v-for="item3 in business" :key="item3.id" style="width: 278px; margin-left: 6px;">
										<el-card :body-style="{ padding: '0px',									
											display: 'block',
											background: '#f6f6f6',
											position: 'relative',
											width: '270px',
											height: '345px',
											}">
											<img :src="item3.image[0]" class="image" @click="Auction3_item(item3.id,item3.shop_id)">
											<div style="padding: 14px;">
												<span class="card-title" @click="Auction3_item(item3.id)">商品名称:{{item3.title}}</span>
												<div class="bottom clearfix">

													<div class="time">地址:{{ item3.province}}-{{item3.area}}</div>

													<div class="time">车牌号:{{ item3.carno}}</div>

												</div>
												<div class="time" style="float: right;">公里数：{{ item3.mileage}}</div>
											</div>
										</el-card>
									</el-col>
								</el-row>

								<!-- </el-tab-pane> -->

								<!-- </el-tabs> -->
							</div>

						</div>


						<a href="index.html#/buycomm" style="   position: absolute;
					right: 10px;
					bottom: 7px;     font-size: 16px;
					color: rgb(123, 121, 121);">更多>></a>
					</div>


					<!-- 888 -->
				</div>

			</div>


		</div>



	</div>

</template>

<script>
	import banner from './banner.vue'
	export default {
		name: 'home',
		components: {
			banner
		},


		//created
		created() {
			this.getConveniently();
			this.getResources();
			//this.submit();
			//this.likeCarList();
			this.getHome_top_1();

		},
		mounted() {
			//this.auction(1);
		},
		methods: {

			getHome_top_1() {
				for (let i = 1; i <= 7; i++) {
					this.$api.getSessionList({
						catid: i,
						type: 2,
					}).then(res => {
						this.top.che[i] = res.data.list.data
					})
				}
				//console.log(this.top)
			},


			search1() {
				console.log('1')
			},


			//鼠标经过，控制三角
			hover(i) {
				//this.$refs.li1.src="http://new.zhaocaipaipai.com/uploads/pc/home_pczc2.jpg"
				// this.$refs.li2.src="http://new.zhaocaipaipai.com/uploads/pc/home_sspw2.jpg"
				// this.$refs.li3.src="http://new.zhaocaipaipai.com/uploads/pc/home_sjcy2.jpg"
				// // this.$refs.li4.src="../assets/images/home/home_jczb2.jpg"
				// this.$refs.li5.src="http://new.zhaocaipaipai.com/uploads/pc/home_cyfw2.jpg"
				// this.$refs.li6.src="http://new.zhaocaipaipai.com/uploads/pc/home_cyq2.jpg"
				// this.$refs.li7.src="http://new.zhaocaipaipai.com/uploads/pc/home_jczb2.jpg"


				//this.$refs.sj.style.marginLeft = i;
				// switch (i) {
				// 	case '86px':
				// 		this.auction('1');
				// 		this.$refs.li1.src="http://new.zhaocaipaipai.com/uploads/pc/home_sspw1.jpg"
				// 		break;
				// 	case '285px':
				// 		this.auction('2');
				// 		this.$refs.li2.src="http://new.zhaocaipaipai.com/uploads/pc/home_pczc1.jpg"
				// 		break;
				// 	case '477px':
				// 		this.auction('3');
				// 		this.$refs.li3.src="http://new.zhaocaipaipai.com/uploads/pc/home_sjcy1.jpg"
				// 		break;
				// 	case '670px':
				// 		this.auction('4');
				// 		this.$refs.li5.src="http://new.zhaocaipaipai.com/uploads/pc/home_cyfw1.jpg"
				// 		break;
				// 	case '870px':
				// 		this.auction('5');
				// 		this.$refs.li6.src="http://new.zhaocaipaipai.com/uploads/pc/home_cyq1.jpg"
				// 		break;
				// 	case '1060px':
				// 		this.auction('6');
				// 		this.$refs.li7.src="http://new.zhaocaipaipai.com/uploads/pc/home_jczb1.jpg"
				// 		break;
				// }

			},
			//显示内容
			auction(i) {
				console.log(i)
				this.$refs.text.innerHTML = this.text[i - 1].html + i + '</div>';

			},

			//获取资源包
			getResources() {
				this.$api.getSessionList({
					type: 2
				}).then(response => {
					console.log(response);

					/* for (let i = 0; i < response.data.list.data.length; i++) {

						this.package.push(response.data.list.data[i]);
					} */

					//获取当前时间
					/* var date = new Date();
					var now = date.getTime();
					var endtime=0;
					console.log(now);
					for(let i=0;i<this.package.length;i++){
						endtime=this.package[i].end_time*1000;
						endtime=endtime-now;
						console.log(endtime);
						if(endtime<=0){
							//this.packagez.push({index:i});	
							this.package.splice(i,1);
								i--;
						}						
					} */

					/*测试*/

					if (response.data.list.data.length == 0) {
						console.log(111)
						this.$refs.box.style.height = this.boxh + 246 * 3 + "px";

						//修改父div高度  // - 60 * this.package.length
						this.$refs.Auction.style.height = 246 * 3 + 58 + "px";
						this.zhanwu = true
						return
					}

					if (response.data.list.data.length <= 3) {
						for (let i = 0; i < response.data.list.data.length; i++) {
							this.package.push(response.data.list.data[i]);
						}
						this.package.h=this.package.length
					} else {
						for (let i = 0; i < 3; i++) {

							this.package.push(response.data.list.data[i]);
						}
						this.package.h=response.data.list.auction
					}


					console.log(this.package);
					//console.log(i);

					//修改box的高度
					if (this.package.length > 0) {
						this.$refs.box.style.height = this.boxh + 246 * this.package.length + "px";

						//修改父div高度  // - 60 * this.package.length
						this.$refs.Auction.style.height = (246 * this.package.length) + 58 + "px";
					}




					this.setAuction();

					//console.log(this.package[3].id)					

					return;
				})
			},


			//修改竞拍中标题数量
			setAuction() {
				console.log(this.package.length);
				//竞拍中标题数量
				this.AuctionS = '竞拍中(' + this.package.h + ')';
				console.log(this.AuctionS);
			},

			
			//资源包跳转前的同意协议
			tanchutieyi(id, time,txt){
				this.xieyi2.id=id
				this.xieyi2.time=time	
				this.xieyi2.txt=txt
				this.piciVisible=true
			},

			//资源包的跳转
			tiaozhuan(id) {
				//this.$router.push('auctionhome/auction?id=' + id);
				//let sll = sl + "";
				// window.open('auctionhome/auction?id=' + id + '&pc=' + title + '&gs=' + gs + '&sl=' + sll, '_blank');
				window.open('index.html#/auctionhome/auction?id=' + id, '_blank');

			},

			//获取随手拍物
			getConveniently() {
				this.Conveniently.imgSrc =
					'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png';
				console.log(this.Conveniently.imgSrc);

			},

			//获取推荐车辆
			likeCarList() {
				this.$api.bayCarList({
					row: 4
				}).then(response => {
					//var data = response.data.list;
					this.business = response.data.list
					this.business = this.chuli(this.business)
					console.log(this.business);
					//business


				})

			},

			//推荐车辆-->车辆详情
			Auction3_item(id, sid) {
				//console.log(id);
				window.open(`index.html#/cardetail?id=${id}&sid=${sid}`, '_blank')

			},

			//处理图片数组
			chuli(arr) {
				//var arr2=[]
				for (let i = 0; i < arr.length; i++) {
					let ings = arr[i].image.split(",");
					//console.log(ings)
					arr[i].image = ings
				}
				console.log(arr)
				return arr
			},





			//时间戳转换
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				return Y + M + D + h + m + s;
			},

		},
		data() {
			return {
				
				//资源包协议
				piciVisible:false,
				xieyi2:{
					id:'',
					time:'',
					txt:'',
				},

				top: {
					che: {
						1: [],
						2: [],
						3: [],
						4: [],
						5: [],
						6: [],
						7: [],
					}
				},

				zhanwu: false,

				search: '',
				//activeName: 'second',
				activeName: 'first',
				url: {
					url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
					zb: "../assets/images/home_zb_1.jpg"
				},
				boxh: 1952, //box的高度
				Auction: 0, //Auction  拍卖中 高度

				//竞拍中数量
				AuctionS: '竞拍中',

				//场次内容
				text: [{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},
					{
						html: '<div style="width: 95%;height: 80%;text-align: center;background-color: #eeeeee;margin: 10px auto 0 auto; ">1+'
					},

				],

				//资源包
				packagez: [],
				package: [],


				//随手拍
				Conveniently: [{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					},
					{
						imgSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
						Name: '1111',
						Price: '500',
						Frequency: 'qqqq',
						Time: '1天21时36分'
					}

				],

				//商家车源
				business: [],

				//商家车源-->推荐车辆id
				businessID: {
					car_id: ''
				},


			}
		}
	}
</script>



<style lang="less" scoped>
	.box {
		position: relative;
		height: 1952px;
		//background-color: #f7f7f7;


	}

	.banner {
		position: relative;

	}

	.search {
		cursor: pointer;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 259px;
		left: 50%;
		width: 500px;
		opacity: 0.8;
		z-index: 1;
	}

	.Scene {
		width: 1200px;
		/*height: 2020px; */
		position: absolute;
		// top: 340px;
		top: 305px;
		left: 50%;
		z-index: 2;
		background-color: #FFF;
		transform: translateX(-50%);
		border-radius: 10px //border: 1px solid #000000;
	}

	.home_top {
		/* margin-top: 0; */
		border: 1px solid #dfe3e3;
		border-top: 0;
		border-radius: 10px;
		box-shadow: 0 1px 4px 0 rgba(88, 100, 117, .2);

	}

	.Scene ul {
		margin: 0 auto;
		width: 1170px;
		height: 185px;
		padding: 0;
		margin: 0;
	}

	// .Scene ul li #li1:hover {
	// 	content: url("../assets/images/home/home_pczc1.jpg");
	// }

	.Scene ul li #li2:hover {
		content: url("../assets/images/home/home_sspw1.jpg");
	}

	.Scene ul li #li3:hover {
		content: url("../assets/images/home/home_sjcy1.jpg");
	}

	.Scene ul li #li5:hover {
		content: url("../assets/images/home/home_cyfw1.jpg");
	}

	.Scene ul li #li6:hover {
		content: url("../assets/images/home/home_cyq1.jpg");
	}

	.Scene ul li #li7:hover {
		content: url("../assets/images/home/home_jczb1.jpg");
	}


	.nav1 {
		margin: 0px 0 0 21px;
		height: 124px;
		width: 147px;
	}

	.navimage {
		//height: 137px;
		//width: 156px;
		background-color: #909399;

	}

	.cangciitem {
		margin: 10px 5px 0 5px;
		/*margin-right: 10px;*/
		height: 185px;
		width: 185px;
		//background-color: #000000;
		cursor: pointer;
	}

	.sanjiao {
		margin-left: 86px;
		/*250*/
	}


	.Venue_content {
		//border: 1px solid #000;
		width: 95%;
		height: 100px;
		margin: auto;
	}



	.spbottom {
		border-bottom: 1px solid #000;
		height: 1px;
		width: 100%;
		display: block;
	}

	.you {
		position: absolute;
		right: 5px;
		top: 17px;
		font-size: 18px;
		z-index: 999;
		color: #000;

	}

	.Auction_title {
		font-size: 26px;
		position: relative;
		top: 13px;
		left: 18px;
	}

	.Auction {
		//border: 1px solid #000;
		width: 100%; //95		
		position: relative;
		/*height: 1400px;*/
		margin: 20px auto 0 auto;

		//padding-top:30px ;
		height: 796px;
		border: 1px solid #dfe3e3;
		border-top: 0;
		border-radius: 10px;
		box-shadow: 0 1px 4px 0 rgba(88, 100, 117, 0.2);

	}

	.Auction_content {
		width: 80%;
		/*height: 515px;*/
		margin: 0 auto 0 auto;
		//background-color: bisque;
	}

	.Auction_content_item {
		cursor: pointer;
		//background-color: #373B41;
		height: 220px;
		width: 95%;
		margin: 0 auto 22px auto;
		border: 2px solid #dcdcdc;

	}

	.Auction_content_item:hover {
		border: 2px solid #0f94fa; //#800019;

	}


	.Auction_content_item_left {
		float: left;
		width: 350px;
		height: 100%;
		//background-color: #1469E2;
		background-image: url(../assets/images/jp_you3.jpg);

	}

	.Auction_content_item_right {
		float: right;
		width: 560px;
		height: 100%;
		background-color: #eeeeee;
	}


	/*随手拍物*/

	.Auction2 {
		//border: 1px solid #000;
		width: 100%; //95%;
		height: 700px;
		position: relative;
		margin: 20px auto 0 auto;

		border: 1px solid #dfe3e3;
		border-top: 0;
		border-radius: 10px;
		box-shadow: 0 1px 4px 0 rgba(88, 100, 117, 0.2);

	}

	/*商家车源*/
	.Auction3 {
		//border: 1px solid #000;
		width: 100%; // 95%;
		height: 442px;
		position: relative;
		margin: 20px auto 14px auto;

		border: 1px solid #dfe3e3;
		border-top: 0;
		border-radius: 10px;
		box-shadow: 0 1px 4px 0 rgba(88, 100, 117, 0.2);

	}

	/*.el-col-offset-2,
	.el-col-offset-0 {
		border: 2px solid #dcdcdc;

	}*/

	.Auction2 .el-card,
	.Auction3 .el-card {
		border: 2px solid #dcdcdc;
	}

	.Auction2 .el-card:hover,
	.Auction3 .el-card:hover {
		border: 2px solid #800019;
		cursor: pointer;
	}



	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}


	.image {
		width: 100%;
		height: 207px;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}



	.el-col-offset-2,
	.el-col-offset-0 {
		margin-left: 7px;
		margin-top: 9px;
	}



	.item-title {
		display: block;
		padding-top: 12px;
		padding-left: 20px;
		line-height: 30px;
		text-align: left;
		width: 301px;
		color: #1b1b1b;
		font-size: 24px;
		font-weight: 700;
	}

	.item-store {
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 12px;

	}

	.item-store_2 {
		padding-left: 20px;
		padding-top: 4px;
		//padding-bottom: 10px;
	}

	.item-show-time {}


	.item-text {
		padding-left: 14px;
		font-size: 20px;
		color: #434343;
	}

	.side-num {
		font-size: 34px;
		width: 80px;
		text-align: center;
		font-family: Tahoma;
	}

	.side-text {
		color: #fff;
		font-size: 34px;
		font-weight: 700;
		//width: 80px;
		text-align: center
	}

	.card-title {
		display: block;
		width: 250px;
		height: 55px;
		overflow: hidden;
	}

	.top_che {
		margin-left: 10px;
	}
</style>
