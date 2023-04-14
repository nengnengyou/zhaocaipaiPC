<template>
	<div id="livehome" style="background-color: #f4f5f8;height: calc(100vh - 91px);overflow-x:auto">

		<div class="js-responded-list">
			<!-- style="    height: 662px;" -->
			<div class="mod-list">


				<div class="box game-live-box">

					<div class="box-hd clearfix" style="margin: 25px auto 33px;">
						
						<!-- <el-carousel :interval="4000" type="card" height="250px">
							<el-carousel-item v-for="item in 3" :key="item">
								<a href="" target="_blank">
									<img style="width: 100%;height: 100%;background: #888;" src="https://huyaimg.msstatic.com/cdnimage/gamebanner/php0zWhHw1592023913.png"
									 alt="">
								</a>
							</el-carousel-item>
						</el-carousel> -->
						<h2 class="title"><a style="text-decoration: none;font: 26px/1 Microsoft YaHei,Arial,Helvetica,sans-serif,SimSun;">精彩直播</a></h2>
						<div class="filter">
							<div class="clearfix">							
								  <!-- <button class="button" @click="item(1)" :style="isitem==1?'color:#f80':'color:#000000a6'">全部</button> -->
								  <!-- <button class="button" @click="item(2)" :style="isitem==2?'color:#f80':'color:#000000a6'">全2部</button> -->
								
							</div>
							
						</div>
					</div>
					
					<div class="schrodinger-vczh" >
						<div class="mod-list-empty">
							<div class="empty-pic"></div>
							<div class="empty-tip seo-empty-tip">暂时没有主播在直播</div>
						</div>
					</div>

					<div class="box-bd">
						<ul class="live-list clearfix" style="visibility: visible; padding: 0;width: 1320px;margin: 0 auto;">

							<li class="game-live-item"  v-for="item in livetxt">
								<a :href="'#/live?livenum='+item.live_num" class="video-info " target="_blank">
									<!-- <img v-if="item.is_open=='Y'" src="../../assets/images/live/livefeng.gif" alt=""> -->
									<img v-if="item.is_open=='Y'" style="position: absolute;width: 40px;z-index: 99;" src="../../assets/images/live/liveaa.gif" alt="">
									<img class="pic"  :src="item.is_open=='Y'?item.pc_cover_image:item.pc_default_image" :alt="item.nickname+'的直播'" :title="item.nickname+'的直播'">


									<div class="item-mask"></div>
									<i class="btn-link__hover_i"></i>
									<!-- <p class="tag-right">
										<em class="tag-blue">蓝光10M</em>

									</p> -->
								</a>
								<a href="#/live" class="title" :title="item.live_title" target="_blank">{{item.live_title}}</a>
								<span class="txt">
									<span class="avatar fl">
										<img v-if="item.avatar" :src="item.avatar" :alt="item.nickname" :title="item.nickname">
										<img v-if="!item.avatar" src="../../assets/images/userimg.png" :alt="item.nickname" :title="item.nickname">
										<!-- <i class="nick" :title="item.nickname">{{item.nickname}}</i> -->
									</span>
									<span class="num"><i class="num-icon"></i><i class="js-num">{{item.is_open=='Y'?item.online_num:'0'}}</i></span>
								</span>
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
		name: "livehome",
		data(){
			return{
				isitem:1,
				livetxt:[],
			}
		},
		
		mounted() {
			this.getlivelist()
		},
		
		methods:{
			item(id){
				this.isitem=id;
			},
			
			//获取在线直播列表
			getlivelist() {
				this.$api.getlivelist().then(res => {
					//console.log(res);
					this.livetxt = res.data;
					//console.log(this.$route.query.live_num=='')
			// 		if (this.$route.query.live_num == '' || !this.$route.query.live_num) {
			
			// 			//console.log(res.data[0])
			// 			this.getlivead(res.data[0].live_num);
			// 		} else {
			// 			//console.log(this.$route.query.live_num)
			// 			this.getlivead(this.$route.query.live_num)
			// 		}
			
				})
			
			},
			
		},

	}
</script>

<style lang="less" scoped>
	.js-responded-list {
		//   overflow-y: auto;
		//margin-left: 190px;
		margin: 0 auto;
		width: 1400px;
		//width: 85%;
	}

	.mod-list {
		//padding: 0 30px 0 90px;
		min-height: 550px;
		height: 100%;
		position: relative;

	}

	.schrodinger-vczh {
		display: none;
	}

	.mod-list-empty {
		margin: 70px 0 50px;
	}

	.mod-list-empty .empty-pic {
		margin: 0 auto;
		width: 402px;
		height: 245px;
		background-image: url(../../assets/images/livehomeno.png);
	}

	.mod-list-empty .empty-tip {
		margin-top: 22px;
		color: grey;
		font-size: 16px;
		font-weight: 700;
		text-align: center;
	}

	.mod-list .box {
		//margin: 25px 0 0;
		display: flex;
		flex-flow: column;
	}

	.mod-list .box-hd {
		position: relative;
		//line-height: 40px;
		//margin-bottom: 20px;
		width: 1320px;
		//margin: 25px auto 0;

	}

	.mod-list .box-hd .title {
		float: left;
		padding-right: 10px;
		font-size: 26px;
		color: #333;
		//margin-left: 41px;
		margin: 0;
	}

	.mod-list .box-hd .title a {
		color: #333;
	}

	.mod-list .box-bd {
		// overflow: hidden;
		// margin-right: -11px;
	}

	.live-list .game-live-item {
		width: 310px !important;
	}

	.live-list .game-live-item:hover {
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
	}

	.live-list .game-live-item {
		//  margin-right: 15px;
		//margin-bottom: 20px;
	}

	.game-live-item {
		float: left;
		overflow: hidden;
		box-sizing: border-box;
		width: 264px;
		margin: 0 10px 30px 10px;
		padding-bottom: 10px;
		font-size: 12px;
		background: #fff;
		border-radius: 6px;
		backface-visibility: hidden;
	}

	.live-list .video-info {
		height: 174px !important;
	}

	.game-live-item .video-info {
		display: block;
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 148px;
	}

	.game-live-item a {
		transition: color .2s ease-out;
		text-decoration: none;
	}

	.game-live-item .title {
		display: block;
		overflow: hidden;
		height: 20px;
		margin-top: 8px;
		padding: 0 23px 0 8px;
		font-size: 14px;
		line-height: 20px;
		white-space: nowrap;
		text-overflow: ellipsis;
		-ms-text-overflow: ellipsis;
		color: #333;
		-o-text-overflow: ellipsis;
	}

	.game-live-item .video-info * {
		cursor: pointer;
	}

	.game-live-item .txt {
		display: block;
		position: relative;
		height: 23px;
		padding: 5px 0 0 5px;
		font-size: 12px;
		line-height: 24px;
		color: #999;
	}

	.game-live-item * {
		box-sizing: border-box;
	}

	.list-page {
		margin: 30px 0;
		text-align: center;
	}

	.game-live-item .avatar {
		overflow: hidden;
		position: absolute;
		left: 7px;
		width: 100%;
		height: 24px;
		line-height: 24px;
		vertical-align: middle;
	}

	.game-live-item .avatar img {
		float: left;
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	.game-live-item .avatar .nick {
		float: left;
		width: 68%;
		margin-left: 5px;
		text-overflow: ellipsis;
		-ms-text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
	}

	.game-live-item .txt .num {
		float: right;
		position: relative;
		padding: 0 8px 0 20px;
		font-size: 12px;
		background: #fff;
	}

	.game-live-item .txt .num .num-icon {
		display: inline-block;
		width: 16px;
		height: 12px;
		margin: 0 4px 0 2px;
		vertical-align: -2px;
		background: url(https://a.msstatic.com/huya/main3/widget/game-live-item/img/people_icon_54347.png);
	}

	.game-live-item * {
		box-sizing: border-box;
	}

	.game-live-item .video-info .btn-link__hover_i {
		opacity: 0;
		filter: alpha(opacity=0);
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50px;
		height: 50px;
		margin: -25px 0 0 -25px;
		background: url(https://a.msstatic.com/huya/main3/widget/game-live-item/img/play-icon_fbf7f.png) no-repeat;
		transform: scale(2);
		backface-visibility: hidden;
		transition: all .25s ease-out;
	}



	.game-live-item .video-info:hover>.item-mask {
		opacity: 0.5;
	}

	.game-live-item .video-info:hover>.btn-link__hover_i {
		opacity: 1;
		transform: scale(1);
	}


	.game-live-item .video-info .pic {
		overflow: hidden;
		position: relative;
		max-width: none;
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}

	.game-live-item .video-info .item-mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: all .3s ease-out;
		opacity: 0;
		background: #000;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		filter: alpha(opacity=0);
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.clearfix .button{
		    border-radius: 20px;
		    margin-top: 3px;
			margin-right: 5px;
		    padding: 6px 12px;
		    background-color: #fff;
		    border: 1px solid #e2e2e2;
			font-size: 12px;
			color: #000000a6;
			cursor: pointer;
	}
	.clearfix .button:hover{
		color:#f80
	}
</style>
