<template>

	<div ref="cartxt">

		<!-- <setPass :visible.sync="dissetPass" :dissetPasss="dissetPass"></setPass> -->

		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="输入支付密码" v-if="zfqrk" :visible.sync="zfqrk"
		 :modal="false" width="500px">

			<el-form label-width="200px">

				<el-form-item label="订单号: ">
					<span>{{pay.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{chaxunres.pay_num}}元</span>
				</el-form-item>
				<el-form-item label="支付密码 ">
					<el-input type="password" v-model="pay.paypassword" v-on:keyup.enter.native="fukuan"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="zfqrk = false">取 消</el-button>
				<el-button type="primary" @click="fukuan">确 定</el-button>
			</span>
		</el-dialog>


		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="确认查询" v-if="bzjPayShow" :visible.sync="bzjPayShow"
		 :modal="false" width="60%">

			<el-form label-width="200px">

				<el-form-item label="查询订单号: ">
					<span>{{FuwuIndent.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="订单金额: ">
					<span>{{chaxunres.pay_num}}元</span>
				</el-form-item>

				<el-form-item label="车牌号: ">
					<span>{{FuwuIndent.carno}}</span>
				</el-form-item>
				<el-form-item label="发动机号: ">
					<span>{{FuwuIndent.engineno}}</span>
				</el-form-item>
				<el-form-item label="车架号: ">
					<span>{{FuwuIndent.classno}}</span>
				</el-form-item>
				<el-form-item label="查询协议: ">
					<span v-html="xieyi.title"></span>
					<span v-html="xieyi.content"></span>
				</el-form-item>

			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="bzjPayShow = false">取 消</el-button>
				<el-button type="primary" @click="zfqrk=true">确 定</el-button>
			</span>
		</el-dialog>

		<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="确认结果" v-if="jieguo" :visible.sync="jieguo"
		 :modal="false" width="60%">

			<el-form label-width="">

				<el-form-item label="查询订单号: ">
					<span>{{FuwuIndent.out_trade_no}}</span>
				</el-form-item>

				<el-form-item label="查询结果: ">
					<span>{{tableData.msg}}</span>
				</el-form-item>

				<el-form-item label="">
					<el-table ref="multipleTable" highlight-current-row @current-change="handleCurrentChange" :data="tableData.data"
					 border stripe style="width: 100%">
						<el-table-column prop="act" label="违章原因" align="center" width="358px"></el-table-column>
						<el-table-column prop="wzcity" label="违章省份" align="center"></el-table-column>
						<el-table-column prop="area" label="违章地区" align="center"></el-table-column>
						<el-table-column prop="id" label="违章罚款" align="center"></el-table-column>
						<el-table-column prop="fen" label="违章扣分" align="center"></el-table-column>
						<el-table-column prop="weizhang_time" label="违章时间" align="center"></el-table-column>
					</el-table>
				</el-form-item>


			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="jieguo = false">取 消</el-button>
				<el-button type="primary" @click="jieguo = false">确 定</el-button>
			</span>
		</el-dialog>



		<div class="content_bar">

		</div>

		<div class="content">


			<div class="content-left">

				<div class="car-box">
					<div class="fLeft">
						<div class="opic_group">


							<div class="opic_bbox">
								<img  :src="img" alt="">
								<!-- <img v-if="cartxt.images[0]" :src="cartxt.images[0]" alt=""> -->
								<!-- <img v-if="!cartxt.images[0]&&zw" src="../assets/images/zanwutupian.png" > -->
								
							</div>


						</div>

					</div>


					<div class="cardetail">
						<h1>{{cartxt.title}}</h1>
						<!-- <span style="font-size: 20px;"> </span>-->

						<div style="display: flex;">

							<div class="cardetail_start_price">
								<!-- {{cartxt.session_status!="2"?cartxt.high_money=="0.00"?"起拍价":"当前最高价":"起拍价"}}<span style="margin-left: 20px;">¥{{cartxt.session_status!="2"?cartxt.high_money=="0.00"?cartxt.start_price:cartxt.high_money:cartxt.start_price}}</span> -->
								起拍价:<span style="margin-left: 20px;">¥{{cartxt.start_price}}</span>
							</div>

							<!-- <div class="cardetail_start_price" style="margin-left: 15px;" v-if="cartxt.my_money!=''&&cartxt.my_money!=null">
								我的出价<span style="margin-left: 20px;">¥{{cartxt.my_money}}</span>
							</div> -->

						</div>



						<!-- <div class="shouchang">
							<div>
								<p>{{ischang?'已收藏':'未收藏'}}</p>
							</div>
							<i v-if="!ischang" class="el-icon-star-off" @click="shouchang('1')"></i>
							<i v-if="ischang" class="el-icon-star-on" @click="shouchang('0')"></i>

						</div> -->


						<div class="cardetail_end_time" style="	margin-top: 10px;" v-if="isend">
							<span>竞拍已结束</span>
						</div>
						<div class="cardetail_end_time" style="	margin-top: 10px;" v-if="!isend">距结束


							<!-- <span style="margin-left: 15px;">{{countTime(cartxt.end_time)[0]}}</span>天
							<span>{{countTime(cartxt.end_time)[1]}}</span>时
							<span>{{countTime(cartxt.end_time)[2]}}</span>分
							<span>{{countTime(cartxt.end_time)[3]}}</span>秒 -->

							<span style="margin-left: 15px;">{{time.d}}</span>天
							<span>{{time.h}}</span>时
							<span>{{time.m}}</span>分
							<span>{{time.s}}</span>秒

						</div>



						<ul>
							<!-- <li><img src="../assets/images/car-detail-add.png" width="32" height="33"><span>{{cartxt.car_place_info}}</span>停放地</li>
							<li><img src="../assets/images/car-detail-date.png" width="32" height="33"><span>{{cartxt.get_card_time}}</span>上牌日期</li>
							<li><img src="../assets/images/car-detail-km.png" width="32" height="33"><span>{{cartxt.mileage_number}}</span>表显里程</li>
							<li><img src="../assets/images/car-detail-emi.png" width="32" height="33"><span>{{cartxt.catid_text}}</span>车辆类型</li>
						  -->
							<li><img src="../assets/images/detail/dingwei.png" width="32" height="33"><span ref="li1">{{cartxt.car_place_info}}</span>停放地</li>
						    <li><img src="../assets/images/detail/riqi.png" width="32" height="33"><span ref="li2">{{cartxt.get_card_time}}</span>上牌日期</li>
						    <!-- <li><img src="../assets/images/car-detail-km.png" width="32" height="33"><span>{{cartxt.mileage_number}}</span>表显里程</li> -->
							<li><img src="../assets/images/detail/yibiao.png" width="32" height="33"><span ref="li3">{{cartxt.mileage_number}}</span>表显里程</li>
						    <li><img src="../assets/images/detail/paifnag.png" width="32" height="33"><span ref="li4">{{cartxt.catid}}</span>车辆类型</li>
						   
						</ul>

						<!-- <span style="color: red;
    font-weight: 700;" v-if="cartxt.is_vip=='1'">会员拍:本车需开通会员参拍！</span> -->
						<div ref="li12">
							出价(元)：<el-input-number size="small" v-model='baojia' :step='100'></el-input-number>


							<el-button type="danger" :disabled='isend' @click='centerDialogVisible= true'><span>投标</span></el-button>

							<el-button type="danger" v-if="cartxt.check_report_path!=''" @click="jianyan">
								<a target="_blank" style="text-decoration:none">查看检验报告</a>
							</el-button>

							<el-button :disabled="true" type="danger" v-if="cartxt.check_report_path==''">
								<a style="text-decoration:none">暂无检验报告</a>
							</el-button>

						</div>


						<!-- <el-button type="text" @click="centerDialogVisible = true">投标</el-button> -->

						<el-dialog title="确认出价" :visible.sync="centerDialogVisible" width="30%" center>
							<span>将以：{{baojia}}元 投标该车</span>
							<span slot="footer" class="dialog-footer">
								<el-button @click="centerDialogVisible = false">取 消</el-button>
								<!-- <el-button type="primary" @click="qrbaojia()">确 定</el-button> -->
								<el-button type="primary" @click="toubiao()">确 定</el-button>
							</span>
						</el-dialog>








					</div>


				</div>


				<!-- 基本信息 -->
				<div class="cx-tabs-both">
					<div class="cx-n-box">
						<div class="cn-tit">
							<b>基本信息</b>
						</div>

						<div class="cn-table">
							<table cellpadding="0" cellspacing="1">
								<tbody>
									<!-- <tr>
										<td style="background-color: rgb(239, 239, 239);">二轮报价</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.second==0?'否':'是'}}</td>
										<td style="background-color: rgb(239, 239, 239);"></td>
										<td style="background-color: rgb(255, 255, 255);"></td>
										<td style="background-color: rgb(239, 239, 239);"></td>
										<td style="background-color: rgb(255, 255, 255);"></td>
										
										</tr> -->
									<tr>
										<!-- <td style="background-color: rgb(239, 239, 239);">车辆编号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.auction_session_name}}</td> -->
										<td style="background-color: rgb(239, 239, 239);">品牌信息</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.brand_info}}</td>
										<td style="background-color: rgb(239, 239, 239);">车辆停放地</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.car_place_info}}</td>
									</tr>
									<tr>
										<!-- <td style="background-color: rgb(239, 239, 239);"> 发动机号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.engine_number.substring(0,cartxt.engine_number.length-3)+"***"}}</td>
										<td style="background-color: rgb(239, 239, 239);">车架号</td>
										<td style="background-color: rgb(255, 255, 255);">
											<font>{{cartxt.frame_number.substring(0,cartxt.frame_number.length-3)+"***"}}</font>
										</td>
										<td style="background-color: rgb(239, 239, 239);"> 车牌号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.car_number.substring(0,cartxt.car_number.length-3)+"***"}}
										</td> -->

										<td style="background-color: rgb(239, 239, 239);"> 发动机号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.engine_number}}</td>
										<td style="background-color: rgb(239, 239, 239);">车架号</td>
										<td style="background-color: rgb(255, 255, 255);">
											<font>{{cartxt.frame_number}}</font>
										</td>
										<td style="background-color: rgb(239, 239, 239);"> 车牌号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.car_number}}
										</td>


									</tr>
								</tbody>
							</table>



							<table cellpadding="0" cellspacing="1">
								<tbody>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">车辆颜色</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.car_color}}</td>
										<td style="background-color: rgb(239, 239, 239);">车辆类型</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.catid}}</td>
										<td style="background-color: rgb(239, 239, 239);">是否有行驶证</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_driving_license}}</td>
									</tr>
									<tr>
										<td style="background-color: rgb(239, 239, 239);"> 是否过户</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_change}}</td>
										<td style="background-color: rgb(239, 239, 239);">是否有钥匙</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_key}}</td>
										<td style="background-color: rgb(239, 239, 239);">是否正常启动</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_normal}}</td>
									</tr>
								</tbody>
							</table>



						</div>



					</div>


					<!-- 交付资料 -->
					<div class="cx-n-box">
						<div class="cn-tit">
							<b>交付资料</b>
						</div>

						<div class="cn-table">
							<table cellpadding="0" cellspacing="1">
								<tbody>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">车辆登记证书</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_registration_cert}}</td>
										<td style="background-color: rgb(239, 239, 239);"> 结清证明</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_settlement_proof}}</td>
									</tr>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">解压委托书</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_decompression_letter}}</td>
										<td style="background-color: rgb(239, 239, 239);"> 营业执照</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_business_license}}</td>

									</tr>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">车辆抵押登记申请表</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_mortgage}}</td>
										<td style="background-color: rgb(239, 239, 239);">债权转让协议</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.is_transfer_agreement}}</td>
									</tr>
								</tbody>
							</table>


						</div>

					</div>
					
					
					<!-- 违章信息 -->
					<!-- <div class="cx-n-box">
						<div class="cn-tit">
							<b>违章信息</b>
						</div>
					
						<div class="cn-note">
							{{cartxt.weizhang}}
					
						</div>
					</div> -->


					<!-- 备注信息 -->
					<!-- <div class="cx-n-box">
						<div class="cn-tit">
							<b>备注信息</b>
						</div>

						<div class="cn-note">
							{{cartxt.note}}

						</div>
					</div> -->



					<!-- 车辆图片 -->
					<!-- <div class="cx-n-box">
						<div class="cn-tit">
							<b>车辆图片</b>
						</div>

						<div class="cn-images">
							<div style="margin-bottom: 5px;" class="item_img" v-for="(item,index) in cartxt.car_pic_url" :key="index">

								<img :src="item" alt="">

							</div>

						</div>

					</div> -->

					<!-- 车辆图片 -->
					<div class="cx-n-box">
						<div class="cn-tit">
							<b>车辆图片</b>
						</div>

						<div class="cn-images">


							<viewer :images="cartxt.images">
								<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in cartxt.images" :key="index">
									<div class="banner__inner">

										<!-- <div style="margin-bottom: 5px;" class="item_img" v-for="(item,index) in cartxt.car_pic_url" :key="index"> -->
										<div class="banner-img__wrapper">


											<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;">
										</div>
									</div>
								</div>
							</viewer>

						</div>

					</div>

				</div>

			</div>


			<div class="content-right">
				<div class="content-right_ser">
					<p class="content-right_ser_titie">官方服务</p>
					<div class="content-right_ser_titie_form">

						<el-form label-position='top' label-width="80px" :model="FuwuIndent">
							<el-form-item style="margin-bottom: 0; padding:0;" label="车牌号">
								<el-input v-model="FuwuIndent.carno"></el-input>
							</el-form-item>
							<el-form-item style="margin-bottom: 0;padding:0;" label="发动机号">
								<el-input v-model="FuwuIndent.engineno"></el-input>
							</el-form-item>
							<el-form-item style="margin-bottom: 0;padding:0;" label="车大架号">
								<el-input v-model="FuwuIndent.classno"></el-input>
							</el-form-item>
						</el-form>

					</div>

					<div class="pai-btn-group">
						<button tag="button" @click="toGujia" class="kuaishu-button">快速估价</button>

						<button class="weizhang-button" @click="weibao('0')">查询违章</button>
						<button class="weibao-button" @click="weibao('1')">查询维保(基础)</button>
						<button class="weibao-button" @click="weibao('2')">查询维保(综合)</button>
					</div>

				</div>

				<!-- <div class="content-right_Same">
					<p class="content-right_ser_titie">同场竞拍</p>
					<div class="content-right_ser_titie_form">

						<div class="right_top_sc_item" v-for="item in withAuction" :key="item.id">

							<div class="sc_item_img" style="float: left;">
								<img v-if="item.car_pic_url" style="width: 100%;height: 100%;" :src="item.car_pic_url" alt="暂无图片">
								<img v-if="!item.car_pic_url" style="width: 100%;height: 100%;" src="../assets/images/zanwutupian.png" alt="暂无图片">
							</div>
							<div class="sc_item_txt" style="float: left;width: 160px;margin-left: 5px;">
								<h5 style="margin: 0;"> <a @click="goAuctiondetail(item.id)" class="sc_item_txt_a">{{item.title}}</a></h5>

								<p style="font-size: 12px; overflow: hidden; margin-left: 12px; position: absolute;    bottom: 7px;">{{item.catid_text}}|{{item.car_number}}</p>

							</div>
						</div>

					</div>
				</div> -->



			</div>
		</div>

		<!--    图片放大-->
		<!-- <div class="imgViewDom" ref="imgViewDom" @click="hideBigImg">
			<img id="image" :src="bigImgData" alt="" class="imgViewDom-img" ref="imgViewDomImg">
		</div> -->

		<!-- <div class="demo-image__preview">
			<el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
			</el-image>
		</div> -->

	</div>


</template>

<script>
	// import setPass from '../components/setPass.vue'

	export default {
		name: 'auctiondetail',

		// components: {
		// 	setPass
		// },

		data() {
			return {
				
				img:"",

				dissetPass: false,

				tableData: [],

				//同场竞拍
				withAuction: [],

				//初始投标
				//chushi:'500',	



				isend: false,

				ischang: true,

				baojia: 100,
				//车辆信息
				cartxt: {
					id: '————',
					auction_session_id: '————',
					auction_session_name: '————',
					title: '————',
					car_sn: '————',
					name: '————',
					pic_pre: '————',
					start_price: '————',
					brand_info: '————',
					frame_number: '————',
					car_number: '————',
					engine_number: '————',
					mileage_number: '————',
					get_card_time: '————',
					weizhang:'————',
					car_color: '————',
					car_type: '————',
					check_report_path: '————',
					is_change: '————',
					car_place_id: '————',
					is_driving_license: '————',
					is_key: '————',
					is_normal: '————',
					note: '————',
					is_registration_cert: '————',
					is_settlement_proof: '————',
					is_decompression_letter: '————',
					is_business_license: '————',
					is_mortgage: '————',
					is_transfer_agreement: '————',
					status: '————',
					win_bidding_id: '————',
					add_time: '————',
					car_place_info: '————',
					is_refuse: '————',
					end_time: '————',
					resource_path: '————',
					car_type_text: '————',
					car_place_name: '————',
					is_collection: '————',
					car_pic_url: [],

				},

				/*formLabelAlign: {
					chepai: '',
					fadongji: '',
					chedajia: '',
				},*/

				FuwuIndent: {
					carno: '',
					engineno: '',
					classno: '',
					out_trade_no: "0",
					type: '',
				},
				chaxunres: {},
				pay: {
					out_trade_no: "",
					paypassword: ""
				},
				zfqrk: false,
				jieguo: false,
				bzjPayShow: false,

				xieyi: "",
				xieyiname: "",

				time: {
					endtime: 0,
					d: 0,
					h: 0,
					m: 0,
					s: 0,
				},

				car_list: [

				],
				centerDialogVisible: false,
				zw:false,

			}
		},
		//created
		mounted() {
			//this.aaa();
			//this.getcartext();
			//this.getFavCar();
			this.getcartext();
		},

		created() {
			//this.getcartext();
		},

		methods: {


			//跳转检验报告

			jianyan() {
				window.open(this.cartxt.check_report_path, '_black')
			},


			//获取收藏列表
			/* getFavCar(){
			this.$api.delUserFav().then(res=>{
				console.log(res);
			})}, */


			//获取车辆信息
			getcartext() {
				//var _this = this;
				// let loc = location.href;
				// let n1 = loc.length;
				// console.log(loc)
				// let n2 = loc.indexOf("?");
				// let id = decodeURI(loc.substring(n2 + 4, n1));
				// console.log(id)
				// console.log(this.cartxt)

				let id = this.$route.query.id;
				this.$api.usercar_info({
					id: id
				}).then(res => {
					console.log(res.data)
					this.cartxt = res.data;
					//_this.cartxt=JSON.parse(cartxt);
					//this.cartxt=JSON.parse(JSON.stringify(res.data));
					let ings = this.cartxt.images.split(",");
					//console.log(ings)
					this.cartxt.images = ings
					this.img = this.cartxt.images[0]
					
					//_this.cartxt=res.data;
					// if (res.data.session_status != '2') {
					// 	if (res.data.high_money == "0.00") {
					// 		this.baojia = parseFloat(res.data.start_price) + 100
					// 	} else {
					// 		this.baojia = parseFloat(res.data.high_money) + 100
					// 	}
					// }
					//console.log(this.cartxt.get_card_time.length)
					// if(this.cartxt.car_place_info.length>8){
						
					// 	console.log(this.$refs.li1)
						
					// 	this.$refs.li1.style="font-size: 2px;line-height: 15px;"
					// }
					
					// if(this.cartxt.mileage_number.length>8){
					// 	this.$refs.li3.style="font-size: 2px;line-height: 15px;"
					// }
					// if(this.cartxt.catid.length>8){
					// 	this.$refs.li4.style="font-size: 2px;line-height: 15px;"
					// }
					// this.zw=true;
					this.seth();
					//this.getcarlist();

				})
			},

			getcarlist(title) {
				this.$api.getAuctionCar({
					auction_session_id: this.cartxt.auction_session_id,
					row: 5
				}).then(res => {
					this.withAuction = res.data.list;
					console.log(this.withAuction)
				})


			},


			zhuanshiijan(timestamp) {
				var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let Y = date.getFullYear() + '-';
				let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				let D = date.getDate() + ' ';

				return Y + M + D;
			},



			seth() {
				/*setTimeout(function() {
					this.$refs.cartxt.style.height = this.cartxt.car_pic_url.length * 800 + 1450 + 'px';
				}, 5000);*/
				// if (this.cartxt.is_favorite == 0) {
				// 	this.ischang = false;
				// }

				// this.FuwuIndent.carno = this.cartxt.car_number.substring(0, this.cartxt.car_number.length - 3) + "***";
				// this.FuwuIndent.engineno = this.cartxt.engine_number.substring(0, this.cartxt.engine_number.length - 3) + "***";             
				// this.FuwuIndent.classno = this.cartxt.frame_number.substring(0, this.cartxt.frame_number.length - 3) + "***";

				this.FuwuIndent.carno = this.cartxt.car_number
				this.FuwuIndent.engineno = this.cartxt.engine_number
				this.FuwuIndent.classno = this.cartxt.frame_number

				this.time.endtime = this.cartxt.end_time;
				this.countTime();
			},

			//收藏
			shouchang(type) {
				console.log(type)
				if (type == "1") {
					this.$api.carLike({
						auction_car_id: this.cartxt.id
					}).then(res => {
						if (res.code == 1) {
							console.log(res);
							this.ischang = true;
							this.$message.success("已收藏！");
						} else {
							this.$message.error("已收藏！");
						}

					})
				}

				if (type == "0") {
					this.$api.carNoLike({
						auction_car_id: this.cartxt.id
					}).then(res => {
						if (res.code == 1) {
							console.log(res);
							this.ischang = false;
							this.$message.warning("已取消收藏");
						} else {
							this.$message.error("已收藏！");
						}
					})
				}
			},


			//真正的投标
			toubiao() {
				// let param = {
				// 	car_list: {}
				// }

				// let id = this.cartxt.id + ""
				// let price = this.baojia + ""
				// param.car_list["" + id + ""] = price
				// console.log(param)
				let param = {
					id:this.cartxt.id,
					money:this.baojia
				}

				this.$api.shangjiatoubiao(param).then(res => {
					//this.$api.bidadd(this.car_list).then(res=>{
					// this.$message.success(res.msg)
					this.$message({
						showClose: true,
						duration: 8000,
						message: res.msg,
						type: 'success',
					})
					console.log(res);
					this.getcartext()
					this.centerDialogVisible = false
				})

			},


			//投标报价
			qrbaojia() {

				console.log("判断价格")
				let pd = 0
				if (this.cartxt.session_status != '2') {
					if (this.cartxt.high_money == '0.00') {
						pd = this.baojia - this.cartxt.start_price
						if (pd >= 100) {
							this.toubiao()
						} else {
							this.$message({
								showClose: true,
								message: '投标价格需大于起拍价100元或大于最高价100元',
								type: 'error',
								duration: 8000
							})
							// this.$message.error("投标价格需大于起拍价100元或大于最高价100元")
							this.centerDialogVisible = false
						}
					} else {
						pd = this.baojia - this.cartxt.high_money
						if (pd >= 100) {
							if (!(pd % 100)) {
								this.toubiao()
							} else {
								this.$message({
									showClose: true,
									message: '加价幅度需为100的整倍数',
									type: 'error',
									duration: 8000
								})
								// this.$message.error("加价幅度需为100的整倍数")
							}

						} else {
							this.$message({
								showClose: true,
								message: '投标价格需大于起拍价100元或大于最高价100元',
								type: 'error',
								duration: 8000
							})

							// this.$message.error("投标价格需大于起拍价100元或大于最高价100元")
							this.centerDialogVisible = false
						}
					}


				} else {
					this.toubiao()
				}


			},


			/* 查看维保 */
			weibao(type) {
				if (type == "0") {
					this.xieyiname = "weizhang"
				} else {
					this.xieyiname = "weibao"
				}
				this.FuwuIndent.type = type;
				this.$api.getFuwuIndent({
					order_type: type
				}).then(res => {

					if (res.code == 1) {
						this.FuwuIndent.out_trade_no = res.data.out_trade_no
						//console.log(res.data)
						this.chaxunres = res.data
						this.pay.out_trade_no = res.data.out_trade_no
						//console.log(this.chaxunres)

						this.bzjPayShow = true
					} else {
						this.$message.error('余额不足，请先充值!')
					}


				})
				this.$api.getFuwuxieyi({
					name: this.xieyiname
				}).then(res => {
					this.xieyi = res.data
				})

			},

			//三方查询付款
			fukuan() {

				this.$api.balancepay(this.pay).then(res => {
					if (res.code == 1) {
						this.$message.success(res.msg)
						this.chaxun()
						this.zfqrk = false
					} else {
						this.$message.error(res.msg)


						// if(res.msg=='未设置支付密码') {
						// 	this.$message.error(res.msg)
						// 	// this.dissetPass=true
						// 	window.open('index.html#/person/wallet/xiugai','_black')
						// }else{
						// 	this.$message.error(res.msg)
						// }						
					}
				})
			},

			//真正的查询
			chaxun() {
				const loading = this.$loading({
					lock: true,
					text: '查询中...',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				//console.log(this.FuwuIndent)

				// this.$api.setFuwuIndent({
				// 	carno: this.cartxt.car_number,
				// 	engineno: this.cartxt.engine_number,
				// 	classno: this.cartxt.frame_number,
				// 	out_trade_no: this.pay.out_trade_no,
				// 	type: this.FuwuIndent.type
				// }).then(res => {
				// this.$api.setFuwuIndent(this.FuwuIndent).then(res => {
				// 	loading.close();
				// 	//console.log(res);
				// 	this.tableData = res
				// 	this.bzjPayShow = false
				// 	this.jieguo = true
				// }).catch(err => {
				// 	loading.close();
				// })
				
				this.$api.setFuwuIndent(this.FuwuIndent).then(res => {
					
					if (res.code == 1) {
						// this.tableData = res
						setTimeout(()=>{
							loading.close();
							window.open("#/weibao?vin="+this.FuwuIndent.classno)
							this.dialogVisible = false
							//this.qrcx = false
							this.bzjPayShow = false
							//this.jieguo = true
						},20000)
					} else {
						loading.close();
						this.$message.error(res.msg)
						this.dialogVisible = false
						//this.qrcx = false
						this.bzjPayShow = false
						//this.jieguo = true
						// this.tableData.msg = res.msg
					}
							
				}).catch(err => {
					loading.close();
				})

			},

			handleCurrentChange() {},

			/* 估价 */
			toGujia() {
				window.open('https://che300.com/partner/zcp', '_blank');

			},

			goAuction(id, title, gs, sll) {
				//let id=
				window.open('index.html#/auctionhome/auction?id=' + id + '&pc=' + title + '&gs=' + gs + '&sl=' + sll, '_blank');
			},

			goAuctiondetail(id) {
				window.open('index.html#/auctionhome/AuctionDetail?id=' + id);
			},



			//计算结束剩余时间
			countTime(nowTimea) {
				//获取时间戳
				var time = this.time.endtime
				// console.log(time)

				//获取当前时间
				var date = new Date();
				var now = date.getTime();
				//设置截止时间
				var end = time * 1000;
				//时间差
				var leftTime = end - now;
				//定义变量 d,h,m,s保存倒计时的时间
				if (leftTime > 0) {
					var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
					var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
					var m = Math.floor(leftTime / 1000 / 60 % 60);
					var s = Math.floor(leftTime / 1000 % 60);
					//递归每秒调用countTime方法，显示动态时间效果					
					//console.log('isend=');
					this.time.d = d;
					this.time.h = h;
					this.time.m = m;
					this.time.s = s;
					setTimeout(this.countTime, 1000);

				} else {
					this.isend = true;
					//console.log('isend=true');
				}

				//return ([d, h, m, s])
			}


		}


	}
</script>

<style lang="less" scoped>
	.content_bar {
		height: 20px;//80px;
		/*width: 100vh;*/
		//background-color: #DD6161;

	}

	.content {
		clear: both;
		max-width: 1200px;
		/*height: 2000px;*/
		margin: 0 auto;
		position: relative;
	}

	.content-left {
		width: 885px;
		overflow: hidden;
		/*float: left;*/
		border: 1px solid #ccc;
	}

	.fLeft {
		float: left !important;
	}

	.opic_bbox {
		width: 385px;
		height: 310px;
		border: 1px solid #DCDCDC;
		background-color: #fff;
		position: relative;
		overflow: hidden;
		font-size: 10px;
	}

	.opic_group {
		height: 287px;
		float: left;
		margin: 0;
		display: inline;
	}

	.opic_group .opic_bbox img {
		width: 100%;
		object-fit: contain;
		height: 100%;
	}

	.cardetail_end_time span,
	.cardetail_start_price span {
		color: #800019;
		font-size: 20px;
	}

	.content-left .cardetail {
		width: 470px;
		float: right;
	}

	.content-left .cardetail h1 {
		font-size: 22px;
		color: #282828;
		font-weight: normal;
	}

	.content-left .cardetail ul {
		background-color: #f7f7f7;//#efefef;
		overflow: hidden;
		width: 459px;
		margin: 7px auto 10px;
		padding: 20px 0;
		margin-right: 15px;
	}


	.content-left .cardetail li {
		width: 200px;
		float: left;
		font-size: 16px;
		min-height: 75px;
		margin: 0 0 0 20px;
		color: #9b9b9b;
		list-style-type: none;
	}

	.content-left .cardetail li img {
		margin: 7px 10px 0 0;
		float: left;
	}

	/*.content-left .cardetail .cardetail-btm span,*/
	.content-left .cardetail ul span {
		display: block;
		color: #555;
		line-height: 30px;
		width: 158px;
		height: 30px;
		overflow: hidden;
	}


	.cx-tabs-both {
		padding-top: 0;
	}

	.cx-n-box {
		margin-bottom: 50px;
		clear: both;
		width: 100%;
		overflow: hidden;
	}

	.cn-tit {
		width: 100%;
		height: 30px;
		border-bottom: 1px solid #ccc;
		border-left: 4px solid #1f9bde;
		padding-left: 15px;
		margin-bottom: 30px;
		float: left;
	}

	.cn-table {
		width: 865px;
		/*float: left;*/
	}

	.cn-table table {
		width: 865px;
		font-size: 16px;
		margin-bottom: 15px;
		background-color: #ccc;
	}

	.cn-table td {
		width: 16%;
		text-align: center;
		height: 40px;
		background-color: #fff;
	}

	.cn-table td font {
		font-size: 12px;
	}

	.cx-n-box .cn-note {
		font-size: 17px;
		width: 95%;
		margin: 0 auto;
	}

	.cx-n-box .cn-images {
		margin: 64px auto 0 auto;
		width: 95%;
	}

	.cx-n-box .cn-images .item_img {
		height: 800px;
		width: 800px;
		margin: 0 auto;
	}

	.cx-n-box .cn-images .item_img img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}


	.content-right {
		width: 300px;
		/*height: 200px;*/
		overflow: hidden;
		/* float: right; */
		position: absolute;
		right: 0;
		top: 0;
		/*background-color: wheat;*/

	}


	.content-right_ser {
		/*text-align: center;*/
		border: 1px solid #ccc;
		clear: both;
		/* width: 80%; */
		height: 530px;
		padding: 0 15px;
		overflow: hidden;
		background: #f0f0f0;
		/* margin-top: 15px; */
	}

	.content-right_ser_titie_form {
		width: 95%;
		margin: 0 auto;
	}

	.content-right_ser_titie_form .el-form-item {
		margin-bottom: 0;
	}

	.pai-btn-group {
		/*padding: 15px;*/
		margin: 8px auto 0 auto;
		width: 80%;
	}

	.content-right_ser_titie {
		clear: both;
		width: 76%;
		overflow: hidden;
		color: #282828;
		font-size: 22px;
		font-weight: bold;
		/* margin-top: 16px; */
		padding: 17px;
		border-bottom: 2px solid #ccc;
		margin: 0 auto;

	}


	.kuaishu-button,
	.weibao-button,
	.weizhang-button {
		cursor: pointer;
		width: 100%;
		height: 50px;
		background: rgba(252, 137, 76, 1);
		border: 1px solid rgba(229, 229, 229, 1);
		border-radius: 9px;
		font-size: 22px;
		color: rgba(255, 255, 255, 1);
		/* line-height: 45px; */
		/* margin-right: 10px; */
		margin-top: 8px;
	}

	.weibao-button {
		background: #fb7061;
		width: 50%;
		font-size: 18px;
	}

	.weizhang-button {
		background: #fa9834;
	}

	.content-right_Same {
		/* text-align: center; */
		border: 1px solid #ccc;
		clear: both;
		/* width: 80%; */
		padding: 0 15px;
		overflow: hidden;
		background: #f0f0f0;
		margin-top: 15px;
	}

	/*.content-right_Same p {
		clear: both;
		width: 100%;
		overflow: hidden;
		color: #282828;
		font-size: 16px;
		font-weight: bold;
	}*/



	.shouchang {
		float: right;
		/*margin-top: -37px;*/
		position: relative;
	}

	.shouchang span,
	.shouchang div {
		/*position: absolute;
		right: 87px;*/
	}

	.el-icon-star-off {
		font-size: 34px;
		position: absolute;
		/* left: 1px; */
		right: 50px;
		bottom: -4px;
		color: #800019;
		cursor: pointer;

	}

	.el-icon-star-on {
		position: absolute;
		/* left: 0; */
		right: 50px;
		font-size: 38px;
		bottom: -6px;
		color: #800019;
		cursor: pointer;
	}

	/*图片放大*/
	.imgViewDom {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.77);
		display: none;
	}



	// .right_top_sc_item {
	// 	width: 95%;
	// 	height: 88px;
	// 	background-color: #85B6FF;
	// 	margin: 0 auto;
	// 	margin-top: 7px;
	// 	cursor: pointer;
	// 	border: 0.5px solid #f0f0f0;
	// }

	.right_top_sc_item {
		width: 95%;
		height: 72px; //88px;
		//background-color: #85B6FF;
		padding-bottom: 8px;
		position: relative;
		margin: 0 auto;
		margin-top: 7px;
		//cursor: pointer;
		border: 0.5px solid rgba(200, 200, 200, 0);
	}


	// .right_top_sc_item:hover {
	// 	border: 0.5px solid #800019;
	// }

	.right_top_sc_item .sc_item_img {
		height: 99%;
		width: 30%;
		background-color: #00000014;

		font-size: 10px;
	}

	.gengduo {
		width: 56px;
		float: right;
		margin-top: 10px;
		cursor: pointer;
	}

	.sc_item_txt .sc_item_txt_a:hover {
		text-decoration: underline;
		color: #1f9bde;
	}

	.sc_item_txt_a {
		cursor: pointer;
		margin-left: 5px;
		max-height: 54px;
		margin: 0;
		text-decoration: none;
		font-size: 16px;
		overflow: hidden;
		display: block;
	}

	.banner-img__wrapper {
		// position: absolute;
		// width: 1920px;
		//  height: 500px;
		//left: 50%;
		//margin-left: -960px;
	}

	.banner__inner {
		position: relative;
		width: 100%;
		overflow: hidden;
		//height: 674px;
	}
</style>
