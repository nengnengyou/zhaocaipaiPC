<template>

	<div class="jiance">


		<!-- <div style="height: 50px;"></div> -->
		<div>
			<el-button @click="xiugai" class="photo" type="primary">保存修改</el-button>
		</div>

		<div class="tou">
			<!-- <img class="logo" src="../assets/images/logo2.png" alt=""> -->
			<img class="logo" src="../assets/images/jiance/logo.png" alt="">

			<div class="text">
				<h1 style="margin: 0;">车辆检测报告</h1>
				<P>&nbsp;</P>
				<p>评估编号:{{pgbg.pgbh}}</p>
				<P>&nbsp;</P>
				<P>经判定，此车大概率为：2010款 普拉多（进口）2.7L 手动版</P>
				<P>&nbsp;</P>
				<h3 style="margin: 0;color: #2487ce;">本检测报告仅用于招财拍车网</h3>
			</div>
		</div>

		<div class="chekuang">
			<h1 style="margin: 0;">车况概述</h1>

			<div class="cn-table">
				<table cellpadding="0" cellspacing="1">
					<tbody>
						<tr style="height: 65px;">
							<td style="background-color: rgb(239, 239, 239);width: 191px;">车况判定等级</td>
							<td style="background-color: rgb(255, 255, 255);">
								<el-input style="width:265px;color: #000000;" v-model="pgbg.ckdj"></el-input>
							</td>

						</tr>
						<tr style="height: 100px;">
							<td style="background-color: rgb(239, 239, 239);width: 600px;">车况综述</td>
							<td style="background-color: rgb(255, 255, 255);text-align: initial;padding: 10px;">
								<textarea class="ChatSend-txt" placeholder="这里输入聊天内容" style="color: #000000;;width: 570px;
    height: 100px;"
								 v-model="pgbg.ckzs"></textarea>
							</td>
						</tr>

					</tbody>
				</table>
			</div>
		</div>

		<!-- 车辆基本信息 -->
		<div class="jiben">

			<div class="cx-n-box">
				<div class="cn-tit">
					<b>车辆基本信息</b>
				</div>

				<div class="cn-note">
					<div class="cn-table" style="opacity: 0.8;">
						<table cellpadding="0" cellspacing="1" style="float: left;">
							<tbody>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车架号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.cjh"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车牌号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.cph"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车辆停放地</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.cltfd"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">首次上牌日期</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.scsprq"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">出厂日期</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.ccrq"></el-input>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

					<div class="cn-table" style="opacity: 0.8;">
						<table cellpadding="0" cellspacing="1" style="float: right;">
							<tbody>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">发动机号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.fdjh"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">表显里程</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.bllc"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车身颜色</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.csys"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">燃油类型</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.rylx"></el-input>
									</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">使用性质</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">
										<el-input style="width:100%;" v-model="pgbg.syxz"></el-input>
									</td>
								</tr>

							</tbody>
						</table>
					</div>

				</div>
			</div>

		</div>


		<!-- 事故排查 -->
		<div class="jiben" style="page-break-after: always;">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>事故排查</b>
					<div style="width: 500px;float: right;">
						<img style="width: 15px;margin-right: 10px;" src="../assets/images/jiance/圆形对号.png" alt="">
						<span style="margin-right: 30px;">正常</span>
						<img style="width: 15px;margin-right: 10px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
						<span style="margin-right: 30px;">修复</span>
						<img style="width: 15px;margin-right: 10px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
						<span style="margin-right: 30px;">变形</span>
						<img style="width: 15px;margin-right: 10px;" src="../assets/images/jiance/圆形叉号.png" alt="">
						<span style="margin-right: 30px;">切割更换</span>
					</div>
				</div>

				<div class="cn-note">
					<div class="box2">

						<div class="xuanze" ref="xztb">
							<img @click="qrxuanzetb(0)" style="width: 17px;margin-top: 5px;cursor: pointer;cursor: pointer;" src="../assets/images/jiance/圆形对号.png"
							 alt="">
							<img @click="qrxuanzetb(1)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb(2)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/三角形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb(3)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形叉号.png"
							 alt="">
							<div class="popper__arrow"></div>
						</div>

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img src="../assets/images/jiance/1.png" style="width: 415px;" alt="">
							</div>
						</div>


						<div class="text">
							<div class="text1 textt">
								<span>左B柱</span>
								<img v-if="pgbg.sgpc.zbz==0||!pgbg.sgpc.zbz" @click="xuanzetb(1,1,-8,'zbz')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zbz==1" @click="xuanzetb(1,1,-8,'zbz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zbz==2" @click="xuanzetb(1,1,-8,'zbz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zbz==3" @click="xuanzetb(1,1,-8,'zbz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>

							<div class="text2 textt">
								<span>左A柱</span>
								<img v-if="pgbg.sgpc.zaz==0||!pgbg.sgpc.zaz" @click="xuanzetb(1,1,23,'zaz')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zaz==1" @click="xuanzetb(1,1,23,'zaz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zaz==2" @click="xuanzetb(1,1,23,'zaz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zaz==3" @click="xuanzetb(1,1,23,'zaz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text3 textt">
								<span>左前避震器座</span>
								<img v-if="pgbg.sgpc.zqbzqz==0||!pgbg.sgpc.zqbzqz" @click="xuanzetb(1,1,50,'zqbzqz')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqbzqz==1" @click="xuanzetb(1,1,50,'zqbzqz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqbzqz==2" @click="xuanzetb(1,1,50,'zqbzqz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqbzqz==3" @click="xuanzetb(1,1,50,'zqbzqz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text4 textt">
								<span>左前纵梁</span>
								<img v-if="pgbg.sgpc.zqzl==0||!pgbg.sgpc.zqzl" @click="xuanzetb(1,1,77,'zqzl')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqzl==1" @click="xuanzetb(1,1,77,'zqzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqzl==2" @click="xuanzetb(1,1,77,'zqzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqzl==3" @click="xuanzetb(1,1,77,'zqzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text5 textt">
								<span>防火墙</span>
								<img v-if="pgbg.sgpc.fhq==0||!pgbg.sgpc.fhq" @click="xuanzetb(1,1,113,'fhq')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.fhq==1" @click="xuanzetb(1,1,113,'fhq')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.fhq==2" @click="xuanzetb(1,1,113,'fhq')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.fhq==3" @click="xuanzetb(1,1,113,'fhq')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text6 textt">
								<span>变速箱</span>
								<img v-if="pgbg.sgpc.bsx==0||!pgbg.sgpc.bsx" @click="xuanzetb(1,1,150,'bsx')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.bsx==1" @click="xuanzetb(1,1,150,'bsx')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.bsx==2" @click="xuanzetb(1,1,150,'bsx')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.bsx==3" @click="xuanzetb(1,1,150,'bsx')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text7 textt">
								<span>前横梁</span>
								<img v-if="pgbg.sgpc.qhl==0||!pgbg.sgpc.qhl" @click="xuanzetb(1,1,225,'qhl')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.qhl==1" @click="xuanzetb(1,1,225,'qhl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qhl==2" @click="xuanzetb(1,1,225,'qhl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qhl==3" @click="xuanzetb(1,1,225,'qhl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text8">
								<img v-if="pgbg.sgpc.zcz==0||!pgbg.sgpc.zcz" @click="xuanzetb(1,2,-7,'zcz')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zcz==1" @click="xuanzetb(1,2,-7,'zcz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zcz==2" @click="xuanzetb(1,2,-7,'zcz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zcz==3" @click="xuanzetb(1,2,-7,'zcz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左C柱</span>
							</div>
							<div class="text9">
								<img v-if="pgbg.sgpc.zhzl==0||!pgbg.sgpc.zhzl" @click="xuanzetb(1,2,175,'zhzl')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhzl==1" @click="xuanzetb(1,2,175,'zhzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhzl==2" @click="xuanzetb(1,2,175,'zhzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhzl==3" @click="xuanzetb(1,2,175,'zhzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左后纵梁（主驾侧）</span>
							</div>
							<div class="text10">
								<img v-if="pgbg.sgpc.zqb==0||!pgbg.sgpc.zqb" @click="xuanzetb(1,2,215,'zqb')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqb==1" @click="xuanzetb(1,2,215,'zqb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqb==2" @click="xuanzetb(1,2,215,'zqb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqb==3" @click="xuanzetb(1,2,215,'zqb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左裙边</span>
							</div>
							<div class="text11">
								<img v-if="pgbg.sgpc.fdj==0||!pgbg.sgpc.fdj" @click="xuanzetb(1,2,237,'fdj')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.fdj==1" @click="xuanzetb(1,2,237,'fdj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.fdj==2" @click="xuanzetb(1,2,237,'fdj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.fdj==3" @click="xuanzetb(1,2,237,'fdj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>发动机</span>
							</div>

						</div>

						<div class="tu1"><span>(图：车身结构件)</span></div>

					</div>

					<div style="height: 20px;"></div>


					<div class="box2" style="margin-top: 15px;">

						<div class="xuanze" ref="xztb2">
							<img @click="qrxuanzetb2(0)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形对号.png"
							 alt="">
							<img @click="qrxuanzetb2(1)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb2(2)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/三角形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb2(3)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形叉号.png"
							 alt="">
							<div class="popper__arrow"></div>
						</div>

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img style="width: 415px;" src="../assets/images/jiance/2.png" alt="">
							</div>
						</div>


						<div class="text">
							<div class="textt1 textt">
								<span>右B柱</span>
								<img v-if="pgbg.sgpc.ybz==0||!pgbg.sgpc.ybz" @click="xuanzetb2(2,1,9,'ybz')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.ybz==1" @click="xuanzetb2(2,1,9,'ybz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.ybz==2" @click="xuanzetb2(2,1,9,'ybz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.ybz==3" @click="xuanzetb2(2,1,9,'ybz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>

							<div class="textt2 textt">
								<span>右C柱</span>
								<img v-if="pgbg.sgpc.ycz==0||!pgbg.sgpc.ycz" @click="xuanzetb2(2,1,42,'zcz')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.ycz==1" @click="xuanzetb2(2,1,42,'zcz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.ycz==2" @click="xuanzetb2(2,1,42,'zcz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.ycz==3" @click="xuanzetb2(2,1,42,'zcz')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="textt3 textt">
								<span>右后纵梁</span>
								<img v-if="pgbg.sgpc.yhzl==0||!pgbg.sgpc.yhzl" @click="xuanzetb2(2,1,175,'yhzl')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhzl==1" @click="xuanzetb2(2,1,175,'yhzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhzl==2" @click="xuanzetb2(2,1,175,'yhzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhzl==3" @click="xuanzetb2(2,1,175,'yhzl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="textt4 textt">
								<span>右裙边</span>
								<img v-if="pgbg.sgpc.yqb==0||!pgbg.sgpc.yqb" @click="xuanzetb2(2,1,203,'yqb')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqb==1" @click="xuanzetb2(2,1,203,'yqb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqb==2" @click="xuanzetb2(2,1,203,'yqb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqb==3" @click="xuanzetb2(2,1,203,'yqb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>

							<div class="textt5">
								<img v-if="pgbg.sgpc.yaz==0||!pgbg.sgpc.yaz" @click="xuanzetb2(2,2,-4,'yaz')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yaz==1" @click="xuanzetb2(2,2,-4,'yaz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yaz==2" @click="xuanzetb2(2,2,-4,'yaz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yaz==3" @click="xuanzetb2(2,2,-4,'yaz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右A柱</span>
							</div>
							<div class="textt6">
								<img v-if="pgbg.sgpc.yqzl==0||!pgbg.sgpc.yqzl" @click="xuanzetb2(2,2,44,'yqzl')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqzl==1" @click="xuanzetb2(2,2,44,'yqzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqzl==2" @click="xuanzetb2(2,2,44,'yqzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqzl==3" @click="xuanzetb2(2,2,44,'yqzl')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前纵梁</span>
							</div>
							<div class="textt7">
								<img v-if="pgbg.sgpc.yqbzqz==0||!pgbg.sgpc.yqbzqz" @click="xuanzetb2(2,2,84,'yqbzqz')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqbzqz==1" @click="xuanzetb2(2,2,84,'yqbzqz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqbzqz==2" @click="xuanzetb2(2,2,84,'yqbzqz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqbzqz==3" @click="xuanzetb2(2,2,84,'yqbzqz')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前避震器座</span>
							</div>


						</div>
						<div class="tu1"><span>(图：车身覆盖件)</span></div>

					</div>

					<div style="height: 20px;"></div>

					<div class="box2" style="margin-top: 15px;height: 410px;">

						<div class="xuanze" ref="xztb3">
							<img @click="qrxuanzetb3(0)" style="width: 17px;margin-top: 5px;cursor: pointer;cursor: pointer;" src="../assets/images/jiance/圆形对号.png"
							 alt="">
							<img @click="qrxuanzetb3(1)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb3(2)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/三角形感叹号.png"
							 alt="">
							<img @click="qrxuanzetb3(3)" style="width: 17px;margin-top: 5px;cursor: pointer;" src="../assets/images/jiance/圆形叉号.png"
							 alt="">
							<div class="popper__arrow"></div>
						</div>

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img style="width: 415px;" src="../assets/images/jiance/3.png" alt="">
							</div>
						</div>


						<div class="text">
							<div class="texttt1 textt">
								<span>左后车门</span>
								<img v-if="pgbg.sgpc.zhm==0||!pgbg.sgpc.zhm" @click="xuanzetb3(3,1,-7,'zhm')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhm==1" @click="xuanzetb3(3,1,-7,'zhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhm==2" @click="xuanzetb3(3,1,-7,'zhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhm==3" @click="xuanzetb3(3,1,-7,'zhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>

							<div class="texttt2 textt">
								<span>左后叶子板、翼子板</span>
								<img v-if="pgbg.sgpc.zhyzb==0||!pgbg.sgpc.zhyzb" @click="xuanzetb3(3,1,43,'zhyzb')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhyzb==1" @click="xuanzetb3(3,1,43,'zhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhyzb==2" @click="xuanzetb3(3,1,43,'zhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhyzb==3" @click="xuanzetb3(3,1,43,'zhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="texttt3 textt">
								<span>后挡玻璃</span>
								<img v-if="pgbg.sgpc.hdbl==0||!pgbg.sgpc.hdbl" @click="xuanzetb3(3,1,93,'hdbl')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hdbl==1" @click="xuanzetb3(3,1,93,'hdbl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hdbl==2" @click="xuanzetb3(3,1,93,'hdbl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hdbl==3" @click="xuanzetb3(3,1,93,'hdbl')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="texttt4 textt">
								<span>后行李箱盖</span>
								<img v-if="pgbg.sgpc.hxlxg==0||!pgbg.sgpc.hxlxg" @click="xuanzetb3(3,1,118,'hxlxg')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hxlxg==1" @click="xuanzetb3(3,1,118,'hxlxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hxlxg==2" @click="xuanzetb3(3,1,118,'hxlxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hxlxg==3" @click="xuanzetb3(3,1,118,'hxlxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="texttt5 textt">
								<span>后保险杠</span>
								<img v-if="pgbg.sgpc.hbxg==0||!pgbg.sgpc.hbxg" @click="xuanzetb3(3,1,141,'hbxg')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hbxg==1" @click="xuanzetb3(3,1,141,'hbxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hbxg==2" @click="xuanzetb3(3,1,141,'hbxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hbxg==3" @click="xuanzetb3(3,1,141,'hbxg')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="texttt6 textt">
								<span>右后叶子板、翼子板</span>
								<img v-if="pgbg.sgpc.yhyzb==0||!pgbg.sgpc.yhyzb" @click="xuanzetb3(3,1,233,'yhyzb')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhyzb==1" @click="xuanzetb3(3,1,233,'yhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==2" @click="xuanzetb3(3,1,233,'yhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==3" @click="xuanzetb3(3,1,233,'yhyzb')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="texttt7 textt">
								<span>右后车门</span>
								<img v-if="pgbg.sgpc.yhm==0||!pgbg.sgpc.yhm" @click="xuanzetb3(3,1,277,'yhm')" style="width: 17px;margin-left: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==1" @click="xuanzetb3(3,1,277,'yhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhm==2" @click="xuanzetb3(3,1,277,'yhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhm==3" @click="xuanzetb3(3,1,277,'yhm')" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>

							<div class="texttt8">
								<img v-if="pgbg.sgpc.zqm==0||!pgbg.sgpc.zqm" @click="xuanzetb3(3,2,-5,'zqm')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqm==1" @click="xuanzetb3(3,2,-5,'zqm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqm==2" @click="xuanzetb3(3,2,-5,'zqm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqm==3" @click="xuanzetb3(3,2,-5,'zqm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左前车门</span>
							</div>
							<div class="texttt9">
								<img v-if="pgbg.sgpc.zqyzb==0||!pgbg.sgpc.zqyzb" @click="xuanzetb3(3,2,30,'zqyzb')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqyzb==1" @click="xuanzetb3(3,2,30,'zqyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqyzb==2" @click="xuanzetb3(3,2,30,'zqyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqyzb==3" @click="xuanzetb3(3,2,30,'zqyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左前叶子</span>
							</div>
							<div class="texttt10">
								<img v-if="pgbg.sgpc.zhsj==0||!pgbg.sgpc.zhsj" @click="xuanzetb3(3,2,84,'zhsj')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhsj==1" @click="xuanzetb3(3,2,84,'zhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhsj==2" @click="xuanzetb3(3,2,84,'zhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhsj==3" @click="xuanzetb3(3,2,84,'zhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左后视镜</span>
							</div>
							<div class="texttt11">
								<img v-if="pgbg.sgpc.yqg==0||!pgbg.sgpc.yqg" @click="xuanzetb3(3,2,115,'yqg')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqg==1" @click="xuanzetb3(3,2,115,'yqg')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqg==2" @click="xuanzetb3(3,2,115,'yqg')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqg==3" @click="xuanzetb3(3,2,115,'yqg')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>引擎盖</span>
							</div>
							<div class="texttt12">
								<img v-if="pgbg.sgpc.qbxg==0||!pgbg.sgpc.qbxg" @click="xuanzetb3(3,2,138,'qbxg')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.qbxg==1" @click="xuanzetb3(3,2,138,'qbxg')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qbxg==2" @click="xuanzetb3(3,2,138,'qbxgq')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qbxg==3" @click="xuanzetb3(3,2,138,'qbxg')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>前保险杠</span>
							</div>
							<div class="texttt13">
								<img v-if="pgbg.sgpc.cd==0||!pgbg.sgpc.cd" @click="xuanzetb3(3,2,162,'cd')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.cd==1" @click="xuanzetb3(3,2,162,'cd')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.cd==2" @click="xuanzetb3(3,2,162,'cd')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.cd==3" @click="xuanzetb3(3,2,162,'cd')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>车顶</span>
							</div>
							<div class="texttt14">
								<img v-if="pgbg.sgpc.yhsj==0||!pgbg.sgpc.yhsj" @click="xuanzetb3(3,2,190,'yhsj')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhsj==1" @click="xuanzetb3(3,2,190,'yhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhsj==2" @click="xuanzetb3(3,2,190,'yhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhsj==3" @click="xuanzetb3(3,2,190,'yhsj')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右后视镜</span>
							</div>
							<div class="texttt15">
								<img v-if="pgbg.sgpc.yhyzb==0||!pgbg.sgpc.yhyzb" @click="xuanzetb3(3,2,236,'yhyzb')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhyzb==1" @click="xuanzetb3(3,2,236,'yhyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==2" @click="xuanzetb3(3,2,236,'yhyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==3" @click="xuanzetb3(3,2,236,'yhyzb')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前叶子板、翼子板</span>
							</div>
							<div class="texttt16">
								<img v-if="pgbg.sgpc.yhm==0||!pgbg.sgpc.yhm" @click="xuanzetb3(3,2,279,'yhm')" style="width: 17px;margin-right: 6px;"
								 src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==1" @click="xuanzetb3(3,2,279,'yhm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhm==2" @click="xuanzetb3(3,2,279,'yhm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhm==3" @click="xuanzetb3(3,2,279,'yhm')" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前车门</span>
							</div>



						</div>
						<!-- <div class="tu1"><span>(图：车身覆盖件)</span></div> -->

					</div>

				</div>
			</div>

		</div>

		<!-- <div style="height: 70px;"></div> -->
		<!-- 车辆照片 -->
		<div class="jiben">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>车辆照片</b>
				</div>
				<div class="cn-note">


					<div class="cn-images">

						<div class="uploader-popup">

							<div class="imgUploadBox">
								<!-- <p class="uploader-title">本地上传</p> -->
								<!-- <i style="cursor: pointer;" @click="guanbiimg" class="bui-icon iconfont  close-popup icon-close-outline"></i> -->

								<div>
									<!-- <el-upload name="file" :action="baseURL+'api/common/upload'" list-type="picture-card" :on-success="handlePictureCardPreview"
									 :on-remove="handleRemove" :on-preview="yulan">									
									
										<i class="el-icon-plus"></i>
									</el-upload>

									<el-dialog :visible.sync="dialogVisible">
										<img width="100%" :src="dialogImageUrl" alt="">
									</el-dialog> -->
									
									<el-upload name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess"
									 :on-remove="fileRemove" :file-list="fileList" :on-preview="lookimg">
										<el-button class="photo" type="primary">上传汽车照片</el-button>
									</el-upload>

								</div>


							</div>



						</div>


						<!-- <viewer :images="cheliangImg" style="display: flex;justify-content: space-between;flex-wrap: wrap;">
							<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in cheliangImg" :key="index">
								<div class="banner__inner">
									<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;height: 100%;">
																	
								</div>
							</div>
						</viewer> -->

						<!-- <viewer :images="cheliangImg">
							<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in cheliangImg" :key="index">
								<div class="banner__inner">
									<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;height: 100%;">

								</div>
							</div>
						</viewer> -->

					</div>

				</div>
			</div>

		</div>

		<!-- 维保记录 -->
		<div class="jiben">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>维保记录</b>
				</div>

				<div class="cn-note">
				

				</div>
			</div>

		</div>

		<!-- 出险记录 -->
		<div class="jiben">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>出险记录</b>
				</div>

				<div class="cn-note">
				

				</div>
			</div>

		</div>

		<!-- 事故点照片 -->
		<div class="jiben">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>事故点照片</b>
				</div>

				<div class="cn-note">
					
					<div class="uploader-popup">
					
						<div class="imgUploadBox">
							<!-- <p class="uploader-title">本地上传</p> -->
							<!-- <i style="cursor: pointer;" @click="guanbiimg" class="bui-icon iconfont  close-popup icon-close-outline"></i> -->
					
							<div>
								<!-- <el-upload name="file" :action="baseURL+'api/common/upload'" list-type="picture-card" :on-success="handlePictureCardPreview"
								 :on-remove="handleRemove" :on-preview="yulan">									
								
									<i class="el-icon-plus"></i>
								</el-upload>
					
								<el-dialog :visible.sync="dialogVisible">
									<img width="100%" :src="dialogImageUrl" alt="">
								</el-dialog> -->
								
								<el-upload name="file" class="upload-demo" :action="baseURL+'api/common/upload'" multiple :on-success="fileSuccess2"
								 :on-remove="fileRemove2" :file-list="fileList2" :on-preview="lookimg">
									<el-button class="photo" type="primary">上传事故点照片</el-button>
								</el-upload>
					
							</div>
					
					
						</div>
					
					
					
					</div>
					
				</div>
			</div>

		</div>

		<!-- 等级说明 -->
		<div class="jiben" style="page-break-after: always;">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>等级说明</b>
				</div>

				<div class="cn-note">
					<p>A级：覆盖件无可见损伤，结构件无异常，整车保养完好，基本无磨损。</p>
					<p>B级：覆盖件有油漆钣金修复，结构件无异常，机件正常，整车正常磨损。</p>
					<p>C级：覆盖件有两处及两处以上更换修复，结构件无异常，机件有部分老化维修，整车磨损较重。</p>
					<p>D级：有结构件损伤钣金修复，发动机变速箱重大修复记录。</p>
					<p>E级： 泡水车、火烧车，结构件重大修复、更换、切割。</p>
					<h2>其他事项</h2>
					<div class="cn-table" style="height: 182px;">
						<table cellpadding="0" cellspacing="1" style="float: left;">
							<tbody>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);width: 200px;">照片拍摄</td>
									<td class="td" style="background-color: rgb(255, 255, 255);width: 533px;">{{pgbg.zpps}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">照片拍摄时间</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.zppssj}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">评估师</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.pgs}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">评估师资格证书编号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.pgszsbh}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">评估时间</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.pgsj}}</td>
								</tr>

							</tbody>
						</table>
					</div>
					<div style="    position: relative;">
						<h4 style="float: left;">评估师签名：</h4>
						<h4 style="float: right;margin-right: 200px;">公司盖章：</h4>
						<img style="width: 150px;position: absolute; right: 35px;top: -70px;" src="../assets/images/jiance/青岛悠享机动车鉴定评估有限公司评估专用章.png"
						 alt="">
					</div>


				</div>
			</div>

		</div>


		<!-- 特别说明 -->
		<div class="jiben tebie" style="page-break-after: always;">
			<h2 style="text-align: center;">特别说明</h2>
			<p>&nbsp;</p>
			<p>&nbsp;</p>
			<p>一、本检测结果，基于该检测业务中悠享好车机动车鉴定中心收集的车辆照片、视频所表现的车辆状态，有效期为检测报告生成后，车辆状态未发生改变 的30个自然日，即至2020年10月14日止；</p>
			<p>&nbsp;</p>
			<p>二、在检测结果有效期内，被检测车辆发生交通事故或发生其他影响车辆价值的状况，对车辆检测结果产生影响时，车况的判定应重新进行检测。</p>
			<p>&nbsp;</p>
			<p>三、本检测报告仅适用于与悠享好车签署合作的合同方所要求的相关业务范围，任何超范围地使用本检测报告(如前述公司将本检测报告用于其他未签署的业务 或第三方使用本检测报告的)，悠享好车均不对此承担任何责任，并保留追究责任的权利。</p>
			<p>&nbsp;</p>
			<p>四、悠享好车不对本检测报告的准确性、完整性做任何承诺，不参与第三方与其交易方就车辆达成的任何交易、约定。悠享好车对第三方与其交易方运用本检测报告所作出的判断及后果不承担责任</p>
			<img src="../assets/images/jiance/青岛悠享机动车鉴定评估有限公司评估专用章.png" alt="">
		</div>






	</div>

</template>


<script>
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {

		name: 'jiance',

		data() {
			return {
				baseURL: baseURL,
				pgbg: {
					sgpc: {
						//zbz: 1,
					}
				},				
				hang: 1,
				item: 1,
				imglist:[],
				pgbh: {
					zhm: 0,
					yqm: 0,
					zaz: 0,
					yaz: 0,
					zbz: 0,
					ybz: 0,
					zcz: 0,
					ycz: 0,
					zqyzb: 0,
					zhyzb: 0,
					yqyzb: 0,
					yhyzb: 0,
					qjg: 0,
					hwm: 0,
					qbxg: 0,
					hbxg: 0,
					cd: 0,
					ddb: 0,
					dfbl: 0,
					yqbzqz: 0,
					zqbzqz: 0,
					zqzl: 0,
					yqzl: 0,
					zqb: 0,
					yqb: 0,
					zhzl: 0,
					yhzl: 0,
					fhq: 0,
					bsx: 0,
					fdj: 0,
					qhl: 0,
					hxlxg: 0,
					hdbl: 0,
					zhsj: 0,
					yhsj: 0,
					yqg: 0,
					yhm: 0,
				},
				dialogVisible: false,
				dialogImageUrl: '',
				fileList: [],
				fileList2: [],
			}
		},

		created() {
			this.getjiance()
		},

		mounted() {

		},


		methods: {	
			
			fileRemove(file, fileList) {
				console.log(file)
				//console.log(fileList)
				for (let i = 0; i < this.fileList.length; i++) {
					if (this.fileList[i].url == file.url) {
						console.log(i)
						this.fileList.splice(i, 1);
						break;
					}
				}
				console.log(this.fileList)
			},
			
			fileSuccess(response, file, fileList) {
				// if(this.form.image==''){
				// 	this.form.image = response.data.url
				// }else {
				// 	this.form.image = this.form.image+','+response.data.url
				// }
				console.log(file.uid)
				this.fileList.push({
					uid: file.uid,
					name: file.name,
					url: file.response.data.url
				})
				// this.fileList.push()
				console.log(this.fileList)
			
			},
			
			fileRemove2(file, fileList) {
				console.log(file)
				//console.log(fileList)
				for (let i = 0; i < this.fileList2.length; i++) {
					if (this.fileList2[i].url == file.url) {
						console.log(i)
						this.fileList2.splice(i, 1);
						break;
					}
				}
				console.log(this.fileList2)
			},
			
			fileSuccess2(response, file, fileList) {
				// if(this.form.image==''){
				// 	this.form.image = response.data.url
				// }else {
				// 	this.form.image = this.form.image+','+response.data.url
				// }
				console.log(file.uid)
				this.fileList2.push({
					uid: file.uid,
					name: file.name,
					url: file.response.data.url
				})
				// this.fileList.push()
				console.log(this.fileList2)
			
			},
			//点击上传列表文件钩子
			lookimg(file){
				console.log(file)
				window.open(file.url,"_black")
			},
			
			 yulan(file) {
			 	this.dialogImageUrl = file.url;
			 	this.dialogVisible = true;
			 },

			handleRemove(file, fileList) {
				this.imglist = fileList
				console.log(this.imglist);
			},
			handlePictureCardPreview(response, file, fileList) {
				this.imglist = fileList
				console.log(this.imglist)
			},

			xiugai() {
				//console.log(this.pgbg)
				// let i = JSON.parse(this.pgbg)
				for(let z=0;z<this.fileList.length;z++){
					if(z==0){
						this.pgbg.clzp_images=this.fileList[z].url
					}else{
						this.pgbg.clzp_images=this.pgbg.clzp_images+'|'+this.fileList[z].url
					}
				}
				for(let z=0;z<this.fileList2.length;z++){
					if(z==0){
						this.pgbg.sgdzp_images=this.fileList2[z].url
					}else{
						this.pgbg.sgdzp_images=this.pgbg.sgdzp_images+'|'+this.fileList2[z].url
					}
				}
				console.log(this.pgbg)
				let i = JSON.stringify(this.pgbg)
				// let i =this.pgbg

				 console.log(i)
				this.$api.tijiaoxiugai({
					pgbh: i
				}).then(res => {
					//console.log(res)
					if (res.code == 1) {
						this.$message.success(res.msg)
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			getjiance() {
				//console.log(this.$route.query.pgbh)				
				this.$api.getjiancexx({
					pgbh: this.$route.query.pgbh
				}).then(res => {
					console.log(res)
					this.pgbg = res.data[0]
					let img=res.data[0].clzp_images.split('|');
					console.log(img)
					for (let i = 0; i < img.length; i++) {
						this.fileList.push({
							uid: i,
							name:  img[i],
							url:  img[i]
						})
					}
					img=res.data[0].sgdzp_images.split('|');
					for (let i = 0; i < img.length; i++) {
						this.fileList2.push({
							uid: i,
							name:  img[i],
							url:  img[i]
						})
					}
					console.log(this.fileList,this.fileList2)
					// res.data[0].clzp_images.split('|').forEach(item=>{
					// 	this.imglist.push({
					// 		response:{
					// 			data:{
					// 				url:item
					// 			}
					// 		}
					// 	})
					// })
					//console.log(this.imglist)
					// if (this.pgbg.sgpc == null) {
					// 	this.pgbg.sgpc = this.pgbh
					// 	console.log(this.pgbg)
					// }
					console.log(this.pgbg)
				})
			},

			qrxuanzetb(i) {
				//console.log(i)
				this.pgbh[this.item] = i
				this.pgbg.sgpc[this.item] = i
				//console.log(this.pgbh)
				this.$refs.xztb.style.display = 'none'
			},
			qrxuanzetb2(i) {
				//console.log(i)
				this.pgbh[this.item] = i
				this.pgbg.sgpc[this.item] = i
				//console.log(this.pgbh)
				this.$refs.xztb2.style.display = 'none'
			},
			qrxuanzetb3(i) {
				//console.log(i)
				this.pgbh[this.item] = i
				this.pgbg.sgpc[this.item] = i
				//console.log(this.pgbh)
				this.$refs.xztb3.style.display = 'none'
			},

			xuanzetb(i, y, t, item) {
				console.log(i, y, t)
				this.item = item
				if (y == 1) {
					console.log(1)
					// this.$refs.xztb.style.right='none'
					this.$refs.xztb.style.left = '130px'
				} else if (y == 2) {
					console.log(2)
					this.$refs.xztb.style.left = '570px'
					// this.$refs.xztb.style.right='133px'
				}
				this.$refs.xztb.style.top = t + 25 + 'px'
				this.$refs.xztb.style.display = 'block'
			},

			xuanzetb2(i, y, t, item) {
				console.log(i, y, t)
				this.item = item
				if (y == 1) {
					console.log(1)
					// this.$refs.xztb.style.right='none'
					this.$refs.xztb2.style.left = '130px'
				} else if (y == 2) {
					console.log(2)
					this.$refs.xztb2.style.left = '570px'
					// this.$refs.xztb.style.right='133px'
				}
				this.$refs.xztb2.style.top = t + 25 + 'px'
				this.$refs.xztb2.style.display = 'block'
			},

			xuanzetb3(i, y, t, item) {
				console.log(i, y, t)
				this.item = item
				if (y == 1) {
					console.log(1)
					// this.$refs.xztb.style.right='none'
					this.$refs.xztb3.style.left = '130px'
				} else if (y == 2) {
					console.log(2)
					this.$refs.xztb3.style.left = '570px'
					// this.$refs.xztb.style.right='133px'
				}
				this.$refs.xztb3.style.top = t + 25 + 'px'
				this.$refs.xztb3.style.display = 'block'
			},



		}




	}
</script>

<style lang="less" scoped>
	@import '../assets/jiance/shigu1.css';

	.jiance {
		// background-image: url(../assets/images/jiance/悠享好车.png);
		background-image: url(../assets/images/jiance/suiyin.png);
		background-size: 185px;
		// width: 1100px;
		width: 210mm;
		margin: 0 auto;
		position: relative;
		// padding-top: 10px;
		padding: 14px;
		//height: 297mm;
	}

	.tou {
		position: relative;
		text-align: center;
	}

	.logo {
		position: absolute;
		left: 0;
		width: 100px;
	}

	.tou .text {
		padding-top: 30px;
	}

	.tou .text p {
		font-size: 21px;
	}

	.chekuang {
		margin-top: 40px;
		text-align: center;
		opacity: 0.8;
	}

	.cn-table {
		//width: 865px;
		/*float: left;*/
		margin-top: 25px;
	}

	.cn-table table {
		//width: 865px;
		font-size: 16px;
		margin-bottom: 15px;
		background-color: #ccc;
	}

	.cn-table td {
		//width: 16%;
		text-align: center;
		height: 35px;
		background-color: #fff;
		font-size: 18px;
	}

	.cn-table td font {
		font-size: 12px;
	}

	.cx-n-box .cn-note {
		font-size: 17px;
		width: 95%;
		margin: 55px auto 0 auto;
		//margin-top: 70px;
	}


	.jiben {
		// width: 1060px;
		width: 775px;
		// margin: 32px auto 0 auto;
		// margin: 50px auto 0 auto;
		margin: 20px auto 0 auto;
		//opacity: 0.8;
	}

	.cx-n-box {
		//margin-bottom: 50px;
		clear: both;
		width: 100%;
		overflow: hidden;
	}

	.cn-tit {
		width: 100%;
		height: 35px;
		font-size: 18px;
		line-height: 35px;
		border-bottom: 1px solid #ccc;
		border-left: 4px solid #1f9bde;
		padding-left: 15px;
		margin-bottom: 25px;
		background-color: #e8e4e4b3;
		float: left;
	}

	.cx-n-box .cn-note {
		font-size: 17px;
		width: 95%;
		// margin: 70px auto 0 auto;
		margin: 60px auto 0 auto;

	}

	.td {
		// width: 240px;
		width: 175px;
	}


	.box2 {
		position: relative;
		height: 310px;
		//margin-top: 70px;
	}

	.box2 .text {
		position: absolute;
		z-index: 1;
		height: 390px;
	}

	.popper__arrow {
		top: -19px;
		left: 32%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #ebeef5;
	}

	.popper__arrow {
		border-width: 6px;
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
	}

	.popper__arrow,
	.popper__arrow:after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
	}

	.popper__arrow:after {
		top: 1px;
		margin-left: -6px;
		border-top-width: 0;
		border-bottom-color: #fff;
	}

	.popper__arrow:after {
		content: " ";
		border-width: 6px;
	}

	/deep/ .el-upload-list--picture-card .el-upload-list__item {
		width: 341px;
		height: 341px;
	}

	/deep/ .el-upload--picture-card {
		width: 341px;
		height: 341px;
		line-height: 341px;
	}

	.el-upload--picture-card i {
		font-size: 60px;
	}
</style>
