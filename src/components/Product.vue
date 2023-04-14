<template>
  <div class="product">
    <!-- <div
      class="img"
      :style="{'background': 'url(../assets/images/product.png) no-repeat center center','background-size':'cover'}"
    ></div>-->
    <div class="img-box">
      <img class="img" :src="imgsrc" alt style="object-fit: contain;border: 1px solid #ccc;background-color: #f0f0f0;box-sizing: border-box"/>
    </div>
    <div class="pro-con">
      <p class="title">{{title}}</p>
      <p class="subtitle">{{subtitle}}</p>
      <p class="price">{{price}}</p>
    </div>
    <span v-show="false">{{refresh}}</span>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      refresh: false
    }
  },
  created () {
    /* 刷新计时器 */
    setInterval(() => {
      this.refresh = !this.refresh
    }, 1000);
  },
  props: {
    title: String,
    subtitle: String,
    price: String,
    imgsrc: String
  }
}
</script>
<style lang="less" scoped>
.product {
  width: 227px;
  height: 256px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  cursor: pointer;
  transition: all 0.5s;
}
.product:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -5px);
}
.img-box,
.img {
  height: 154px;
  width: 100%;
}
.pro-con {
  height: 102px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  p {
    margin: 0;
    text-align: left;
  }
  .title {
    color: #495056;
    font-size: 16px;

    height: 25px;
    overflow: hidden;
  }
  .subtitle {
    color: #999999;
    font-size: 13px;
  }
  .price {
    color: #e8402a;
    font-size: 18px;
  }
}
</style>
