<template>

	<div class="jiance">

		<!-- <div style="height: 50px;"></div> -->

		<div class="tou">
			<!-- <img class="logo" src="../assets/images/logo2.png" alt=""> -->
			<img class="logo" src="../assets/images/jiance/logo.png" alt="">

			<div class="text">
				<h1 style="margin: 0;">车辆检测报告</h1>
				<P>&nbsp;</P>
				<p>评估编号:{{pgbg.pgbh}}</p>
				<P>&nbsp;</P>
				<P>经判定，此车大概率为：{{pgbg.cm}}</P>
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
							<td style="background-color: rgb(255, 255, 255);">{{pgbg.ckdj}}</td>

						</tr>
						<tr style="height: 100px;">
							<td style="background-color: rgb(239, 239, 239);">车况综述</td>
							<td style="background-color: rgb(255, 255, 255);text-align: initial;padding: 10px;width: 580px;">{{pgbg.ckzs}}</td>
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
					<div class="cn-table">
						<table cellpadding="0" cellspacing="1" style="float: left;">
							<tbody>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车架号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.cjh}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车牌号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.cph}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车辆停放地</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.cltfd}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">首次上牌日期</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.scsprq}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">出厂日期</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.ccrq}}</td>
								</tr>

							</tbody>
						</table>
					</div>

					<div class="cn-table">
						<table cellpadding="0" cellspacing="1" style="float: right;">
							<tbody>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">发动机号</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.fdjh}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">表显里程</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.bllc}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">车身颜色</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.csys}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">燃油类型</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.rylx}}</td>
								</tr>
								<tr>
									<td class="td" style="background-color: rgb(239, 239, 239);">使用性质</td>
									<td class="td" style="background-color: rgb(255, 255, 255);">{{pgbg.syxz}}</td>
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

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img src="../assets/images/jiance/1.png" style="width: 415px;" alt="">
							</div>
						</div>


						<div class="text">
							<div class="text1 textt">
								<span>左B柱</span>
								<img v-if="pgbg.sgpc.zbz==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zbz==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zbz==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zbz==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>

							<div class="text2 textt">
								<span>左A柱</span>
								<img v-if="pgbg.sgpc.zaz==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zaz==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zaz==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zaz==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="text3 textt">
								<span>左前避震器座</span>
								<img v-if="pgbg.sgpc.zqbzqz==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqbzqz==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqbzqz==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqbzqz==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
							</div>
							<div class="text4 textt">
								<span>左前纵梁</span>
								<img v-if="pgbg.sgpc.zqzl==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqzl==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zqzl==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqzl==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="text5 textt">
								<span>防火墙</span>
								<img v-if="pgbg.sgpc.fhq==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.fhq==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.fhq==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.fhq==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="text6 textt">
								<span>变速箱</span>
								<img v-if="pgbg.sgpc.bsx==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.bsx==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.bsx==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.bsx==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="text7 textt">
								<span>前横梁</span>
								<img v-if="pgbg.sgpc.qhl==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.qhl==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.qhl==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.qhl==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="text8">
								<img v-if="pgbg.sgpc.zcz==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zcz==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zcz==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zcz==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>左C柱</span>
							</div>
							<div class="text9">
								<img v-if="pgbg.sgpc.zhzl==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhzl==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhzl==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhzl==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>左后纵梁（主驾侧）</span>
							</div>
							<div class="text10">
								<img v-if="pgbg.sgpc.zqb==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqb==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zqb==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqb==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>左裙边</span>
							</div>
							<div class="text11">
								<img v-if="pgbg.sgpc.fdj==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.fdj==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.fdj==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.fdj==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>发动机</span>
							</div>

						</div>

						<div class="tu1"><span>(图：车身结构件)</span></div>

					</div>

					<div style="height: 20px;"></div>


					<div class="box2" style="margin-top: 15px;">

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img style="width: 415px;" src="../assets/images/jiance/2.png" alt="">
							</div>
						</div>


						<div class="text">
							<div class="textt1 textt">
								<span>右B柱</span>
								<img v-if="pgbg.sgpc.ybz==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.ybz==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.ybz==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.ybz==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>

							<div class="textt2 textt">
								<span>右C柱</span>
								<img v-if="pgbg.sgpc.ycz==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.ycz==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.ycz==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.ycz==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="textt3 textt">
								<span>右后纵梁</span>
								<img v-if="pgbg.sgpc.yhzl==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhzl==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yhzl==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhzl==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="textt4 textt">
								<span>右裙边</span>
								<img v-if="pgbg.sgpc.yqb==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqb==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yqb==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yqb==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>

							<div class="textt5">
								<img v-if="pgbg.sgpc.yaz==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yaz==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yaz==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yaz==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>右A柱</span>
							</div>
							<div class="textt6">
								<img v-if="pgbg.sgpc.yqzl==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqzl==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqzl==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqzl==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>右前纵梁</span>
							</div>
							<div class="textt7">
								<img v-if="pgbg.sgpc.yqbzqz==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqbzqz==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqbzqz==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqbzqz==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前避震器座</span>
							</div>


						</div>
						<div class="tu1"><span>(图：车身覆盖件)</span></div>

					</div>

					<div style="height: 20px;"></div>

					<div class="box2" style="margin-top: 15px;">

						<div class="imgbox">
							<div style="position: absolute;z-index: 1;">
								<img style="width: 415px;" src="../assets/images/jiance/3.png" alt="">
							</div>
						</div>


						<div class="text">
							<div class="texttt1 textt">
								<span>左后车门</span>
								<img v-if="pgbg.sgpc.zhm==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhm==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zhm==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zhm==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>

							<div class="texttt2 textt">
								<span>左后叶子板、翼子板</span>
								<img v-if="pgbg.sgpc.zhyzb==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhyzb==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhyzb==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhyzb==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="texttt3 textt">
								<span>后挡玻璃</span>
								<img v-if="pgbg.sgpc.hdbl==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hdbl==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.hdbl==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hdbl==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="texttt4 textt">
								<span>后行李箱盖</span>
								<img v-if="pgbg.sgpc.hxlxg==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hxlxg==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hxlxg==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hxlxg==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="texttt5 textt">
								<span>后保险杠</span>
								<img v-if="pgbg.sgpc.hbxg==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.hbxg==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.hbxg==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.hbxg==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="texttt6 textt">
								<span>右后叶子板、翼子板</span>
								<img v-if="pgbg.sgpc.yhyzb==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhyzb==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhyzb==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>
							<div class="texttt7 textt">
								<span>右后车门</span>
								<img v-if="pgbg.sgpc.yhm==0" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==1" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==2" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==3" style="width: 17px;margin-left: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
							</div>

							<div class="texttt8">
								<img v-if="pgbg.sgpc.zqm==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zqm==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.zqm==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqm==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>左前车门</span>
							</div>
							<div class="texttt9">
								<img v-if="pgbg.sgpc.zqyzb==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqyzb==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqyzb==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zqyzb==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>左前叶子</span>
							</div>
							<div class="texttt10">
								<img v-if="pgbg.sgpc.zhsj==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.zhsj==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhsj==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.zhsj==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>左后视镜</span>
							</div>
							<div class="texttt11">
								<img v-if="pgbg.sgpc.yqg==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yqg==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yqg==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqg==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>引擎盖</span>
							</div>
							<div class="texttt12">
								<img v-if="pgbg.sgpc.qbxg==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.qbxg==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qbxg==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.qbxg==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>前保险杠</span>
							</div>
							<div class="texttt13">
								<img v-if="pgbg.sgpc.cd==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.cd==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.cd==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.cd==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>车顶</span>
							</div>
							<div class="texttt14">
								<img v-if="pgbg.sgpc.yhsj==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhsj==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhsj==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhsj==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>右后视镜</span>
							</div>
							<div class="texttt15">
								<img v-if="pgbg.sgpc.yqyzb==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqyzb==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqyzb==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yqyzb==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png"
								 alt="">
								<span>右前叶子板、翼子板</span>
							</div>
							<div class="texttt16">
								<img v-if="pgbg.sgpc.yhm==0" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形对号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==1" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形感叹号.png" alt="">
								<img v-if="pgbg.sgpc.yhm==2" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/三角形感叹号.png"
								 alt="">
								<img v-if="pgbg.sgpc.yhm==3" style="width: 17px;margin-right: 6px;" src="../assets/images/jiance/圆形叉号.png" alt="">
								<span>右后前门</span>
							</div>



						</div>
						<!-- <div class="tu1"><span>(图：车身覆盖件)</span></div> -->

					</div>

				</div>
			</div>

		</div>

		<!-- <div style="height: 70px;"></div> -->
		<!-- 车辆照片 -->
		<div class="jiben" style="page-break-after: always;">
			<div class="cx-n-box">
				<div class="cn-tit">
					<b>车辆照片</b>
				</div>
				<div class="cn-note">


					<div class="cn-images">


						<!-- <viewer :images="cheliangImg" style="display: flex;justify-content: space-between;flex-wrap: wrap;">
							<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in cheliangImg" :key="index">
								<div class="banner__inner">
									<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;height: 100%;">
																	
								</div>
							</div>
						</viewer> -->

						<viewer :images="pgbg.clzp_images">
							<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in pgbg.clzp_images" :key="index">
								<div class="banner__inner">
									<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;height: 100%;">

								</div>
							</div>
						</viewer>

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

					<div class="block" style="margin-top:20px ;">
						<el-timeline>
							<el-timeline-item v-for="item in jclist" :timestamp="item.rd" placement="top">
								<el-card>
									<!-- <h4>{{item.pt}}</h4> -->
									<p style="line-height: 24px;">{{item.pt}}</p>
									<p style="line-height: 24px;">{{item.material}}</p>
								</el-card>
							</el-timeline-item>

						</el-timeline>
					</div>

					<!-- <div class="option-body his-list">
					
						<el-tabs style="width: 100%;" v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="" name="6">
								<el-table :data="jclist" border stripe style="width: 100%">
									<el-table-column prop="pt" label="项目" align="center"></el-table-column>
									<el-table-column prop="material" label="材料" align="center"></el-table-column>
									<el-table-column prop="remark" label="备注" align="center"></el-table-column>
									<el-table-column prop="rd" label="日期" align="center" style="width: 50px;"></el-table-column>
								</el-table>
							</el-tab-pane>
						</el-tabs>				
					
					</div> -->


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
					<div class="option-body his-list">

						<el-tabs style="width: 100%;" v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="" name="6">
								<el-table :data="chuxian.result" border stripe style="width: 100%">
									<!-- <el-table-column label="理赔类型" align="center">{{chuxian.dangerSingleType==1?'更换':chuxian.dangerSingleType==2?'维修':'材料'}}</el-table-column> -->
									<el-table-column prop="dangerSingleType" label="理赔类型" align="center"></el-table-column>
									<el-table-column prop="dangerSingleName" label="理赔名称" align="center"></el-table-column>
									<el-table-column prop="dangerSingleMoney" label="理赔金额" align="center"></el-table-column>
								</el-table>
							</el-tab-pane>
						</el-tabs>

					</div>

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
					<div class="cn-images">				
					
					
						<viewer :images="pgbg.sgdzp_images">
							<div class="banner__wrapper" style="margin-bottom: 5px;" v-for="(item,index) in pgbg.sgdzp_images" :key="index">
								<div class="banner__inner">
									<img :src="item" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;height: 100%;">
					
								</div>
							</div>
						</viewer>
					
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
	export default {
		name: 'jiance',

		data() {
			return {
				activeName: '6',
				pgbg: {
					sgpc: {
						zbz: 0
					}
				},
				chuxian: {
					"date": "2015-04",
					"result": [{
						"dangerSingleType": "2",
						"dangerSingleName": "右后门(全喷)",
						"dangerSingleMoney": "80000"
					}, {
						"dangerSingleType": "1",
						"dangerSingleName": "右后车门整形修复(小)",
						"dangerSingleMoney": "12000"
					}, {
						"dangerSingleType": "2",
						"dangerSingleName": "后保险杠(全喷)",
						"dangerSingleMoney": "80000"
					}, {
						"dangerSingleType": "2",
						"dangerSingleName": "后杠下裙喷漆",
						"dangerSingleMoney": "40000"
					}, {
						"dangerSingleType": "0",
						"dangerSingleName": "后保险杠拆装(含附件)",
						"dangerSingleMoney": "20000"
					}],
					"vin": "WP1AB29P99LA42865",
					"type": "凯宴CAYENNE S 4.8L越野车",
					"serviceMoney": "232000"
				},
				jclist: [{
					"mn": "65637",
					"st": 1,
					"rd": "2019-11-29",
					"pt": "BMW免费礼遇：;客户反映：40码以下点刹车时左右前刹车异响,请检查!;VHC 免费检查;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：",
					"material": "",
					"remark": "其他",
					"ie": 0,
					"type": ""
				}, {
					"mn": "59439",
					"st": 1,
					"rd": "2019-07-23",
					"pt": "客户反映：空调面板开裂   已与客户沟通;客户反映：变速箱下部变形的支架板正;客户反映：右前门右后门缝隙调整一下 已调整;前部制动器保养;制动液保养;客户反映：IDRVE旋钮往右靠卡滞,返回键按钮按着不回位;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：;VHC车辆健康检查;刹车系统深度维护（预计费用：560元）;底盘球头铰链深度保养（预计费用：298元）;快速打蜡（预计费用：188元）;导向销润滑（预计费用：89元）;更换前刹车片（预计费用：1647元）;更换刹车油（预计费用:320元）",
					"material": "修理套件 制动摩擦片 不含石棉;左前制动摩擦片磨损传感器;制动器清洁剂 2.0;含油量小于70%润滑油;制动液 DOT4低粘度",
					"remark": "皮革投诉",
					"ie": 0,
					"type": ""
				}, {
					"mn": "59439",
					"st": 1,
					"rd": "2019-07-11",
					"pt": "更换驾驶员座椅的座套",
					"material": "座套 标准座椅 皮革;夹子;盲铆钉;盲铆钉",
					"remark": "皮革投诉",
					"ie": 0,
					"type": ""
				}, {
					"mn": "59439",
					"st": 1,
					"rd": "2019-07-11",
					"pt": "更新右侧新鲜空气格栅;更新气缸盖罩;更新整个主油路机油滤清器;更新两个发动机支座;对控制单元编程 \/ 设码;拆卸和安装收音机接收器 (CHAMP)",
					"material": "气缸盖罩;密封法兰;高压管路;密封件;防冻剂;新鲜空气格栅 右;发动机支座;021097\/更换 HU-B Media;密封件",
					"remark": "皮革投诉",
					"ie": 0,
					"type": ""
				}, {
					"mn": "55408",
					"st": 1,
					"rd": "2019-06-16",
					"pt": "更换两后轮胎（预计费用:2760元）;替换两个采用失压续跑轮胎技术的后轮胎;静平衡两个后车轮;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：;建议更换前刹车片，右侧下车身护板损伤，;轮毂精致清洗镀膜（预计费用：380元）",
					"material": "轮胎 225\/55R17 97",
					"remark": "其他",
					"ie": 0,
					"type": ""
				}, {
					"mn": "50781",
					"st": 1,
					"rd": "2019-04-27",
					"pt": "00 00 610 发动机油保养;00 00 105 保养标准范围;机油保养（预计费用：1432元)",
					"material": "组件 机油滤清器滤芯;润滑油",
					"remark": "风扇噪音;其他",
					"ie": 0,
					"type": ""
				}, {
					"mn": "50781",
					"st": 1,
					"rd": "2019-02-23",
					"pt": "进行车辆测试;更新冷却液泵;更新冷却液节温器",
					"material": "冷却液泵 电动式;节温器;防冻剂",
					"remark": "风扇噪音;其他",
					"ie": 0,
					"type": ""
				}, {
					"mn": "45135",
					"st": 1,
					"rd": "2018-10-30",
					"pt": "发动机油保养;发动机机油保养(5w-30);客户反映：行驶中左前轮异响，请检查;客户反映：烟灰缸报价;更新右侧两轮胎，客户要求左前轮胎调到右后轮;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：;BMW夏季礼遇：;保养标准范围",
					"material": "组件 机油滤清器滤芯             ;润滑油;轮胎气门嘴;轮胎 225\/55R17 97;烟灰缸 中央控制台 中部",
					"remark": "控制面板投诉",
					"ie": 0,
					"type": ""
				}, {
					"mn": "43108",
					"st": 1,
					"rd": "2018-09-13",
					"pt": "更新右侧新鲜空气格栅;更新中部新鲜空气格栅",
					"material": "新鲜空气格栅 右;新鲜空气格栅 中部",
					"remark": "控制面板投诉",
					"ie": 0,
					"type": ""
				}, {
					"mn": "35042",
					"st": 1,
					"rd": "2018-05-18",
					"pt": "BMW冬季礼遇：;本次维修项目：机修:35042公里机油保养;发动机机油保养 续保全年无限次;保养标准范围;发动机油保养;轮胎鼓包，建议更换轮胎后做四轮定位;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：",
					"material": "组件 机油滤清器滤芯;润滑油",
					"remark": "机油保养",
					"ie": 0,
					"type": ""
				}, {
					"mn": "38439",
					"st": 1,
					"rd": "2018-05-14",
					"pt": "BMW春季礼遇：;客户反映:提示车门未关闭，请检查 (检查无问题）;进行车辆测试;BMW悦享套餐共12项，全国统一、公开、透明、宝马终身免费事故救援热线：",
					"material": "",
					"remark": "其他",
					"ie": 0,
					"type": ""
				}, ]

			}
		},

		created() {
			this.getjiance()
			this.tihuan()
		},

		mounted() {},

		methods: {
			getjiance() {
				console.log(this.$route.query.pgbh)
				this.$api.getjiancexx({
					pgbh: this.$route.query.pgbh
				}).then(res => {
					console.log(res)
					this.pgbg = res.data[0]
					this.pgbg.clzp_images = this.pgbg.clzp_images.split('|')
					this.pgbg.sgdzp_images = this.pgbg.sgdzp_images.split('|')
					console.log(this.pgbg)
				})
			},
			
			tihuan(){
				for(let i=0;i<this.chuxian.result.length;i++){
					this.chuxian.result[i].dangerSingleType=this.chuxian.result[i].dangerSingleType==1?'更换':this.chuxian.result[i].dangerSingleType==2?'维修':'材料'
				}
			},

			fileRemove(file, fileList) {
				console.log(file, fileList)

			},

			handleClick(tab, event) {
				console.log(tab, event)
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
		opacity: 0.8;
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
</style>
