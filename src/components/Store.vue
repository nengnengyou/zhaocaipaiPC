<template>
  <div class="product">
    <!-- <div
      class="img"
      :style="{'background': 'url(../assets/images/product.png) no-repeat center center','background-size':'cover'}"
    ></div>-->
    <img class="img" src="../assets/images/product.png" alt />
    <div class="pro-con">
      <p class="title">{{title}}</p>
      <p class="subtitle">{{subtitle}}</p>
      <p class="price">{{price}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {

    }
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
}
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
