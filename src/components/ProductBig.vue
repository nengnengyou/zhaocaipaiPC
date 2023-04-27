<template>
  <div class="product-big">
    <!-- <div
      class="img"
      :style="{'background': 'url(../assets/images/product.png) no-repeat center center','background-size':'cover'}"
    ></div>-->
    <div class="img-box">
      <img
        v-if="imgsrc"
        class="img"
        :src="imgsrc"
        style="object-fit: contain"
      />
      <img
        v-if="!imgsrc"
        class="img"
        src="../assets/images/zanwutupian.png"
        style="object-fit: contain"
      />
    </div>
    <div
      class="pro-con"
      :style="
        isPai ? { 'padding-bottom': '0px' } : { 'padding-bottom': '12px' }
      "
    >
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
      <p v-if="isPai" class="pai-price">
        起拍价
        <span style="color:red">{{ price }}</span>
      </p>
      <p v-if="!isPai" class="pai-price">
        <!-- <span style="color:red;font-size:23px;">{{price}}</span> -->
      </p>
      <!-- <p class="price">{{price}}</p> -->
      <div v-if="isPai" class="jingpai-line">
        <span class="pai-tag" v-if="isCarsShow(end_time)">竞拍中</span>
        <span class="pai-tag" v-else>竞拍结束</span>
        <span class="pai-time" v-if="isCarsShow(end_time)">
          剩余
          <span style="color:red">{{ countTime(end_time)[0] }}</span
          >天 <span style="color:red">{{ countTime(end_time)[1] }}</span
          >时 <span style="color:red">{{ countTime(end_time)[2] }}</span
          >分 <span style="color:red">{{ countTime(end_time)[3] }}</span
          >秒
        </span>

        <span v-else>
          剩余
          <span style="color:red">0</span>天 <span style="color:red">0</span>时
          <span style="color:red">0</span>分 <span style="color:red">0</span>秒
        </span>
      </div>
    </div>
    <span v-show="false">{{ refresh }}</span>
  </div>
</template>
<script>
export default {
  name: "product-big",
  data() {
    return {
      refresh: false,
    };
  },
  created() {
    /* 刷新计时器 */
    setInterval(() => {
      this.refresh = !this.refresh;
    }, 1000);
  },
  methods: {
    isCarsShow(time) {
      console.log(time);
      let currentTime = Date.parse(new Date());
      currentTime = currentTime / 1000;
      return currentTime < time;
    },

    countTime(time, nowTimea) {
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
        var h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        var m = Math.floor((leftTime / 1000 / 60) % 60);
        var s = Math.floor((leftTime / 1000) % 60);
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
      return [d, h, m, s];
    },
  },
  props: {
    title: String,
    subtitle: String,
    price: String,
    imgsrc: String,
    isPai: {
      type: Boolean,
      default: true,
    },
    end_time: Number,
  },
};
</script>
<style lang="less" scoped>
.product-big {
  width: 285px;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  cursor: pointer;
  transition: all 0.5s;
}
.product-big:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -5px);
}
.img,
.img-box {
  height: 192px;
  width: 100%;
  background-color: #f0f0f0;
}
.pro-con {
  height: 128px;
  padding: 12px 12px 0px 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    margin: 0;
    text-align: left;
  }
  .title {
    color: #495056;
    font-size: 20px;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
  }
  .subtitle {
    color: #999999;
    font-size: 16px;
  }
  .price {
    color: #e8402a;
    font-size: 16px;
  }

  .jingpai-line {
    display: flex;
    justify-content: space-between;
    .pai-tag {
      width: 78px;
      height: 35px;
      background: rgba(51, 133, 255, 1);
      border-radius: 5px;
      position: relative;
      bottom: 4px;
      left: -12px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 35px;
    }
    .pai-time {
      font-size: 16px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 26px;
    }
  }
}
</style>
