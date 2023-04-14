<template>
	<div class="life" style="background-color: #f4f4f4;">

		<!-- <div class="aaaa">
			
			<a style="color: red;" href="#/sell2">商家入驻</a> | 
			<a href="#/login">商家登录</a>
		</div> -->

		<div class="fs">

			<div class="grid_c1 fs_inner">

				<div class="fs_col1">

					<div class="cate J_cate cate18">

						<!-- <ul class="JS_navCtn cate_menu">

							<li @mouseover="xianshi(index)" class="cate_menu_item" data-index="1" clstag="" v-for="(item,index) in fenlei" :key="item.id">
								<span  class="cate_menu_lk" >{{item.name}}</span>					
							</li>							
							
							
						</ul> -->

						<ul class="JS_navCtn cate_menu">

							<li @mouseover="xianshi(index)" class="cate_menu_item" data-index="1" clstag="" v-for="(item,index) in fenlei"
							 :key="item.id">

								<el-popover placement="right-start" width="700"  trigger="hover">
									<div style="width: 500px;">
										<!-- <div class="cate_detail_item cate_detail_item1" v-for="item in fenlei2" :key="item.id" style="float: left;">
									 	<div style="width: 50px;height: 50px; background-color: #000000;"><img style="width: 100%;height: 100%;" :src="item.img[0]" alt=""></div>
									 	
									 	 <div style="position: relative;left: 55px; top: -30px;">{{item.name}}</div> 
									</div> -->

										<a @click="tioazhuan(item.parent_id,item.id)" class="cate_detail_item cate_detail_item1" v-for="item in fenlei2"
										 :key="item.id" style="float: left;cursor: pointer;">
											<div style="width: 50px;height: 50px;"><img style="width: 100%;height: 100%;" :src="item.img" alt=""></div>
											<div style="position: relative;left: 55px; top: -30px;">{{item.name}}</div>
										</a>
									</div>
									<a :href="'#/life/lifelist?id='+item.id" slot="reference" style="width: 100%; height: 100%; display: block;">{{item.name}}</a>
									<!-- <span  slot="reference" style="width: 100%; height: 100%; display: block;cursor: pointer;">{{item.name}}</span> -->

								</el-popover>
							</li>


						</ul>


						<!-- 	<div class="JS_popCtn cate_pop" style="top: 0px;">
							<div class="cate_part clearfix" style="">
								
								<div class="cate_part_col1">
									
									<div class="cate_detail">
										
										 <div class="cate_detail_item cate_detail_item1" v-for="item in fenlei2" :key="item.id">
											<div style="width: 50px;height: 50px; background-color: #000000;float: left;">
												<img style="width: 100%;height: 100%;" src="../../assets/images/fenlei.png" alt="">												
											</div>
											
											 <div style="float: left;line-height: 50px;">{{item.name}}</div>
											
										</div> 
										
									</div>
								</div>
								
							</div>
							
							
						</div> -->

					</div>

				</div>

				<div class="fs_col2">

					<div class="focus__main">

						<div class="sliderBannerWrapper">

							<swiper :options="swiperOption" class="swiper-container swiper-pagination1 ds" ref="mySwiper">

								<div class="swiper-slide" v-for="(item,index) in img" v-bind:key="index">
									
									<!-- <a :href="img[index].href">
										<img class="banner-img" :src="img[index].src" style="width: 100%;height: 100%;" />
									</a> -->
									
									<a v-if="item.url!=''&&item.url!=null" :href="item.url" target="_blank">
										<img class="banner-img" :src="item.image" />
									</a>
									
									<a v-if="item.url==''||item.url==null" target="_blank">
										<img class="banner-img" :src="item.image" />
									</a>

								</div>

								<div class="swiper-pagination" slot="pagination"></div>
								<div class="swiper-button-prev" slot="button-prev"></div>
								<div class="swiper-button-next" slot="button-next"></div>
							</swiper>

						</div>

						<div class="sliderRecommendWrapper">



						</div>

					</div>

				</div>


				<div class="J_fs_col3">

					<div class="focus-item__recommend ">
						
						<a :href="'#/life/zhaodetail?id='+item.id" target="_blank" class="recommend-item fade-in" v-for="item in tuijian2" :key="item.id">
							<img :alt="item.title" class="recommend-item__image" :src="item.img[0]">
						</a>					
						

						<!-- <a href="" class="recommend-item fade-in">
							<img alt="" class="recommend-item__image" src="//img20.360buyimg.com/babel/s380x300_jfs/t1/104998/40/18019/99588/5e8ef088E307a6d64/70ae4eb987e6d0dc.png.webp">
						</a>

						<a href="" class="recommend-item fade-in">
							<img alt="" class="recommend-item__image" src="//img20.360buyimg.com/babel/s380x300_jfs/t1/104998/40/18019/99588/5e8ef088E307a6d64/70ae4eb987e6d0dc.png.webp">
						</a>

						<a href="" class="recommend-item fade-in">
							<img alt="" class="recommend-item__image" src="//img20.360buyimg.com/babel/s380x300_jfs/t1/104998/40/18019/99588/5e8ef088E307a6d64/70ae4eb987e6d0dc.png.webp">
						</a> -->

					</div>
				</div>

			</div>

		</div>

		<div id="J_feeds">

			<div class="more2">
				<div class="floorhd">

					<div class="grid_c1 floorhd_inner">

						<h3 class="floorhd_tit">为你推荐</h3>
					</div>


				</div>


				<div class="grid_c1 more2_inner">

					<div>

						<ul class="more2_list clearfix" id="feedContent0" style="    padding: 0;" ref="ulul">

							<li class="more2_item more2_item_good hover-on" v-for="item in tuijian" :key="item.id">
								<!-- GGG-v-for -->

								<span class="more2_item_gdot"></span>
								<a :href="'#/life/zhaodetail?id='+item.id" target="_blank">

									<div class="lazyimg lazyimg_loaded more2_img">
										<!-- GGG-图片 -->
										<img v-if="item.img[0]" :src="item.img[0]" alt="加载失败" class="lazyimg_img">
										<img v-if="!item.img[0]" src="../../assets/images/zanwutupian.png"  class="lazyimg_img">
									</div>

									<div class="more2_info">

										<div class="more2_info_name">
											<!-- GGG-标题 -->{{item.title}}
										</div>
										<div class="more2_info_price more2_info_price_plus more2_info_price_newcomer">

											<div class="mod_price">

												<i>¥</i>
												<span class="more2_info_price_txt">{{item.showprice}}<!-- GGG-价格 --></span>

											</div>
										</div>
									</div>

								</a>

							</li>

						</ul>

					</div>

				</div>
			</div>





		</div>






	</div>
</template>

<script>
	export default {
		name: 'life',
		data() {
			return {
				img: [{
						image: 'https://www.zhaocaipaipai.com/PC/mulu/img/life.jpg',
						url: ''
					},
					


				],
				swiperOption: {
					pagination: '.swiper-pagination1',
					slidesPerView: 1,
					spaceBetween: 30,
					centeredSlides: false,
					spaceBetween: 0,
					onSlideChangeEnd: swiper => {
						//这个位置放swiper的回调方法
						this.page = swiper.realIndex + 1;
						this.index = swiper.realIndex;
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					//自动播放
					autoplay: {
						delay: 5000,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					//循环
					loop: true,
				},

				tuijian: [],
				tuijian2: [],
				fenlei: [],
				fenlei2: [],
			}
		},

		//定义swiper对象
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},


		},

		created() {
			this.getTuijian()
			this.getGoodsCate()
		},


		mounted() {
			this.swiper.slideTo(0, 0, false);
		},

		methods: {

			tioazhuan(id, cid) {
				this.$router.push('/life/lifelist?id=' + id + '&cid=' + cid)
			},

			//显示二级分类
			xianshi(i) {
				console.log(i)
				console.log(this.fenlei[i].erji)
				this.fenlei2 = this.fenlei[i].erji

			},

			//获取二级分类
			async erjifenlei() {

				for (let i = 0; i < this.fenlei.length; i++) {
					this.$api.getGoodsCate({
						pid: this.fenlei[i].id
					}).then(res => {
						console.log(res)
						this.fenlei[i].erji = res.data
					})

				}

			},

			//获取商品分类
			async getGoodsCate() {
				this.$api.getGoodsCate().then(res => {
					this.fenlei = res.data

					//获取所以二级分类
					this.erjifenlei()
				})
			},

			async getTuijian() {
				this.$api.indexGoods({
					num: "",
					is_buliang: ""
				}).then(res => {
					this.tuijian = res.data
					//console.log(this.tuijian)

					this.$refs.ulul.style.height = (333 * Math.ceil(this.tuijian.length / 5)) + "px";
					//console.log(this.tuijian.length)
					if(this.tuijian.length>3){
						for(let i=0;i<3;i++){
							this.tuijian2.push(this.tuijian[i])
						}
					}else{
						this.tuijian2=this.tuijian
					}
					
				})
			},


		}


	}
</script>

<style lang="less" scoped>
	.aaaa {
		font-size: 20px;
		text-align: right;
		width: 100%;
		height:35px;
	}

	.fs {
		margin-bottom: 30px;
	}

	.fs_inner {
		z-index: 1;
		height: 480px;
		background-color: #f4f4f4;
	}

	.fs,
	.fs_inner {
		position: relative;
	}

	.fs_col1,
	.fs_col2 {
		float: left;
		height: 480px;
		margin-right: 10px;
	}

	.fs_col1 {
		width: 190px;
	}


	.daohang {
		width: 200px;
		height: 480px;
		background-color: #f4f4f4;
	}

	.cate {
		position: relative;
		z-index: 3;
	}

	.cate_menu {
		overflow: hidden;
		padding: 10px 0;
		height: 450px;
		background-color: #fefefe;
		color: #636363;
		margin-top: 0px;
	}

	.cate18 .cate_menu_item {
		width: 100%;

		height: 32px;
		line-height: 32px;
	}

	.cate_menu_item {
		overflow: hidden;
		padding-left: 18px;
		height: 27px;
		line-height: 27px;
		// font-size: 0;
		-webkit-transition: background-color .2s ease;
		transition: background-color .2s ease;
	}

	.cate_menu_lk {
		font-size: 14px;
		color: #333;
		-webkit-transition: color .2s ease;
		transition: color .2s ease;
	}

	li {
		list-style: none;
	}

	.fs_col2 {
		width: 790px;
	}

	.focus {
		position: relative;
		height: 470px;
		margin-top: 10px;
		overflow: hidden;
	}

	.swiper-container {
		height: 471px
	}

	.sliderBannerWrapper {
		width: 100%;
		margin-right: 10px;
		float: left;
		overflow: hidden;
	}


	.more2 {
		min-height: 305px;
	}

	.floorhd {
		height: 65px;
	}

	.grid_c1 {
		margin: 0 auto;
		width: 1190px;
	}

	.floorhd_tit,
	.floorhd_tit_empty {
		position: relative;
		width: 150px;
		height: 45px;
		font-size: 28px;
		font-weight: 700;
		text-align: center;
		line-height: 45px;
		padding: 0 30px;
		margin: 0 auto 20px;
		overflow: hidden;
		color: #333;
	}

	.floorhd_tit:after,
	.floorhd_tit:before {
		content: "";
		position: absolute;
		top: 50%;
		margin-top: -10px;
	}

	.floorhd_tit:before {
		background-image: url(../../assets/images/sprite.png);
		background-position: 0 0;
		width: 25px;
		height: 20px;
		left: 0;
	}

	.floorhd_tit:after {
		background-image: url(../../assets/images/sprite.png);
		background-position: -25px 0;
		width: 25px;
		height: 20px;
		right: 0;
	}

	.more2_list {
		margin: 0 -5px;
	}

	.more2_list {
		margin: 0 -5px;
	}

	.more2_list {
		margin: 0 -5px;
	}

	.more2_item {
		background: #fff;
	}

	.more2_item {
		position: relative;
		float: left;
		width: 230px;
		height: 322px;
		margin: 0 5px 10px;
	}

	.more2_item_gdot {
		position: absolute;
		bottom: 0;
		right: 20px;
		display: inline-block;
		width: 1px;
		height: 1px;
		background-color: #b1b1b1;
	}

	.more2_lk {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	a {
		color: #666;
		text-decoration: none;
	}

	.more2_img {
		display: block;
		-webkit-transition: opacity .2s ease;
		transition: opacity .2s ease;
	}

	.lazyimg_loaded {
		-webkit-transition: background .2s linear, opacity .2s linear !important;
		transition: background .2s linear, opacity .2s linear !important;
		background: transparent;
	}

	.lazyimg {
		position: relative;
		overflow: hidden;
		background: #eee;
		-webkit-transition: background .2s linear;
		transition: background .2s linear;
	}

	.more2_img {
		width: 150px;
		height: 150px;
		margin: 30px auto 40px;
	}

	.more2_img>img {
		display: block;
		width: auto;
		height: auto;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	.lazyimg_img {
		width: 100%;
		height: 100%;
		//opacity: 0;
		-webkit-transition: opacity .2s linear;
		transition: opacity .2s linear;
		-webkit-backface-visibility: hidden;
	}

	img {
		border: 0;
		vertical-align: middle;
	}

	.more2_info {
		clear: both;
		line-height: 24px;
	}

	.more2_info {
		padding: 0 20px;
		height: 65px;
	}

	.more2_info_name {
		height: 48px;
		font-size: 14px;
		line-height: 24px;
		text-align: left;
		color: #666;
		-webkit-transition: color .2s ease;
		transition: color .2s ease;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.more2_info_price {
		margin-top: 10px;
	}

	.more2_info_price_plus .mod_price {
		float: left;
		width: 75px;
		text-align: left;
	}

	.more2 .mod_price {
		display: inline-block;
		font-size: 16px;
		line-height: 18px;
		height: 18px;
		color: #e1251b;
	}

	.more2 .mod_price i {
		vertical-align: middle;
		font-size: 12px;
		font-weight: 700;
		font-family: MicrosoftYahei-regular, Arial, Helvetica, sans-serif;
	}

	i {
		font-style: normal;
	}

	.more2_info_price_txt {
		font-size: 20px;
		font-weight: 700;
		font-family: arial, sans-serif;
	}


	.focus-item__recommend {
		width: 190px;
		vertical-align: top;
		display: inline-block;
		height: 100%;
	}


	.sliderRecommend .recommend-item {
		position: relative;
		
	}

	.focus-item__recommend .recommend-item {
		height: 150px;
		display: block;
		margin-bottom: 10px;
		background-color: #fff;
	}


	.focus-item__recommend .recommend-item__image {
		position: relative;
		width: 100%;
		height: 100%;
		font-size: 13px;
	}




	.cate_pop {
		position: absolute;
		left: 191px;
		top: 0;
		width: 998px;
		min-height: 469px;
		border: 1px solid #f7f7f7;
		background-color: #fff;
		-webkit-box-shadow: 2px 0 5px rgba(0, 0, 0, .3);
		box-shadow: 2px 0 5px rgba(0, 0, 0, .3);
		-webkit-transition: top .25s ease;
		transition: top .25s ease;
	}

	.cate_part {
		/* display: none; */
		padding: 20px 0 10px;
	}

	.cate_part_col1 {
		float: left;
		width: 800px;
	}

	.cate_detail {
		overflow: hidden;
		*zoom: 1;
		padding: 10px 0 0 20px;
	}

	.cate_detail_item {
		position: relative;
		padding-left: 80px;
	}

	.cate_menu .cate_menu_item:hover {
		background-color: #D9D9D9;
	}
</style>
