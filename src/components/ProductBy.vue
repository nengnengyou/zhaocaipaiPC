<template>
  <div class="product-by">
    <!-- <div
      class="img"
      :style="{'background': 'url(../assets/images/product.png) no-repeat center center','background-size':'cover'}"
    ></div>-->
    <img class="img" :src="imgsrc" alt />
    <div class="pro-con">
      <p class="title">{{title}}</p>
      <p class="price">{{price}}</p>
      <!-- <div class="pro-action">
        <a class="cart">加入购物车</a>
        <a class="buy">立即购买</a>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'product-by',
  data () {
    return {

    }
  },
  props: {
    title: String,
    price: String,
    imgsrc: String
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/base.less");
.product-by {
  width: 285px;
  height: 331px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
  cursor: pointer;
  transition: all 0.5s;
}
.product-by:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -5px);
}
.img {
  height: 185px;
  width: 100%;
}
.pro-con {
  height: 125px;
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
    display: inline-block;
    width: 255px;
    height: 50px;
    overflow: hidden;
    font-size: 23px;
    font-weight: 400;
    color: rgba(73, 80, 86, 1);
  }

  .price {
    display: inline-block;
    height: 19px;
    width: 255px;
    font-size: 23px;
    font-weight: 400;
    color: rgba(232, 64, 42, 1);
    text-align: right;
  }

  .pro-action {
    display: flex;
    justify-content: space-between;
    a {
      cursor: pointer;
    }
  }

  .cart {
    font-size: 20px;
    display: inline-block;
    width: 120px;
    height: 29px;
    border: 1px solid @base-color;
    border-radius: 4px;

    color: @base-color;
    line-height: 29px;
  }
  .buy {
    display: inline-block;
    width: 120px;
    height: 29px;
    background: @base-color;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    line-height: 29px;
  }
}
</style>
