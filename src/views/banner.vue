<template>
	<div>

		<div id="banner" v-if="is">

			<swiper :options="swiperOption" class="swiper-container swiper-pagination1 ds" ref="mySwiper">
			

				<div class="swiper-slide" v-for="item in img" v-bind:key="item.id">
					
					
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

	</div>




</template>

<script>
	//require('swiper/dist/css/swiper.css');
	// import {
	// 	swiper,
	// 	swiperSlide
	// } from 'vue-awesome-swiper'
	//import 'swiper/dist/css/swiper.css'
	export default {
		name: 'banner',
		// components: {
		// 	swiper,
		// 	swiperSlide,
		// },
		data() {
			return {
				// img: [{
				// 	bgcolor: "",
				// 	car_id: '0',
				// 	createtime: '1588733511',
				// 	good_id: '0',
				// 	id: 9,
				// 	image: "https://zcp.zhaocaipaipai.com/upload/admin/20200217/ca1618a9bafff03f77114e9d7e4ff531.jpg",
				// 	title: "轮播图1",
				// 	type: 1,
				// 	url: "",
				// },
				// {
				// 	bgcolor: "",
				// 	car_id: 0,
				// 	createtime: '1588733528',
				// 	good_id: 0,
				// 	id: 10,
				// 	image: "https://zcp.zhaocaipaipai.com/upload/admin/20190819/bd7369d4c360cf7f7b8f0f8f3e282be8.jpg",
				// 	title: "轮播图2",
				// 	type: 1,
				// 	url: "",
				// }
				// ],

				img: [],

				is: false,

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
						delay: 8000,
						disableOnInteraction: false,
						reverseDirection: true
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					//循环
					loop: true
				}
			}
		},
		//定义swiper对象
		computed: {
			// swiper() {
			// 	return this.$refs.mySwiper.swiper;
			// }
		},
		mounted() {
			// this.swiper.slideTo(0, 0, false);

		},

		created() {
			this.getbanner()
			// this.$api.getUseBanner({
			// 	type: 1
			// }).then(res => {
			// 	console.log(res)
			// 	this.img = res.data.ad					
			// })
		},

		methods: {

			async getbanner() {
				this.$api.getUseBanner({
					type: 1
				}).then(res => {
					//console.log(res)
					this.img = res.data.ad
					this.is = true
					//this.swiper.slideTo(0, 0, false);
				})
			},

			bannt() {
				//console.log(122)
				//this.$alert('假装这是跳转的页面，谢谢','这是新页面')

			},
		}

	}
</script>

<style lang="less" scoped>
	#banner {
		margin: auto;
		min-width: 100%;
		height: 350px;
	}

	#banner .ds {
		width: 100%;
		height: 100%;
	}

	#banner img {
		width: 100%;
		height: 100%;
	}
</style>
