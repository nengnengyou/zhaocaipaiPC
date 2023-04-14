<template>
	<div id="live" style="background-color: #f8f8f8;position: relative;">
		<!-- <div ref="svga"></div> -->

		<!-- 拍卖须知 -->
		<el-dialog :title="xieyitxt.title" :visible.sync="xieyibox" width="50%">
			<div style="height: 400px;overflow: auto;">
				<div id="aaa" v-html="xieyitxt.content"></div>
			</div>
			<span slot="footer" class="dialog-footer">
				<!-- <el-button @click="xieyibox = false">取 消</el-button> -->
				<el-button type="primary" @click="xieyibox = false">确 定</el-button>
			</span>
		</el-dialog>


		<div class="zhongjiang2" ref="zhongjiang">

			<!-- <div style="background: url(../../assets/images/live/zhongbiao.png);"></div> -->
			<!-- <div class="test"></div> -->
			<!-- <img v-if="zhongjiang.data.type==11" src="../../assets/images/live/zhongjiang2.png" style="width: 340px;" alt=""> -->
			<img src="../../assets/images/live/zhongjiang2.png" style="width: 340px;" alt="">
			<!-- <img v-if="zhongjiang.data.type==14" src="../../assets/images/live/zhongbiao2.png" style="width: 340px;" alt=""> -->

			<span class="zhongming">{{zhongjiang.data.mobile}}</span>
		</div>

		<div class="zhongjiang3" ref="zhongjiang2">
			<!-- <img v-if="zhongjiang.data.type==14" src="../../assets/images/live/zhongbiao22.jpg" alt=""> -->
			<img style="width: 100%;" src="../../assets/images/live/zhongbiao22.jpg" alt="">
			<div>
				<!-- <span class="tubiao2">
					<img v-if="item.level=='普通用户'" style="width: 100%;height: 100%;" src="../../assets/images/live/0.png"
					 alt="">
					<img v-if="item.level=='黄金会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/1.png"
					 alt="">
					<img v-if="item.level=='白金会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/2.png"
					 alt="">
					<img v-if="item.level=='钻石会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/3.png"
					 alt="">
				</span> -->
				<!-- <span class="zbdjimg">
					<img style="width: 100%;height: 100%;" src="../../assets/images/live/0.png" alt="">
				</span> -->
				<div class="zbsj">
					<span>{{zhongjiang.data.mobile}}</span>
				</div>
				<div class="zbje">
					<span>¥{{zhongjiang.data.money}}</span>
				</div>
			</div>
		</div>

		<div v-if="false" class="zhongjiang" style="" ref="zhongjiang">
			<div>
				<div style="height: 100%;width: 100%;" v-if="iszhu">
					<div class="ca" @click="$refs.zhongjiang.style.transform='scale(0)'">×</div>
					<div style="margin-bottom: 5px;font-size: 13px;">
						<span class="top_t">中奖名单</span></span>
					</div>
					<div class="top">
						<!-- <div class="img">
							<img style="width:100%;height: 100%;" :src="paipin.image">
						</div> -->

						<div class="title">
							<!-- <span class="title_t">{{paipin.title}}</span> -->
							<div style="margin-bottom: 5px;font-size: 13px;">
								<span class="bottom_t">中奖用户：</span><span class="title_q">{{zhongjiang.data.nickname}}</span>
							</div>
							<div style="margin-bottom: 5px;font-size: 13px;">
								<span class="bottom_t">手机号：</span><span class="title_q">{{zhongjiang.data.mobile}}</span>
							</div>

							<!-- <div style="margin-bottom: 5px;font-size: 13px;">
								<span class="bottom_t">加价幅度：</span><span class="title_q">{{paipin.min_inc}}元</span>
							</div> -->

						</div>
					</div>

				</div>

			</div>

		</div>


		<!-- <div class="mod-sidebar">

			<div class="sidebar-show">
				<div style="position: absolute;width: 240px;">
					
					<span class="clickstat nav-bar sidebar-show-line">
						<i class="nav-icon sidebar-icon-live"></i>
						全部直播
						</a>
					</span>
					<div style="display: block;height: 1px;width: 100%; background-color: #f4f5f8;position: relative;"></div>

				</div>


				<div class="con" ref="con" @mousewheel.prevent>

					<vue-scroll :ops="ops">

						<ul style="padding: 0; list-style: none;">
							<li v-for="item in livetxt" :key='item.live_num' class="sidebar-show-item" @click="tiaozhuanlive(item.live_num)">
								<div class="item_img">
									<img :src="item.cover_image" :alt="item.nickname" style="width: 100%; height: 100%;">

								</div>
								<div class="item_you">

									<div class="item_title">
										<p>{{item.live_title}}</p>
									</div>

									<div class="item_xia">
										<div class="item_nickname">
											<p>{{item.nickname}}</p>
										</div>
										<div class="item_online_num">
											<i></i>
											<p style="float: left;">{{item.online_num}}</p>
										</div>

									</div>


								</div>


							</li>

						</ul>
					</vue-scroll>

				</div>


			</div>


		</div> -->

		<!-- <div class="con2">
		
		<vue-scroll :ops="ops"> -->

		<!-- <div class="layout-Main" style="min-width: 1389px;
    min-height: 1307px;"> -->
		<div class="layout-Main">

			<div class="layout-Player">

				<div class="layout-Player-main">

					<div class="layout-Player-title">
						<div class="Title">
							<div class="Title-anchorPic">
								<img :src="onelive.avatar==''?'https://www.zhaocaipaipai.com/PC/mulu/img/userimg.png':onelive.avatar" alt=""
								 class="DyImg-content is-normal">
								<!-- <img src="../../assets/images/userimg.png" alt="" class="DyImg-content is-normal"> -->
							</div>

							<div class="Title-roomInfo">
								<h3 style="margin-top: 0;">{{onelive.live_title}}</h3>
								<div class="Title-row">
									<span class="host-rid"><i></i>
										<span>{{onelive.live_num}}</span></span>
									<span class="host-spectator" title="人气值"><i></i>
										<span>{{onelive.online_num}}</span></span>

								</div>
							</div>
						</div>

					</div>

					<div class="layout-Player-video">

						<div class="layout-Player-videoMain" ref="video">
							<!-- <div ref='iconpai' v-if="paipin.id!=''" class="iconpai" @click="guanbi(true)"> -->
							<div ref='iconpai' class="iconpai" @click="guanbi(true)">
								<img src="../../assets/images/resizeApi.png" alt="正在竞拍" title="点击查看竞拍">
								<!-- <span>正在竞拍</span> -->
							</div>

							<!-- <div class="vizhanwei2" ref="vizhanwei2">
								<div class="ca" @click="guanbi(false)">×</div>
								<div class="zaipai">
									<div class="img">
										<img style="width:100%;height: 100%;" :src="paipin.image">
									</div>
																	
									<div class="title">
										<span class="title_t">{{paipin.title}}</span>
										<div style="margin-bottom: 5px;font-size: 13px;">
											<span class="bottom_t">起拍价：</span><span class="title_q">{{paipin.start_price}}元</span>
										</div>										
									</div>
									
								</div>
								
								<div class="quanbu">
									<div class="img">
										<img style="width:100%;height: 100%;" :src="paipin.image">
									</div>
								
									<div class="title">
										<span class="title_t">{{paipin.title}}</span>
										<div style="margin-bottom: 5px;font-size: 13px;">
											<span class="bottom_t">起拍价：</span><span class="title_q">{{paipin.start_price}}元</span>
										</div>										
									</div>
								</div>
								
							</div> -->

							<!-- <div v-if="paipin.id!=''" class="vizhanwei" ref="vizhanwei"> -->
							<div class="vizhanwei" ref="vizhanwei">
								<div style="height: 100%;width: 100%;" v-if="iszhu2">
									<div class="ca" @click="guanbi(false)">×</div>

									<div class="top">
										<div class="img">
											<img style="width:100%;height: 100%;" :src="paipin.image">
										</div>
										<div class="linjin" v-if="islinjin">
											<img style="width: 100%;" src="../../assets/images/live/linjin.gif" alt="">
										</div>

										<div class="title">
											<span class="title_t">{{paipin.title}}</span>
											<div style="margin-bottom: 5px;font-size: 13px;">
												<span class="bottom_t">起拍价：</span><span class="title_q">{{paipin.start_price}}元</span>
											</div>
											<div style="margin-bottom: 5px;font-size: 13px;">
												<span class="bottom_t">最高价：</span><span class="title_q" style="color: #800019;">{{paipin.high_money}}元</span>
											</div>

											<div style="margin-bottom: 5px;font-size: 13px;">
												<span class="bottom_t">加价幅度：</span><span class="title_q">{{paipin.min_inc}}元</span>
											</div>

											<div class="bottom">
												<el-input style="width: 51%;" v-model="toubiao.money" placeholder="请输入价格"></el-input>元
												<span @click="toubioa" class="bottom_btn" ref='chujia'>出价</span>
											</div>
											<span class="bottom_paihang" @click="iszhu2=false">出价排行</span>
											<!-- <span class="bottom_paihang" style="bottom: 75px;" @click="xieyibox=true">拍卖须知</span> -->
										</div>
									</div>
									<div style="text-align: center;">
										<span style="font-size: 12px;">冻结保证金：{{paipin.unfree_price}}元,截止时间：{{paipin.end_time}},延迟：{{paipin.minute}}分钟</span>
									</div>
								</div>

								<div style="height: 100%;width: 100%;" v-if="!iszhu2">

									<div class="chujiafanhui" @click="iszhu2=true">
										<img class="fanhuiimg" src="../../assets/images/fanhui.png" alt="返回竞拍竞拍" title="返回竞拍竞拍">
										<img class="fanhuiimg2" src="../../assets/images/fanhui2.png" alt="返回竞拍竞拍" title="返回竞拍竞拍">
									</div>


									<div style="width: 78px;margin: 0 auto; font-size: 19px;">
										<span class="top_t">出价排行</span></span>
									</div>


									<!-- 出价排行  2020.07.30  反注释即可 -->
									<div class="paihang">
										<span v-if="chujiapaihang.length==0">暂无出价排行</span>
										<ul style="padding: 0;" v-if="chujiapaihang.length!=0">
											<li style="margin-top: 5px;">
												<img style="margin-bottom: 6px;width: 23px;object-fit: contain;" src="../../assets/images/paihang11.png"
												 alt="">
												<span>{{chujiapaihang[0].mobile}}&nbsp;&nbsp;&nbsp;&nbsp;{{chujiapaihang[0].money}}元 </span>
											</li>
											<li style="margin-top: 5px;">
												<span v-if="chujiapaihang[1]">
													<img style="margin-bottom: 6px;width: 23px;" src="../../assets/images/paihang22.png" alt="">{{chujiapaihang[1].mobile}}&nbsp;&nbsp;&nbsp;&nbsp;{{chujiapaihang[1].money}}元
												</span>
											</li>
											<li style="margin-top: 5px;">
												<span v-if="chujiapaihang[2]">
													<img style="margin-bottom: 6px;width: 23px;" src="../../assets/images/paihang33.png" alt="">{{chujiapaihang[2].mobile}}&nbsp;&nbsp;&nbsp;&nbsp;{{chujiapaihang[2].money}}元
												</span>
											</li>

										</ul>
									</div>

									<div class="wode paihang">
										我的出价：{{wodechujia==''?'暂未出价':wodechujia+'元'}}
									</div>


								</div>

							</div>
							<!-- <div id="id_test_video" style="width:100%; height:100%;"></div> -->
							<div class="prism-player" id="J_prismPlayer" style="position: absolute"></div>
							<!-- <iframe width="100%" height="100%"  frameborder="0" scrolling="no" src="http://liveshare.huya.com/iframe/qingwa666"></iframe> -->
						</div>
					</div>

					<div class="endlive" v-if="endlive">

						<span>主播暂不在播 换个主播看看~</span>
					</div>

					<div class="liwu">
						<div class="player-face" id="player-face" style="width: 100%;">
							<div class="player-face-list player-face-list-ctrl" style="width: 500px;width: 100%;">

								<ul style="right: 102px;">
									<li @mouseover="hover(index)" @mouseout="hover2(index)" class="player-face-gift" v-for="(item,index) in liwu"
									 :key="index" ref="ulli">
										<div class="plaer-face-icon-bg"></div>
										<div ref="weiyi" class="weiyiliwu" style="left: 0;top: 15%;">
											<img class="player-face-icon" :src="item.gift_image" style="width: 72%;">
										</div>

										<!-- <div id="weiyi1" class="weiyiliwu" style="left: 25%;top: 25%;position: absolute; z-index: 10;width: 100%;transform-origin: 15px 15px;transition:animY 1.5s ease-in ;"><img
											 class="player-face-icon" src="https://zcp.zhaocaipaipai.com/uploads/20200702/5668e2bc97e4031a9ef03f702baaf485.png"
											 style="width: 50%;"></div> -->

										<img class="player-face-icon player-face-icon2" :src="item.gift_image" style="width: 72%;">
										<i></i>
										<div class="player-superfans-card-count"></div>
									</li>
								</ul>

							</div>

						</div>

						<div @mouseover="hover3()" @mouseout="hover4()" id="player-gift-tip" ref="sj" style="z-index: 902;transform: scale(0);height: auto;right: 51px;transform-origin: 263px 167px;display: block;">

							<div class="top-wrap vp-clearfix">
								<div class="gif">
									<img :src="liwu2.gift_image" style="width: 40px;">
									<!-- <img src="https://huyaimg.msstatic.com/cdnimage/actprop/20279_1__gif_1532856204.gif"> -->
									<!-- <i id="week-star" class="week-star" style="display: none;">周星礼物</i> -->
								</div>

								<div class="txt">
									<h3>{{liwu2.gift_name}} <span>({{liwu2.price}}招财币)</span></h3>
									<h2 class="desc">为最爱的主播助力吧！
										<!-- 前方高能预警！一大波弹幕袭来！ -->
									</h2>
									<h2 class="support" style="display: none;"></h2>
									<span style="font-size: 12px;">兑换比例 1元：10招财币</span>
								</div>
								<span class="btn send normal btnaaa" @click="zhengsong(liwu2.id,liwu2.gift_image)">赠送</span>
							</div>
							<div class="player-arrow-down arrow arrow1" style="left: 196px;"></div>

							<!-- 批量赠送 -->
							<!-- <div class="bottom" style="display: block;"></div>
							<div class="btns vp-clearfix" style="display: block;">
								<ul class="list">

									<li class="btn" :class="shuliang==1?'num-select':''" @click="zsshuliang(1)">
										<span>1</span>
										<i class="spec" style="display: none;"></i>
										<img>
									</li>

									<li class="btn" :class="shuliang==25?'num-select':''" @click="zsshuliang(25)">
										<span>25</span>
										<i class="spec" style="display: none;"></i>
										<img>
									</li>

									<li class="btn" :class="shuliang==66?'num-select':''" @click="zsshuliang(66)">
										<span>66</span>
										<i class="spec" style="display: none;"></i>
										<img>
									</li>

									<li class="btn" :class="shuliang==188?'num-select':''" @click="zsshuliang(188)">
										<span>188</span>
										<i class="spec" style="display: none;"></i>
										<img>
									</li>

								</ul>
								<span class="btn send normal" @click="zhengsong(liwu2.id)">赠送</span>
							</div> -->


							<!-- <div class="player-arrow-down arrow arrow1" style="left: 263px;"></div> -->

						</div>
					</div>


				</div>


				<div class="layout-Player-aside">
					<div class="layout-Player-asideMain">

						<div>
							<div class="layout-Player-asideMainTop">

								<div ref="svga" style="height: 100%;"></div>

								<div class="chou_top">
									<div class="week-rank__hd clearfix">
										<span class="week-rank__btn active">主播抽奖</span>
									</div>

									<div class="week-rank__bd">

										<div class="week-rank__unit" style="display: block; height: 82px;">

											<div class="week-rank-box jspScrollable" style="overflow: hidden; padding: 0px; width: 338px;">
												<span v-if="!ischou" style="width: 130px;display: block;margin:5px auto;color: #999;">主播暂未开启抽奖</span>
												<div v-if="ischou" class="jspContainer">
													<div style="margin-bottom: 5px;margin-top: 5px;">
														<span style="font-size: 14px;color: #999;">主播将送出：</span>
														<span style="font-size: 14px;color: #f70;">{{onelive.live_luck_draw.goods_name}}</span>
													</div>
													<!-- <div style="margin-bottom: 5px;">
														<span style="font-size: 14px;color: #999;">向主播赠送：</span>
														<span style="font-size: 14px;">{{search(onelive.live_luck_draw.id)}}</span>
													</div> -->

													<div style="margin-bottom: 5px;">
														<span style="font-size: 14px;color: #999;">需满：</span>
														<span style="font-size: 14px;">{{onelive.live_luck_draw.total_cost}}招财币</span>
													</div>

													<div style="margin-bottom: 5px;">
														<span style="font-size: 14px;color: #999;">当前：</span>
														<span style="font-size: 14px;">{{onelive.live_luck_draw.collect_cost}}招财币</span>
													</div>

													<!-- <div style="margin-bottom: 5px;display: flex;justify-content: space-between;">
														<div>
															<span style="font-size: 14px;color: #999;">需满：</span>
															<span style="font-size: 14px;">{{onelive.live_luck_draw.total_cost}}招财币</span>

														</div>
														<div>
															<span style="font-size: 14px;color: #999;">当前：</span>
															<span style="font-size: 14px;">{{onelive.live_luck_draw.collect_cost}}招财币</span>
														</div>
													</div> -->

												</div>

											</div>

										</div>

									</div>

								</div>

								<div class="layout-Player-barrage ">
									<div class="Barrage">

										<div>
											<div class="js-barrage-container">

												<div class="Barrage-main" style="top: 25px;">
													<div class="Barrage-main_1">

														<div class="Barrage-main_2" @mousewheel.prevent>
															<vue-scroll :ops="ops" ref="vs">
																<ul class="Barrage-list" ref='Barrage'>
																	<!-- <li style="position: relative;line-height: 21px;word-break: break-all;word-wrap: break-word;margin-bottom: 8px;margin-top: 8px;font-size: 13px;" -->
																	<li v-for="(item,index) in danmushuzu" :key="index">
																		<span class="tubiao2" v-if="item.level">
																			<img v-if="item.level=='普通用户'" style="width: 100%;height: 100%;" src="../../assets/images/live/0.png"
																			 alt="">
																			<img v-if="item.level=='黄金会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/1.png"
																			 alt="">
																			<img v-if="item.level=='白金会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/2.png"
																			 alt="">
																			<img v-if="item.level=='钻石会员'" style="width: 100%;height: 100%;" src="../../assets/images/live/3.png"
																			 alt="">
																		</span>
																		<!-- <div style="background-image: url(../../assets/images/live/0.png);"></div> -->
																		<span style="color: #007AFF;line-height: 27px;">{{item.nickname+' : '}}</span><span :style="item.type==7?'color: #ff5500;':''">{{item.msg}}
																			<img v-if="item.type==7" style="width: 35px;height: 35px;" :src="liwu[item.gift_id-1].gift_image"
																			 alt=""></span>
																	</li>
																	<!-- <li style="position: relative;line-height: 21px;word-break: break-all;word-wrap: break-word;margin-bottom: 8px;margin-top: 8px;font-size: 13px;"
																	 v-for="(item,index) in danmushuzu2" :key="index">
																		<span style="color: #007AFF;">{{item.nickname+' : '}}</span><span style="color: #ff5500;">{{item.msg}}</span>
																	</li> -->
																</ul>
															</vue-scroll>


														</div>
													</div>

												</div>

											</div>


										</div>

									</div>

								</div>

							</div>

							<div class="layout-Player-chat">
								<span v-if="isyou" style="margin-left: 18px;
											font-size: 13px;
											color: red;">
									请输入要发送的内容!</span>
								<div class="Chat">
									<div class="ChatSpeak">
										<div class="ChatSend">
											<div v-if="islogin" @keyup.enter="fasong()">

												<textarea class="ChatSend-txt" placeholder="这里输入聊天内容" maxlength="60" style="color: rgb(169, 169, 169);"
												 v-model="textarea"></textarea>

												<!-- <el-input class="ChatSend-txt" type="textarea" placeholder="这里输入聊天内容" v-model="textarea" maxlength="60"
												 style="color: rgb(169, 169, 169);;" @keydown.enter.native="fasong()"></el-input> -->
											</div>

											<div v-if="!islogin" class="no-login-tip" style="display: block;"><span @click="gologin" style="color: #ff8a00; text-decoration: underline; cursor: pointer;">登录</span>发弹幕</div>
											<!-- <a href="http://www.adobe.com/go/getflashplayer" rel="nofollow" target="_blank" title="升级Flash插件">启用flash</a> -->
											<div class="ChatSend-button" @click="fasong()">发送</div>
										</div>

									</div>

								</div>

							</div>
						</div>


					</div>

				</div>



			</div>
			<div class="layout-Bottom">
				<div class="layout-Bottom-main">
					<div class="layout-Bottom-mainEntity">
						<div style="font-size: 24px;margin-left: 11px;margin-bottom: 10px;"><span class="zhubotuijian">全部竞拍</span></div>
						<div ref='mainEntitytxt' class="mainEntity-txt">

							<div class="goods_info">

								<div class="title">
									<!-- 	<img :src="onelive.goods_info.img" alt="">
									<h3 style="    width: 356px;">{{onelive.goods_info.title}}</h3> -->

									<div style="min-height: 334px;">

										<ul class="more2_list clearfix" id="feedContent0" style="padding: 0;display: flex;flex-wrap: wrap;" ref="ulul">

											<li class="more2_item more2_item_good hover-on" v-for="item in onelive.goods_info" :key="item.id">
												<!-- v-for="item in shangpin" :key="item.id"> -->
												<!-- GGG-v-for -->
												<div class="jiaobiao"></div>
												<!-- <div class="jiaobiaotitle">{{item.type_id==0?'商品':item.type_id==1?'车辆':item.type_id==2?'资源包':''}}</div> -->
												<div class="jiaobiaotitle" :style="item.bid_status_text=='已拍卖'?'background-color:#bfbebb':''">{{item.bid_status_text}}</div>
												<span class="more2_item_gdot"></span>
												<!-- <a @click="Tjtiaozhuan(item.id,item.type_id)" target="_blank"> -->

												<div class="lazyimg lazyimg_loaded more2_img">
													<!-- GGG-图片 -->
													<img v-if="item.image!=''" :src="item.image" alt="" class="lazyimg_img">
													<img v-if="item.image==''" src="../../assets/images/jp_you2.jpg" alt="" class="lazyimg_img">
												</div>

												<div class="more2_info">

													<div class="more2_info_name">
														<!-- GGG-标题 -->{{item.title}}
													</div>
													<div class="more2_info_price more2_info_price_plus more2_info_price_newcomer">

														<div class="mod_price">

															<i>起拍价：¥</i>
															<span class="more2_info_price_txt">{{item.start_price}}</span>

														</div>
													</div>
												</div>

												<!-- </a> -->

											</li>

										</ul>

									</div>



								</div>
							</div>

						</div>

					</div>

				</div>

			</div>


		</div>


		<!-- 	</vue-scroll>

</div> -->

	</div>

</template>

<script>
	export default {
		name: "live",

		data() {
			return {

				xieyitxt: {
					title: '拍卖须知',
					content: '拍卖须知'
				},
				xieyibox: false,
				islinjin: false,
				ispaiwu: false,

				iszhu: true,
				iszhu2: true,
				chujiapaihang: [],

				islogin: false,

				endlive: false,

				player: Object,

				shangpin: [],

				userinfo: '',

				client_id: '',

				//弹幕文本域
				textarea: '',


				ops: {
					vuescroll: {},
					scrollPanel: {},
					rail: {
						//keepShow: true,		
						//background: '#c1c1c1',
					},

					bar: {
						hoverStyle: true,
						keepShow: true,
						background: '#cecece',
						onlyShowBarOnScroll: true, //是否只有滚动的时候才显示滚动条
						scrollBottom: 0
						//background: 'red',
					}
				},


				//直播列表
				livetxt: [],

				//播流地址
				onelive: {
					avatar: '',
					play_url1: '',
					live_num: '000000',
					live_title: '暂无直播',
					online_num: "0",
					img: '',
					goods_info: {

					}
				},

				//直播拍出价
				chujia: '',
				wodechujia: '',

				//文本框是否有内容
				isyou: false,

				//弹幕数组
				danmushuzu: [],
				danmushuzu2: [],
				//是否启动删除弹幕
				isdelete: false,

				//礼物
				liwu: [],
				liwu2: '',
				shuliang: '1',
				weiyii: 0,
				isweiyi: true,
				ischou: false,

				paipin: {
					id: ''
				},
				zhongjiang: {
					is: false,
					data: {
						nickname: '',
						mobile: ''
					}
				},

				weiyiii: {
					id: ''
				},

				toubiao: {
					goods_id: '',
					money: '',
					client_id: '',
					live_num: ''
				},


				skinLayout: [{
						name: "bigPlayButton",
						align: "blabs",
						x: 30,
						y: 80
					},
					{
						name: "errorDisplay",
						align: "tlabs",
						x: 0,
						y: 0
					},
					{
						name: "infoDisplay",
						align: "cc"
					},
					{
						name: "controlBar",
						align: "blabs",
						x: 0,
						y: 0,
						children: [{
								name: "liveDisplay",
								align: "tlabs",
								x: 15,
								y: 6
							},
							{
								name: "fullScreenButton",
								align: "tr",
								x: 10,
								y: 10
							},
							//{name:"subtitle", align:"tr",x:15, y:12},
							//{name:"setting", align:"tr",x:15, y:12},
							{
								name: "volume",
								align: "tr",
								x: 5,
								y: 8
							}
						]
					}
				],


				//播放器控制按钮
				skinLayout2: [{
						name: "bigPlayButton",
						align: "blabs",
						x: 30,
						y: 80
					},
					{
						name: "H5Loading",
						align: "cc"
					},
					{
						name: "controlBar",
						align: "blabs",
						x: 0,
						y: 0,
						children: [{
								name: "progress",
								align: "tlabs",
								x: 0,
								y: 0
							},
							{
								name: "playButton",
								align: "tl",
								x: 0,
								y: 10
							},
							{
								name: "timeDisplay",
								align: "tl",
								x: 10,
								y: 24
							},
							{
								name: "fullScreenButton",
								align: "tr",
								x: 20,
								y: 17
							},
							{
								name: "volume",
								align: "tr",
								x: 20,
								y: 15
							},
						]
					}
				],

			}
		},

		created() {
			//this.login();
			//this.getlivelist();
			//this.getUsername()
			//this.getInit()
		},

		mounted() {
			//this.getUsername()
			//this.getInit()
			this.getUsername()
			window.addEventListener("beforeunload", () => {
				this.beforeunloadHandler();
			});
			//this.getInit()
		},


		methods: {


			guanbi(i) {
				//var a=this
				if (i) {
					console.log(i)
					this.getpaipin(this.onelive.live_num, i)
				} else {
					console.log(i)
					this.$refs.vizhanwei.style.transform = 'scale(0)';
				}
				// setTimeout(function(){
				// if (a.ispaiwu) {
				// 	console.log(i)
				// 	if (i) {
				// 		a.$refs.vizhanwei.style.transform = 'scale(1)';
				// 	} else {
				// 		a.$refs.vizhanwei.style.transform = 'scale(0)';
				// 	}
				// } else {
				// 	a.$message.info('暂无竞拍物品')
				// }
				// },10)			

			},

			// 搜索
			search(indexKey) {
				console.log(indexKey)
				for (var i = 0; i <= this.liwu.length; i++) {
					if (this.liwu[i].id == indexKey) {
						console.log(this.liwu[i].gift_name)
						return this.liwu[i].gift_name
					}
				}
			},




			beforeunloadHandler() {
				this.$api.outlive({
					live_num: this.onelive.live_num,
					client_id: this.client_id
				}).then(res => {
					console.log(res)
					// if (res.code != 1) {
					// 	this.beforeunloadHandler()
					// }
				})
			},

			zsshuliang(sl) {
				this.shuliang = sl
			},


			async zhengsong(id, img) {
				//console.log(this.shuliang, id)
				if (!this.isweiyi) {
					//console.log('isweiyi=false')
					return;
				}
				this.$api.dashang({
					live_num: this.onelive.live_num,
					gift_id: id
				}).then(res => {
					if (res.code == 1) {
						this.isweiyi = false
						this.$message.success(res.msg)
						//this.$message.success('1111')
						//var i =this.liwu2.id-1	
						//<div ref="weiyi" class="weiyiliwu" style="left: 0;top: 25%;"><img class="player-face-icon" :src="item.gift_image" style="width: 50%;"></div>

						//this.weiyii = this.weiyii + 1
						//this.$refs.ulli[id-1].innerHTML=this.$refs.ulli[id-1].innerHTML+'<div id="weiyi'+this.weiyii+'" class="weiyiliwu" style="left: 25%;top: 25%;position: absolute; z-index: 10;width: 100%;transform-origin: 15px 15px;transition: transform 0.2s ease-in, top 0.2s ease-in, left 0.2s ease-in, scale 1s ease-in, opacity 0.2s ease-in;"><img class="player-face-icon" src="'+img+'" style="width: 50%;"></div>'



						//this.lwweiyi(this.weiyii)

						//this.lwweiyi(this.weiyii)

						//console.log(this.$refs)

						//console.log(Array.isArray(this.$refs.weiyi))
						//this.$refs.ulli.
						this.lwweiyi(this.liwu2.id - 1)

					} else {
						this.$message.error(res.msg)
					}
					//console.log(res)
				})
			},

			// async lwweiyi(i) {

			// 	var dom = document.getElementById('weiyi' + i)

			// 	dom.style.opacity = "1"
			// 	//var this2 = this
			// 	dom.style.left = "-175%"
			// 	dom.style.top = "-255%"
			// 	setTimeout(()=> {
			// 		dom.style.transform = 'scale(1.5)'
			// 		setTimeout(()=> {
			// 			dom.style.opacity = "0"
			// 			setTimeout(()=> {
			// 				dom.style.transform = 'scale(1)'
			// 				dom.style.left = '25%'
			// 				dom.style.top = '25%'
			// 				setTimeout(()=> {
			// 					this.isweiyi=true
			// 				}, 250);
			// 			}, 250);
			// 		}, 250);
			// 	}, 250);

			// 	// this.$refs.weiyi[i].style.display = 'none'
			// 	// this.$refs.weiyi[i].style.transform = 'scale(1)'
			// },

			lwweiyi(i) {
				this.$refs.weiyi[i].style.opacity = "1"
				var this2 = this
				this.$refs.weiyi[i].style.left = "-175%"
				this.$refs.weiyi[i].style.top = "-255%"
				setTimeout(function() {
					this2.$refs.weiyi[i].style.transform = 'scale(1.5)'
					setTimeout(function() {
						this2.$refs.weiyi[i].style.opacity = "0"
						setTimeout(function() {
							this2.$refs.weiyi[i].style.transform = 'scale(1)'
							this2.$refs.weiyi[i].style.left = '0'
							this2.$refs.weiyi[i].style.top = '25%'
							setTimeout(function() {
								this2.isweiyi = true
							}, 250);
						}, 250);
					}, 250);
				}, 250);

				// this.$refs.weiyi[i].style.display = 'none'
				// this.$refs.weiyi[i].style.transform = 'scale(1)'

			},

			hover(i) {
				this.shuliang = 1
				//console.log(i)
				this.liwu2 = this.liwu[i]

				// var ii=  258+i*55+'px'
				// var ii=  643-(this.liwu.length-i-1)*55+'px'			
				var ii = 51 + (this.liwu.length - i - 1) * 55 + 'px'
				//console.log(ii)
				this.$refs.sj.style.transform = 'scale(1)'
				this.$refs.sj.style.right = ii
			},
			hover2(i) {
				//console.log(i)
				this.$refs.sj.style.transform = 'scale(0)'
			},
			hover3() {
				this.$refs.sj.style.transform = 'scale(1)'
			},
			hover4() {
				this.$refs.sj.style.transform = 'scale(0)'
			},
			//去登录
			gologin() {
				this.$router.push('/login')
			},

			//商品/车/资源包跳转
			Tjtiaozhuan(id, type) {
				if (type == "0") {
					window.open('#/life/zhaodetail?id=' + id);
				} else if (type == "1") {
					window.open('#/auctionhome/AuctionDetail?id=' + id);
				} else if (type == "2") {
					window.open('#/auctionhome/auction?id=' + id);
				}
			},

			//跳转直播间
			tiaozhuanlive(num) {
				//console.log(111)
				window.open("#/live?live_num=" + num, "_self")
				history.go(0)
				//this.$router.push("/live?live_num=" + num)
				//this.getlivead(num)
			},

			//展示礼物特效
			looktexiao(id) {
				if (id != 7 && id != 8) {
					return;
				}
				var svgai = ''
				if (id == 7) {
					svgai = 'svga/paoche.svga'
					//svgai='svga/angel.svga'
				}
				if (id == 8) {
					svgai = 'svga/youting2.svga'
				}
				console.log(svgai)
				var that = this
				//this.$refs.svga.innerHTML='<div id="demoCanvas" style="top: 0;width: 100%;height: calc(100vh );max-height:100vh;position: fixed;z-index: 11;text-align: left;" ></div>'
				this.$refs.svga.innerHTML =
					'<div id="demoCanvas" style=" position: relative;width: 100%;height:100%;z-index: 11;" ></div>'
				var player = new SVGA.Player('#demoCanvas');
				var parser = new SVGA.Parser('#demoCanvas'); // Must Provide same selector eg:#demoCanvas IF support IE6+
				parser.load(svgai, function(videoItem) {
					player.loops = 1;
					//player.setText('Hello, World!', 'ImageKey');
					player.setVideoItem(videoItem);
					player.startAnimation();
					player.onFinished(() => {
						that.$refs.svga.innerHTML = ''
						//console.log("jieshu")
					})
				})
			},

			//发送弹幕
			fasong() {

				//console.log(this.textarea == '\\n')
				if (this.textarea == '' || (this.textarea.split("\n").join("").length) == 0 || (this.textarea.split(" ").join("").length) ==
					0) {
					this.isyou = true;
					this.textarea = '';
					return;
				}
				this.isyou = false;
				let i = {
					nickname: this.userinfo.nickname,
					msg: this.textarea,
					level: this.userinfo.level_text,
				}
				this.$api.sendNews({
					live_num: this.onelive.live_num,
					msg: JSON.stringify(i)
				}).then(res => {
					//console.log(res)
					this.textarea = '';
				})


				//this.onelive.play_url1='//player.alicdn.com/video/aliyunmedia.mp4';
				//this.$router.push('/live?live_num=10001')
				//window.hisory.go(0) 
				//window.open('/live?live_num=10001')
				//this.getlivelist();

			},
			//显示弹幕
			XianShiDanMu(danmu) {
				this.danmushuzu.push(danmu)
				console.log(this.danmushuzu)
				//console.log(this.danmushuzu)
				//this.$refs.Barrage.innerHTML = this.$refs.Barrage.innerHTML +'<li style="position: relative;line-height: 21px;word-break: break-all;word-wrap: break-word;margin-bottom: 8px;margin-top: 8px;font-size: 13px;">' +danmu + '</li>'
				this.$refs.vs.scrollTo({
					y: '100%'
				}, 100);
				if (this.danmushuzu.length + this.danmushuzu2.length > 50) {
					if (!this.isdelete) {
						this.isdelete = true;
						this.deletedanmu();
					}
				}
			},
			//显示弹幕礼物
			XianShiDanMu2(danmu) {
				danmu.msg = "向主播送出1个 " + danmu.gift_name
				this.danmushuzu.push(danmu)
				//console.log(this.danmushuzu)
				//this.$refs.Barrage.innerHTML = this.$refs.Barrage.innerHTML +'<li style="position: relative;line-height: 21px;word-break: break-all;word-wrap: break-word;margin-bottom: 8px;margin-top: 8px;font-size: 13px;">' +danmu + '</li>'
				this.$refs.vs.scrollTo({
					y: '100%'
				}, 100);
				if (this.danmushuzu.length + this.danmushuzu2.length > 50) {
					if (!this.isdelete) {
						this.isdelete = true;
						this.deletedanmu();
					}
				}
			},

			//删除弹幕
			deletedanmu() {
				if (this.isdelete) {
					setTimeout(e => {
						//this.danmushuzu.shift(0,1);
						this.danmushuzu.splice(0, 1)

						if (this.danmushuzu.length > 50) {
							this.deletedanmu();
						} else {
							this.isdelete = false;
						}
					}, 5000)

				}
			},

			//获取用户昵称

			getUsername() {
				this.$api.getUserInfo().then(res => {
					console.log(res)
					if (res.code == 401) {
						console.log("未登录")
						this.islogin = false
					} else {
						this.islogin = true
						this.userinfo = res.data
					}
					//console.log(this.username)
					this.getliwu()
					this.getlivelist();
				}).catch(err => {
					if (err.code == 401) {
						console.log("未登录")
						this.islogin = false
						this.getlivelist();
					}
				})

			},

			//获取直播礼物
			getliwu() {
				this.$api.getliwu().then(res => {
					this.liwu = res.data
					console.log(this.liwu)
				})
			},


			//获取在线直播列表 
			getlivelist() {
				// this.$api.getlivelist().then(res => {
				// 	//console.log(res);
				// 	this.livetxt = res.data;
				// 	//console.log(this.$route.query.live_num=='')
				// 	if (this.$route.query.live_num == '' || !this.$route.query.live_num) {

				// 		//console.log(res.data[0])
				// 		this.getlivead(res.data[0].live_num);
				// 	} else {
				// 		//console.log(this.$route.query.live_num)
				// 		this.getlivead(this.$route.query.live_num)
				// 	}

				// })

				if (this.$route.query.livenum == '' || !this.$route.query.livenum) {
					//console.log(res.data[0])
					this.$router.push('/livehome')
				} else {
					this.toubiao.live_num = this.$route.query.livenum
					console.log(this.$route.query.livenum)
					this.getlivead(this.$route.query.livenum)
				}

			},

			//获取直播间商品
			getshangpin(live_num) {
				this.$api.getshangpin({
					live_num: live_num
				}).then(res => {
					this.onelive.goods_info = res.data
				})
			},

			//获取直播间拍卖商品
			getpaipin(live_num, t) {
				//var that = this
				this.$api.getpaishangpin({
					live_num: live_num
				}).then(res => {
					// console.log(res)
					if (res.code == 1) {
						if (res.data.list) {
							this.paipin = res.data.list
							this.toubiao.goods_id = res.data.list.id
							this.ispaiwu = true //parseFloat
							let g = parseFloat(this.paipin.high_money)
							let k = parseFloat(this.paipin.keep_price)
							// console.log(this.ispaiwu)
							if (t) {
								this.$refs.vizhanwei.style.transform = 'scale(1)';
								if(this.paipin.keep_price==null){
									
								}else if ((g > k * 0.9) && (g < k)) {
									this.islinjin = true
									this.$refs.chujia.style.background = '#4CAF50'
								} else if (g > k) {
									this.$refs.chujia.style.background = 'red'
									this.islinjin = false
								}
								
							}

						} else {
							this.ispaiwu = false
							this.wodechujia = ""
							//this.$message.info(res.msg)
							console.log(res)
							this.chujiapaihang.length = 0
							if (t) {
								this.$message.info('暂无正在竞拍的物品')
							}
						}

						if (res.data.map) {
							this.onelive.goods_info = res.data.map
							//mainEntitytxt
							// let i=this.onelive.goods_info.length/6
							// console.log(i)

						}

						//  else {
						// 	this.$refs.vizhanwei.style.transform = 'scale(0)';
						// }

						// setTimeout(function(){
						// 	//that.$refs.iconpai.style.animation-name=""
						//console.log(this.$refs.iconpai)
						//this.$refs.iconpai.style.animationName = "none";
						//this.$refs.iconpai.style
						// },1000)
					} else {
						this.ispaiwu = false
						this.wodechujia = ""
						//this.$message.info(res.msg)
						console.log(res)
						this.chujiapaihang.length = 0
						if (t) {
							this.$message.info('暂无竞拍物品')
						}
					}

				}).catch(err => {
					if (err.code == 401) {
						this.$message.info(err.msg)
					}
				})
			},
			//直播间竞拍投标
			toubioa() {
				// console.log(this.toubiao.money, this.paipin.high_money - this, this.paipin.start_price)
				var pd = this.toubiao.money - (this.paipin.high_money - this.paipin.start_price > 0 ? this.paipin.high_money : this
					.paipin.start_price)
				// console.log(pd)
				if (pd > 0) {
					if (!(pd % this.paipin.min_inc)) {
						console.log(this.toubiao.goods_id)
						this.$api.livetou({
							goods_id: this.toubiao.goods_id,
							money: this.toubiao.money,
							client_id: this.toubiao.client_id,
							live_num: this.toubiao.live_num
						}).then(res => {
							console.log(res)
							if (res.code == 1) {
								this.$message.success('投标成功')
								this.wodechujia = this.toubiao.money
								this.toubiao.money = ''

							} else {
								this.$message.error(res.msg)
							}
						})
					} else {
						this.$message({
							showClose: true,
							message: '加价幅度需为'+this.paipin.min_inc+'的整倍数',
							type: 'error',
							duration: 8000
						})
						// this.$message.error("加价幅度需为100的整倍数")
					}
				} else {
					this.$message({
						showClose: true,
						message: '低于当前最高价或起拍价',
						type: 'error',
						duration: 8000
					})


				}

			},

			//获取播流地址
			getlivead(live_num) {

				this.danmushuzu.length = 0;
				this.onelive.live_num = live_num

				//先离开直播间
				console.log(this.onelive)
				// if (this.onelive.play_url3 != '') {
				// 	this.$api.outlive({
				// 		live_num: this.onelive.live_num,
				// 		client_id: this.onelive.play_url3
				// 	}).then(res => {
				// 		this.websocketclose();
				// 		//console.log(res)
				// 	})
				// }

				this.getshangpin(live_num)
				// this.getpaipin(live_num, false)

				//console.log(this.livetxt)
				this.$api.getplay({
					live_num: live_num
				}).then(res => {
					if (res.code == 0) {
						this.$message.info(res.msg)
						this.endlive = true
					} else {
						this.ischou = res.data.live_luck_draw.id ? true : false
						this.endlive = false
						this.onelive = res.data
						let p={
							nickname:'直播公告',
							msg:res.data.notice							
						}
						this.XianShiDanMu(p)
						this.getInit()
					}
					//console.log(this.onelive)
					this.initWebSocket()
					this.getpaipin(live_num, false)
				})
			},

			//WebSocket
			initWebSocket() { //初始化weosocket
				const wsuri = "wss://zcp.zhaocaipaipai.com:12589/";
				this.websock = new WebSocket(wsuri);
				this.websock.onmessage = this.websocketonmessage;
				this.websock.onopen = this.websocketonopen;
				this.websock.onerror = this.websocketonerror;
				this.websock.onclose = this.websocketclose;
			},
			websocketonopen() { //连接建立之后执行send方法发送数据
				/* let actions = {
					"test": "12345"
				}; */
				//this.websocketsend(JSON.stringify(actions));
			},
			websocketonerror() { //连接建立失败重连
				this.initWebSocket();
			},
			websocketonmessage(e) { //数据接收
				const redata = JSON.parse(e.data);
				console.log(redata)
				if (redata.type == 0) {
					//console.log(redata);
					this.toubiao.client_id = redata.client_id
					this.bindingurl(redata.client_id);

				} else if (redata.type == 1) {
					// console.log(redata)
					if (redata.person) {
						this.onelive.online_num = redata.person
					}
					this.XianShiDanMu(redata)
					//显示弹幕
				} else if (redata.type == 7) {
					this.XianShiDanMu2(redata)
					this.looktexiao(redata.gift_id)
				} else if (redata.type == 9) {
					this.paipin.high_money = redata.money
					let g = parseFloat(this.paipin.high_money)
					let k = parseFloat(this.paipin.keep_price)
					
					if ((g > k * 0.9) && (g < k)) {
						this.islinjin = true
						this.$refs.chujia.style.background = '#4CAF50'
					} else if (g > k) {
						this.islinjin = false
						this.$refs.chujia.style.background = 'red'
					}
					this.chujiapaihang.push(redata)
					this.chujiapaihang = this.sortKey(this.chujiapaihang, 'money')
					console.log(this.chujiapaihang.length)
					if (this.chujiapaihang.length > 3) {
						this.chujiapaihang.splice(3, 1)
					}
				} else if (redata.type == 10) {
					this.onelive.live_luck_draw.collect_cost = redata.collect_cost
				} else if (redata.type == 11) {
					this.zhongjiang.data.nickname = redata.data.nickname
					this.zhongjiang.data.mobile = redata.data.mobile
					this.zhongjiang.data.type = 11
					//console.log(this.zhongjiang)
					//console.log(redata.data)					
					this.$refs.zhongjiang.style.transform = 'scale(1)'
					setTimeout(() => {
						this.$refs.zhongjiang.style.transform = 'scale(0)'
					}, 10000)

				} else if (redata.type == 12) {
					//console.log(redata)
					this.onelive.live_luck_draw = redata.data
					// this.onelive.live_luck_draw.goods_name = redata.goods_name
					// this.onelive.live_luck_draw.total_cost = redata.total_cost
					// this.onelive.live_luck_draw.collect_cost = redata.collect_cost
					this.ischou = true
				} else if (redata.type == 13) {
					this.ischou = false
				} else if (redata.type == 14) {
					this.zhongjiang.data.type = 14
					this.zhongjiang.data.mobile = redata.mobile
					this.zhongjiang.data.money = redata.money
					this.chujiapaihang.length = 0
					this.wodechujia = ''					
					this.$refs.vizhanwei.style.transform = 'scale(0)';
					this.$refs.zhongjiang2.style.transform = 'scale(1)'
					setTimeout(() => {
						this.$refs.zhongjiang2.style.transform = 'scale(0)'
					}, 10000)
					console.log(redata)
					for(let i;i<this.onelive.goods_info.length;i++){
						if(this.paipin.id==this.onelive.goods_info[i].id){
							this.onelive.goods_info[i].bid_status_text='已拍卖'//#bfbebb
							break
						}
					}
					//this.paipin.id //this.onelive.goods_info
				}

			},

			websocketsend(Data) { //数据发送
				this.websock.send(Data);
			},
			websocketclose(e) { //关闭
				//console.log('断开连接', e);
				// if (this.onelive.play_url3 != '') {
				// 	this.$api.outlive({
				// 		live_num: this.onelive.live_num,
				// 		client_id: this.onelive.play_url3
				// 	}).then(res => {						
				// 		console.log(res)
				// 	})
				// }
			},

			sortKey(array, key) {
				return array.sort(function(a, b) {
					var x = a[key];
					var y = b[key];
					return x > y ? -1 : x < y ? 1 : 0;
				});
			},



			//绑定客户连接
			bindingurl(client_id) {
				this.client_id = client_id;
				this.$api.bindingurl({
					client_id: this.client_id,
					live_num: this.onelive.live_num
				}).then(res => {
					console.log(res)
				})
			},


			//加载播放器
			getInit() {
				//var that=this
				//this.$refs.video.innerHTML = '';
				//this.$refs.video.innerHTML = '<div class="prism-player" id="J_prismPlayer" style="position: absolute"></div>'
				//console.log(this.onelive.play_url1)
				//player.dispose();
				//console.log(this.onelive.play_url1)
				//console.log(111)
				var player = new Aliplayer({
					id: 'J_prismPlayer',
					width: '100%',
					height: '100%',
					autoplay: true,
					//prismType: 2,					
					isLive: true,
					liveRetry: 2,
					skinLayout: this.skinLayout,
					//useFlashPrism: true,
					useH5Prism: true,
					source: this.onelive.play_url2, //'//player.alicdn.com/video/aliyunmedia.mp4', //   //视频地址
					showBarTime: 1000,
					//cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
				}, function(player) {
					setTimeout(function() {
						player.play()
						//console.log("kaiqi")
					}, 500)
				});
				//console.log(this.player)
				//this.player.play()

			},

			getInit2() {
				var that = this
				console.log(this.onelive.play_url3)
				this.player = new TcPlayer('id_test_video', {
					rtmp: this.onelive.play_url3,
					flv: this.onelive.play_url2, //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
					autoplay: true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
					//poster : "http://www.test.com/myimage.jpg",
					width: '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
					height: '100%', //视频的显示高度，请尽量使用视频分辨率高度
					live: true,
					h5_flv: true,
					controls: "system",
					// listener: function(msg) {
					// 	console.log(msg)
					// 	// if (msg.code == 5) {
					// 	console.log(player.playing())
					// 	player.play()
					// 	return;
					// 	// }
					// }
				});
				//console.log(this.player.playing())
				// while(player.playing() == false){
				// 	player.play()
				// }

				// var aa=setInterval(function(){ 					
				// 	if (!that.player.playing()) {
				// 		that.player.play()
				// 		if(that.player.playing()){
				// 			clearInterval(aa);
				// 		}
				// 	}else{
				// 		clearInterval(aa);
				// 	}
				// }, 500);

				// if (player.playing() == false) {
				// 	console.log(player.play())
				// }
			},

		},


		beforeDestroy() {
			this.$refs.video.innerHTML = '';
			//this.player.dispose()
			//console.log('已销毁播放器')
			if (this.$refs.video.innerHTML == '') {
				console.log('已销毁播放器')
			} else {
				console.log('未销毁播放器')
			}
			this.websocketclose();
			// console.log('已销断开连接')

			this.$api.outlive({
				live_num: this.onelive.live_num,
				client_id: this.client_id
			}).then(res => {
				console.log(res)
			})
		},


	}
</script>

<style lang="less" scoped>
	#demoCanvas {
		width: 100%;
		height: 100vh;
		position: absolute;
		//z-index: 9;
		text-align: left;
	}

	.mod-sidebar {
		font: 12px/1.5 Microsoft YaHei, Arial, Helvetica, sans-serif, SimSun !important;
		position: fixed;
		left: 0;
		//top: 70px;
		height: 100vh;
		z-index: 888;
	}

	.sidebar-show {
		position: absolute;
		left: 0;
		top: 0;
		width: 240px;
		height: calc(100vh - 91px);
		//height: 100%;
		background: #2f3035;
		color: #aaaeb9;
	}

	.nav-bar {
		min-height: 47px;
		display: block;
		//cursor: pointer;
		font-size: 16px;
		line-height: 45px;
		color: #aaaeb9;
		overflow: hidden;
		text-decoration: none;
	}

	.sidebar-icon-live {
		float: left;
		width: 21px;
		height: 21px;
		margin: 14px 10px 0 14px;
		background-size: cover;
		background-image: url(https://a.msstatic.com/huya/main3/widget/sidebar/img/sidebar-icon-live-hover_13d53.png);
	}

	.sidebar-show-item {
		width: 100%;
		height: 134px;
		margin-top: 5px;
		background-color: #82848A;
		padding: 0;
		cursor: pointer;
	}

	.con {
		/* position: initial; */
		display: block;
		margin-top: 54px;
		overflow: auto;
		/* width: 240px; */
		//height: 829px;
		height: calc(100% - 56px);
	}

	.con2 {
		/* position: initial; */
		display: block;
		//margin-top: 70px;
		//overflow: auto;
		/* width: 240px; */
		//height: 829px;
		//height: 100vh;
		height: calc(100vh - 91px);
	}

	.item_img {
		height: 133px;
		width: 140px;
		float: left;
	}

	.item_you {
		float: left;
		margin-left: 3px;
	}

	.item_nickname {
		margin-right: 8px;
	}

	.item_title {
		//float: left;
		font-size: 19px;
		width: 172px;
		height: 100px;
	}

	.item_xia {
		display: flex;
		justify-content: space-between;
		//margin: 6px 11px;
	}

	.item_online_num i {
		float: left;
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../../assets/images/live_num.png) no-repeat;
		background-size: cover;
		position: relative;
		top: 1px;
		left: -5px;
	}




	/* ypi*/

	.layout-Main {
		// padding-left: 26px;
		// padding-right: 47px;
		// //margin-left: 240px;
		// padding-top: 10px;

		//overflow-x: auto;
		//height:  calc(100vh - 101px);;
		padding-left: 65px;
		padding-right: 65px;
		padding-top: 20px;
	}

	.layout-Player {
		position: relative;
	}

	.layout-Player-main {
		position: relative;
		margin-right: 350px;
	}

	.layout-Player-title {
		position: relative;
		background-color: #fff;
		height: 78px;
		-webkit-border-radius: 8px 8px 0 0;
		-moz-border-radius: 8px 8px 0 0;
		border-radius: 8px 8px 0 0;
		border: 1px solid #e5e4e4;
	}

	.Title {
		position: relative;
		padding: 8px 10px 0px 108px;
		height: 74px;
		-webkit-transition: height .4s ease-out;
		-o-transition: height .4s ease-out;
		-moz-transition: height .4s ease-out;
		transition: height .4s ease-out;
	}

	.Title-anchorPic {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		// margin-top: 9px;
		position: absolute;
		overflow: hidden;
		left: 0;
		top: 0;
		margin: 8px;
		// width: 83px;
		// height: 75px; //width: 92px;
		// //height: 92px;
		// -webkit-transition: all .4s ease-out;
		// -o-transition: all .4s ease-out;
		// -moz-transition: all .4s ease-out;
		// transition: all .4s ease-out;
	}

	.is-normal {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.Title-roomInfo {
		position: relative;
		height: 100%;
		//top: -19px;
	}


	.Title-row {
		white-space: nowrap;
		//font-size: 0;
		height: 30px;
		line-height: 30px;
	}

	.host-rid {
		float: left;
		//margin-left: 15px;
	}

	.host-rid i {
		margin-right: 3px;
		position: relative;
		top: 2px;
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(https://a.msstatic.com/huya/main3/assets/img/room/rid-icon_fefa9.png) no-repeat;
		background-size: cover;
	}


	.host-spectator {
		float: left;
		margin-left: 15px;
	}

	.host-spectator i {
		margin-right: 3px;
		position: relative;
		top: 2px;
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(https://a.msstatic.com/huya/main3/assets/img/room/room_hd_host_34bab.png) no-repeat;
		background-size: cover;
	}


	.Title-col {
		height: 100%;
	}

	.layout-Player-video {
		overflow: hidden;
		position: relative;
		height: 0;
		padding-top: 52.25%;
		clear: both;
		border: 1px solid #e5e4e4;
	}

	.layout-Player-videoEntity,
	.layout-Player-videoMain,
	.layout-Player-videoSub {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.layout-Player-videoMain {
		background-color: #000;
	}

	.layout-Player-aside {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 340px;
		z-index: 1;
		/*height: 800px;*/
	}

	.layout-Player-asideMain {
		overflow: hidden;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #fff;
		-webkit-transition: top .15s ease-out;
		-o-transition: top .15s ease-out;
		-moz-transition: top .15s ease-out;
		transition: top .15s ease-out;
	}

	.layout-Menu,
	.layout-Player-asideMain,
	.layout-Player-toolbar {
		border: 1px solid #e5e4e4;
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		border-radius: 4px;
	}

	.layout-Player-asideMainTop {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 89px;
		left: 0;
		z-index: 1;
	}

	.layout-Player-barrage {
		position: absolute;
		top: 0; //256px;
		right: 0;
		left: 0;
		bottom: 0;
		//background: #f8f8f8;
		background-color: #fff;
		-webkit-transform: translateZ(0);
		-moz-transform: translateZ(0);
		transform: translateZ(0);
	}



	.Barrage,
	.Barrage-main {
		position: absolute;
		top: 92px;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
	}

	.Barrage-list {
		//margin-bottom: 0;
		//padding:  10px 20px 0;//28px;
		padding: 10px; //28px;
		overflow: hidden;
		width: 100%;
		list-style: none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.Barrage-listItem {
		position: relative;
		line-height: 21px;
		word-break: break-all;
		word-wrap: break-word;
		margin-bottom: 8px;
		margin-top: 8px;
		font-size: 13px;
	}

	.layout-Player-chat {
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		height: 80px;
		z-index: 500;
		border-top: 1px solid #0000001f;
	}

	.Chat {
		position: absolute;
		height: 49px;
		padding: 0 7px 7px;
		z-index: 600;
		-webkit-border-radius: 0 0 4px 4px;
		-moz-border-radius: 0 0 4px 4px;
		border-radius: 0 0 4px 4px;
		bottom: 0;
		left: 0;
		right: 0;
	}


	.ChatSend,
	.ChatSpeak {
		position: relative;
	}

	.ChatSend-txt {
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		resize: none;
		float: left;
		width: 266px;
		height: 43px;
		/* padding: 5px 13px 5px 71px;*/
		line-height: 20px;
		font-size: 12px;
		background: #fff;
		border: 1px solid #ff921a;
		border-right: 0;
		-webkit-border-radius: 4px 0 0 4px;
		-moz-border-radius: 4px 0 0 4px;
		border-radius: 4px 0 0 4px;
		color: #444;
		outline: none;
		overflow: hidden;
	}

	.ChatSend-button {
		display: block;
		width: 43px;
		height: 49px;
		line-height: 49px;
		-webkit-border-radius: 0 4px 4px 0;
		-moz-border-radius: 0 4px 4px 0;
		border-radius: 0 4px 4px 0;
		background: #f70;
		color: #fff;
		font-size: 14px;
		float: left;
		text-align: center;
		cursor: pointer;
	}



	.layout-Bottom {
		overflow: hidden;
		margin-top: 24px;
	}

	.layout-Bottom-main {
		float: left;
		width: 100%;
		min-height: 1px;
	}

	.layout-Bottom-mainEntity {
		// margin-right: 346px;
		padding-bottom: 30px;
		background-color: #ffffff;
		border: 1px solid #e5e4e4;
		border-radius: 8px 7px 0 0;
	}

	.mainEntity-txt {
		position: relative;
		padding: 10px 10px; //34px;
		width: 100%;
		background-color: #fff;
		border-radius: 6px;
		min-height: 120px;
		box-sizing: border-box;
	}

	.zhubotuijian:after {
		position: relative;
		top: 5px;
		left: 13px;
		margin-left: -15px;
		content: "";
		display: block;
		font-size: 0;
		width: 98px;
		height: 4px;
		border-radius: 2px;
		background-color: #ff9600;
	}

	.more2_list {
		margin: 0 -5px;
	}

	.more2_item {
		position: relative;
		float: left;
		width: 221px;
		height: 322px;
		margin: 0 25px 10px;
		// cursor: pointer;
	}

	.more2_item {
		background: #fff;
		border: 1px solid #dcdcdc;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}

	// .more2_item:hover {
	// 	border: 1px solid #800019;
	// }

	li {
		list-style: none;
	}

	.jiaobiao {
		position: absolute;
		top: 0;
		width: 0;
		z-index: 10;
		height: 0;
		border-top: 64px solid #ff9f0e; //#00bcd4;
		border-right: 71px solid transparent;
	}

	.jiaobiaotitle {
		color: #fff;
		font-size: 17px;
		font-weight: 700;
		text-align: center;
		position: absolute;
		z-index: 11;
	}


	.more2_item_gdot {
		position: absolute;
		bottom: 0;
		right: 20px;
		display: inline-block;
		width: 1px;
		height: 1px;
		background-color: #b1b1b1;
		// cursor: pointer;
	}

	a {
		color: #666;
		text-decoration: none;
	}

	.more2_img {
		// width: 150px;
		// height: 150px;
		// margin: 30px auto 40px;
		width: 185px;
		height: 185px;
		margin: 25px auto 25px;
	}

	.lazyimg {
		position: relative;
		overflow: hidden;
		background: #eee;
		transition: background 0.2s linear;
	}

	.lazyimg_loaded {
		transition: background 0.2s linear, opacity 0.2s linear !important;
		background: transparent;
	}

	.more2_img>img {
		display: block;
		width: auto;
		height: auto;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	img {
		border: 0;
		vertical-align: middle;
	}

	.more2_info {
		padding: 0 20px;
		height: 65px;
	}

	.more2_info {
		clear: both;
		line-height: 24px;
	}

	.more2_info_name {
		height: 48px;
		font-size: 14px;
		line-height: 24px;
		text-align: left;
		color: #666;
		transition: color 0.2s ease;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
	}

	.more2_info_price {
		margin-top: 10px;
	}

	.more2 .mod_price {
		display: inline-block;
		font-size: 16px;
		line-height: 18px;
		height: 18px;
		color: #e1251b;
	}

	.more2_info_price_plus .mod_price {
		float: left;
		// width: 75px;
		width: 100%;

		text-align: left;
	}

	.more2 .mod_price i {
		vertical-align: middle;
		font-size: 12px;
		font-weight: 700;
		font-family: MicrosoftYahei-regular, Arial, Helvetica, sans-serif;
	}

	.more2_info_price_txt {
		font-size: 20px;
		font-weight: 700;
		font-family: arial, sans-serif;
		color: #800019;
	}

	.more2 .mod_price {
		display: inline-block;
		font-size: 16px;
		line-height: 18px;
		height: 18px;
		color: #e1251b;
	}

	.no-login-tip {
		display: block;
		line-height: 48px;
		width: 274px;
		height: 48px;
		float: left;
		border-radius: 5px;
		text-align: center;
		border: 1px solid #e6e6e6;
		/* align-items: center;*/
	}

	.endlive {
		position: absolute;
		top: 50%;
		left: 50%;
		color: #ffffff;
		transform: translate(-50%, -50%);
	}

	.liwu {
		height: 65px;
		background-color: #fff;
		border-radius: 0 0 8px 8px;
		border: 1px solid #e5e4e4;
	}

	.player-face-list {
		float: left;
		height: 100%;
		//overflow: hidden;
		position: relative;
	}

	.player-face .player-face-list ul {
		position: absolute;
	}

	.player-face ul {
		height: 100%;
		margin: 0;

	}

	.player-face li {
		width: 55px;
		height: 100%;
		float: left;
		cursor: pointer;
		position: relative;
		//margin-bottom: 10px;
	}

	.player-face li .plaer-face-icon-bg {
		position: absolute;
		border: 1px solid #eee;
		width: 45px;
		height: 45px;
		top: 7px;
		left: 4px;
		border-radius: 5px;
	}

	.player-face li .player-face-icon {
		position: absolute;
		top: 15%;
		left: 14%;
		//transform: translate(-50%, -50%);
		transition: transform 0.2s ease-in, top 0.2s ease-in, left 0.2s ease-in;
	}

	.player-face li img {
		max-width: 100%;
		height: auto;
		vertical-align: middle;
		-ms-interpolation-mode: bicubic;
	}

	.player-face li i {
		position: absolute;
		top: 8px;
		right: 10px;
		width: 13px;
		height: 15px;
		pointer-events: none;
	}

	.player-face {
		float: right;
		height: 100%;
		position: relative;
	}

	.player-face li:hover .plaer-face-icon-bg {
		background-color: #f5f5f5;
		border: 1px solid #f80;
	}

	#player-gift-tip {
		transform: scale(0);
		transition: transform .2s ease-in, right .2s ease-in;
		position: absolute;
		width: 253px; //320px;

		border: 1px solid #d9d9d9;
		background: #fff;
		border-radius: 8px;
		bottom: 67px;
		//left: -200px;
		display: none;
		cursor: default;
		filter: drop-shadow(2px 2px 1px rgba(33, 33, 33, .2));
		padding: 18px 11px 11px;
	}

	#player-gift-tip .top-wrap {
		margin-bottom: 2px; //0px;
		height: 70px;
	}

	#player-gift-tip .btns {
		width: 342px;
	}

	#player-gift-tip .btns .list {
		position: relative;
		left: -40px;
	}

	.player-face ul {
		height: 100%;
	}

	#player-gift-tip .btns li {
		float: left;
		position: relative;
		width: 52px;
		height: 26px;
		line-height: 26px;
		margin: 0 10px 0 0;
		border: 1px solid #cfcfcf;
		background: #fff;
		color: #666;
	}

	#player-gift-tip .btns li:hover {
		border: 1px solid transparent !important;
		background: #ff9928 !important;
		color: #fff !important;
	}


	#player-gift-tip .num-select {
		border: 1px solid transparent !important;
		background: #ff9928 !important;
		color: #fff !important;
	}

	#player-gift-tip .btn {
		display: block;
		text-align: center;
		border-radius: 4px;
		font-size: 14px;
		cursor: pointer;
		font-family: Microsoft YaHei;
	}

	.btnaaa {
		background: #f80;
		position: absolute;
		right: 11px;
		width: 64px;
		height: 28px;
		line-height: 28px;
		color: #fff;
		bottom: 17px;
	}

	#player-gift-tip .btn span {
		text-align: center;
		width: 52px;
		display: inline-block;
	}

	#player-gift-tip .btns .spec {
		position: absolute;
		display: none !important;
		left: -8px;
		top: -4px;
		width: 25px;
		height: 14px;
		background: url(//a.msstatic.com/huya/h5player/room/2006291022/src/img/giftbar/spec.png) no-repeat;
	}

	.player-face li i {
		position: absolute;
		top: 8px;
		right: 10px;
		width: 13px;
		height: 15px;
		pointer-events: none;
	}

	#player-gift-tip .gif {
		margin-top: 15px;
		float: left;
		margin-right: 8px;
	}

	#player-gift-tip #week-star {
		display: none;
		color: #fff;
		line-height: 20px;
		border-top-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	#player-gift-tip .txt {
		max-width: 250px;
		float: left;
		text-align: left;
		font-family: Microsoft YaHei;
	}

	#player-gift-tip .txt h3 {
		font-size: 16px;
		color: #555;
		white-space: nowrap;
		margin-bottom: 6px;
		line-height: 1;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: 100%;
		font-weight: 500;
	}

	#player-gift-tip .txt span {
		font-size: 14px;
		color: #ff9728;
	}

	#player-gift-tip .txt h2 {
		font-size: 12px;
		color: #999;
		margin-bottom: 7px;
	}

	#player-gift-tip .txt .support {
		margin-top: 0;
	}

	#player-gift-tip .btns .normal {
		background: #f80;
	}

	#player-gift-tip .btns .send {
		position: absolute;
		right: 11px;
		width: 64px;
		height: 28px;
		line-height: 28px;
		color: #fff;
	}

	#player-gift-tip .btn {
		display: block;
		text-align: center;
		border-radius: 4px;
		font-size: 14px;
		cursor: pointer;
		font-family: Microsoft YaHei;
	}

	#player-gift-tip .bottom {
		position: absolute;
		left: -1px;
		bottom: 0;
		width: 342px;
		height: 52px;
		border-radius: 0 0 8px 8px;
		border: 1px solid #f4f4f4;
		border-top: none;
		background: #efefef;
	}

	#player-gift-tip .arrow1:after,
	#player-gift-tip .arrow1:before {
		border-top: 7px solid #efefef;
	}

	.player-arrow-down:after,
	.player-arrow-down:before {
		position: absolute;
		content: "";
		display: block;
		left: -7px;
		width: 0;
		height: 0;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
	}

	.player-arrow-down:before {
		top: 1px;
		border-top: 7px solid #ddd;
	}

	#player-gift-tip .arrow {
		bottom: 0;
		left: 172px;
	}

	.player-arrow-down {
		display: block;
		position: absolute;
	}

	.weiyiliwu {
		//animation: animX 0.8s  ease-in , animY 0.8s ease-out ;
		// animation: animX 0.8s  ease-in  , animY 0.8s ease-in;
		//animation: animX 0.8s ease-in,animY 0.8s ease-in;
		//animation:animY 1s ease-in,animX 1s ease-in;
		position: absolute;
		top: 25%;
		left: 0;
		z-index: 903;
		width: 100%;
		transform-origin: 25px 15px;
		//transition: transform 0.2s ease-in, top 0.2s ease-in, left 0.2s ease-in, scale 1s ease-in, opacity 0.2s ease-in;
		transition: transform 0.2s ease-in, top 0.2s ease-in, left 0.2s ease-in, scale 1s ease-in, opacity 0.2s ease-in;
		//animation:animY 1s ease-in
	}

	@keyframes animX {

		//40%{left: 90%;}
		//60%{left: 120%;}
		//80%{left: 90%;}
		100% {
			left: 0%;
		}
	}

	@keyframes animY {
		0% {
			left: 25%;
			top: 25%
		}

		40% {
			left: -175%;
			top: -255%;
		}

		60% {
			transform: scale(1.5)
		}

		// 80%{
		// 	opacity : 0;
		// }
		100% {
			left: 25%;
			top: 25%;
		}

		// to {
		// 	top: -240%;
		// }
	}


	.vizhanwei {
		position: absolute;
		// height: 26%;
		// width: 38%;
		height: 162px;
		width: 420px;
		background-color: #fff;
		z-index: 902;
		right: 20px;
		padding: 10px;
		bottom: 50px;
		border-radius: 5px;
		transition: transform 0.2s ease-in;
		transform-origin: 363px 143px;
		transform: scale(0);
	}

	.vizhanwei2 {
		position: absolute;
		// height: 26%;
		// width: 38%;
		height: 333px;
		width: 250px;
		background-color: #fff;
		z-index: 902;
		right: 20px;
		padding: 10px;
		bottom: 50px;
		border-radius: 5px;
		transition: transform 0.2s ease-in;
		transform-origin: 363px 143px;
		//transform: scale(0);
	}

	.vizhanwei .ca,
	.vizhanwei2 .ca {
		position: absolute;
		right: 10px;
		color: #f80;
		top: 0px;
		font-size: 18px;
		cursor: pointer;
	}

	.vizhanwei .ca:hover {
		color: red;
	}

	.vizhanwei .top {
		width: 100%;
		height: 92%;
		float: left;
		//margin-bottom: 5px;
	}

	.vizhanwei .img {
		width: 44%;
		height: 100%;
		float: left;
		margin-right: 10px;
		//border-radius: 10px;
		//overflow: hidden;
	}

	.vizhanwei .title {
		float: left;
		display: block;
		height: 100%;
		width: 49%;
	}

	.vizhanwei .title .title_t {
		display: block;
		width: 100%;
		height: 34%;
		margin-bottom: 10px;
		color: #00a6ff;
		overflow: hidden;
	}

	.vizhanwei .bottom {
		position: absolute;
		bottom: 24px;
		width: 52%;
		height: 30px;
		//line-height: 27px;
	}

	.vizhanwei .bottom_btn {
		display: block;
		text-align: center;
		border-radius: 4px;
		font-size: 14px;
		cursor: pointer;
		// background: #f80;
		background: #2E78E6;
		width: 64px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		float: right;
		//margin-top: 4px;
		// position: absolute;
		// right: 0;
		// top: 7px;
	}

	.iconpai {
		cursor: pointer;
		width: 48px;
		position: absolute;
		right: 80px; //36px;
		bottom: 59px;
		z-index: 901;
		//animation: iconpai 1s ease-in
		//animation-name: iconpai;
		//animation-duration: 0.75s;
		//animation-timing-function: linear;
		//animation-iteration-count: 1;
	}

	.iconpai:hover {
		animation-name: iconpai;
		animation-duration: 0.75s;
		animation-timing-function: linear;
		animation-iteration-count: 1;
	}

	@keyframes iconpai {
		10% {
			transform: translateX(3px) rotate(2deg);
		}

		20% {
			transform: translateX(-3px) rotate(2deg);
		}

		30% {
			transform: translateX(3px) rotate(2deg);
		}

		40% {
			transform: translateX(-3px) rotate(2deg);
		}

		50% {
			transform: translateX(2px) rotate(1deg);
		}

		60% {
			transform: translateX(-2px) rotate(-1deg);
		}

		70% {
			transform: translateX(2px) rotate(1deg);
		}

		80% {
			transform: translateX(-2px) rotate(-1deg);
		}

		90% {
			transform: translateX(1px) rotate(0deg);
		}

		100% {
			transform: translateX(-1px) rotate(0deg);
		}
	}

	/deep/ .el-input__inner {
		height: 30px;
		line-height: 30px;
	}

	.bottom_paihang {
		font-size: 13px;
		position: absolute;
		right: 13px;
		bottom: 64px;
		color: #4699ff;
		text-decoration: underline;
		cursor: pointer;
	}

	.bottom_paihang:hover {
		color: red;
	}


	.chou_top {
		position: absolute;
		height: 84px;
		width: 100%;
		top: 0px;
		z-index: 2;
		//background-color: #000;
	}

	.week-rank__hd {
		text-align: center;
		color: #333;
		font-size: 14px;
		background: #eee;
		height: 32px;
		border-bottom: 1px solid #eee;
	}

	.week-rank__btn {
		float: left;
		height: 32px;
		line-height: 32px;
		width: 33.33%;
		background: #eee;
		cursor: pointer;
	}

	.week-rank__btn.active {
		background: #fff;
	}

	.week-rank__bd {
		//height: 98px;
		overflow: visible;
	}

	.week-rank__bd .week-rank__unit {
		display: none;
		width: 100%;
		height: 97px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
		background: #fff;
	}

	.fans-rank-box,
	.week-rank-box {
		max-height: 320px;
	}

	.jspScrollable {
		outline: 0;
	}

	.jspContainer {
		overflow: hidden;
		position: relative;
		width: 322px;
		margin: 0 auto;
	}

	.zhongjiang {
		position: absolute;
		background-color: #fff;
		z-index: 903;
		right: 40%;
		height: 100px;
		width: 220px;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 15px;
		top: 25%;
		border-radius: 5px;
		transition: transform 0.2s ease-in;
		transform-origin: 150px 100px;
		transform: scale(0);
	}

	.zhongjiang .top_t {
		margin: 0 auto;
		display: block;
		width: 80px;
		font-size: 17px;
	}

	.zhongjiang .ca {
		position: absolute;
		right: 10px;
		color: #f80;
		top: 0px;
		font-size: 18px;
		cursor: pointer;
	}

	.zhongjiang .ca:hover {
		color: red;
	}

	.zhongjiang .top {
		width: 100%;
		height: 100%;
		float: left;
		//margin-bottom: 5px;
		margin-top: 15px;
	}

	.zhongjiang .img {
		width: 44%;
		height: 100%;
		float: left;
		margin-right: 10px;
		//border-radius: 10px;
		//overflow: hidden;
	}

	.zhongjiang .title {
		float: left;
		display: block;
		height: 100%;
		width: 100%;
	}

	.zhongjiang .title_t {
		display: block;
		width: 100%;
		height: 34%;
		margin-bottom: 10px;
		color: #00a6ff;
		overflow: hidden;
	}

	.zhongjiang .bottom {
		position: absolute;
		bottom: 7px;
		width: 52%;
		height: 30px;
		//line-height: 27px;
	}

	.chujiafanhui {
		width: 32px;
		height: 32px;
		position: absolute;
		top: 0;
		overflow: hidden;
		cursor: pointer
	}

	.chujiafanhui:hover>.fanhuiimg {
		display: none;
	}

	.paihang {
		margin-top: 10px;
		text-align: center;
	}

	#aaa {
		color: #000000;
	}


	.tubiao2 {
		width: 73px;
		height: 26px;
		display: block;
		float: left;
		line-height: 1;
	}

	.Barrage-list li {
		position: relative;
		line-height: 21px;
		word-break: break-all;
		word-wrap: break-word;
		margin-bottom: 8px;
		margin-top: 8px;
		font-size: 13px;
	}

	.Barrage-main_1 {
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	.Barrage-main_2 {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		overflow: scroll;
		margin-right: -17px;
		margin-bottom: -17px;
	}

	.zhongjiang2 {
		position: absolute;
		z-index: 903;
		right: 50%;
		width: 343px;
		top: 13%;
		transition: transform 0.2s ease-in;
		transform-origin: 150px 100px;
		transform: scale(0);
	}

	.zhongjiang3 {
		position: absolute;
		z-index: 903;
		right: 50%;
		width: 343px;
		top: 15%;
		transition: transform 0.2s ease-in;
		transform-origin: 150px 100px;
		transform: scale(0);
	}

	.test {
		background: url(../../assets/images/live/zhongjiang2.png) no-repeat;
	}

	.zhongming {
		display: block;
		height: 25px;
		position: absolute;
		top: 7px;
		color: #fff;
		left: 112px;
		font-size: 23px;
		font-family: cursive;
	}

	.zbdjimg {
		position: absolute;
		bottom: 90px;
		width: 94px;
		left: 30px;
	}

	.zbsj {
		position: relative;
		bottom: 95px;
		text-align: center;
		/* left: 137px; */
		font-size: 24px;
	}


	.zbje {
		position: relative;
		bottom: 71px;
		text-align: center;
		font-size: 24px;
		color: #800019;

	}

	.linjin {
		position: absolute;
		right: 36px;
		top: 51px;
		width: 66px;
	}
</style>
