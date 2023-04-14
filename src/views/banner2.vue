<template>
	<div>

		<div id="banner">

			<swiper :options="swiperOption" class="swiper-container swiper-pagination1 ds" ref="mySwiper">
				<!-- 添加的图片
    		<ul>
    			<li v-for="(item,i) in img">
    				<swiper-slide v-for="(item,i) in img"><img class="banner-img" :src="item" /> </swiper-slide>
    			</li>
    		</ul> -->

				<div class="swiper-slide" v-for="(item,index) in img" v-bind:key="index" >
					<a href="index.html#/person" target="_blank">
						<img  class="banner-img" :src="img[index].src" />

					</a>


				</div>


				<!--<swiper-slide v-for="(item,i) in img"><img class="banner-img" :src="item" /> </swiper-slide>


    		 <swiper-slide><img class="banner-img" src="../assets/banner/4.jpg" /> </swiper-slide>
    		<swiper-slide><img class="banner-img" src="../assets/banner/5.jpg" /> </swiper-slide>
    		<swiper-slide><img class="banner-img" src="../assets/banner/6.jpg" /> </swiper-slide>
    		<swiper-slide><img class="banner-img" src="../assets/banner/7.jpg" /> </swiper-slide>
    		Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>

		</div>

	</div>




</template>

<script>
	require('swiper/dist/css/swiper.css');
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		name: 'banner2',
		components: {
			swiper,
			swiperSlide,
		},
		data() {
			return {
				img: [{
						src: 'https://zcp.zhaocaipaipai.com/upload/admin/20200217/ca1618a9bafff03f77114e9d7e4ff531.jpg',
						href: ''
					},
					{
						src: 'https://zcp.zhaocaipaipai.com/upload/admin/20190819/bd7369d4c360cf7f7b8f0f8f3e282be8.jpg',
						href: ''
					}


				],

				swiperOption: {
					pagination: '.swiper-pagination1',
					slidesPerView: 1,
					spaceBetween: 30,
					centeredSlides: false,
					//spaceBetween: 0,
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
						delay: 8000,
						disableOnInteraction: false
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
			swiper() {
				return this.$refs.mySwiper.swiper;
			}
		},
		mounted() {
			this.swiper.slideTo(0, 0, false);
			
		},
		
		methods:{
			
			bannt(){
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
