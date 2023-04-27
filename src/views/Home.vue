<template>
	<div>

		<el-dialog title="填写资料" :visible.sync="dialogVisible" width="30%" :before-close="guachuang">

			<el-form label-position="填写资料" label-width="80px" :model="formLabe">
				<el-form-item label="姓名">
					<el-input v-model="xiugainicheng"></el-input>
				</el-form-item>
				
				<el-form-item label="选择地区">
					<el-cascader style="width: 90%;" :value="diqu" :props="areaProp"></el-cascader>
				</el-form-item>
				
				<el-form-item label="主营模块">
					<el-checkbox-group v-model="zhuying">
						<el-checkbox :label="item.name" name="type" v-for='item in mokuai' :key="item.id"></el-checkbox>					      
					</el-checkbox-group>
				</el-form-item>

				</el-form-item>
				<el-form-item label="">
					<el-button type="primary" @click="tijiao4">确认</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>

		<!-- <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="本批次竞拍规则及描述" v-if="piciVisible"
		 :visible.sync="piciVisible" width="50%">
			<div style="height: 40%; overflow: auto;">
				<p v-html="xieyi2.txt"></p>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="piciVisible = false">取 消</el-button>
				<el-button type="primary" @click="tiaozhuan">同 意</el-button>
			</span>
		</el-dialog> -->

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

					<!-- <div class="home_top"> -->
						<!-- 场次分类-->

						<!-- <div style="margin: 0 auto;width: 1170px;;"> -->
						<!-- <div style="width: 100%; height: 100%;"> -->
							<!-- <ul style="list-style: none;">
								<li @mouseover="hover('86px')" style="float: left;" class="cangciitem item1"> <a href="#/auctionhome"
									 target='_blank'><img class="navimage" id="li1" ref="li1" src="../assets/images/home/top/home_pczc2.jpg" alt=""></a></li>
								<li @mouseover="hover('285px')" style="float: left;" class="cangciitem item2"> <a href="#/conveniently"
									 target='_blank'><img class="navimage" ref="li2" id="li2" src="../assets/images/home/top/home_sspw2.jpg" alt=""></a></li>
								<li @mouseover="hover('477px')" style="float: left;" class="cangciitem item3"> <a href="#/buycomm"
									 target='_blank'><img class="navimage" ref="li3" id="li3" src="../assets/images/home/top/home_sjcy2.jpg" alt=""></a></li>
								<li @mouseover="hover('670px')" style="float: left;" class="cangciitem item5"><a href="#/service"
									 target='_blank'><img class="navimage" ref="li5" id="li5" src="../assets/images/home/top/home_cyfw2.jpg" alt=""></a></li>
								<li @mouseover="hover('870px')" style="float: left;" class="cangciitem item6"><a href="#/quan" target='_blank'><img
										 class="navimage" ref="li6" id="li6" src="../assets/images/home/top/home_cyq2.jpg" alt=""></a></li>
								<li @mouseover="hover('1060px')" style="float: left;" class="cangciitem item7"> <a href="#/live"
									 target='_blank'><img class="navimage" ref="li7" id="li7" src="../assets/images/home/top/home_jczb2.jpg" alt=""></a></li>
							</ul> -->

							<!-- <img style="float: left;" src="../assets/images/home/top/home_top1.jpg" alt=""> -->

							<!-- <div style="width: 100%; height:100%; position: relative;"> -->

								<!-- <div>
									<a href="#/auctionhome">

										<div class="home_top_item top_item1">
											<div class="img1">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/1.jpg" alt="">
											</div>
										</div>
									</a>
								</div> -->

								<!-- <div>
									<a href="#/buycomm">
										<div class="home_top_item top_item2">
											<div class="img2">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/4.jpg" alt="">
											</div>
										</div>
									</a>
								</div> -->

								<!-- <div> -->
									<!-- <a @click="lianxi('功能开发中！')" style="cursor: pointer;"> -->
										<!-- href="#/conveniently"> -->
										<!-- <div class="home_top_item top_item4">
											<div class="img4">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/2.jpg" alt="">
											</div>
										</div>
									</a>
								</div>

								<div> -->
									<!-- <a href="#/service"> -->
									<!-- <a @click="tiaofuwu">
										<div class="home_top_item top_item3">
											<div class="img3">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/3.jpg" alt="">
											</div>
										</div>
									</a>
								</div> -->



								<!-- <div>
									<a href="#/quan">
										<div class="home_top_item top_item5">
											<div class="img5">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/5.jpg" alt="">
											</div>
										</div>
									</a>
								</div>

								<div>
									<a href="#/livehome">
										<div class="home_top_item top_item6">
											<div class="img6">
												<img style="width: 100%;height: 100%;"
													src="../assets/images/home/top/top2/6.jpg" alt="">
											</div>
										</div>
									</a>
								</div>


							</div>

						</div> -->


					<!-- </div> -->

					<div style="display: flex;margin-top: 70px;">
						<h3 style="display: block; width: 82px;margin: 14px 0 0 0;margin-left: 11px;">竞拍流程</h3>

						<div style="width: 228px;">
							<el-divider>
								<img src="../assets/images/home/liucheng/1.png" alt=""> <span
									class="liuchengtxt">交保证金</span>
							</el-divider>
						</div>
						<div style="width: 228px;">
							<el-divider>
								<img src="../assets/images/home/liucheng/2.png" alt=""> <span
									class="liuchengtxt">出价竞拍</span>
							</el-divider>
						</div>
						<div style="width: 228px;">
							<el-divider>
								<img src="../assets/images/home/liucheng/3.png" alt=""><span
									class="liuchengtxt">竞拍成功</span>
							</el-divider>
						</div>
						<div style="width: 228px;">
							<el-divider>
								<img src="../assets/images/home/liucheng/4.png" alt=""><span
									class="liuchengtxt">支付货款</span>
							</el-divider>
						</div>
						<div style="width: 228px;">
							<el-divider>
								<img src="../assets/images/home/liucheng/5.png" alt=""><span
									class="liuchengtxt">提车</span>
							</el-divider>
						</div>



						<!-- 	<img src="../assets/images/home/liucheng/2.png" alt="">出价竞拍
								<img src="../assets/images/home/liucheng/3.png" alt="">竞拍成功
								<img src="../assets/images/home/liucheng/4.png" alt="">支付货款
								<img src="../assets/images/home/liucheng/5.png" alt="">完成收货 -->
					</div>



					<!-- 竞拍中-->

					<div class="Auction" ref="Auction">
						<span class="Auction_title" v-html="AuctionS"></span>
						<div style="padding-top: 30px;">


							<div class="auctionhome_left_nuv">

								<div class="left_nuv_item">
									<div class="left_nuv_Auction_content">

										<span style="display: block;width: 97px;margin: 0 auto;"
											v-if="zhanwu">暂无竞拍车辆</span>
										<div v-if="!zhanwu" class="Auction_content_item" v-for="item in package"
											:key="item.id" @click="tiaozhuan(item.id,item.start_time)">
											<!-- <div class="Auction_content_item" v-for="item in package" :key="item.id" @click="tanchutieyi(item.id,item.start_time,item.desc+item.rule)"> -->

											<div class="Auction_content_item_left">


											</div>

											<div class="Auction_content_item_right">
												<div style="float: left;">

													<p class="item-title">{{item.title}}</p>

													<div class="item-store_2">

														<div>
															<span class="item-text"
																style="padding: 0;">{{item.is_pack=="1"?"打包":"单台"}}{{item.status_text}}{{item.is_vip=="1"?" 会员拍":""}}&nbsp;&nbsp;{{item.second==1?"二轮竞拍":""}}</span>
														</div>

													</div>
												</div>


												<div
													style="background-color:#0f94fa; height: 60px; line-height: 60px; float: right; text-align: center; padding: 0px 10px;">
													<p><span class="side-text">{{item.car_num}}辆</span></p>



												</div>
												<p style="padding-top:5px;    font-size: 14px; color: #7d7d7d;   padding-left: 20px;display: block;height: 113px;width: 527px;overflow: hidden;float: left;"
													v-html="item.desc"></p>


												<div
													style="padding-top: 10px; padding-left: 8px; float: left;display: flex;">

													<div style="width: 138px;">
														<span class="item-text">{{item.company}}</span>
													</div>
													<div style="position: relative;width: 382px;">
														<div class="item-text" style="position: absolute;right: 0px;">
															结束时间:

															<span class="item-text" style="color: #f42121;">
																{{timestampToTime(item.end_time)}} </span>
														</div>
													</div>


												</div>
											</div>

										</div>


										<!-- <img src="../assets/images/liucheng2.png" alt=""> -->


									</div>

								</div>

								<a href="#/auctionhome" style="    position: absolute;
								right: 31px;
								     font-size: 15px;
								color:rgb(15, 148, 250);">查看全部竞拍车源>></a>

							</div>



							<div class="auctionhome_right">

								<div class="auctionhome_right_top" style="background-color: #fff;">

									<div class="cn-tit">
										<b style="font-size: 18px;">消息通知</b>
									</div>

									<!-- <div class="right_top_you zzz you_active">
										消息通知

									</div> -->
									<!-- <h3 class="">消息通知</h3> -->


								</div>

								<div class="auctionhome_right_txt"
									style="width: 300px;position: relative;height: 725px;overflow: hidden;">



									<div class="right_top_tx">


										<div v-if="!islogin" style="padding: 20px 0 0 20px;">
											还没登录，<a href="#/login" style="color: red;">去登录>></a>
										</div>

										<el-timeline :reverse="false">
											<el-timeline-item v-for="(activity, index) in tongzhi" :key="index"
												:timestamp="activity.create_time">
												<p>{{activity.content}}</p>

											</el-timeline-item>
										</el-timeline>

										<!-- <div v-if="islogin" class="right_top_sc_item2" style="" v-for="(item,index) in tongzhi" :key="item.id" :style="index%2==0?'background-color: #fff':'background-color: rgb(240, 240, 240'"> -->
										<!-- <div v-if="islogin" class="right_top_sc_item2" style="" v-for="(item,index) in tongzhi" :key="item.id"> -->

										<!-- :style="index%2==0?'background-color: #fff':'background-color: rgb(240, 240, 240'" -->

										<!-- <div class="sc_item_txt" style="float: left;padding-left: 10px;padding-right: 10px;width: 94%; ">
												<h5 style="margin: 0;padding: 0;    padding-top: 5px;">
													<p style="    width: 283px;
										height: 60px;
										overflow: hidden;">{{item.content}}</p>
												</h5>

												<p style="bottom: 3px;font-size: 12px; position: absolute; right: 17px;">{{item.create_time}}</p>

											</div> -->

										<!-- <div class="sc_item_txt" style="padding-left: 10px;padding-right: 10px;font-size: 16px;color: #585858;">													
														<p style="width: 283px;overflow: hidden;margin-bottom: 5px;">{{item.content}}</p>
													
											
													<p style="font-size: 14px;">{{item.create_time}}</p>
											
											</div> -->

										<!-- </div> -->
										<!-- <div style="height: 20px;"></div> -->
										<!-- <div v-if="islogin" style="bottom: -10px;" class="gengduo" @click="gotongzhi"> 更多>></div> -->
									</div>


								</div>


							</div>

							<!-- <div style="height: 57px;"></div> -->

							<div style="position: relative;">

								<!-- <div style="width: 872px;">

									<span class="Auction_title">常用服务</span>

									<div style="padding-top: 30px;">
											<div style="width: 863px;margin-left: 10px;;">
										<card2></card2>
									</div>
										<card2></card2>

									</div>

								</div> -->


								<!-- <div style="height: 23px;"></div> -->




								<!-- <div style="position: relative;height: 496px;width: 873px;">

									<span class="Auction_title">商家车源</span>

									<div class="main" ref='main' style="margin-top: 73px;margin-left: 21px;">
										<div class="main_content">

											<div class="main_item" v-for="(item, index) in shopcar" :key="item.id"
												@click="tiaozhuan(item.id)">

												<el-row>
													<el-col :span="1" style="width: 275px;">
														<el-card
															:body-style="{padding: '0px' ,display: 'block',background: '#f6f6f6',position: 'relative',height: '345px',}">

															<div
																style="width: 100%;height: 202px;    background: #fff;">
																<img v-if="item.car_pic_url" :src="item.car_pic_url"
																	class="image" alt="暂无图片">
																<img v-if="!item.car_pic_url"
																	src="../assets/images/zanwutupian.png"
																	class="image2" alt="暂无图片">
															</div>
															<div
																style="padding-left: 10px;padding-top: 16px;background: rgb(246, 246, 246);">
																<span
																	style="display: block; width: 250px; height: 38px; overflow: hidden;">{{item.title}}</span>

																<span
																	style="display: block;width: 250px;height: 20px;overflow: hidden;margin-top: 4px;">{{item.carno.substring(0,item.carno.length-3)+"***"}}|{{item.ascription}}</span>

																<div class="bottom clearfix"
																	style="position: absolute; bottom: 5px;"> -->

																	<!-- <div class="Starting_price">{{cardtxt.status=="2"?'起拍价: ':'当前价:'}}<span class="price">¥{{cardtxt.status=="2"?carlist[index].start_price:carlist[index].high_money}}</span></div> -->
																	<!-- <div class="Starting_price">价格
																		<span class="price">¥{{item.pay_num}}</span>
																	</div> -->
																	<!-- <div class="end_time" v-if="isend">
																		<span>竞拍已结束</span>
																	</div>

																	<div class="end_time" v-if="!isend">剩余:												

																		<span style="color: #800019;">{{ time.d }}</span>天
																		<span style="color: #800019;">{{ time.h }}</span>时
																		<span style="color: #800019;">{{ time.m }}</span>分
																		<span style="color: #800019;">{{ time.s }}</span>秒

																	</div> -->

																<!-- </div> -->
																<!-- <div class="time">类型：{{ carlist[index].car_type}}</div> -->
															<!-- </div> -->
														<!-- </el-card> -->
													<!-- </el-col> -->
												<!-- </el-row> -->

											<!-- </div> -->


										<!-- </div> -->


										<!-- <a href="#/buycomm"
											style="position: absolute; right: 31px; bottom: 7px; font-size: 15px; color: rgb(15, 148, 250);">查看全部商家车源&gt;&gt;</a> -->
									<!-- </div> -->



									<!-- <span class="Auction_title">专场分类</span>

									<div style="padding-top: 30px;width: 654px;height: 437px; position: absolute;right: 0;">

										<div class="Auction3_item product-big" @click="tiaozhiyuan(1)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/1.jpg" alt="">
										</div>
										<div class="Auction3_item product-big" @click="tiaozhiyuan(3)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/3.jpg" alt="">
										</div>
										<div class="Auction3_item product-big" @click="tiaozhiyuan(4)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/4.jpg" alt="">
										</div>
										<div class="Auction3_item product-big" @click="tiaozhiyuan(5)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/5.jpg" alt="">
										</div>
										<div class="Auction3_item product-big" @click="tiaozhiyuan(6)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/6.jpg" alt="">
										</div>
										<div class="Auction3_item product-big" @click="tiaozhiyuan(7)">
											<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/7.jpg" alt="">
										</div>


									</div>

									<div @click="tiaozhiyuan(2)" class="product-big2">
										<img style="width: 100%;height: 100%; " src="../assets/images/home/ziyuanbao/2.jpg" alt="">
									</div> -->

								<!-- </div> -->


								<div class="auctionhome_right">

									<div class="auctionhome_right_top">

										<div class="right_top_zuo zzz" @click="souc =true">
											<b class="xuanzhongb"
												:style="souc?'border-bottom: 3px solid #1f9bde;':''">我的收藏</b>
											<!-- :class="{you_active:souc}" -->

										</div>


										<div class="right_top_you zzz" @click="souc =false ;">
											<b class="xuanzhongb"
												:style="!souc?'border-bottom: 3px solid #1f9bde;':''">竞拍记录</b>
											<!-- :class="{you_active:!souc} -->

										</div>


									</div>

									<div class="auctionhome_right_txt"
										style="width: 300px;position: relative;    height: 728px; background-color: rgb(240, 240, 240);">

										<div class="right_top_sc" v-if="souc" style=" background-color: #f0f0f0;">

											<div v-if="islogin&&scju==0"
												style="width: 161px; margin: 0 auto; padding: 159px 0px;">
												<span style="font-family: cursive;">收藏列表空空如也~~~</span>
											</div>

											<div v-if="!islogin" style="padding: 20px 0 0 20px;">
												还没登录，<a href="#/login" style="color: red;">去登录>></a>
											</div>

											<div v-if="islogin" class="right_top_sc_item" v-for="item in souchang"
												:key="item.auction_car_id">

												<div class="sc_item_img" style="float: left;">
													<img v-if="item.image" style="width: 100%;height: 100%;"
														:src="item.image" alt="加载失败">
													<img v-if="!item.image" style="width: 100%;height: 100%;"
														src="../assets/images/zanwutupian.png" alt="加载失败">
												</div>
												<div class="sc_item_txt"
													style="float: left;width: 192px;margin-left: 5px;">
													<h5 style="margin: 0;"> <a @click="goauction(item.auction_car_id)"
															class="sc_item_txt_a">{{item.title}}</a></h5>
													<!-- <h5 @click="goauction(item.auction_car_id)" style="width: 194px;cursor: pointer;   margin-left: 5px;  max-height: 54px;margin: 0;font-size: 16px;overflow: hidden;"> {{item.title}}</h5> -->

													<p
														style="font-size: 12px; overflow: hidden; margin-left: 12px; position: absolute;    bottom: 7px;">
														{{item.catid_text}}|{{item.car_number}}|{{item.status_text}}</p>

												</div>


											</div>
											<!-- <div style="height: 20px;"></div> -->
											<div v-if="islogin&&scju>1" class="gengduo" @click="goCollection"> 更多>>
											</div>
										</div>

										<div class="right_top_tx" style="height: 100%; background-color: #fff;"
											v-if="!souc">

											<div v-if="islogin&&jpju==0"
												style="width: 161px; margin: 0 auto; padding: 159px 0px;">
												<span style="font-family: cursive;">还没参与过竞拍~~~</span>
											</div>

											<div v-if="!islogin" style="padding: 20px 0 0 20px;">
												还没登录，<a href="#/login" style="color: red;">去登录>></a>
											</div>

											<div v-if="islogin" class="right_top_sc_item3"
												:style="index%2==0?'background-color: #fff':'background-color: rgb(240, 240, 240'"
												v-for="(item,index) in action" :key="item.id">

												<!-- <div class="sc_item_txt" style="float: left;">
													<p style="    width: 283px;
										height: 54px;
										overflow: hidden;">{{item.title}}</p>

													<p style="margin-top: 15px;">{{item.count}}</p>
													<p style="margin-top: 15px;">{{item.status_text}}</p>
													<p style="margin-top: 15px;">{{item.open_time}}</p>
												</div> -->

												<div class="sc_item_txt"
													style="float: left;width: 294px;margin-left: 5px;">
													<h5 style="margin: 0;margin-top: 10px;    bottom: 6px;"> <a
															@click="gojilu(1,item.id)"
															class="sc_item_txt_a">{{item.title}}</a></h5>
													<!-- <h5 @click="goauction(item.auction_car_id)" style="width: 194px;cursor: pointer;   margin-left: 5px;  max-height: 54px;margin: 0;font-size: 16px;overflow: hidden;"> {{item.title}}</h5> -->

													<div style="position: absolute;bottom: 6px;">
														<span>数量:{{item.count}}</span> <span
															style="    margin-left: 18px;">{{item.status_text}}</span>
													</div>
													<div style="position: absolute; right: 6px;bottom: 6px;"><span>
															{{item.open_time}}</span> </div>
												</div>

											</div>
											<!-- margin-right -->
											<!-- <div style="height: 20px;"></div> -->
											<div v-if="islogin&&jpju>1" class="gengduo" style="bottom: -7px"
												@click="gojilu(0)"> 更多>></div>
										</div>


									</div>


								</div>

							</div>




						</div>


					</div>


					<!-- 资源包分类-->
					<!-- <div class="Auction3"> -->

					<!-- <span class="Auction_title">资源包分类</span>

						<div style="padding-top: 30px;">


							<div class="Auction3_item">
								<img src="../assets/images/home/ziyuanbao/esc.png" alt="">
							</div>

							<div class="Auction3_item">
								<img src="../assets/images/home/ziyuanbao/zqc.png" alt="">
							</div>

							<div class="Auction3_item">
								<img src="../assets/images/home/ziyuanbao/sgc.png" alt="">
							</div>

							<div class="Auction3_item">
								<img src="../assets/images/home/ziyuanbao/syc.png" alt="">
							</div>


						</div> -->


					<!-- </div> -->


					<!-- 888 -->
				</div>

			</div>


		</div>


	</div>
</template>

<script>
	import banner from './banner.vue'
	import Card2 from '@/components/Card2.vue'
	export default {
		name: 'home',
		components: {
			banner,
			Card2
		},



		//created
		created() {
			//this.getConveniently();
			this.getResources();
			//this.submit();
			//this.likeCarList();
			//this.getHome_top_1();
			this.getCollection()
			this.getshangjia()
			this.getNotice()
			this.getAction()
			this.getuserInfo()
			this.getmokuai()
		},
		mounted() {
			//this.auction(1);

		},
		methods: {
			

			getshangjia() {
				this.$api.bayCarList({
					row: 3
				}).then(res => {
					console.log(res)
					this.shopcar = res.data.list
				})
			},



			async getHome_top_1() {
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
				//console.log('1')
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
				//console.log(i)
				this.$refs.text.innerHTML = this.text[i - 1].html + i + '</div>';

			},

			//获取资源包
			async getResources() {
				this.$api.getSessionList({
					type: 2
				}).then(response => {
					console.log(response,'respon');

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
						// 	console.log(111)
						// 	this.$refs.box.style.height = this.boxh + 246 * 3 + "px";

						// 	//修改父div高度  // - 60 * this.package.length
						// 	this.$refs.Auction.style.height = 246 * 3 + 58 + "px";
						this.zhanwu = true
						return
					}

					if (response.data.list.data.length <= 6) {
						for (let i = 0; i < response.data.list.data.length; i++) {
							this.package.push(response.data.list.data[i]);
						}
						this.package.h = this.package.length
					} else {
						for (let i = 0; i < 6; i++) {

							this.package.push(response.data.list.data[i]);
						}
						this.package.h = response.data.list.auction
					}
					console.log(this.package.length)


					//console.log(this.package);
					//console.log(i);

					//修改box的高度
					// if (this.package.length > 0) {
					// 	this.$refs.box.style.height = this.boxh + 246 * this.package.length + "px";

					// 	//修改父div高度  // - 60 * this.package.length
					// 	this.$refs.Auction.style.height = (246 * this.package.length) + 58 + "px";
					// }




					this.setAuction();

					//console.log(this.package[3].id)					

					return;
				})
			},

			tiaofuwu() {
				document.body.scrollTop = document.documentElement.scrollTop = 1200
			},


			//修改竞拍中标题数量
			setAuction() {
				//console.log(this.package.length);
				//竞拍中标题数量
				this.AuctionS = '竞拍中车源(' + '<span style="color: #ff7e00;">' + this.package.h + '</span>' + ')';
				//console.log(this.AuctionS);
			},


			//资源包跳转前的同意协议
			tanchutieyi(id, time, txt) {
				this.xieyi2.id = id
				this.xieyi2.time = time
				this.xieyi2.txt = txt
				this.piciVisible = true
			},

			//资源包的跳转
			tiaozhuan(id) {
				//this.$router.push('auctionhome/auction?id=' + id);
				//let sll = sl + "";
				// window.open('auctionhome/auction?id=' + id + '&pc=' + title + '&gs=' + gs + '&sl=' + sll, '_blank');
				window.open('#/auctionhome/auction?id=' + id, '_blank');

			},

			//获取随手拍物
			async getConveniently() {
				this.Conveniently.imgSrc =
					'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png';
				//console.log(this.Conveniently.imgSrc);

			},

			//获取推荐车辆
			async likeCarList() {
				this.$api.bayCarList({
					row: 4
				}).then(response => {
					//var data = response.data.list;
					this.business = response.data.list
					this.business = this.chuli(this.business)
					//console.log(this.business);
					//business


				})

			},

			//推荐车辆-->车辆详情
			Auction3_item(id, sid) {
				//console.log(id);
				window.open(`#/cardetail?id=${id}&sid=${sid}`, '_blank')

			},

			//处理图片数组
			chuli(arr) {
				//var arr2=[]
				for (let i = 0; i < arr.length; i++) {
					let ings = arr[i].image.split(",");
					//console.log(ings)
					arr[i].image = ings
				}
				//console.log(arr)
				return arr
			},


			//获取收藏列表
			async getCollection() {
				this.$api.carLikeList({
					p: 1,
					row: 7
				}).then(res => {
					this.souchang = res.data.list;
					this.scju = res.data.count
					//console.log(res);
					this.islogin = true
				}).catch(err => {
					//console.log(err)
					console.log('获取收藏列表')
					this.islogin = false
				})
			},

			//获取通知列表
			async getNotice() {
				this.$api.getNotice().then(res => {
					// this.tongzhi=res.data
					for (let i = 0; i < 10; i++) {
						//console.log(res)
						this.tongzhi.push(res.data[i])
					}

				})
			},

			//获取竞拍记录
			async getAction() {
				this.$api.jingpaiJilu({
					row: 7
				}).then(res => {
					this.action = res.data.list
					this.jpju = res.data.count
					this.islogin = true
					//console.log(this.action)
				}).catch(err => {
					console.log('获取竞拍记录')
					this.islogin = false

				})
			},

			lianxi(text) {
				this.$alert(text, "提示")
			},




			//收藏列表车辆详情跳转
			goauction(id) {
				//this.$route.push('/auctionhome/AuctionDetail?id=' + id)
				window.open('#/auctionhome/AuctionDetail?id=' + id);
			},

			gojilu(type, id) {
				if (type == 0) {
					window.open('#/person/myauction');
				} else {
					window.open('#/person/myauction?id=' + id);
				}
			},

			//收藏列表
			goCollection() {
				window.open(`#/person/collect/pai`, '_blank')
			},
			//通知中心
			gotongzhi() {
				window.open(`#/person`, '_blank')
			},

			//拍车专场
			tiaozhiyuan(id) {
				window.open('#/auctionhome?id=' + id);
			},


			//时间戳转换
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
				var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
				var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
				return Y + M + D + h + m + s;
			},
			
			getuserInfo(){
				this.$api.getUserInfo().then(res => {
					this.userInfo = res.data
					this.imageUrl = res.data.avatar
					this.username=res.data.username
					this.zhuying=res.data.main_module.split(',')
					console.log(this.userInfo);
					this.getnickname()
					
				})
			},
			getmokuai(){
				this.$api.getmokuai().then(res=>{
					this.mokuai=res.data
				})
			},
			getnickname(){
				this.$api.userzx().then(res=>{
					//console.log(res)
					this.nickname=res.data.welcome
					this.xiugainicheng=res.data.welcome
					if(res.data.welcome==''||res.data.welcome==null){
						this.xiugainicheng='尾号'+ this.userInfo.mobile.substring(7, this.userInfo.mobile.length)
						//console.log(this.xiugainicheng)
						//this.xigai()
					}
					// if(this.userInfo.province_name==''||this.userInfo.city_name==''||this.userInfo.district_name==''){
					if(this.userInfo.province_name==''||this.userInfo.city_name==''||this.userInfo.district_name==''||this.userInfo.main_module==''||this.userInfo.nickname==''){
						this.dialogVisible=true
					}
					// if(this.userInfo.province_name==''||this.userInfo.city_name==''||this.userInfo.district_name==''){
					// 	this.$router.push('/person/wallet/xiugaidiqu')
					// }
				})
			},
			//修改地区
			tijiao4() {
				let main_module=''
				this.zhuying.forEach(item=>{
					main_module=main_module+item+','
				})
				main_module=main_module.slice(0,main_module.length-1)
				this.$api.editAvatar({
					username: this.userInfo.username,
					avatar: this.imageUrl,
					nickname: this.xiugainicheng,
					bio: '',
					province_id: this.province_id,
					city_id: this.city_id,
					district_id:this.district_id,
					main_module:main_module
				}).then(res => {
					if(res.code==1){
						//this.nicheng = false
						this.$message.success(res.msg)
						this.dialogVisible=false
					}else{
						this.$message.error(res.msg)
					}
					
				})
			},
			
			guachuang(){
				this.dialogVisible=false
			},
			async getAreasp(id) {
				var tempArr = []
				let res = await this.$api.getAreas({
					id: id
				})
				res.data.forEach(item => {
					tempArr.push({
						tempValue: item.id,
						value: item.id,
						label: item.name
					})
				});
				return tempArr
			},

		},
		data() {
			return {
				userInfo: {},
				
				xiugainicheng:'',
				imageUrl:'',
				province_id:'',
				city_id:'',
				district_id:'',
				diqu:'',
				formLabe: {
					mobile: "",
					captcha: "",
				},
				dialogVisible: false,

				//资源包协议
				piciVisible: false,
				xieyi2: {
					id: '',
					time: '',
					txt: '',
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

				jpju: 0,
				scju: 0,

				zhanwu: false,

				search: '',
				//activeName: 'second',
				activeName: 'first',
				url: {
					url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
					zb: "../assets/images/home_zb_1.jpg"
				},
				boxh: 1810, //box的高度
				Auction: 0, //Auction  拍卖中 高度

				souc: true,
				souchang: [],
				tongzhi: [],
				action: [],
				islogin: true,

				//竞拍中数量
				AuctionS: '竞拍中车源',

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

				//商家车源
				shopcar: '',


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
				
				mokuai:[],
				name:'',
				zhuying:[],

				//商家车源
				business: [],

				//商家车源-->推荐车辆id
				businessID: {
					car_id: ''
				},
				areaProp: {
					checkStrictly: false,
					lazy: true,
					lazyLoad: async function(node, resolve) {
						console.log(node)
						const {
							level
						} = node;
				
						try {
							console.log(node.data.value)
							switch (level) {
								case 1:
									this.province_id = node.data.value
									break;
								case 2:
									this.city_id = node.data.value
									break;
								case 3:
									this.district_id = node.data.value
									break;
							}
							
							const nodes = await this.getAreasp(node.data.tempValue)
							resolve(nodes)
						} catch (error) {
							const nodes = await this.getAreasp()
							resolve(nodes)
						}
				
					}.bind(this)
				},

			}
		}
	}
</script>



<style lang="less" scoped>
	.main_item {
		position: relative;
		cursor: pointer;
		/* background-color: #373B41; */
		/* height: 220px; */
		height: 348px;
		/* margin: 0 auto 22px auto; */
		margin: 4px 1px;
		border: 2px solid #dcdcdc00;
		float: left;
	}

	.main_item:hover {
		border: 2px solid #800019;
	}

	.box {
		position: relative;
		height: 2180px;//2335px; //2389px; //1850px;
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
		background-color: #FFFFFF00;
		transform: translateX(-50%);
		border-radius: 10px //border: 1px solid #000000;
	}

	.home_top {
		/* margin-top: 0; */
		border: 1px solid #dfe3e3;
		//border-top: 0;
		border-radius: 10px;
		box-shadow: 0 1px 4px 0 rgba(88, 100, 117, .2);
		height: 205px;
		overflow: hidden;
		background-color: #fff;
	}

	.Scene ul {
		margin: 0 auto;
		width: 1170px;
		height: 185px;
		padding: 0;
		margin: 0;
	}

	// .Scene ul li #li1:hover {
	// 	content: url("../assets/images/home/top/home_pczc1.jpg");
	// }

	// .Scene ul li #li2:hover {
	// 	content: url("../assets/images/home/top/home_sspw1.jpg");
	// }

	// .Scene ul li #li3:hover {
	// 	content: url("../assets/images/home/top/home_sjcy1.jpg");
	// }

	// .Scene ul li #li5:hover {
	// 	content: url("../assets/images/home/top/home_cyfw1.jpg");
	// }

	// .Scene ul li #li6:hover {
	// 	content: url("../assets/images/home/top/home_cyq1.jpg");
	// }

	// .Scene ul li #li7:hover {
	// 	content: url("../assets/images/home/top/home_jczb1.jpg");
	// }






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
		height: 1684px; //1842px; //1655px; //1830px; // 830px;
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
		width: 857px;
		// margin: 0 auto 22px 6px;
		margin-top: 10px;
		margin-bottom: 17px;
		border: 2px solid #dcdcdc;

	}

	// .Auction_content_item:hover {
	// 	border: 2px solid #0f94fa; //#800019;

	// }


	.Auction_content_item_left {
		float: left;
		width: 315px;
		height: 100%;
		//background-color: #1469E2;
		background-image: url(../assets/images/jp_you3.jpg);

	}

	.Auction_content_item_right {
		float: right;
		width: 542px;
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
		width: 387px;
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

	.auctionhome_left_nuv {
		width: 890px;
		margin-top: 15px;
		margin-left: 10px;
		position: relative;
		height: 755px;
	}

	.left_nuv_Auction_content {
		/*width: 80%;*/
		/*height: 515px;*/
		margin: 0 auto 0 auto;
		//background-color: bisque;
	}

	.Auction_content_item:hover {
		border: 2px solid #f6f5f5; //#800019;
	}

	.Auction3_item {
		width: 200px;
		height: 50px;
	}

	.Auction3_item img {
		width: 100%;
		height: 100%;
	}

	/****************************/
	.auctionhome_right {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 300px;
		height: 772px;
		//    border-left: 1px solid #ccc;
		/*height: 500px;
			background-color: #85CE61;*/
	}


	.auctionhome_right_top {
		display: flex;
		//background-color: #85CE61;
		background-color: #eeeeee;
	}

	.zzz {
		width: 95px;
		/* height: 50px; */
		// background: blanchedalmond;
		//background: #fdb93f;
		//margin: 22px;
		margin: 10px 15px 10px 15px;
		/* padding: 19px; */
		text-align: center;
		justify-content: center;
		padding: 13px;
		cursor: pointer;
		//border-radius: 10px;
		font-size: 18px;
		border-left: 5px solid #eeeeee;
	}

	.you_active {
		// background-color: #CF9236;
		//background-color: #f28317;
		// background: none; 
		//color: #fff;
		border-left: 5px solid #1f9bde;
	}


	.right_top_sc_item {
		width: 95%;
		height: 87px;
		//background-color: #85B6FF;
		//padding-bottom: 11px;
		position: relative;
		margin: 0 auto 14px;
		//margin-top: 7px;
		//cursor: pointer;
		border-bottom: 0.5px solid rgb(200 200 200);
		//border: 0.5px solid rgba(200, 200, 200);
	}

	.right_top_sc_item2 {
		//width: 95%;
		//height: 87px;
		//background-color: #85B6FF;
		//padding-bottom: 11px;
		position: relative;
		margin: 0 auto 14px;
		//margin-top: 7px;
		//cursor: pointer;
		//border: 0.5px solid rgba(200, 200, 200);

	}

	.right_top_sc_item3 {
		//width: 95%;
		height: 101px;
		;
		//background-color: #85B6FF;
		//padding-bottom: 11px;
		position: relative;
		margin: 0 auto;
		//margin-top: 7px;
		//cursor: pointer;
		border-bottom: 0.5px solid rgba(200, 200, 200);
	}

	// .right_top_sc_item:hover {
	// 	border: 0.5px solid #800019;
	// }

	.right_top_sc_item .sc_item_img {
		height: 100%;
		width: 30%;
		font-size: 10px;
		//background-color: #000000;
	}


	.gengduo {
		// width: 56px;
		// float: right;
		// margin-top: 10px;
		// cursor: pointer;
		width: 56px;
		cursor: pointer;
		bottom: 0;
		right: 0;
		position: absolute;
	}


	.you_active {
		// background-color: #CF9236;
		//background-color: #f28317;
		// background: none; 
		//color: #fff;
	}

	.sc_item_txt .sc_item_txt_a:hover {
		text-decoration: underline;
		color: #1f9bde;
	}

	.sc_item_txt_a {
		cursor: pointer;
		margin-left: 5px;
		max-height: 57px;
		margin: 0;
		text-decoration: none;
		font-size: 16px;
		overflow: hidden;
		display: block;

	}

	/******/

	/deep/.el-divider__text.is-center {
		display: flex;
		width: 107px;
	}

	.liuchengtxt {
		display: block;
		margin-top: 14px;
		margin-left: 10px;
	}


	.home_top_item {
		width: 158px;
		height: 140px;
		position: absolute;
		top: 25px;
	}


	.top_item1 {
		//background-color: rgba(0, 0, 0, 0.02);
		left: 39px;
	}

	.top_item1:hover>.img1 {
		display: block;
	}

	.img1 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img1:hover {
		display: block;
	}

	.top_item2 {
		// background-color: #0000FF05;		
		left: 231px;
	}

	.top_item2:hover>.img2 {
		display: block;
	}

	.img2 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img2:hover {
		display: block;
	}

	.top_item3 {
		// background-color: #0086B305;
		left: 426px;
	}

	.top_item3:hover>.img3 {
		display: block;
	}

	.img3 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img3:hover {
		display: block;
	}

	.top_item4 {
		// background-color: #13CE6605;
		left: 616px;
	}

	.top_item4:hover>.img4 {
		display: block;
	}

	.img4 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img4:hover {
		display: block;
	}

	.top_item5 {
		// background-color: #2E78E605;	
		left: 809px;
	}

	.top_item5:hover>.img5 {
		display: block;
	}

	.img5 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img5:hover {
		display: block;
	}

	.top_item6 {
		// background-color: #40404005;
		left: 1004px;
	}

	.top_item6:hover>.img6 {
		display: block;
	}

	.img6 {
		display: none;
		width: 100%;
		height: 100%;
	}

	.img6:hover {
		display: block;
	}


	#li1:hover {
		content: url("../assets/images/home/top/top2/1.jpg");
	}

	#li2:hover {
		content: url("../assets/images/home/top/top2/2.jpg");
	}

	#li3:hover {
		content: url("../assets/images/home/top/top2/3.jpg");
	}

	#li5:hover {
		content: url("../assets/images/home/top/top2/4.jpg");
	}

	#li6:hover {
		content: url("../assets/images/home/top/top2/5.jpg");
	}



	.product-big {
		transition: box-shadow .4s;
		cursor: pointer;
		float: left;
		width: 207px;
		height: 207px;
		margin-left: 11px;
		margin-top: 11px;
		transition: all 0.5s;
	}

	.product-big2 {
		transition: box-shadow .4s;
		cursor: pointer;
		float: left;
		width: 207px;
		height: 425px;
		position: absolute;
		top: 71px;
		left: 13px;
		transition: all 0.5s;
	}

	.product-big:hover,
	.product-big2:hover {
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		transform: translate(0, -5px);
	}

	.cn-tit {
		width: 100%;
		height: 40px;
		/* border-bottom: 1px solid #ccc; */
		border-left: 5px solid #1f9bde;
		padding-left: 15px;
		margin: 15px 0;
		float: left;
		line-height: 40px;
	}

	/deep/ .Scene ul {
		margin-top: 5px;
		width: auto;
	}

	::-webkit-scrollbar {
		/*隐藏滚轮*/
		display: none;
	}

	.xuanzhongb {
		//display: block;
		//color: #0000FF;
		//border-bottom: 5px solid #eeeeee;
	}
</style>
