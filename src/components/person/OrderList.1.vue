<template>
  <div class="order-list">
    <el-card class="box-card">
      <div class="order-option">
        <div slot="header" class="header2 clearfloat">
          <span class="title">我的订单</span>
          <router-link
            to="/person/order/all"
            tag="el-button"
            class="option"
            style="float: right; padding: 3px 30px"
            type="text"
          >全部订单 ></router-link>
        </div>
        <div class="option-body">
          <router-link to="/person/order/waitpay" tag="div" class="option-item">
            <i class="icon iconfont icon-daifukuan"></i>
            <span class="intro">待付款</span>
          </router-link>
          <router-link to="/person/order/deliver" tag="div" class="option-item">
            <i class="icon iconfont icon-daifahuo"></i>
            <span class="intro">待发货</span>
          </router-link>
          <router-link to="/person/order/take" tag="div" class="option-item">
            <i class="icon iconfont icon-tubiaolunkuo-"></i>
            <span class="intro">待收货</span>
          </router-link>
          <router-link to="/person/order/mark" tag="div" class="option-item">
            <i class="icon iconfont icon-daipingjia"></i>
            <span class="intro">待评价</span>
          </router-link>
          <router-link to="/person/order/retur" tag="div" class="option-item">
            <i class="icon iconfont icon-shangpinwuliutuihuotuihuishangpin"></i>
            <span class="intro">退货/退款</span>
          </router-link>
        </div>
      </div>
      <div class="history"></div>
    </el-card>
    <el-card class="box-card">
      <div class="order-option">
        <div slot="header" class="header2 clearfloat">
          <span class="title">我的订单</span>
          <router-link
            to="/person/order/all"
            tag="el-button"
            class="option"
            style="float: right; padding: 3px 30px"
            type="text"
          >全部订单 ></router-link>
        </div>
        <div class="option-body his-list">
          <product
            v-for="item in orderList"
            :key="item.id"
            class="pro"
            :imgsrc="item.getOrderDetails[0].img"
            :title="item.getOrderDetails[0].title"
            :price="item.getOrderDetails[0].unit_price+'元'"
          ></product>
        </div>
      </div>
      <div class="history"></div>
    </el-card>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  name: 'order-list',
  components: { Product },
  data () {
    return {
      orderList: []
    }
  },
  created () {
    this.getMyOrder()
  },
  methods: {
    getMyOrder () {
      let params = {
        page: 1
      }
      this.$api.getMyOrder(params).then(res => {
        this.orderList = res.data.data
        this.orderList = this.orderList.slice(0, 9)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
.order-list {
  width: 100%;
  background: rgba(255, 255, 255, 1);
}
.option {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  // line-height: 90px;
}
.title {
  float: left;

  font-size: 22px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  // line-height:90px;
}
.header {
  /*padding-bottom: 35px;*/
  padding-bottom: 14px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

}

/* 修改子组件样式 */
.pro {
  display: inline-block;
  margin-bottom: 20px;
  width: 210px !important;
  height: 100% !important;
  /deep/ .img {
    width: 100%;
    height: 141px !important;
  }
  /deep/ .pro-con {
    height: 95px !important;
  }
  /deep/ .title {
    font-size: 15px !important;
    height: 35px !important;
  }
  /deep/ .subtitle {
    font-size: 13px !important;
  }
  /deep/ .price {
    font-size: 17px !important;
  }
}

.option-body {
  /*padding-left: 20px;*/
  text-align: left;
  .option-item {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    /*padding-right: 90px;*/
    padding-right: 45px;
    padding-left: 45px;
    border-right: 1px solid #eeeeee;
  }
  .option-item:last-child {
    border-right: none;
  }
  .icon {
    font-size: 42px;
    display: block;
    padding-bottom: 20px;
  }
  .intro {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(89, 89, 89, 1);
    // line-height: 83px;
  }
}
.his-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-right: 20px;
  margin-bottom: -20px;
}

/deep/ .el-card__header,
/deep/ .el-card__body {
  // padding: 12px 30px;
}
</style>
