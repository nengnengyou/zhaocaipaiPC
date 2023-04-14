<template>
  <div class="product">
    <!-- <div
      class="img"
      :style="{'background': 'url(../assets/images/product.png) no-repeat center center','background-size':'cover'}"
    ></div>-->

    <div class="product-content">
      <img class="product-img" src="../assets/images/2.png">
      <div class="pro-con">
        <p class="title" :title="title">{{title}}</p>
        <p class="subtitle">{{subtitle}}</p>
        <p class="price">{{price}}</p>
      </div>
    </div>

    <div class="img-box">

      <img class="img" :src="imgsrc" alt style="object-fit: contain;border: 1px solid #ccc;background-color: #f0f0f0;box-sizing: border-box"/>


      <transition name="el-fade-in-linear">
        <div class="transition-box">
          <a class="hover-ckeck">点击查看</a>
        </div>
      </transition>
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
    // price: String,
    price: Number,
    imgsrc: String
  }
}
</script>
<style lang="less" scoped>
.product {
  width: 372px;
  height: 394px;
  background-color: #ffffff;
  box-shadow: 0 0 14px 2px
  rgba(69, 67, 65, 0.2);
  background: url("../assets/images/1.png") no-repeat;
  box-sizing: border-box;
  border: solid 1px #0096ff;

  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  margin-bottom: 20px;
  .product-content {
    margin-top: 32px;
    position: relative;
    .product-img {
      position: absolute;
      top: 0;
      left: 52px;
    }
    .pro-con {
      height: 200px;
      width: 200px;
      color: white;
      font-size: 12px;
      line-height: 16px;
      position: relative;
      left: 130px;

      .title {
        height: auto;
      }
    }
  }

}
.product:hover .hover-ckeck {
  display: block;

}

.product:nth-child(2) {
  margin: 0 40px;
}
.product:nth-child(5) {
  margin: 0 40px;
}
.product:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -5px);
}
.img-box,
.img {
  width: 100%;
  height: 257px;
  background-color: #ccc;
  box-sizing: border-box;
  border: solid 1px #d8d8d8;
  position: absolute;
  bottom: 0;
  left: 0;
  .hover-ckeck {
    display: none;
    /*display: block;*/
    width: 123px;
    height: 33px;
    background-color: #fd8129;
    color: white;
    line-height: 33px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all 0.5s;
  }

}
/*.pro-con {*/
/*  height: 102px;*/
/*  padding: 12px;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  flex-wrap: wrap;*/
/*  box-sizing: border-box;*/
/*  justify-content: space-between;*/
/*  p {*/
/*    margin: 0;*/
/*    text-align: left;*/
/*  }*/
/*  .title {*/
/*    color: #495056;*/
/*    font-size: 16px;*/

/*    height: 25px;*/
/*    overflow: hidden;*/
/*  }*/
/*  .subtitle {*/
/*    color: #999999;*/
/*    font-size: 13px;*/
/*  }*/
/*  .price {*/
/*    color: #e8402a;*/
/*    font-size: 18px;*/
/*  }*/
/*}*/
</style>
