<template>
  <div class="auction-home">
    <!-- 同意协议 -->
    <el-dialog
      :close-on-press-escape="false"
      :show-close="false"
      :destroy-on-close="false"
      :close-on-click-modal="false"
      title="阅读协议"
      :visible.sync="centerDialogVisible"
      width="50%"
      center
    >
      <div class="blog-content" v-html="xieyi[0].content"></div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          :disabled="disabled"
          @click="centerDialogVisible = false"
        >{{okText}}</el-button>
      </span>
    </el-dialog>
    <!-- 轮播 -->
    <el-carousel :interval="6000" height="608px">
      <el-carousel-item v-for="item in ads" :key="item">
        <div
          class="ads"
          :style="{'background': 'url('+item+') no-repeat center center','background-size':'cover'}"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播 -->
    <areaa title="实时拍" bgc="#F5F5F7" subtitle="live auctions" v-if="shishi.length">
      <div v-for="item in shishi " :key="item.id" class="pai-card">
        <div class="left-info">
          <p class="title">{{item.title}}</p>
          <span class="count">
            [
            <span style="color:red">{{item.car_num}}</span> 辆]
          </span>
          <div class="content-box">
            <p v-html="item.desc" class="content"></p>
          </div>

          <p class="time" v-if="isCarsShow(item.end_time)">
            {{item.company}}:
            剩余时间
            <span class="timenum">{{countTime(item.end_time)[0]}}</span>天
            <span class="timenum">{{countTime(item.end_time)[1]}}</span>时
            <span class="timenum">{{countTime(item.end_time)[2]}}</span>分
            <span class="timenum">{{countTime(item.end_time)[3]}}</span>秒
          </p>

          <p class="time" v-else>
            {{item.company}}-剩余时间:竞拍已结束
          </p>
        </div>
        <product
          @click.native="toDetail(res.id)"
          class="pro"
          v-for="(res,index) in item.carList"
          v-if="index<=1"
          :key="res.id"
          :imgsrc="res.cover"
          :title="res.title"
          :subtitle="res.brand_info+'丨'+res.car_number"
          :price="res.start_price?res.start_price+'元':''"
        ></product>

        <router-link tag="a" target="_blank" :to="'/auctionhome/auction?id='+item.id" class="right-more">
          <span class="auction-more">查看更多</span>
          <span class="right">></span>
        </router-link>
      </div>
    </areaa>
    <areaa title="预拍" subtitle="Booking auction" v-if="yupai.length">
      <div v-for="item in yupai " :key="item.id" class="pai-card">
        <div class="left-info">
          <p class="title">{{item.title}}</p>
          <span class="count">
            [
            <span style="color:red">{{item.car_num}}</span> 辆]
          </span>
          <div class="content-box">
            <p class="content">{{item.desc}}</p>
          </div>

          <p class="time">
            剩余时间
            <span class="timenum">{{countTime(item.end_time)[0]}}</span>天
            <span class="timenum">{{countTime(item.end_time)[1]}}</span>时
            <span class="timenum">{{countTime(item.end_time)[2]}}</span>分
            <span class="timenum">{{countTime(item.end_time)[3]}}</span>秒
          </p>
        </div>
        <product
          @click.native="toDetail(res.id)"
          class="pro"
          v-for="(res,index) in item.carList"
          v-if="index<=1"
          :key="res.id"
          :imgsrc="res.cover"
          :title="res.title"
          :subtitle="res.get_card_time.substr(0, 4)+'丨'+res.brand_info+'丨'+res.car_number"
          :price="res.start_price+'元'"
        ></product>

        <router-link tag="div" :to="'/auctionhome/auction?id='+item.id" class="right-more">
          <span class="auction-more">查看更多</span>
          <span class="right">></span>
        </router-link>

<!--        <div class="right-more">-->
<!--          <span class="auction-more">查看更多</span>&ndash;&gt;-->
<!--          <span class="right">></span>-->
<!--        </div>-->
      </div>
    </areaa>
    <!-- shuaxindom -->
    <span v-show="false">{{refresh}}</span>
  </div>
</template>

<script>
import Areaa from '@/components/Area.vue'
import Product from '@/components/Product.vue'

export default {
  name: 'auction-home',
  components: { Areaa, Product },
  data () {
    return {
      refresh: true,
      shishi: [],
      ads: [],
      disabled: true,
      centerDialogVisible: false,
      yupai: [],
      dialogVisible: true,
      xieyi: [],
      orderTime: 2,
      okText: '确 定 '
    }
  },
  created () {
    //this.getSessionList1()
	this.getSessionList()
    this.getUseBanner()
    this.getXieyi()
    this.xieyiModel()
    /* 刷新计时器 */
    setInterval(() => {
      this.refresh = !this.refresh
    }, 1000);
  },
  methods: {

    isCarsShow (time) {
      let currentTime = Date.parse(new Date());
      currentTime = currentTime / 1000;
      return currentTime < time
    },

    /* 获取协议 */
    getXieyi () {
      this.$api.getXieyi().then(res => {
        this.xieyi = res.data
      })
    },
    /* 协议框 */
    xieyiModel () {
      this.centerDialogVisible = true
      let time = setInterval(() => {
        this.orderTime -= 1
        this.okText = `确 定 ${this.orderTime}`
        if (!this.orderTime) {
          this.disabled = false
          this.okText = '确 定'
          clearTimeout(time)
        }
      }, 1000);
    },
    /* 获取幻灯片 */
    async getUseBanner () {
      let ads = await this.$api.getUseBanner({ typeid: 4 })
      this.ads = ads.data.map(item => item.image)
    },
    toDetail (id) {
      // this.$router.push(`/auctionhome/auctiondetail?id=${id}`)
      window.open(`/auctionhome/auctiondetail?id=${id}`, '_blank')
    },
    async getSessionList () {
      let res = await this.$api.getSessionList1()
      let resData = res.data;
      res.data.forEach((item, index) => {
         this.$api.getSessionList({ auction_session_id: item.id, type:1 }).then(result => {
          if (item.status_text == '实时拍' || item.status_text == '竞拍结束') {
            item.carList = result.data.data
            // this.shishi.push(item)
            resData[index].carList  = result.data.data;

          }else {
            item.carList = result.data.data
            this.yupai.push(item)
          }
        })
      });
      this.shishi = resData;

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
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.auction-home {
}
.blog-content {
  height: 500px;
  overflow-y: scroll;
}
.ads {
  width: 100%;
  height: 554px;
  background: url("../assets/images/banner.png") no-repeat center center;
  background-size: cover;
}
.pai-card {
  height: 365px;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
}

/* 修改子组件样式 */
.pro {
  display: inline-block;
  width: 299px !important;
  height: 100% !important;
  /deep/ .img-box,
  /deep/ .img {
    width: 100%;
    height: 210px !important;
  }
  /deep/ .pro-con {
    height: 138px !important;
  }
  /deep/ .title {
    font-size: 22px !important;
  }
  /deep/ .subtitle {
    font-size: 17px !important;
  }
  /deep/ .price {
    font-size: 22px !important;
  }
}

.left-info {
  width: 430px;
  height: 100%;
  padding: 20px;
  position: relative;
  text-align: left;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  box-sizing: border-box;
  float: left;
  .title {
    font-size: 34px;
    color: rgba(51, 51, 51, 1);
  }
  .count {
    font-size: 20px;
    color: rgba(102, 102, 102, 1);
    position: absolute;
    top: 54px;
    right: 20px;
    display: inline-block;
    // line-height:35px;
  }
  .content-box {
    width: 100%;
    overflow: hidden;
    height: 195px;
  }
  .content {
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
    top: 46px;
    right: 26px;
  }
  .time {
    font-size: 14px;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 35px;
  }
  .timenum {
    display: inline-block;
    width: 37px;
    height: 42px;
    background: rgba(236, 27, 60, 1);
    border-radius: 10px;
    text-align: center;
    font-size: 26px;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}
.right-more {
  cursor: pointer;
  width: 166px;
  height: 100%;
  background: rgba(51, 133, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  display: inline-block;
  font-size: 23px;
  float: right;
  .auction-more {
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    display: inline-block;
    width: 50px;
    margin-top: 75%;
    margin-left: 20%;
    font-size: 23px;
  }
  .right {
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    display: inline-block;
    width: 50px;
    margin-top: -75%;
  }
}
</style>
