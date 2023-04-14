<template>
	<div style="background-color: #fff;">


		<div class="bui-box container" style="display: flex;">

			<div ref="zuolie" class="bui-left index-channel" style="float: none; ">
				<!-- position: fixed; -->

				<div>

					<div class="channel">
						<a href="" class="logo">
							<img src="../assets/images/logo2.png" alt="招财拍">
						</a>

						<ul style="padding: 0;">
							<li><a @click="qiehuan(0)" target="_self" class="channel-item" :class="istype==0?'active':''"><span>推荐</span></a></li>
							<li><a @click="qiehuan(1)" target="_self" class="channel-item" :class="istype==1?'active':''"><span>关注</span></a></li>
							<li><a @click="qiehuan(2)" target="_self" class="channel-item" :class="istype==2?'active':''"><span>热榜</span></a></li>
							<li><a @click="qiehuan(3)" target="_self" class="channel-item" :class="istype==3?'active':''"><span>我的圈子</span></a></li>
							<!-- <li><a href="/" target="_self" class="channel-item"><span>我的圈子</span></a></li> -->


						</ul>

					</div>

				</div>

			</div>


			<div ref="zhong" class="bui-left index-content" style=" margin:0px auto;">
				<!-- margin:0px 28px 0 158px; -->

				<div class="ugcBox">

					<div class="ugcBox-inner">

						<ul class="bui-box ugc-tab-list">
							<li class="bui-left ugc-tab-item current">发圈</li>

						</ul>

						<div class="ugc-content">

							<div>

								<!-- <div class="imgBox upload-box">
									<input type="text" placeholder="请输入文章标题（4-40字）" class="wenda-title-input wenda-input">
									<textarea placeholder="有什么新鲜事想告诉大家" class="title-input"></textarea>
									<p class="words-number">0/2000字</p>
								</div> -->

								<div class="imgBox upload-box">
									<!-- <input type="text" placeholder="请输入文章标题（4-40字）" class="wenda-title-input wenda-input"> -->


									<el-input v-model="text" resize="none" :autosize="{minRows: 9, maxRows:11}" style="border: none;padding: 0;"
									 type="textarea" show-word-limit maxlength="300" placeholder="有什么新鲜事想告诉大家" class="title-input">
									</el-input>
								</div>



								<div class="bui-box upload-footer">
									<div class="bui-left" style="float: left;">
										<span class="show-uploader">
											<i class="el-icon-picture" style="font-size: 15px; color:#14c5ff; "></i> <!-- rgb(237, 64, 64); -->
											<span @click="isimg=true" style="cursor: pointer;">添加图片</span>

											<div class="uploader-popup" v-if="isimg">

												<div class="imgUploadBox">
													<p class="uploader-title">本地上传</p>
													<i style="cursor: pointer;" @click="guanbiimg" class="bui-icon iconfont  close-popup icon-close-outline"></i>

													<div>
														<el-upload name="file" :action="baseURL+'api/common/upload'" list-type="picture-card" :on-success="handlePictureCardPreview"
														 :on-remove="handleRemove">
															<!-- :on-preview="yulan" -->
															<i class="el-icon-plus"></i>
														</el-upload>

														<el-dialog :visible.sync="dialogVisible">
															<img width="100%" :src="dialogImageUrl" alt="">
														</el-dialog>

													</div>


												</div>



											</div>

										</span>

									</div>
									<div class="bui-right">
										<span class="msg-tip"></span>
										<a class="upload-publish" style="float: right;" @click="fabu">发布</a>
									</div>

								</div>
							</div>

						</div>

					</div>

				</div>




				<div class="feed-infinite-wrapper">
					<!-- <div class="sub_nav_wrap clearfix" id="sub_nav_wrap" alog-alias="sub_nav_wrap" alog-group="sub_nav_wrap">
						<ul class="sub_nav_list" style="padding: 0; margin: 0;">
							<li style="margin-left:8px">
								<a @click="qiehuan('0')" ref="remen" id="j_remen_nav" class="nav_li nav_li_all" :class="{cur:istype}">热门动态</a></li>
							<li class="sub_nav_line"></li>

							<li id="nav-personal-wraper">
								<a @click="qiehuan('1')" ref="zixun" id="nav-personal" class="nav_li_personal" :class="{cur:!istype}">热门资讯</a></li>
							<li class="nav_hover" style="left: 22px; width: 56px;"></li>
						</ul>
					</div> -->
					<!-- <cm-infinite-scroll @scroll-to-bottom="onScrollToBottom">
						<ul>
							<li v-for="(news, index) in count" :key="index">
								<h2>{{index}}</h2>
							</li>
						</ul>
					</cm-infinite-scroll> -->

					<!-- <ul class="infinite-list" style="disabled; padding: 0; " :class="{dpy:istype}">
						<li v-for="i in count" class="list-item">
							<div class="bui-box single-mode">
					
								<div class="bui-left single-mode-lbox">
									<a href="" class="img-wrap">
										<img class="lazy-load-img" style="width: 100%;height: 100%;" src="//p9.pstatp.com/list/190x124/pgc-image/Rvloz3zDBI45NJ"
										 lazy="loaded">
									</a>
								</div>
								<div class="single-mode-rbox">
									<div class="single-mode-rbox-inner">
										<div class="title-box">
											<a href="/group/6814105514700440071/" target="_blank" class="link">补壹刀：反华先锋通共？不可思议的事在美国发生了</a>
										</div>										
									</div>
								</div>
					
							</div>
						</li>
					</ul> -->

					<ul class="infinite-list" style="disabled; padding: 0;">
						<li class="list-item" v-for="(item,index) in Statelist" :key="index">
							<div class="item_con">
								<div class="item_left">
									<div class='item_left_img'>
										<a>
											<img :src="item.type=='news'?'http://new.zhaocaipaipai.com/uploads/pc/logo2.png':item.user.avatar" alt="">

											<!-- <img src="../assets/images/logo2.png"> -->
										</a>
									</div>

								</div>

								<div class="item_you" style="margin-left: 10px;width: 100%;">
									<div class="item_you_username">
										<span style="color: #005097;font-size: 17px;">{{item.type=='news'?'招财拍':item.user.nickname==''||item.user.nickname==null?'某热心网友':item.user.nickname}}</span>
									</div>
									<div @click="xiangqing" class="item_you_title">
										<span>{{item.type=='news'?item.title:item.content}}</span>
									</div>
									<div class="item_you_img">

										<!-- <div class="item_you_img_i" :style="item.pics.length>1?'float: left':''" v-for="(item2,index) in item.pics" :key="index" v-if="item.type=='msg'">
											<img :src="item2.path" alt="" style="width: 100%; height: 100%;">
										</div> -->

										<!-- <div class="item_you_img_i"  v-if="item.type=='news'">
											<img :src="item.pic_url" alt="" style="width: 100%;height: 100%;">
										</div> -->


										<viewer :images="item.pics" v-if="item.type=='msg'">
											<div class="item_you_img_i" style="margin-bottom: 5px;" :style="item.pics.length>1?'float: left':''" v-for="(item2,index2) in item.pics"
											 :key="index2">

												<img alt="加载失败" :src="item2.path" title="点击查看大图" style="width: 100%;height: 100%; cursor: pointer;">

											</div>
										</viewer>

										<viewer :images="item.pic_url" v-if="item.type=='news'">
											<div class="item_you_img_i" style="margin-bottom: 5px;">

												<img alt="加载失败" :src="item.pic_url" title="点击查看大图" style="width: 100%;height: 100%;cursor: pointer;">

											</div>
										</viewer>


									</div>
									<div class="item_you_di">
										<div class="shouxingzan" v-if="item.type=='news'" @click="newsdianzan(item.id,index)">
											<img style="width: 100%;height: 100%;cursor: pointer; " src="../assets/images/quan_zan1.png" alt="">
										</div>

										<div class="shouxingzan" v-if="item.type=='msg'" @click="msgdianzan(item.msg_id,index)">
											<img style="width: 100%;height: 100%;cursor: pointer; " src="../assets/images/quan_zan1.png" alt="">
										</div>

										<span class="shouxingzan2">{{item.praise_num+" 人觉得很赞"}}</span>
										<span style="position: absolute;color: #999;font-size: 14px;" :style="'right:'+r+'px'">{{item.create_time}}</span>
										<span @click="openpl(index)" class="lzl_link_fold" :class="isopen?'lzl_link_fold2':''" ref="openpl">{{}}</span><!-- {{pinglun}}</span> -->

										<div class="pinglun" ref="pinglun" style="height: 0;">
										
											<div style="height: 200px;width: 100%;"></div>

										</div>


									</div>
								</div>

							</div>
						</li>
					</ul>


					<p v-if="loading">加载中...</p>
					<p v-if="loading2">没有更多了</p>

				</div>

			</div>


			<div class="bui-right index-right-bar">

				<div class="news-struct bui-box">

					<div class="bui-box">


						<!-- 第一段 -->
						<div class="pane-module" ref="buibox">

							<!-- <div class="module-head">24小时热闻</div> -->

							<!-- <ul class="module-content article-list" style="padding: 0;">

								<li class="article-item">
									<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
										<div class="module-pic news-pic">
											<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
										</div>
										<div class="news-inner">
											<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
										</div>
									</a>
								</li>

								<li class="article-item">
									<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
										<div class="module-pic news-pic">
											<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
										</div>
										<div class="news-inner">
											<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
										</div>
									</a>
								</li>

								<li class="article-item">
									<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
										<div class="module-pic news-pic">
											<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
										</div>
										<div class="news-inner">
											<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
										</div>
									</a>
								</li>

								<li class="article-item">
									<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
										<div class="module-pic news-pic">
											<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
										</div>
										<div class="news-inner">
											<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
										</div>
									</a>
								</li>

							</ul> -->

							<img src="../assets/images/faquan.jpg" style="width: 100%;height: 100%;" alt="">
						</div>

					</div>

					<!-- 第二段 -->

					<!-- 	<div class="pane-module">

						<div class="module-head">24小时热闻</div>

						<ul class="module-content article-list" style="padding: 0;">

							<li class="article-item">
								<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
									<div class="module-pic news-pic">
										<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
									</div>
									<div class="news-inner">
										<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
									</div>
								</a>
							</li>

							<li class="article-item">
								<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
									<div class="module-pic news-pic">
										<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
									</div>
									<div class="news-inner">
										<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
									</div>
								</a>
							</li>

							<li class="article-item">
								<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
									<div class="module-pic news-pic">
										<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
									</div>
									<div class="news-inner">
										<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
									</div>
								</a>
							</li>

							<li class="article-item">
								<a href="index.html#/group/6815750559627215374/" target="_blank" class="news-link">
									<div class="module-pic news-pic">
										<img src="//p3.pstatp.com/list/240x240/pgc-image/RwB3EevAFGPh1F" lazy="loaded">
									</div>
									<div class="news-inner">
										<p class="module-title">数读4月14日全球疫情：中国以外新确诊逾6万例 累计逾189.5万例 死亡病例逾12.3万例</p>
									</div>
								</a>
							</li>

						</ul>
					</div> -->



				</div>

			</div>




		</div>
		<div>
			<ul class="toolbar">
				<!---->
				<li class="tool-item report-item"><a href="http://report.12377.cn:13225/toreportinputNormal_anis.do" target="_blank"><img
						 src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png">
						<span>网上有害信息举报</span></a></li>
				<li class="tool-item" style="    height: 46px;
    line-height: 40px;"><a @click="shuaxin"><i class="bui-icon el-icon-refresh-left"
						 style="font-size: 28px; color: rgb(255, 255, 255);"></i></a></li>
				<li class="tool-item" style="    height: 46px;
    line-height: 40px;"><a @click="dingbu"><i class="bui-icon el-icon-arrow-up"
						 style="font-size: 28px; color: rgb(255, 255, 255);"></i></a></li>
			</ul>
		</div>
	</div>



	</div>



</template>

<script>
	import {
		baseURL
	} from "@/service/axiosConfig.js";
	export default {
		name: "quan",
		data() {
			return {
				baseURL: baseURL,
				imglist: [],
				isimg: false,
				dialogImageUrl: '',
				dialogVisible: false,

				text: '',

				count: 10,
				loading: false,
				loading2: false,

				istype: true,


				p: 1,
				row: 20,

				Statelist: [],

				pinglun: '评论',
				r: '103',
				isopen:false,


			}
		},
		computed: {
			noMore() {
				return this.count >= 20
			},
			disabled() {
				return this.loading || this.noMore
			}
		},

		created() {
			this.getState_list()

			window.onscroll = () => {
				if (!this.loading) {
					//变量scrollTop是滚动条滚动时，距离顶部的距离
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					//变量windowHeight是可视区的高度
					var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
					//变量scrollHeight是滚动条的总高度
					var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
					//滚动条到底部的条件
					scrollTop += 1
					//console.log("1:" + scrollTop)
					// console.log("2:" + scrollHeight)
					// console.log("3:" + windowHeight)
					// if (scrollTop > 830) {
					if (scrollTop > 430) {
						this.$refs.buibox.style.position = "fixed"
						this.$refs.buibox.style.top = "14px"

					} else {
						this.$refs.buibox.style.position = ""

					}

					if (scrollTop > 200) {
						this.$refs.zuolie.style.position = "fixed"
						this.$refs.zuolie.style.top = "14px"

						this.$refs.zhong.style.margin = "0px 15px 0 155px"
					} else {
						this.$refs.zuolie.style.position = ""

						this.$refs.zhong.style.margin = "0px auto"
					}


					if (scrollTop + windowHeight >= scrollHeight) {
						//写后台加载数据的函数				
						this.loading = true
						this.p = this.p + 1
						this.getState_list()
						// console.log("4:" + this.loading)
					} else {
						this.loading = false
						// console.log("5:" + this.loading)
					}
				}

			}
		},


		methods: {

			//打开/关闭评论
			openpl(index) {
				if(this.isopen){
					this.isopen=false
					this.pinglun='评论'
					this.$refs.pinglun[index].style.height='0px'
				}else{
					this.isopen=true
					this.pinglun='收起评论'
					this.$refs.pinglun[index].style.height=''
				}
			},

			//跳转信息详情页
			xiangqing() {

				let routeData = this.$router.resolve({
					path: "/about",
					query: {
						name: 'lei',
						age: 18,
						phoneNum: 12345678901
					}
				});
				window.open(routeData.href, '_blank');
			},

			//回到顶部
			dingbu() {
				document.body.scrollTop = document.documentElement.scrollTop = 0
			},

			//刷新
			shuaxin() {
				this.$router.go(0);
			},


			//发圈
			fabu() {
				let img = [];
				console.log(this.imglist[0].response.data.url)
				this.imglist.forEach(item => {
					img.push(item.response.data.url)
				})
				console.log(img)
				console.log(JSON.stringify(img))
				//console.log(this.text)
				this.$api.upquan({
					content: this.text,
					pics: JSON.stringify(img)
				}).then(res => {
					if (res.code == 1) {
						this.$message.success("发布成功")
						this.isimg = false
						this.imglist.length = 0
						this.text = ""
						this.Statelist.length = 0
						this.p = 1
						this.getState_list()

					} else {
						this.$message.error(res.msg)
					}
				})
			},

			handleRemove(file, fileList) {
				this.imglist = fileList
				console.log(this.imglist);
			},
			handlePictureCardPreview(response, file, fileList) {
				this.imglist = fileList
				console.log(this.imglist)
			},

			yulan(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},

			guanbiimg() {
				if (this.imglist.length != 0) {
					this.$confirm('确定要放弃上传图片？', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.isimg = false
						this.imglist.length = 0
					}).catch(() => {});
				} else {
					this.isimg = false
					this.imglist.length = 0
				}


			},

			//msg点赞
			msgdianzan(msg_id, index) {
				// console.log(msg_id)
				this.$api.msgdianzan({
					msg_id: msg_id
				}).then(res => {
					if (res.code == 1) {
						if (res.msg == 'del praise success') {
							this.Statelist[index].praise_num -= 1
						} else {
							this.Statelist[index].praise_num += 1
						}
						//this.Statelist= []
						//this.$message						

					}

				})
			},

			//news点赞
			newsdianzan(id, index) {
				this.$api.newsdianzan({
					news_id: id
				}).then(res => {
					if (res.code == 1) {
						if (res.msg == 'del praise success') {
							this.Statelist[index].praise_num -= 1
						} else {
							this.Statelist[index].praise_num += 1
						}
						//this.Statelist=[]
						//console.log(res.msg)						

					}

				})
			},


			getState_list() {
				this.$api.getStatelist({
					page_index: this.p,
				}).then(res => {
					if (res.code == 1) {
						this.Statelist = this.Statelist.concat(res.data)
						//console.log(this.Statelist)
						if (res.data.length == 0) {
							this.loading2 = true
						}
						this.loading = false
					} else {
						this.$message.error(res.msg)
					}

				})
			},
			
			getState_list2() {
				this.$api.getStatelist({
					p: this.p,
					row: this.row
				}).then(res => {
					if (res.code == 1) {
						this.Statelist = this.Statelist.concat(res.data.list)
						//console.log(this.Statelist)
						if (res.data.list.length == 0) {
							this.loading2 = true
						}
						this.loading = false
					} else {
						this.$message.error(res.msg)
					}
			
				})
			},

			getNew() {
				this.$api.getNew().then(res => {
					console.log(res)
				})
			},

			//切换热门、资讯
			qiehuan(type) {
				console.log(type)
				if (type == '0') {
					this.p = 1
					this.istype = type;
					this.loading = false
					//console.log(this.istype);
					this.dingbu()
					this.Statelist = []
					this.getState_list()

				} else if (type == '1') {
					this.loading = false
					this.istype = type;
					//console.log(this.istype);
					this.getNew()
				} else if (type == '2') {
					this.loading = false
					this.istype = type;
					//console.log(this.istype);
					this.getNew()
				} else if (type == '3') {
					this.loading = false
					this.istype = type;
					//console.log(this.istype);
					this.getNew()
				}
				console.log(this.istype);
			},


			load() {
				this.loading = true
				setTimeout(() => {
					this.count += 2
					this.loading = false
				}, 2000)
			},

			//计算时间戳
			shijian(time) {
				let i = 0
				let date = new Date(time * 1000);
				let y = date.getFullYear();
				i = i + y
				let m = date.getMonth() + 1;
				i = i + m
				m = m < 10 ? "0" + m : m;
				let d = date.getDate();
				i = i + d
				d = d < 10 ? "0" + d : d;
				let h = date.getHours();
				h = h < 10 ? "0" + h : h;
				let minute = date.getMinutes();
				//let second = date.getSeconds();
				minute = minute < 10 ? "0" + minute : minute;
				//second = second < 10 ? "0" + second : second;
				// return y + "年" + m + "月" + d + "日 " + h + ":" + minute + ":" + second;	

				//计算今天
				//获取当前时间
				var dq = new Date();
				let y2 = date.getFullYear();
				let m2 = date.getMonth() + 1;
				//m2 = m2 < 10 ? "0" + m : m;
				let d2 = dq.getDate();
				//d2 = d2 < 10 ? "0" + d : d;
				let i2 = y2 + m2 + d2
				//console.log(i, i2)
				// let aa=now-time*1000		

				if (i - i2 == 0) {
					return '今天' + h + ":" + minute;
				} else if (d2 - d == 1 && i2 - i == 1) {
					return "昨天" + h + ":" + minute //+ ":" + second;
				} else if (d2 - d == 2 && i2 - i == 2) {
					return "前天" + h + ":" + minute //+ ":" + second;
				} else {
					return y + "." + m + "." + d + ". " + h + ":" + minute //+ ":" + second;
				}

				// else if(aa<86400000*2){
				// 	return '昨天'+ h + ":" + minute;
				// }
			},

		}



	}
</script>

<style lang="less" scoped>
	@import url("../assets/iconfont2.css");

	.dpy {
		display: none;
	}

	.list-item {
		border-bottom: 1px solid;
		margin-bottom: 10px;
	}

	.item_con {
		width: 660px;
		//min-height: 200px;
		//background-color: #303133;
		display: flex;
	}

	.item_left {
		min-width: 100px;
		width: 100px;
		//background-color: #82848A;
		text-align: center;
	}

	.item_left_img {
		width: 65px;
		height: 65px;
		background-color: #fff;
		float: right;
		margin-top: 11px;
		margin-right: 11px;
		//border: 1px solid;
		border: .5px solid #00000045;
	}

	.item_left_img img {
		width: 100%;
		height: 100%;
	}

	.item_you_title {
		//font-size: 17px;
		//margin-left: 10px;
		margin-top: 10px;
		//font-weight: 700;
		font-size: 16px;
		cursor: pointer;
	}

	.item_you_title:hover {
		color: #17aeff;
		text-decoration: underline;
	}

	.item_you_img {
		//display: flex;
		margin-top: 10px;
		width: 535px;
	}

	.item_you_img_i {
		height: 172px;
		width: 172px;
		margin-right: 5px;
		//background: #000;
		background-image: url(../assets/images/jiazaishibai.png);
		background-size: 100% 100%;
		margin-bottom: 10px;
	}

	.item_you_di {
		display: flex;
		width: 100%; //200px;
		min-height: 30px;
		margin: 5px 0;
		line-height: 30px;
		//background-color: #000;
	}

	.container {
		width: 1170px;
		margin: 0 auto;
		padding-top: 16px;
		min-height: 1500px;
	}


	.container .index-channel {
		width: 110px;
		height: 600px;
		margin-right: 30px;
		//background-color: #fff;
	}

	.container .index-content {
		width: 660px;
	}

	.container .index-content .ugcBox {
		margin-bottom: 6px;
	}

	.ugcBox-inner {
		position: relative;
		border: 1px solid #e8e8e8;
		width: 100%;
	}

	.ugcBox .ugc-tab-list .ugc-tab-item.current {
		border-bottom-color: #14c5ff; //#ed4040;
		font-family: PingFangSC-Medium;
		color: #222;
	}

	.ugcBox .ugc-tab-list .ugc-tab-item {
		margin-left: 19px;
		font-size: 15px;
		font-family: PingFangSC-Regular;
		color: #222;
		line-height: 42px;
		border-bottom: 2px solid transparent;
		cursor: pointer;
	}

	.ugcBox .ugc-tab-list {
		height: 44px;
		margin: 0;
		border-bottom: 1px solid #e8e8e8;
	}

	.channel {
		width: 110px;
	}

	.channel .logo {
		display: block;
		width: 65px;
		height: 65px;
		margin-bottom: 16px;
		margin: 0 auto;
	}

	a {
		color: #222;
		//background: 0 0;
		text-decoration: none;
		outline: 0;
		cursor: pointer;
		transition: color .2s ease;
	}

	ul {
		list-style: none;
	}

	.channel-item:visited {
		color: #444;
	}

	.channel-item.active {
		background-color: #ed4040;
		color: #fff;
	}

	.channel-item:hover {
		background-color: #ed4040;
		color: #fff;
	}

	.channel-item {
		cursor: pointer;
		display: block;
		width: 110px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #444;
		border-radius: 4px;
		margin-bottom: 2px;
		transition-property: color, background-color;
	}

	.channel-item span {
		display: inline-block;
		font-size: 16px;
	}

	.upload-box {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		position: relative;
	}

	.wenda-input.wenda-title-input {
		height: 40px;
		line-height: 40px;

		border-bottom: 1px solid #dfdfdf;
	}

	.upload-box .title-input {
		width: 100%;
		// height: 100px;
		display: block;
		font-size: 14px;
		line-height: 1.4;
		padding: 13px 0;
		border: 0;
		outline: 0;
		resize: none;
		background-color: #f4f5f6;
		transition: all .5s;
		animation-duration: .8s;
		animation-fill-mode: both;
	}

	.wenda-input {
		width: 100%;
		display: block;
		font-size: 14px;
		line-height: 1.4;
		border: 0;
		outline: 0;
		resize: none;
		background-color: #f4f5f6;
		transition: all .5s;
		animation-duration: .8s;
		animation-fill-mode: both;
	}

	.upload-box .words-number {
		position: absolute;
		z-index: 3;
		bottom: 5px;
		right: 10px;
		display: inline-block;
		background-color: rgba(0, 0, 0, .5);
		border-radius: 50px;
		padding: 0 8px;
		color: #fff;
	}

	.upload-footer {
		border-top: 1px solid #e8e8e8;
		height: 40px;
	}

	.bui-box {
		//display: flex;
		zoom: 1;
	}

	.bui-left {
		//float: left;
	}

	.upload-footer .show-uploader {
		color: #222;
		font-size: 14px;
		line-height: 39px;
		display: inline-block;
		vertical-align: middle;
		margin: 0 0 0 20px;
		//cursor: pointer;
	}

	.upload-footer .show-uploader i,
	.upload-footer .show-uploader span {
		display: inline-block;
		vertical-align: middle;
	}

	.upload-footer .show-uploader i {
		margin-right: 3px;
	}

	.bui-icon {
		//font-family: tticons !important;
		font-size: 12px;
		display: inline-block;
		line-height: 1;
		speak: none;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.upload-footer .bui-right {
		text-align: right;
	}

	.bui-right {
		float: right;
	}

	.upload-footer .msg-tip {
		color: #ed4040;
		font-size: 12px;
		margin-right: 10px;
	}

	.upload-footer .upload-publish {
		display: inline-block;
		width: 120px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		background-color: #0090ff; // #ed4040;
		color: #fff;
		opacity: .8;
	}

	.upload-footer .upload-publish:hover {
		opacity: 1;
	}


	.index-right-bar {
		width: 340px;
	}

	.index-right-bar .news-struct {
		height: 386px;
	}



	.pane-module {
		width: 314px;
		border-top: 2px solid #14c5ff;
		; // #ed4040;
		background-color: #f4f5f6;
		margin-bottom: 16px;
		padding: 15px 20px 20px;
	}

	.pane-module .module-head {
		color: #222;
		padding: 0;
		margin-bottom: 15px;
		font-size: 18px;
		font-weight: 700;
	}

	.article-list .article-item:first-child {
		padding-top: 0;
	}

	.article-list .article-item {
		padding: 8px 0;
		border-bottom: 1px solid #e8e8e8;
	}

	.article-list .news-link {
		display: block;
		overflow: hidden;
	}

	a:visited {
		//color: #999;
	}

	.pane-module .module-pic {
		overflow: hidden;
		position: relative;
		transform-style: preserve-3d;
		display: inline-block;
		text-align: center;
		background: #e8e8e8;
	}

	.article-list .news-pic {
		width: 60px;
		height: 60px;
		margin-right: 12px;
		float: left;
	}

	.pane-module .module-pic img {
		width: 100%;
		height: 100%;
	}

	img {
		border-style: none;
	}

	.article-list .news-inner {
		height: 60px;
		display: table-cell;
		vertical-align: middle;
	}

	.article-list .news-inner p {
		vertical-align: middle;
		font-size: 14px;
		line-height: 20px;
		max-height: 40px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
	}

	.pane-module .module-title {
		color: #222;
	}

	.module-title:hover {
		color: red;
	}


	.feed-infinite-wrapper {
		position: relative;
	}

	.single-mode {
		height: 123px;
		position: relative;
		padding: 10px 0;
		border-bottom: 1px solid #e8e8e8;
	}

	.single-mode-lbox {
		width: 158px;
		height: 102px;
		margin-right: 16px;
	}

	.bui-left {
		float: left;
	}

	.single-mode-rbox {
		height: 100%;
		overflow: hidden;
	}

	.single-mode-rbox-inner {
		display: inline-block;
		width: 100%;
		vertical-align: middle;
	}

	.title-box {
		display: block;
		font-size: 20px;
		line-height: 1.3;
		margin-bottom: 4px;
		font-weight: 700;
		max-height: 52px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.footer-bar {
		font-size: 12px;
		color: #999;
		margin-top: 10px;
	}

	.footer-bar-action,
	.footer-bar-left {
		display: inline-block;
		vertical-align: middle;
	}

	.footer-bar-action.tag {
		font-size: 12px;
		color: #eee;
		margin-right: 10px;
		padding: 1px 2px;
		border: 1px solid #eee;
	}

	.footer-bar-action.media-avatar {
		color: #fff;
		margin-right: 2px;
		width: 18px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		font-size: 12px;
		border-radius: 50%;
		background-color: #eee;
		overflow: hidden;
	}

	.footer-bar-action.media-avatar>img {
		width: 100%;
		height: 100%;
	}

	.footer-bar-action.source {
		color: #777;
		font-size: 14px;
	}

	.footer-bar-action {
		font-size: 14px;
		line-height: 1;
	}

	.sub_nav_wrap {
		width: 662px; // 550px;
		height: 35px;
		font-family: STHeiti, "Microsoft Yahei", "Microsoft YaHei", Arial, sans-serif;
		font-size: 14px;
		position: relative;
		z-index: 2;
		background: url(../assets/images/qun_chang.png) no-repeat; //no-repeat -7px -8px;
		background-size: cover;
		box-shadow: 0 1px #eaeaea;
	}

	.sub_nav_list {
		height: 35px;
		float: left;
		postion: relative;
	}

	.sub_nav_list li {
		padding: 0 14px;
		float: left;
		display: inline;
		height: 35px;
	}

	.sub_nav_list a.cur {
		border-bottom: solid 2px #0086c8;
		color: #0086c8;
	}

	.sub_nav_list a {
		display: block;
		float: left;
		height: 33px;
		line-height: 35px;
		overflow: hidden;
		color: #444;
	}

	.sub_nav_wrap a {
		text-decoration: none;
	}

	.sub_nav_list li.sub_nav_line {
		width: 2px;
		padding: 0;
		background: url(//tb2.bdstatic.com/tb/static-spage/img/h_sub_nav_line_1aabe40.jpg) no-repeat center;
	}

	.sub_nav_list .nav_hover {
		position: absolute;
		bottom: 0;
		border-bottom: 2px solid #0090D7;
		left: 21px;
		height: 0;
		padding: 0;
		width: 28px;
		transition: left .5s ease 0s, width .5s ease 0s;
	}

	.toolbar {
		position: fixed;
		bottom: 50px;
		left: 50%;
		margin-left: 588px;
	}

	.toolbar .report-item {
		padding: 8px 0 6px;
		line-height: 1;
	}

	.toolbar .tool-item {
		width: 40px;
		//line-height: 40px;
		text-align: center;
		background: #14c5ff; // rgba(248, 89, 89, .8);
		cursor: pointer;
		margin-bottom: 2px;
		transition: all .4s;
	}

	.toolbar .tool-item a {
		display: block;
		width: 100%;
		height: 100%;
		color: #fff
	}

	.toolbar i {
		vertical-align: middle;
	}

	.toolbar .report-item img {
		display: inline-block;
		width: 27px;
		height: 20px;
	}

	.uploader-popup {
		position: absolute;
		bottom: -226px;
		left: -1px;
		width: 411px;
		height: 227px;
		background-color: #fff;
		border: 1px solid #e8e8e8;
		box-shadow: 0 2px 15px rgba(0, 0, 0, .12);
		border-radius: 5px;
		z-index: 10;
	}

	.imgUploadBox {
		padding: 12px;
	}

	.imgUploadBox .uploader-title {
		margin-bottom: 5px;
		font-size: 14px;
		color: #222;
	}

	.uploader-popup .close-popup {
		position: absolute;
		top: 8px;
		right: 6px;
		color: #cacaca;
		font-size: 20px;
	}

	.uploader-popup:before {
		content: "";
		width: 0;
		height: 0;
		border: 8px solid transparent;
		border-bottom-color: #e8e8e8;
		position: absolute;
		top: -16px;
		left: 34px;
	}

	/deep/ .el-textarea__inner {
		border: none;
		background-color: #f4f5f6;
	}

	/deep/ .el-upload--picture-card {
		width: 100px;
		height: 100px;
		line-height: 100px;
	}

	/deep/ .el-upload-list__item {
		width: 100px;
		height: 100px;
		line-height: 100px;
	}

	/deep/ .el-upload-list__item {
		line-height: 0;
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

	.lzl_link_fold {
		
		color: #1D53BF;
		cursor: pointer;
		display: inline-block;
		height: 28px;
		line-height: 28px;
		text-align: center;
		width: 80px;
		position: absolute;
		right: 8px;
		//color: #2d64b3;
		font-size: 13px;
	}
	.lzl_link_fold2{
		border: 1px solid #f0f1f2;
		border-bottom: 0;
		background: #f7f8fa;
	}

	.shouxingzan {
		width: 20px;
		height: 20px;
		position: absolute;
		margin-top: 3px;
	}

	.shouxingzan2 {
		position: absolute;
		color: rgb(153, 153, 153);
		font-size: 14px;
		left: 135px;
	}

	.pinglun {
		background: rgb(247, 248, 250);
		width: 100%;
		margin-top: 29px;
		margin-right: 8px;
	}
</style>
