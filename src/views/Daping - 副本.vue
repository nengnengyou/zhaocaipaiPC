<template>
	<div class="box">

		<div class="zhongjiang2" ref="zhongjiang2">

			<!-- <img src="../../assets/images/live/zhongbiao2.png" style="width: 340px;" alt=""> -->
			<img src="../assets/images/live/zhongb.png" style="width: 100%;" alt="">

			<span class="zhongming">{{mobile}}</span>
		</div>

		<div class="zuo" v-if="is">
			<div class="zuo_">
				<div class="top">
					<!-- <div>
						<span class="title_n">&nbsp;&nbsp;{{cardata.car.id}}&nbsp;&nbsp;</span>
					</div> -->

					<span class="title_n">&nbsp;&nbsp;{{cardata.car.id}}&nbsp;&nbsp;</span>
					<span>&nbsp;&nbsp;&nbsp;</span>
					<span style="color: #000;" @click="test">{{cardata.car.title}}</span>

				</div>

				<div class="zhong">
					<swiper dir="rtl" :options="swiperOption" class="swiper-container swiper-pagination1 ds"
						ref="mySwiper">
						<div class="swiper-slide" v-for="(item,index) in cardata.car.discover_image" v-bind:key="index">
							<img class="banner-img" :src="item" />
						</div>
						<!-- <div class="swiper-pagination" slot="pagination"></div>
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div> -->
					</swiper>
				</div>

				<div class="di">

					<div class="di_1">
						<div class="di_box">
							<span @click="xintiao" class="di_t">车辆品牌：</span>
							<span>{{cardata.car.brand_info}}</span>
						</div>
						<div class="di_box2">
							<span class="di_t">车牌号：</span>
							<span>{{cardata.car.car_number}}</span>
						</div>
					</div>

					<div class="di_2">
						<div class="di_box">
							<span class="di_t">表显里程：</span>
							<span>{{cardata.car.mileage_number}}</span>
						</div>
						<div class="di_box2">
							<span class="di_t">变速箱形式：</span>
							<span>{{cardata.car.huandangfangshi}}</span>
						</div>
					</div>

				</div>
			</div>


		</div>

		<div class="you" v-if="is">

			<div class="you_">
				<div class="jiage">
					<div class="ti">
						<span>当</span>
						<span>前</span>
						<span>报</span>
						<span>价</span>
					</div>
					<div class="y">
						<div class="y_top">
							<span v-if="cardata.car.max_cost==''||cardata.car.max_cost==null">起拍价</span>
							<span v-else>当前最高价</span>
							<span class="y_top_j" v-show="isbao"
								:style="baotext=='接近保留价'?'background-color: #4CAF50;':'background-color: #ff6565;'">&nbsp;{{baotext}}&nbsp;</span>
							<span class="y_top_j" v-show="isdao">00:00:{{dao<10?"0"+dao:dao}}</span>
						</div>
						<div class="y_">
							<span class="y_1" ref="jiage"  v-if="cardata.car.max_cost==''||cardata.car.max_cost==null">{{parseFloat(cardata.car.start_price)/10000}}</span>
							<span class="y_1" ref="jiage"  v-else>{{cardata.car.max_cost}}</span>
							<!-- <span class="y_1" ref="jiage"  v-else>{{parseFloat(cardata.car.start_price)/10000}}</span> -->
							<!-- <span ref="y_1" class="y_1">55.00</span> -->
							<span class="y_2">万</span>
						</div>
						<div class="mob">
							<span>{{mobile}}</span>
						</div>
					</div>
				</div>

				<div class="di">
					<div class="di_1">
						<div class="di_box">
							<span class="di_t">排量：</span>
							<span>{{cardata.car.pailiang}}</span>
						</div>
						<div class="di_box2">
							<span class="di_t">排放标准：</span>
							<span>{{cardata.car.paifangbiaozhun}}</span>
						</div>
					</div>

					<div class="di_2">
						<div class="di_box">
							<span class="di_t">使用性质：</span>
							<span>{{cardata.car.cheliangxingzhi}}</span>
						</div>
						<div class="di_box2">
							<span class="di_t">上牌日期：</span>
							<span>{{cardata.car.chuchangriqi}}</span>
						</div>
					</div>
				</div>

			</div>

		</div>

		<div class="dd" v-if="!is">
			<span>等待开始</span>
		</div>

		<div class="xia" v-if="cardata.next_car!=null && is">
			<span>
				下一辆车&nbsp;&nbsp;({{cardata.next_car.title}})
			</span>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'daping',
		data() {
			return {
				img: [{
					image: 'https://zcp.zhaocaipaipai.com/api/bidding/showcontent/file_path/JTJGd3d3JTJGd3d3cm9vdCUyRm5ldy56aGFvY2FpcGFpcGFpJTJGcHVibGljJTJGdXBsb2FkcyUyRmF1Y3Rpb25fcmVzb3VyY2UlMkZaMjEwMTEzMDQlMkYlRTglQkQlQTYlRTglQkUlODYlRTclODUlQTclRTclODklODclMkYlRTclQjIlQTRBMUgxNUUlMkYlRTUlQkUlQUUlRTQlQkYlQTElRTUlOUIlQkUlRTclODklODdfMjAyMTAxMDQxNjI5MzguanBn',
				}, ],
				swiperOption: {
					//pagination: '.swiper-pagination1',
					slidesPerView: 1,
					spaceBetween: 30,
					centeredSlides: false,
					//spaceBetween: 0,
					onSlideChangeEnd: swiper => {
						//这个位置放swiper的回调方法
						this.page = swiper.realIndex + 1;
						this.index = swiper.realIndex;
						console.log(this.page, this.index)
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					//自动播放
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
						reverseDirection: true
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					//循环
					loop: true
				},

				bid: {},

				is: false,

				baotext: '',
				isbao: false,
				mobile: '',
				cardata: {
					car: {
						id: Number,
						title: String,
						discover_image: [],
						brand_info: String,
						car_number: String,
						mileage_number: String,
						huandangfangshi: String,
						max_cost: String,
						pailiang: String,
						paifangbiaozhun: String,
						cheliangxingzhi: String,
						chuchangriqi: String,
					},
					next_car: {
						title: String,
					}
				},
				client_id: '',
				dao:59,
				isdao:false,
				timer:'',

			}

		},

		created() {
			this.getid()
			//this.timeDown()
		},

		// mounted() {
		// 	this.getid()
		// },

		methods: {
			
			test(){
				// this.dao=60
				// clearInterval(this.timer)
				// this.timeDown()				
			},

			xintiao() {
				// let actions = {
				// 	"test": "12345"
				// };
				this.websocketsend('1');
			},

			getid() {
				this.$api.bigScreanFirst().then(res => {
					if (res.code == 1) {
						this.bid = res.data
						this.getcar()
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			getcar() {
				this.$api.bigScrean({
					car_id: this.bid.car_id,
					session_id: this.bid.area_id
				}).then(res => {
					if (res.code == 1) {
						this.cardata = res.data
						this.is = true
						// max_cost
						if (this.cardata.car.max_cost == null || this.cardata.car.max_cost == '') {
							this.cardata.car.max_cost = "0"
						}
						// this.cardata.car.keep_price = "30000"
						if (this.cardata.car.id < 10) {
							this.cardata.car.id = "00" + this.cardata.car.id
						} else if (this.cardata.car.id >= 10 && this.cardata.car.id < 100) {
							this.cardata.car.id = "0" + this.cardata.car.id
						}
						// this.cardata.car.max_cost = 900.00
						//console.log(this.$refs)
						this.$nextTick(() => {
							//console.log(this.$refs.jiage)
							this.chulijiage()
							console.log(this.cardata)
						})
						if (this.client_id == "") {
							this.initWebSocket()
						} else {
							this.bigBind()
						}
					} else if (res.code == 0 || res.code == 500) {
						console.log(res.code);
						this.is = false
					} else {
						this.$message.error(res.msg)
					}
				})
			},

			chulijiage() {
				// this.cardata.car.max_cost = "9900"
				let baoliu = parseFloat(this.cardata.car.keep_price)
				if (this.cardata.car.max_cost >= baoliu * 0.9 && this.cardata.car.max_cost <= baoliu) {
					this.baotext = "接近保留价"
					// this.$refs.jiage.style.color = "#4CAF50"
					this.isbao = true
				} else if (this.cardata.car.max_cost > baoliu) {
					this.baotext = "超过保留价"
					this.$refs.jiage.style.color = "rgb(208 30 30)"
					this.isbao = true
				} else {
					this.$refs.jiage.style.color = "#fff"
					this.isbao = false
				}
				this.cardata.car.max_cost = parseFloat(this.cardata.car.max_cost) / 10000
				if (this.cardata.car.max_cost >= 10 && this.cardata.car.max_cost < 100) {
					// this.$refs.y_1.style.font-size: 13vw;
					this.$refs.jiage.style.fontSize = "12vw"
				} else if (this.cardata.car.max_cost >= 100) {
					this.$refs.jiage.style.fontSize = "11vw"
				} else {
					this.$refs.jiage.style.fontSize = "13vw"
				}
			},


			bigBind() {
				this.$api.bigBind({
					client_id: this.client_id,
					car_id: parseInt(this.cardata.car.id)
				}).then(res => {
					if (res.code == 1) {
						console.log(res)
					}
				})
			},
			
			
			timeDown() {				
				this.timer = setInterval(() => {
					if (this.dao > 0) {
						this.dao--;						
					} else {					
						clearInterval(this.timer)
					}
				}, 1000)
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
				console.log("连接建立失败重连")
				this.initWebSocket();
			},
			websocketonmessage(e) { //数据接收
				// console.log(e)
				const redata = JSON.parse(e.data);
				console.log(redata)
				if (redata.type == 0) {
					if (redata.client_id) {
						this.client_id = redata.client_id
						this.bigBind(this.client_id);
					} else {
						this.cardata.car.max_cost = redata.money
						this.mobile = redata.mobile
						this.chulijiage()
						if(this.dao>0 && this.isdao){
							this.dao=59
							clearInterval(this.timer)
							this.timeDown()
						}						
					}

				} else if (redata.type == 1) {
					clearInterval(this.timer)
					this.bid.car_id = redata.new_id
					this.bid.area_id = redata.session_id
					this.isdao=false
					// this.websocketclose();
					if(redata.status==1){
						this.$refs.zhongjiang2.style.transform = 'scale(1)'
						this.mobile= redata.mobile;
					}
					setTimeout(() => {
						this.mobile='';
						this.$refs.zhongjiang2.style.transform = 'scale(0)'
						this.getcar()
					}, 5000)
				} else if (redata.type==302){
					this.dao=59
					this.isdao=true
					this.timeDown()
				}


			},

			websocketsend(Data) { //数据发送
				let that = this;
				try {
					console.log(Data)
					that.websock.send(Data, res => {
						console.log(res)
					});
				} catch (err) {
					console.log("断线了: " + err);
					//that.connection();
				}
				// this.websock.send(Data);
			},
			websocketclose(e) { //关闭
				console.log("关闭")
				console.log(e)
			},

		}


	}
</script>

<style lang="less" scoped>
	.box {
		// background-color: #3170ff;
		background-color: #86d8ff;
		width: 100%;
		height: 100vh;
		// height: 100%;
	}

	.you {
		width: 49%;
		height: 90%;
		padding: 2%;
		float: right;
		padding-bottom: 0;
		padding-left: 0px;
	}

	.you_ {
		// background-color: #35baff;
		width: 100%;
		height: 95%;
	}

	.zuo {
		width: 45%;
		height: 90%;
		float: left;
		padding: 2%;
		padding-bottom: 0;
	}

	.zuo_ {
		// background-color: #35baff;
		width: 100%;
		height: 95%;
	}

	.top {
		width: 100%;
		height: 15%;
		font-size: 3vw;
		overflow: hidden;
	}

	.title_n {
		background-color: #f6ff00;

	}

	.zhong {
		height: 60%;
	}

	.swiper-container {
		height: 100%;
	}

	.banner-img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}

	.jiage {
		height: 75%;
		// background-color: #35baff;
		background-color: #86b9ff;
	}

	.ti {
		// background-color: #35baff;
		// background-color: #86b9ff;
		// height: 100%;
		width: 10%;
		float: left;
		text-align: center;
		padding-top: 25%;

		//line-height: 50vw;
	}

	.ti span {
		color: #000;
		font-size: 3vw;
		margin-bottom: 5%;

	}

	.y {
		// background-color: #64caff;
		background-color: #5bc9fe;
		height: 100%;
		float: left;
		width: 90%;
	}

	.y_top {
		color: #fff;
		font-size: 2.5vw;
		padding: 2%;
		height: 20%;
	}

	.y_top_j {
		// background-color: #ff6565;
		margin-left: 5%;
	}

	.y_ {
		text-align: center;
		// padding-left: 10%;
		// padding-top: 2%;
		transform: scale(1, 2);

	}

	.y_1 {
		color: #000;
		font-size: 14vw;
		font-weight: 900;
	}

	.y_2 {
		color: #000;
		font-size: 5vw;
	}

	.di {
		font-size: 2vw;
		color: #000;
		padding: 7% 0 0 0;
	}

	.di_1 {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5%;
	}

	.di_2 {
		display: flex;
		justify-content: space-between;
	}

	.di_box {
		width: 50%;
	}

	.di_box2 {
		width: 50%;
		// text-align: right;
	}

	.di_t {
		//margin-right: 5%;
	}

	.xia {
		// color: #f6ff00;
		color: #6c2f02;
		font-size: 2vw;
		float: left;
		text-align: center;
		width: 100%;
	}

	.dd {
		color: #fff;
		padding-top: 20%;
		text-align: center;
		// margin-top: 25%;
		font-size: 16vw;
	}

	.swiper-slide {
		background-color: #d8d8d8;
	}

	.mob {
		text-align: end;
		font-size: 3.5vw;
		color: rgb(255, 255, 255);
		padding-top: 14%;
		padding-right: 14%;
	}

	.zhongjiang2 {
		position: absolute;
		z-index: 903;
		right: 30%;
		width: 42%;
		top: 7%;
		transition: transform 0.2s ease-in;
		transform-origin: 50% 50%;
		transform: scale(0);
	}
	.zhongming {
		    position: absolute;
		    top: 49%;
		    color: #fff;
		    left: 25%;
		    font-size: 4vw;
		    font-family: cursive;
	}
</style>
