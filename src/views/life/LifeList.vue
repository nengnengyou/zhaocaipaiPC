<template>
	<div class="life-list">
		<div class="aaaa"></div>
		<div class="w">
			<div class="container">
				<div class="selector">

					<!-- <div class="J_selectorLine s-brand">
						<div class="sl-wrap">
							<div class="sl-key">
								<span>品牌：</span>
							</div>

							<div class="sl-value">
								<div class="sl-v-logos">
									<ul class="J_valueList v-fixed">
										<li v-for="item in fenlei" :key="item.id" style="    margin-right: 15px;">
											<a @click="saixuan(0,item.id)" title="" rel="nofollow">
												<i></i>
												<span>{{item.name}}</span>
												 <img class="loading-style2" width="102" height="36" data-lazy-img="done" src=""> 
											</a>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div> -->

					<div class="J_selectorLine s-line J_selectorFold">
						<div class="sl-wrap">
							<div class="sl-key">
								<span>品牌：</span>
							</div>

							<div class="sl-value">
								<div class="sl-v-list">
									<ul class="J_valueList">
										<li>
											<span @click="saixuan(0,0,'全部')">全部</span>
										</li>
										<li v-for="item in fenlei" :key="item.id">
											<span @click="saixuan(0,item.id,item.name)">{{item.name}}</span>
										</li>

									</ul>
								</div>

							</div>
						</div>
					</div>

					<div class="J_selectorLine s-line J_selectorFold">
						<div class="sl-wrap">
							<div class="sl-key">
								<span>筛选不良资产：</span>
							</div>

							<div class="sl-value">
								<div class="sl-v-list">
									<ul class="J_valueList">
										<li>
											<span @click="saixuan(1,1,'是')">是</span>
										</li>
										<li>
											<span @click="saixuan(1,0,'否')">否</span>
										</li>
									</ul>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="g-main2" style="margin-top: 10px;">

				<div class="m-list">
					<div class="ml-wrap" style="position: relative;">
						<div class="goods-list-v2 J-goods-list gl-type-3 ">

							<ul class="gl-warp clearfix" style="position: absolute;right: 0; width: 968px;">
								<div id="search-2014">
									<div class="saixuank" ref="sxk">
										<div style="height: 35px;
    width: 57px;
    float: left;    margin-right: 11px;"><span style="    display: block;
    margin: 0 auto;
    width: 38px;">{{"筛选: "}}</span></div>
										<span>{{saixuank.p}}</span>
										<span>{{saixuank.s}}</span>
									</div>
										
									<div class="form">
										<input v-model="getGoods.keyword" type="text" autocomplete="off" id="key" accesskey="s" class="text blurcolor"
										 clstag="shangpin|keycount|toplist1|b02">
										<button @click="saixuan(2)" class="button cw-icon" clstag="shangpin|keycount|toplist1|b03"><i></i>搜索</button>
									</div>

								</div>
								<li class="more2_item more2_item_good hover-on" v-for="item in shangpin" :key="item.id">
									<!-- GGG-v-for -->

									<span class="more2_item_gdot"></span>
									<a :href="'index.html#/life/zhaodetail?id='+item.id" target="_blank">

										<div class="lazyimg lazyimg_loaded more2_img">
											<!-- GGG-图片 -->
											<img :src="item.img" alt="" class="lazyimg_img">
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

				<div class="m-aside">
					<div class="aside-bar">
						<div class="ab-goods u-ad-wrap" style="    display: block;">
							<div class="mt">
								<h3>商品精选</h3>
							</div>
							<div class="mc">
								<ul class="clearfix" style="    padding: 0;">

									<li data-sku="11" onclick="" v-for="item in tuijian" :key="item.id">
										<div class="p-img">
											<a :href="'index.html#/life/zhaodetail?id='+item.id" target="_blank" :title="item.title">
												<img style="width: 150px; height: 150px;"  :src="item.img" class="err-product">
											</a>
										</div>

										<div class="p-name">
											<a target="_blank" href="" title="">
												{{item.title}}
											</a>
										</div>

										<div class="p-price">
											<strong class="price">
												<span class="J-p-52554844598">￥{{item.showprice}}</span>
											</strong>
											<span class="p-ico J-pt-52554844598">

											</span>
										</div>

									</li>

								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'life-list',
		components: {

		},
		data() {
			return {
				tuijian: [],
				shangpin: [],
				fenlei: "",
				getGoods: {
					cid: "",
					cid2: "",
					is_buliang: 0,
					keyword: ""
				},
				saixuank: {
					p: "",
					s: ""
				}
			}
		},
		created() {
			this.getTuijian()
			this.getfenlei()
			//this.getshangpin()
		},
		methods: {
			//筛选
			saixuan(type, obj,name) {
				if (type == 0) {
					if (obj == 0) {
						this.getGoods.cid = this.getGoods.cid2
						if (this.saixuank.p == name) {
							this.saixuank.p = ""
						} else {
							this.saixuank.p = "品牌: " + name
						}

					} else {
						this.getGoods.cid = obj
						this.saixuank.p = "品牌: " + name
						}

				} else if (type == 1) {
					this.getGoods.is_buliang = obj					
					if (this.saixuank.s == name) {
						this.saixuank.s = ""
					} else {
						this.saixuank.s = "筛选不良资产: " + name							
					}
				} else if (type == 2) {
					console.log(this.getGoods.keyword)
					//this.getGoods.keyword=this.getGoods.keyword
				}

				this.getshangpin()

			},

			//获取分类
			getfenlei() {
				//let id=this.$route.query.id
				if (this.$route.query.id && this.$route.query.cid) {
					this.getGoods.cid = this.$route.query.cid;
					this.getshangpin()

					let id = this.$route.query.id
					this.$api.getGoodsCate({
						pid: id
					}).then(res => {
						this.fenlei = res.data
						for (let i = 0; i < res.data.length; i++) {
							this.getGoods.cid = this.getGoods.cid + "," + res.data[i].id
						}
						this.getGoods.cid2 = this.getGoods.cid
						console.log(this.fenlei)
					})

				} else if (this.$route.query.id) {
					let id = this.$route.query.id
					this.$api.getGoodsCate({
						pid: id
					}).then(res => {
						this.fenlei = res.data
						for (let i = 0; i < res.data.length; i++) {
							this.getGoods.cid = this.getGoods.cid + "," + res.data[i].id
						}
						this.getGoods.cid2 = this.getGoods.cid
						console.log(this.fenlei)
						this.getshangpin()
					})

				}



			},

			//获取商品			
			async getshangpin() {
				this.$api.getGoods({
					cid: this.getGoods.cid,
					is_buliang: this.getGoods.is_buliang,
					keyword: this.getGoods.keyword
				}).then(res => {
					if (res.data == "数据为空") {
						this.shangpin = ""
					} else {
						this.shangpin = res.data
					}


				})

			},


			//获取推荐商品
			async getTuijian() {
				this.$api.indexGoods({
					num: "",
					is_buliang: ""
				}).then(res => {
					this.tuijian = res.data
					console.log(this.tuijian)

					//this.$refs.ulul.style.height=(333*Math.ceil(this.tuijian.length/5))+"px";
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.aaaa {
		width: 100%;
		//height: 20px;
		background-color: #f1f1f1;
	}

	.w {
		width: 1200px;
		border-bottom: 1px solid #eee;
	}

	.w {
		//width: 990px;
		margin: 0 auto;
	}

	.selector .s-brand,
	.selector .s-line,
	.selector .s-tow-row {
		width: auto;
		height: auto;
	}

	.selector .sl-wrap {
		position: relative;
		_zoom: 1;
		line-height: 34px;
		border-bottom: 1px dashed #eee;
	}

	.selector .s-brand .sl-key {
		color: #666;
	}

	.selector .sl-key {
		float: left;
		width: 113px;
		padding-left: 10px;
		color: #999;
		line-height: 59px;
	}

	.selector .sl-value {
		margin-left: 110px;
		padding-right: 130px;
		padding-left: 10px;
		overflow: hidden;
		zoom: 1;
	}

	.selector .sl-v-logos .v-fixed {
		//height: 99px;
		margin-top: 0;
	}

	.selector.selector .sl-v-logos li {
		overflow: hidden;
		width: 114px;
	}

	.selector .sl-v-logos li {
		float: left;
		_display: inline;
		width: 116px;
		height: 48px;
		padding: 0;
		border: 1px solid #DDD;
		margin: -1px -1px 0 0;
		background: #FFF;
		text-align: center;
	}

	.selector.selector .sl-v-logos li a {
		overflow: unset;
	}

	.selector .sl-v-logos li a {
		display: block;
		border: 1px solid #FFF;
		height: 46px;
		width: 114px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		zoom: 1;
		color: #005aa0;
		line-height: 48px;
	}

	.selector .sl-v-logos li a img {
		padding: 5px 6px;
		vertical-align: top;
		width: 102px;
		height: 36px;
	}



	.selector .sl-v-logos ul {
		padding-top: 10px;
		margin-bottom: 10px;
		overflow: hidden;
		zoom: 1;
		height: 50px;
	}

	li {
		list-style: none;
	}

	.more2_item {
		position: relative;
		float: left;
		width: 230px;
		height: 322px;
		margin: 0 5px 10px;
	}

	.more2_item {
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0);
	}

	.more2_item:hover {
		border: 1px solid #800019;
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

	a {
		color: #666;
		text-decoration: none;
	}

	.more2_img {
		width: 190px;
		height: 190px;
		margin: 30px auto 20px;
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

	.lazyimg_img {
		width: 100%;
		height: 100%;
		transition: opacity 0.2s linear;
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

	.more2_info_name {
		height: 48px;
		font-size: 14px;
		width: 211px;
		margin: 0 auto;
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

	.more2_info {
		clear: both;
		line-height: 24px;
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
		width: 75px;
		text-align: left;
		margin-left: 10px;
		color: #e4393c;
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

	.more2 .mod_price {
		display: inline-block;
		font-size: 16px;
		line-height: 18px;
		height: 18px;
		color: #e1251b;
	}

	.more2_info_price_plus .mod_price {
		float: left;
		width: 75px;
		text-align: left;
	}

	.more2_info_price_txt {
		font-size: 20px;
		font-weight: 700;
		font-family: arial, sans-serif;
	}

	.more2 .mod_price {
		display: inline-block;
		font-size: 16px;
		line-height: 18px;
		height: 18px;
		color: #e1251b;
	}


	.g-main2 .m-aside {
		// float: right;
		width: 210px;
		margin-right: -210px;
		position: relative;
		border: 1px solid #ddd;
		_display: inline;
	}

	.aside-bar {
		background: #fff;
		_width: 100%;
		_overflow: hidden;
	}

	.aside-bar .ab-goods .mt {
		line-height: 36px;
		padding-left: 10px;
		margin-bottom: 10px;
	}

	.m,
	.mb,
	.mc,
	.mt,
	.sm,
	.smb,
	.smc,
	.smt {
		overflow: hidden;
		zoom: 1;
	}

	.aside-bar .ab-goods .mc li {
		padding-left: 9px;
		padding-right: 9px;
		margin-bottom: 20px;
	}

	.aside-bar .ab-goods .mc li .p-img {
		width: 100%;
		padding: 0;
		margin-bottom: 10px;
		text-align: center;
		position: relative;
	}

	.p-detail,
	.p-img,
	.p-market,
	.p-name,
	.p-price {
		overflow: hidden;
	}

	.aside-bar .ab-goods .mc li .p-name {
		height: 36px;
		line-height: 18px;
		margin-bottom: 10px;
		overflow: hidden;
		display: block;
	}

	.p-detail,
	.p-name {
		word-break: break-all;
		word-wrap: break-word;
	}

	.aside-bar .ab-goods .mc li .p-price {
		height: 16px;
		line-height: 16px;
		margin-bottom: 4px;
		overflow: hidden;
	}

	.aside-bar .ab-goods .mc li .p-price .price {
		float: left;
		margin-right: 6px;
		color: #e4393c;
		font-weight: 700;
		font-family: verdana;
		font-size: 14px;
	}

	#search-2014 .text {
		width: 616px;
	}

	#search-2014 .blurcolor {
		color: #999;
	}

	#search-2014 .text {
		float: left;
		width: 294px;
		height: 24px;
		line-height: 24px;
		color: #999;
		padding: 4px;
		margin-bottom: 4px;
		border-width: 2px 0 2px 2px;
		border-color: #f30213;
		border-style: solid;
		outline: 0;
		font-size: 12px;
	}

	#search-2014 .button {
		float: left;
		width: 80px;
		height: 36px;
		font-family: tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
		background: #f30213;
		border: none;
		border-radius: 0;
		line-height: 1;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
	}

	.cw-icon {
		position: relative;
		cursor: default;
		zoom: 1;
	}

	#search-2014 .cw-icon i {
		top: 0;
		left: 0;
		width: 82px;
		height: 36px;
	}

	.cw-icon .i,
	.cw-icon i {
		display: block;
		position: absolute;
		overflow: hidden;
	}

	#search-2014 {
		width: 100%;
		background-color: #f1f1f1;
	}

	#search-2014 .form {
		width: 385px;
		//_width: 708px;
		height: 37px;
		margin: -13px 47px 0 auto;
	}

	.selector .sl-v-list ul {
		float: left;
		overflow: hidden;
		zoom: 1;
		position: relative;
		//height: 30px;
	}

	.selector .sl-v-list li {
		float: left;
		_display: inline;
		margin-right: 16px;
		margin-bottom: 4px;
		height: 26px;
		line-height: 26px;
		margin-right: 50px;
	}

	.selector .sl-v-list li span {
		cursor: pointer;
	}

	.saixuank {
		float: left;
		height: 100%;
	}

	.saixuank span {
		line-height: 37px;
		height: 100%;
		color: red;
		margin-right: 12px;
	}
</style>
