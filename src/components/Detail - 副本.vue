<template>
  <div class="detail">
    <!-- 确认地址弹出框 -->
    <el-dialog title="确认订单" :visible.sync="centerDialogVisible" :before-close="close" width="55%">
      <out-modal :goodid="$route.query.id" :spec="spec" :goodCount="goodCount" @close="close"></out-modal>
    </el-dialog>
    <!-- 查询维保 弹出框 -->
    <Query
      :title="info.title"
      :plate="info.plate"
      :type="info.type"
      :engine="info.engine"
      :frame="info.frame"
      @close="dialogVisible = false"
      :dialogVisible="dialogVisible"
    />
    <div class="detail-inner">
      <div class="detail-top">
        <div class="detile-left">
          <div class="bigPic">
            <img :src="bigImg" alt style="object-fit: contain" />
            <!-- <pic-zoom class="big-img" :url="bigImg"></pic-zoom> -->
          </div>
          <!-- 小兔滚动 -->
          <div v-if="isType=='buy'" class="smallPic">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in buycarInfo.img" :key="index">
                <div class="small-inner">
                  <img
                    class="small-img-self"
                    :class="{ active:index == num }"
                    :src="item"
                    alt
                    @click="imgPlus(index)"
                  />
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
          <!-- 小兔滚动 -->
          <div v-if="isType=='pai'" class="smallPic">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in carInfo.car_pic_url" :key="index">
                <div class="small-inner">
                  <img
                    class="small-img-self"
                    :class="{ active:index == num }"
                    :src="item"
                    alt
                    style="object-fit: contain"
                    @click="imgPlus(index)"
                  />
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
          <!-- 小兔滚动 -->
          <div v-if="isType=='zhao'" class="smallPic">
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in goodInfo.banner" :key="index">
                <div class="small-inner">
                  <img
                    class="small-img-self"
                    :class="{ active:index == num }"
                    :src="item"
                    alt
                    @click="imgPlusZhao(index)"
                  />
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
        </div>

        <div
          class="detile-right"
          :style="isType == 'buy'?{'padding-bottom':'90px'}:{'padding-bottom':'0px'}"
        >
          <p v-if="isType=='pai'" class="title">{{carInfo.title}}</p>
          <p v-if="isType=='zhao'" class="title">{{goodInfo.title}}</p>
          <div class="option">
            <!-- <button class="option-btn">投诉</button> -->
            <!-- 拍卖时间 -->
            <span v-if="isType=='pai'" class="pai-tag">剩余时间</span>
            <span v-if="isType=='pai'" class="pai-time">
              剩余
              <span style="color:red">{{countTime(carInfo.end_time)[0]}}</span>天
              <span style="color:red">{{countTime(carInfo.end_time)[1]}}</span>时
              <span style="color:red">{{countTime(carInfo.end_time)[2]}}</span>分
              <span style="color:red">{{countTime(carInfo.end_time)[3]}}</span>秒
            </span>
            <button
              v-if="!carInfo.is_collection&&isType == 'pai'"
              @click="collection(1)"
              class="option-btn"
            >收藏</button>
            <button
              v-if="carInfo.is_collection&&isType == 'pai'"
              @click="collection(0)"
              class="option-btn"
            >取消收藏</button>
            <button
              v-if="!buycarInfo.like_num&&isType == 'buy'"
              @click="collectionBuy(1)"
              class="option-btn"
            >收藏</button>
            <button
              v-if="buycarInfo.like_num&&isType == 'buy'"
              @click="collectionBuy(0)"
              class="option-btn"
            >取消收藏</button>
            <!-- <button v-if="isType == 'zhao'" @click="collectionZhao(1)" class="option-btn">收藏</button>
            <button v-if="isType == 'zhao'" @click="collectionZhao(0)" class="option-btn">取消收藏</button>-->
          </div>
          <div v-if="isType!='zhao'" class="info">
            <div class="item">
              <span class="top">{{carInfo.get_card_time || buycarInfo.card_time}}</span>
              <span class="bottom">上牌时间</span>
            </div>
            <span class="shu"></span>
            <div class="item">
              <span class="top">{{carInfo.mileage_number || buycarInfo.mileage}}</span>
              <span class="bottom">表显里程</span>
            </div>
            <span class="shu"></span>
            <div class="item">
              <span class="top">{{carInfo.car_place_name || buycarInfo.ascription}}</span>
              <span class="bottom">停放地</span>
            </div>
            <span class="shu"></span>
            <div v-if="!isType=='pai'" class="item">
              <span class="top">2.0L</span>
              <span class="bottom">排量</span>
            </div>
          </div>
          <div v-if="isType=='zhao'" class="price">
            <span class="price-title">价格：&nbsp;&nbsp;&nbsp;</span>
            <span class="price-con">
              ￥
              <span style="font-size:28px;">{{goodInfo.showprice}}</span>
              <span style="font-size:18px;">元</span>
            </span>
          </div>
		  
         <!-- <div v-if="isType=='zhao'" class="fenlei" :key="index" v-for="(item,index) in specs">
            <span class="title">{{"规格"}}：&nbsp;&nbsp;&nbsp;</span>
            <div class="fenlei-item" >
              <el-radio-group v-model="spec[index]" size="mini">
                <el-radio
                  :key="element.id"
                  v-for="element in item.list"
                  :label="element.id"
                  border
                >{{element.attr_value}}</el-radio>
              </el-radio-group>
            </div>
          </div> -->
		  
		  <div v-if="isType=='zhao'" class="fenlei" :key="index" >
		    <span style="line-height: 36px;" class="title">{{"规格"}}：&nbsp;&nbsp;&nbsp;</span>
		    <div class="fenlei-item" >		
					<!-- <div v-if="specs.length==0"></div> -->
				<el-radio-group v-model="spec"  size="mini">
					
					<el-radio style="line-height: 10px;" v-if="specs[0]==''"					 				  
					  label="官方标准"
					  border
					></el-radio>
					
		        <el-radio style="line-height: 10px;" v-if="!(specs[0]=='')"
		          :key="index"
		          v-for="(item,index) in specs"
		          :label="item"
		          border
		        ></el-radio>
		      </el-radio-group>
		    </div>
		  </div>
		  
		  
          <div v-if="isType=='buy'" class="price">
            <span class="price-title">一口价：&nbsp;&nbsp;&nbsp;</span>
            <span class="price-con">
              ￥
              <span style="font-size:28px;">{{buycarInfo.pay_num}}</span>
            </span>
          </div>

          <div v-if="isType=='pai'&&carInfo.start_price" class="price">
            <span class="price-title">起拍价：&nbsp;&nbsp;&nbsp;</span>
            <span class="price-con">
              ￥
              <span style="font-size:28px;">{{carInfo.start_price}}</span>
              <span style="font-size:18px;">元</span>
            </span>
          </div>
          <!-- <div v-if="isType=='pai'" class="price">
            <span class="price-title">当前价格：</span>
            <span class="price-con">
              ￥
              <span style="font-size:28px;">9.9</span>
              <span style="font-size:18px;">元</span>
            </span>
          </div>-->
          <div v-if="isType=='zhao'" class="price">
            <span class="price-title">商品数量：</span>&nbsp;&nbsp;&nbsp;
            <el-input-number v-model="goodCount" :min="1" :step="1" :max="10000000" label="描述文字"></el-input-number>
          </div>
          <div v-if="isType=='pai'" class="price">
            <span class="price-title">出价：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-input-number v-model="chujia" :min="100" :step="100" :max="10000000" label="描述文字"></el-input-number>
            <p class="alert">*价格增幅为100.00元</p>
          </div>
          <button v-if="isType=='buy'" class="tle-button">电话咨询：{{buycarInfo.shop_info.mobile}}</button>
          <div style="width: 100%">
            <button v-if="isType=='pai'" @click="biddingAdd" class="chujia-button">确认出价</button>
            <a target="_blank" v-if="(isType=='pai' && carInfo.check_report_path != '')" :href="carInfo.check_report_path" class="chujia-button report-path" style="text-align: center;display: inline-block;margin-left: 10px">查看检验报告</a>
          </div>
          <div v-if="isType=='pai'" class="pai-btn-group">
            <button tag="button" @click="toGujia" class="kuaishu-button">快速估价</button>
            <button class="weibao-button" @click="weibao">查询维保</button>
            <button class="weizhang-button" @click="weizhang">查询违章</button>
          </div>
          <div v-if="isType=='zhao'" class="pai-btn-group">
            <button class="kuaishu-button" @click="addCart">加入购物车</button>
            <button @click="nowBuy" class="weibao-button">立即购买</button>
          </div>
          <div v-if="isType=='buy'" class="store-info">
            <i class="store-icon fa fa-credit-card"></i>
            <router-link
              :to="'/buystoredetail?id='+buycarInfo.shop_info.id"
            >{{buycarInfo.shop_info.shop_name}}</router-link>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="detail-content">
        <div v-if="isType=='buy'" class="dc-title">基本信息</div>
        <div v-if="isType=='buy'" class="dc-hart">
          <p class="dc-hart-p">
            <span class="ge">归属地：{{buycarInfo.ascription}}</span>
            年检到期：{{buycarInfo.year_end_time}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">强险到期：{{buycarInfo.force_end_time}}</span>
            排放标准：{{buycarInfo.paifang}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">车辆属性：{{buycarInfo.attribute}}</span>
            车辆颜色：{{buycarInfo.color}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">排量/变速：{{buycarInfo.pailiang}}</span>
            所在城市：{{buycarInfo.city}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">能否过户：{{buycarInfo.transfer== 1?'是':'否'}}</span>
          </p>
          <p class="dc-hart-p"></p>
        </div>
        <div v-if="isType=='pai'" class="dc-title">基本信息</div>
        <div v-if="isType=='pai'" class="dc-hart">
          <p class="dc-hart-p">
            <span class="ge">车辆编号：{{carInfo.car_sn}}</span>
            品牌信息：{{carInfo.brand_info}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">车辆停放地：{{carInfo.car_place_name}}</span>

            发动机号：{{carInfo.engine_number}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">车架号：{{carInfo.frame_number}}</span>
            车牌号：{{carInfo.car_number}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">车辆颜色：{{carInfo.car_color}}</span>
            车辆类型：{{carInfo.car_type_text}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">是否有行驶证：{{carInfo.is_driving_license }}</span>
            是否过户：{{carInfo.is_change }}
          </p>
          <p class="dc-hart-p">
            <span class="ge">是否有钥匙：{{carInfo.is_key }}</span>
            是否正常启动：{{carInfo.is_normal }}
          </p>
          <p class="dc-hart-p"></p>
        </div>
        <div v-if="isType=='pai'" class="dc-title">交付资料</div>
        <div v-if="isType=='pai'" class="dc-hart">
          <p class="dc-hart-p">
            <span class="ge">车辆登记证书：{{carInfo.is_registration_cert }}</span>
            结清证明：{{carInfo.is_settlement_proof}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">解压委托书：{{carInfo.is_decompression_letter }}</span>
            营业执照：{{carInfo.is_business_license}}
          </p>
          <p class="dc-hart-p">
            <span class="ge">车辆抵押登记申请表：{{carInfo.is_mortgage }}</span>
            债权转让协议：{{carInfo.is_transfer_agreement}}
          </p>
        </div>
        <div v-if="isType=='pai'" class="dc-title">备注信息</div>
        <div v-if="isType=='pai'" class="dc-hart">
          <p v-if="carInfo.note" class="dc-hart-p">{{carInfo.note}}</p>
          <p v-if="!carInfo.note" class="dc-hart-p">暂无数据</p>
        </div>
        <div v-if="isType=='pai'" class="dc-title">车辆图片</div>
        <div v-if="isType=='zhao'" class="dc-title">
          <span style="cursor: pointer;" @click="baseInfo(true)">基本信息</span> |
          <span style="cursor: pointer;" @click="baseInfo(false)">商品评价</span>
        </div>
        <!-- 基本信息 -->
        <div v-if="isType=='zhao' && baseShow" class="dc-hart">
          <p style="text-align:left" v-html="goodInfo.content"></p>
        </div>
        <!-- 评论 -->
        <div v-if="isType=='zhao' && !baseShow" class="dc-hart">
          <p style="text-align:left">{{goodCommits == '[]' || '本商品暂无评价'}}</p>
          <div v-for="item in goodCommits" :key="item.id" class="commit">
            <div class="avatar fl">
              <img :src="item.img[0]" alt />
            </div>
            <div class="right fr">
              <p class="title">{{item.user_nickname || item.mobile}}</p>
              <p class="content">{{item.msg}}</p>
            </div>
          </div>
        </div>
        <div v-if="isType=='pai'" class="dc-hart" id="images">
          <img
            v-for="(item,index) in carInfo.car_pic_url"
            :key="index"
            :src="item"
            style="width:100%;margin-bottom:15px"
            @click="showBigImg(item, index)"
            alt
          />
        </div>
      </div>
    </div>
    <!-- shuaxindom -->
    <!-- <span v-show="false">{{refresh}}</span> -->
<!--    图片放大-->

<!--    <div class="imgViewDom" ref="imgViewDom" @click="hideBigImg">-->
<!--      <img id="image" :src="bigImgData" alt="" class="imgViewDom-img" ref="imgViewDomImg">-->
<!--    </div>-->



  </div>
</template>

<script>
import PicZoom from 'vue-piczoom'
import vueSeamlessScroll from 'vue-seamless-scroll'
import Query from '@/components/Query.vue'
import outModal from '@/components/outModal.vue'
import Viewer from 'viewerjs'

import 'viewerjs/dist/viewer.css'
// Vue.use(Viewer);



export default {
  name: 'detail',
  components: {
    PicZoom, vueSeamlessScroll, Query, outModal
  },
  props: {
    isType: {
      type: String,
      default: 'pai'
    },
    carInfo: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      /* 图片放大*/
      bigImgData: '',
      refresh: true,
      /* swiper 配置 */
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: -100,
        slidesPerView: 4,
        slidesPerGroup: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      index: '',
      buycarInfo: {},
      goodInfo: {},
      goodCommits: [],
      radio4: '1',
      num: 0,
      info: {
        title: '',
        plate: '',
        type: '',
        engine: '',
        frame: ''
      },
      payType: '',
      specs: [],
      spec: [],
      bigImg: '',
      chujia: 100,
      goodCount: 1,
      dialogVisible: false,
      baseShow: true,
      show: false,
      centerDialogVisible: false
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.bigImg = this.carInfo.car_pic_url[0]
    // }, 500);
    /* 刷新计时器 */
    setInterval(() => {
      this.refresh = !this.refresh
    }, 1000);
    /* 招财生活详情 */
    if (this.isType == 'zhao') {
      this.getGoodsDetail()
      this.getCommentList()
    }
    if (this.isType == 'buy') {
      this.carInfo()
    }

  },
  methods: {
    /* 排车 */
    carInfo () {
      let params = {
        car_id: this.$route.query.id
      }
      this.$api.carInfo(params).then(res => {
        this.buycarInfo = res.data
        this.bigImg = res.data.img[0]
        console.log(JSON.stringify(res) + "111111")
      })
    },
    addCart () {
      /* 倒序,不要问为什么，问后端 */
      this.spec.reverse()
      let params = {
        goods_id: this.$route.query.id,
        spec_str: this.spec.join('_') + '_',
        num: this.goodCount
      }
      this.$api.addCart(params).then(res => {
        this.$message.success(res.msg)
      })
    },
    close () {
      this.centerDialogVisible = false;
    },
    nowBuy () {
		if(this.spec.length==0){
			this.$message.error("请选择规格!")
		}else{
			this.centerDialogVisible = true
		}
    },
    /*查看检验报告*/
    reportPath() {

    },

    /* 商品评价 */
    getCommentList () {
      let params = {
        goods_id: this.$route.query.id
      }
      this.$api.getCommentList(params).then(res => {
        this.goodCommits = res.data
      })
    },
    baseInfo (state) {
      this.baseShow = state
    },
    /* 商品规格 */
    getGoodsSpec (id) {
      let params = {
        goods_id: id
      }
      this.$api.getGoodsSpec(params).then(res => {
        this.specs = res.data
      })
    },
    getGoodsDetail () {
      let params = {
        id: this.$route.query.id
      }
      this.$api.getGoodsDetail(params).then(res => {
        this.goodInfo = res.data
        this.bigImg = res.data.banner[0]
        /* 获取规格ID */
        this.getGoodsSpec(res.data.id)
      })
    },
    /* 违章 */
    weizhang () {
      this.info = {
        title: '查看违章',
        plate: this.carInfo.car_number,
        type: 0,
        engine: this.carInfo.engine_number,
        frame: this.carInfo.frame_number
      }
      this.dialogVisible = true
    },
    /* 查看维保 */
    weibao () {
      this.info = {
        title: '查看维保',
        plate: this.carInfo.car_number,
        type: 1,
        engine: this.carInfo.engine_number,
        frame: this.carInfo.frame_number
      }
      this.dialogVisible = true
    },
    /* 估价 */
    toGujia () {
      window.open('https://che300.com/partner/zcp', '_blank');
    },
    /* 收藏paiche */
    collection (state) {
      this.$api.addUserFav({ cid: this.$route.query.id }).then(res => {
        this.carInfo.is_collection = state
      })
    },
    /* 收藏车 */
    collectionBuy (state) {
      let params = {
        car_id: this.$route.query.id
      }
      if (state) {
        this.$api.carLike(params).then(res => {
          this.buycarInfo.like_num = state
        })
      } else {
        this.$api.carNoLike(params).then(res => {
          this.buycarInfo.like_num = state
        })
      }

    },
    /* 商品收藏 */
    collectionZhao (state) {
      this.$message('暂未开发')
    },
    imgPlus (index) {
      this.num = index
      console.log(this.num)
      if(this.isType == "buy") {
        console.log(this.carInfo)
        this.bigImg = this.buycarInfo.img[index]
      }else {
        this.bigImg = this.carInfo.car_pic_url[index]
      }

    },
    imgPlusZhao (index) {
      this.num = index
      this.bigImg = this.goodInfo.banner[index]
    },
    /* 开始竞价 */
    biddingAdd () {
       let params = {
         auction_car_id: this.carInfo.id,
         money: this.chujia
       }
       this.$api.biddingAdd(params).then(res => {
         this.$message.success(res.msg)
       })
    },
    countTime (time, nowTimea) {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var end = time * 1000;
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        var m = Math.floor(leftTime / 1000 / 60 % 60);
        var s = Math.floor(leftTime / 1000 % 60);
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
      return ([d, h, m, s])
    },
    showBigImg (url, index) {
      console.log(url + "当前第" + index + "张")
      // let imgSrc = this.$refs.imgViewDom;
      // imgSrc.style.display = "block";
      // console.log(imgSrc);
      this.bigImgData = url;
      const gallery = new Viewer(document.getElementById('images'), {
        title:false  //不显示图片标题
      });
    }
  },
  created() {

  }

}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");

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

.imgViewDom-img {
  width: 1000px;
  height: 800px;
  text-align: center;
  vertical-align: middle;
  margin-top: 5%;
}

/* 评论 */

.commit {
  height: 100px;
  background-color: #fff;
  .avatar,
  .avatar img {
    width: 50px;
    height: 50px;
  }
  .right {
  }
}
.smallPic {
  position: relative;
  height: 118px;
  width: 600px;
  margin-top: 20px;
}
.detail {
  padding-top: 115px;
  background-color: #f5f5f7;
}
.detail-inner {
  width: @conent-width;
  margin: 0 auto;
}

.active {
  border: 2px solid @base-color;
}

.detail-top {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 513px;
  // padding-bottom: 25px;

  .store-info {
    text-align: left;
  }
  .store-icon {
    font-size: 32px;
    padding-right: 16px;
  }
  .title {
    font-size: 24px;
    color: rgba(51, 51, 51, 1);
    // line-height: 90px;
  }

  .option-btn {
    cursor: pointer;
    width: 110px;
    height: 42px;
    border: 1px solid @base-color;
    border-radius: 21px;
    // background-color: #fff;
    background-color: rgba(0, 0, 0, 0);
    font-size: 20px;
    color: @base-color;
    line-height: 36px;
    float: right;
  }
  .detile-right {
    text-align: left;
    box-sizing: border-box;
    height: 100%;
    width: 550px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    /* 竞拍信息 */
    .alert {
      padding-top: 8px;
      padding-left: 130px;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(213, 38, 38, 1);
    }
    .pai-tag {
      width: 110px;
      height: 42px;
      background: rgba(51, 133, 255, 1);
      border-radius: 0px 21px 21px 0px;
      display: inline-block;
      text-align: center;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      line-height: 42px;

      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .pai-time {
      font-size: 16px;
      font-weight: 400;
      color: #333333;
      line-height: 26px;

      font-size: 22px;
      font-weight: 400;
    }
  }

  /* 商品分类 */
  .fenlei {
    .title {
      float: left;
      font-size: 20px;
      color: rgba(51, 51, 51, 1);
      // line-height: 90px;
      padding-right: 20px;
    }
    .fenlei-item {
      width: 400px;
      float: left;
      /deep/ .el-radio {
        text-align: center !important;
      }
      /deep/ .el-radio.is-bordered.is-checked {
        border-color: #3385ff;

        height: 40px;
        border: 1px solid rgba(51, 133, 255, 1);
        border-radius: 10px;
        margin-bottom: 10px;
        margin-right: 20px;
        margin-left: 0px;
		 
      }
      /deep/ .el-radio__input.is-checked + .el-radio__label {
        /* width: 68px; */
        /* height: 22px; */
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(51, 133, 255, 1);
        /* line-height: 90px; */
        line-height: 25px;
      }
      /deep/ .el-radio__input.is-checked .el-radio__inner {
        display: none;
      }

      /* 为选中 */
      /deep/ .el-radio.is-bordered {
        border-color: #9c9c9c;

        height: 40px;
        margin-bottom: 10px;
        border: 1px solid #9c9c9c;
        margin-left: 0px;
        margin-right: 20px;
        border-radius: 10px;
      }
      /deep/ .el-radio__input + .el-radio__label {
        /* width: 68px; */
        /* height: 22px; */
        font-size: 20px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #9c9c9c;

        /* line-height: 90px; */
        line-height: 25px;
      }
      /deep/ .el-radio__input .el-radio__inner {
        display: none;
      }
    }
  }
  .info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .item {
      text-align: center;
      padding: 0 20px;
      display: inline-block;
      span {
        display: block;
      }
      // flex-flow: column wrap;
      // justify-content: space-between;
    }
    .item:first-of-type {
      padding-left: 0px;
    }
    .item:last-of-type {
      padding-right: 0px;
    }
    .top {
      font-size: 20px;
      color: rgba(51, 51, 51, 1);
      padding-bottom: 10px;
    }
    .bottom {
      font-size: 18px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
  }
  .price {
    text-align: left;
  }
  .price-title {
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    // line-height: 90px;
    padding-right: 20px;
  }
  .price-con {
    font-size: 20px;
    color: #db0f0f;
    // line-height: 90px;
    padding-right: 20px;
  }
  /* 竞拍按钮 */
  .chujia-button {
    cursor: pointer;
    width: 210px;
    height: 51px;
    background: rgba(241, 81, 54, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 10px;
    line-height: 45px;
    font-size: 22px;
    color: rgba(255, 255, 255, 1);
  }
  .report-path {
    text-decoration: none;
    background-color: #fb7061;
    box-sizing: border-box;
    padding: 1px;
  }

  .kuaishu-button,
  .weibao-button,
  .weizhang-button {
    cursor: pointer;
    width: 159px;
    height: 51px;
    background: rgba(252, 137, 76, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 10px;
    font-size: 22px;
    color: rgba(255, 255, 255, 1);
    line-height: 45px;
    margin-right: 10px;
  }
  .weibao-button {
    background: #fb7061;
  }
  .weizhang-button {
    background: #fa9834;
  }

  .tle-button {
    // width: 210px;
    height: 51px;
    background: @base-color;
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 10px;

    font-size: 22px;
    color: rgba(255, 255, 255, 1);
    // line-height:90px;
  }

  .store-info {
    a {
      font-size: 25px;
      font-weight: 400;
      text-decoration: underline;
      color: rgba(51, 51, 51, 1);
    }
  }
}

/* content */
.detail-content {
  .dc-title {
    width: 100%;
    height: 47px;
    background: rgba(51, 133, 255, 1);
    text-align: left;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    line-height: 47px;
    font-size: 22px;
    padding-left: 30px;
  }
  .dc-hart {
    padding: 40px 225px;//114px;
    img {
      width: 100% !important;
      margin-bottom: 15px;
    }
  }
  .dc-hart-p {
    text-align: left;

    font-size: 20px;
    color: rgba(102, 102, 102, 1);
    line-height: 60px;
  }
}

.small-img {
  width: 600px;
  height: 100px;
  overflow: hidden;
  padding-top: 12px;
  padding-right: -16px;
  text-align: left;
}
.small-img-self {
  width: 118px;
  height: 100px;
  margin-right: 16px;
  float: left;
  box-sizing: border-box;
}
.bigPic,
.big-img {
  width: 600px;
  height: 400px;
  background-size: cover;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  /deep/img {
    width: 100%;
    height: 100%;
  }
}
.shu {
  display: inline-block;
  height: 55px;
  background-color: #dcdcdc;
  width: 2px;
}
/* 隔开的 */
.ge {
  display: inline-block;
  width: 600px;
}

.dc-hart {
  /deep/img {
    width: 100% !important;
  }
}
</style>
