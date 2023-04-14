<template>

	<div ref="cartxt">

		<!-- <setPass :visible.sync="dissetPass" :dissetPasss="dissetPass"></setPass> -->

		<div class="content_bar">

		</div>

		<div class="content">


			<div class="content-left">

				<div class="car-box" style="height: 350px">			
					
					<div class="hezi">
						<div class="diyi">
							<div class="diyiitem" style="height: 70px;margin-left: 35px;"  v-if="weibaoData!=null">
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/泡水排查.png" alt="">
									<img v-if="weibaoData.bw!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.bw==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">泡水排查</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/火烧检查.png" alt="">
									<img v-if="weibaoData.fr!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.fr==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">火烧检查</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;margin-top: 5px;margin-bottom: 9px;" src="../assets/images/weibao/事故排查.png" alt="">
									<img v-if="weibaoData.ma!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.ma==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">事故排查</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;margin-top: 5px; margin-bottom: 9px;" src="../assets/images/weibao/里程记录.png" alt="">
									<img v-if="weibaoData.od!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.od==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">里程记录</span>
								</div>
								
							</div>
							
							<div style="border-bottom:1px solid #cccccc;"  v-if="weibaoData!=null"></div>
							
							<div class="diyiitem" style="height: 70px;margin-left: 35px;margin-top: 10px;"  v-if="weibaoData!=null">
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/发动机.png" alt="">
									<img v-if="weibaoData.en!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.en==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">发动机</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/变速箱.png" alt="">
									<img v-if="weibaoData.tc!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.tc==0" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">变速箱</span>
								</div>
								
								<!-- <div class="diyiitemli">
									<img style="width: 50px;height: 44px;" src="../assets/images/weibao/底盘.png" alt="">
									<img v-if="weibaoData.ma==0" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.ma!=0" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">底盘</span>
								</div> -->
								
								<div class="diyiitemli">
									<img style="width: 50px;height: 44px;" src="../assets/images/weibao/气囊安全带.png" alt="">
									<img v-if="weibaoData.sab!=1" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.sab==1" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;width: 80px;position: absolute;right: -10px;">气囊安全带</span>
								</div>
								
								<!-- <div class="diyiitemli">
									<img style="width: 50px;height: 44px;" src="../assets/images/weibao/空调.png" alt="">
									<img v-if="weibaoData.od==0" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-if="weibaoData.od!=0" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">空调</span>
								</div> -->
								
							</div>
							
							<div style="border-bottom:1px solid #cccccc;"></div>
							
							<div class="diyiitem" style="height: 70px;margin-left: 35px;margin-top: 10px;">
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/车门.png" alt="">
									<img v-if="chuxianData.zqm!=0 || chuxianData.yqm!=0 || chuxianData.zhm!=0 || chuxianData.yhm!=0" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<img v-else class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<span style="display: block;text-align: center;">车门</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;" src="../assets/images/weibao/翼子板.png" alt="">
									<img v-if="chuxianData.zqyzb!=0 || chuxianData.yqyzb!=0 || chuxianData.yhyzb!=0 || chuxianData.zhyzb!=0" class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<img v-else class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<span style="display: block;text-align: center;">翼子板</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;height: 44px;margin-top: 5px;margin-bottom: 9px;" src="../assets/images/weibao/保险杠.png" alt="">
									<img v-if="chuxianData.hbxg==0 || chuxianData.qbxg==0" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-else class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">保险杠</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;height: 44px;margin-top: 5px;margin-bottom: 9px;" src="../assets/images/weibao/机盖.png" alt="">
									<img v-if="chuxianData.qjg==0" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-else class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">机盖</span>
								</div>
								
								<div class="diyiitemli">
									<img style="width: 50px;height: 44px;margin-top: 5px;margin-bottom: 9px;" src="../assets/images/weibao/车顶.png" alt="">
									<img v-if="chuxianData.cd==0" class="duihao" src="../assets/images/weibao/蓝色对号.png" alt="">
									<img v-else class="duihao" src="../assets/images/weibao/红色维修.png" alt="">
									<span style="display: block;text-align: center;">车顶</span>
								</div>
								
							</div>
							<div class="cn-table" style="margin-top: 22px;" v-if="weibaoData!=null">
							 <table cellpadding="0" cellspacing="1">
							<tbody>
								<tr>
									<td style="background-color: rgb(239, 239, 239);">年均行驶里程</td>
									<td style="background-color: rgb(255, 255, 255);"></td>
									<td style="background-color: rgb(239, 239, 239);">年均保养次数</td>
									<td style="background-color: rgb(255, 255, 255);"></td>
								</tr>
								<tr>
									<td style="background-color: rgb(239, 239, 239);">最后保养时间</td>
									<td style="background-color: rgb(255, 255, 255);">{{weibaoData.lastdate}}</td>
									<td style="background-color: rgb(239, 239, 239);">最后记录时间</td>
									<td style="background-color: rgb(255, 255, 255);">{{weibaoData.lastdate}}</td>
								</tr>
								
							</tbody>
							</table>
							</div>
						</div>
					</div>

				</div>


				<!-- 基本信息 -->
				<div class="cx-tabs-both">
					<div class="cx-n-box">
						<div class="cn-tit">
							<b>车身外观</b>
						</div>		
						
						<div style="height: 20px; margin-top: 10px;">
							<div class="uili">
								<img v-if="chuxianData.zqm==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>左前门</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.zqyzb==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>左前翼子板</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.qjg==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>前机盖</span>
							</div>
							<div class="uili" style="margin-left: 30px;">
								<img  v-if="chuxianData.cd==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>车顶</span>
							</div>		
							
						</div>
						
						<div style="height: 20px; margin-top: 10px;">
							<div class="uili">
								<img v-if="chuxianData.zhm==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>左后门</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.zhyzb==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>左后翼子板</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.hwm==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>后尾门</span>
							</div>
							<div class="uili" style="margin-left: 30px;">
								<img  v-if="chuxianData.ddb==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>底大边</span>
							</div>								
						</div>
						
						<div style="height: 20px; margin-top: 10px;">
							<div class="uili">
								<img v-if="chuxianData.yhm==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>右后门</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.yhyzb==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>右后翼子板</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.qbxg==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>前保险杠</span>
							</div>
							<div class="uili">
								<img  v-if="chuxianData.dfbl==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>挡风玻璃</span>
							</div>								
						</div>
						
						<div style="height: 20px; margin-top: 10px;">
							<div class="uili">
								<img v-if="chuxianData.yqm==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>右前门</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.yqyzb==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>右前翼子板</span>
							</div>
							<div class="uili">
								<img v-if="chuxianData.hbxg==0" style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<img v-else style="width: 15px;" src="../assets/images/weibao/灰色维修.png" alt="">
								<span>后保险杠</span>
							</div>															
						</div>
						
						
						
						<div class="block" style="margin-top:20px ;">
						  <el-timeline>
						    <el-timeline-item v-for="item in chuxianData.info" :timestamp="item.date" placement="top">
						      <el-card>
						        <span style="line-height: 24px;" v-for="item2 in item.result">{{item2.dangerSingleName}}; </span>
						        <!-- <p v-for="item2 in item.result">{{item2.dangerSingleName}};</p> -->
						      </el-card>
						    </el-timeline-item>							
							
						  </el-timeline>
						</div>
						
						
						<!-- <div style="height: 20px;">
							<div class="uili">
								<img style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<span>左前门</span>
							</div>
							
							<div class="uili">
								<img style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<span>左前门</span>
							</div>	
							
							<div class="uili">
								<img style="width: 15px;" src="../assets/images/weibao/对号小.png" alt="">
								<span>左前门</span>
							</div>
						</div> -->

					</div>				
					
					
					<!-- 非重要维修历史 -->
					<div class="cx-n-box" v-if="weibaoData!=null">
						<div class="cn-tit">
							<b>非重要维修历史({{weibaoData.mc.length}})</b>
						</div>
					
						<div class="block" style="margin-top:20px ;">
						  <el-timeline>
						    <el-timeline-item v-for="item in weibaoData.mc" :timestamp="item.rd" placement="top">
						      <el-card>
						        <!-- <h4>{{item.pt}}</h4> -->
						        <p style="line-height: 24px;">{{item.pt}}</p>
						      </el-card>
						    </el-timeline-item>							
							
						  </el-timeline>
						</div>
						
					</div>


					<!-- 历史里程 -->
					<div class="cx-n-box"  v-if="weibaoData!=null">
						<div class="cn-tit">
							<b>历史里程({{weibaoData.mc.length}})</b>
						</div>
						
						<div class="cn-table" style="margin-top: 22px;margin-left: 10px;">
						 <table cellpadding="0" cellspacing="1">
						<tbody>
							<tr v-for="item in weibaoData.mc">
								<td style="background-color: rgb(255, 255, 255);">{{item.rd}}</td>
								<td style="background-color: rgb(255, 255, 255);">{{item.mn}}Km</td>
								<td style="background-color: rgb(255, 255, 255);">{{item.ie==0?"正常":"异常"}}</td>								
							</tr>							
							
						</tbody>
						</table>
						</div>
						
					</div>


				</div>

			</div>
	
		</div>

	</div>


</template>

<script>
	// import setPass from '../components/setPass.vue'

	export default {
		name: 'weibao',

		// components: {
		// 	setPass
		// },

		data() {
			return {
				
				weibaoData:{},
				chuxianData:{},
				
				
			}
		},
		//created
		mounted() {			
			//this.chaxun();
		},

		created() {
			this.chaxun();
			//this.getcartext();
		},

		methods: {	
			
			chaxun(){
				this.$api.getweibao({
					 vin:this.$route.query.vin,
					 type:'1'
				}).then(res=>{
					console.log(res)
					this.weibaoData=res.data.weibao
					this.chuxianData=res.data.chuxian
				})
			},


		}


	}
</script>

<style lang="less" scoped>
	.content_bar {
		height: 20px;
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
		margin: 0 auto;
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
		background-color: #efefef;
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
		//float: left;
	}

	.cn-table {
		width: 865px;
		/*float: left;*/
	}

	.cn-table table {
		width: 840px;
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
	
	.hezi{
		width: 95%;
		height: 100%;
		//background-color: #0086B3;
		margin: 10px auto;
	}
	
	.diyiitemli{
		position: relative;
		float: left;
		text-align: center;
		    font-size: 13px;
		    width: 60px;
		    margin-right: 27px;
			
	}
	
	.duihao{
		width: 17px;
		    position: absolute;
		  //  right: 2px;
	}
	
	.cuo{
		position: absolute;
		    width: 25px;
		    top: -4px;
		    right: -2px;
	}
	.uili{
		float: left;
		margin-left: 15px;
	}
	/deep/ .el-timeline-item__wrapper{
		    width: 750px;
	}
	
</style>
