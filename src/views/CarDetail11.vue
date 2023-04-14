<template>

	<div ref="cartxt">
		<div class="content_bar">

		</div>

		<div class="content">


			<div class="content-left">

				<div class="car-box">
					<div class="fLeft">
						<div class="opic_group">


							<div class="opic_bbox">
								<img :src="img" alt="">
							</div>


						</div>

					</div>


					<div class="cardetail">
						<h1>{{cartxt.title}}</h1>
						<!-- <span style="font-size: 20px;"> </span>-->


						<div class="cardetail_start_price">
							起拍价<span style="margin-left: 20px;">¥{{cartxt.pay_num}}</span>
						</div>

						<div class="shouchang">
							<div>
								<p>{{ischang?'已收藏':'未收藏'}}</p>
							</div>
							<!-- <span>{{ischang?'已收藏':'未收藏'}}</span> -->
							<i v-if="!ischang" class="el-icon-star-off" @click="shouchang('1')"></i>
							<i v-if="ischang" class="el-icon-star-on" @click="shouchang('0')"></i>

						</div>



						<!-- <div class="cardetail_end_time">联系电话

							<span style="margin-left: 15px;">888888888888</span>

						</div> -->





						<ul>
							<!-- <li><img src="../assets/images/car-detail-add.png" width="32" height="33"><span>{{cartxt.ascription}}</span>归属地</li>
							<li><img src="../assets/images/car-detail-date.png" width="32" height="33"><span>{{cartxt.card_time}}</span>上牌日期</li>
							<li><img src="../assets/images/car-detail-km.png" width="32" height="33"><span>{{cartxt.mileage}}</span>表显里程</li>
							<li><img src="../assets/images/car-detail-emi.png" width="32" height="33"><span>{{cartxt.paifang}}</span> 排放标准</li>
						 -->
						<li><img src="../assets/images/detail/dingwei.png" width="32" height="33"><span>{{cartxt.ascription}}</span>停放地</li>
						<li><img src="../assets/images/detail/riqi.png" width="32" height="33"><span>{{cartxt.card_time}}</span>上牌日期</li>
						<!-- <li><img src="../assets/images/car-detail-km.png" width="32" height="33"><span>{{cartxt.mileage_number}}</span>表显里程</li> -->
						<li><img src="../assets/images/detail/yibiao.png" width="32" height="33"><span>{{cartxt.mileage}}</span>表显里程</li>
						<li><img src="../assets/images/detail/paifnag.png" width="32" height="33"><span>{{cartxt.paifang}}</span>车辆类型</li>
												   
						
						</ul>


						<!-- 出价：<el-input-number size="small" v-model='baojia' :step='100'></el-input-number>
						<el-button type="danger"><span>确认出价</span></el-button> -->


						<button style="width: 200px;height: 50px; background-color: #DD6161;border-radius: 10px;">电话咨询:{{"18888888888"}}</button>


						<!-- <el-button type="danger" v-if="cartxt.check_report_path!=''">
							<a :href="cartxt.check_report_path" target="_blank" style="text-decoration:none">查看检验报告</a> </el-button> -->




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
									<tr>
										<td style="background-color: rgb(239, 239, 239);">车辆牌号</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.carno}}</td>
										<td style="background-color: rgb(239, 239, 239);">品牌信息</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.category}}</td>
										<td style="background-color: rgb(239, 239, 239);">车辆停放地</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.city}}</td>
									</tr>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">能否过户</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.transfer==1?'是':'否'}}</td>
										<td style="background-color: rgb(239, 239, 239);">排量/变速</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.pailiang}}</td>
										<td style="background-color: rgb(239, 239, 239);">归属地</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.ascription}} </td>
									</tr>
								</tbody>
							</table>



							<table cellpadding="0" cellspacing="1">
								<tbody>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">车辆颜色</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.color}}</td>
										<td style="background-color: rgb(239, 239, 239);">车辆类型</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.attribute}}</td>
										<td style="background-color: rgb(239, 239, 239);">排放标准</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.paifang}}</td>
									</tr>
									<tr>
										<td style="background-color: rgb(239, 239, 239);">上牌日期</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.card_time}}</td>
										<td style="background-color: rgb(239, 239, 239);"> 年检到期</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.year_end_time}}</td>
										<td style="background-color: rgb(239, 239, 239);">强险到期</td>
										<td style="background-color: rgb(255, 255, 255);">{{cartxt.force_end_time}}</td>
									</tr>
								</tbody>
							</table>



						</div>



					</div>


					<!-- 交付资料 -->
					<!-- 	<div class="cx-n-box">
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
							<div style="margin-bottom: 5px;" class="item_img" v-for="(item,index) in cartxt.img" :key="index">
								<img :src="item" alt="">
							</div>
						</div>

					</div> -->

					<div class="cx-n-box">
						<div class="cn-tit">
							<b>车辆图片</b>
						</div>

						<div class="cn-images">


							<viewer :images="cartxt.image">
								<div style="margin-bottom: 5px;cursor:pointer ;" class="item_img" v-for="(item,index) in cartxt.image" :key="index">

									<img :src="item" alt="">

								</div>

							</viewer>

						</div>

					</div>



				</div>

			</div>


			<div class="content-right">
				<div class="content-right_ser">
					<p class="content-right_ser_titie">店铺信息</p>
					<div class="content-right_ser_titie_form">

						<div class="titie_form_box" style="margin-top: 10px; height: 100%;">

							<div class="titie_form_img">
							<img :src="this.shoptxt.shop.images" alt="" style="width: 100%; height: 100%;">
							</div>

							<div class="" style="padding-top: 14px;">
								<div><span>{{shoptxt.shop.shop_name}}</span></div>
								<div style="padding-top: 14px;"><span>{{shoptxt.shop.city+shoptxt.shop.address}}</span></div>
							</div>


						</div>





					</div>



				</div>

				<div class="content-right_Same">
					<p class="content-right_ser_titie">店内车辆</p>
					<div class="content-right_ser_titie_form">
					
						<div class="right_top_sc_item" v-for="item in shoptxt.list" :key="item.id" @click="gocardetail(item.id,item.shop_id)">
					
							<div class="sc_item_img" style="float: left;">
								<img :src="item.image[0]" alt="" style="width: 100%; height: 100%;">
							</div>
							<div class="sc_item_txt" style="float: left;">
								<p style="width: 148px;
    height: 52px;
    font-size: 15px;
    overflow: hidden;">{{item.title}}</p>
								<p style="    margin-top: 15px;
    width: 149px;
    height: 21px;
    overflow: hidden;">{{"¥"+item.pay_num}} | {{item.category}}</p>
							</div>
					
					
						</div>
					
						<div class="gengduo" @click="goshophome">进店看看>></div>
					</div>
					

				</div>


			</div>
		</div>
	</div>


</template>

<script>
	export default {
		name: 'cardetail',

		data() {
			return {

				ischang: true,

				baojia: 100,
				//车辆信息
				cartxt: {
					id: '----',
					shop_id: '----',
					title: '----',
					carno: '----',
					pay_num: '----',
					img: ['----'],
					category: '----',
					other_category: '----',
					mileage: '----',
					ascription: '----',
					card_time: '----',
					year_end_time: '----',
					force_end_time: '----',
					paifang: '----',
					pailiang: '----',
					color: '----',
					attribute: '----',
					city: '----',
					transfer: '----',
					status: '----',
					online: '----',
					create_time: '----',
					cause: '----',
					like_num: '----',
					province: '----',
					area: '----',
					is_recommend: '----',
					like: '----',
					engine_number: '----',
					shop_info: {},

				},

				img: '',
				

				shoptxt: {shop:{images:''}},






			}
		},
		//mounted
		created() {
			//this.aaa();
			this.getcartext();
			//this.getshop();


		},

		methods: {

			//获取车辆信息
			getcartext() {

				let id = this.$route.query.id;
				this.$api.usercar_info({
					id: id
				}).then(res => {
					console.log(res.data)
					this.cartxt = res.data;
					let ings = this.cartxt.images.split(",");
					//console.log(ings)
					this.cartxt.images = ings
					this.img = this.cartxt.images[0]
									

				})
			},

			//获取店铺信息	
			getshop() {
				/*setTimeout(function() {
					this.$refs.cartxt.style.height = this.cartxt.car_pic_url.length * 800 + 1450 + 'px';
				}, 5000);*/
				let sid = this.$route.query.sid;
				
				this.$api.shopIndex({
					shop_id: sid,
					row:5
				}).then(res => {
					this.shoptxt=res.data
					
					for(let i=0;i<this.shoptxt.list.length;i++){						
						let ings = this.shoptxt.list[i].image.split(",");
						this.shoptxt.list[i].image=ings
					}
					console.log(this.shoptxt.list)
					console.log(this.shoptxt)
					console.log(this.shoptxt.shop.images)

				})

				/* if (this.cartxt.like == '未收藏') {
					this.ischang = false;

				} */


			},



			//收藏
			shouchang(type) {
				console.log(type)
				if (type == "1") {
					this.$api.carLike({
						auction_car_id: this.cartxt.id
					}).then(res => {
						console.log(res);
						this.ischang = true;
						this.$message.success(res.msg)
					})
				}

				if (type == "0") {
					this.$api.carNoLike({
						auction_car_id: this.cartxt.id
					}).then(res => {
						console.log(res);
						this.ischang = false;
						this.$message.warning(res.msg)
					})
				}
			},

			/* 估价 */
			toGujia() {
				window.open('https://che300.com/partner/zcp', '_blank');

			},
			
			gocardetail(id,sid) {
				//window.open('/CarDetail?id=' + id, '_blank');
				window.open(`index.html#/cardetail?id=${id}&sid=${sid}`, '_blank')
				//this.$router.push('/auctionhome/AuctionDetail?id=' + id);
			},
			
			goshophome(){
				window.open(`index.html#/buystoredetail?sid=${this.shoptxt.shop.id}`, '_blank');
			},



			//计算结束剩余时间
			/* countTime(time) {

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
				//setTimeout(this.countTime(time), 1000);

				return ([d, h, m, s])
			} */


		}


	}
</script>

<style lang="less" scoped>
	.content_bar {
		height: 80px;
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
		height: 363px;
		border: 1px solid #DCDCDC;
		background-color: #fff;
		position: relative;
		overflow: hidden;
	}

	.opic_group {
		height: 376px;
		float: left;
		margin: 0;
		display: inline;
		padding: 10px;
	}

	.opic_group .opic_bbox img {
		width: 100%;
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
		background-color:#f7f7f7;//#efefef;
		overflow: hidden;
		width: 450px;
		margin: 20px auto 10px;
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
		margin: 61px auto 0 auto;
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
	}


	.content-right {
		width: 300px;
		/*height: 200px;*/
		overflow: hidden;
		/* float: right; */
		position: absolute;
		right: 0;
		top: 0;//5px;
		/*background-color: wheat;*/

	}


	.content-right_ser {
		/*text-align: center;*/
		border: 1px solid #ccc;
		clear: both;
		/* width: 80%; */
		height: 425px;
		padding: 0 15px;
		overflow: hidden;
		background: #f0f0f0;
		/* margin-top: 15px; */
	}

	.content-right_ser_titie_form {
		width: 95%;
		height: 400px;
		margin: 0 auto;
	}

	.content-right_ser_titie_form .el-form-item {
		margin-bottom: 0;
	}

	.titie_form_img {
		background-color: black;
		width: 256px;
		height: 258px;

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
		margin-right: 18px;
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
	
	.gengduo {
		width: 89px;
		float: right;
		margin-top: 10px;
		cursor: pointer;
	}
	
	.right_top_sc_item .sc_item_img {
		height: 99%;
		width: 38%;
		background-color: #000000;		
	}
	
	
	.right_top_sc_item:hover {
		border: 0.5px solid #800019;
	}
	
	.content-right_ser_titie_form {
		width: 95%;
		margin: 0 auto;
	}
	.right_top_sc_item {
		width: 95%;
		height: 88px;
		background-color: #85B6FF;
		margin: 0 auto;
		margin-top: 7px;
		cursor: pointer;
		border: 0.5px solid #f0f0f0;
	}
</style>
