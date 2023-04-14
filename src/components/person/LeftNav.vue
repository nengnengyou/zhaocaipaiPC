<template>
  <div class="left-nav">
    <el-card class="box-card">
      <div slot="header" class="clearfloat">
        <router-link tag="div" to="/person" class="title">个人中心</router-link>
      </div>

      <div class="body">
        <p class="subtitle">我的钱包</p>
        <router-link tag="div" to="/person/wallet/balance" class="text item">钱包余额</router-link>
        <router-link tag="div" to="/person/wallet/pledge" class="text item">保证金</router-link>
        <router-link tag="div" to="/person/wallet/zhaocai" class="text item">招财币</router-link>
        <router-link tag="div" to="/person/wallet/log" class="text item">钱包明细</router-link>
        <router-link tag="div" to="/person/wallet/xiugaisj" class="text item">修改手机号</router-link>
        <router-link tag="div" to="/person/wallet/xiugaimima" class="text item">修改登录密码</router-link>
		<router-link tag="div" to="/person/wallet/xiugai" class="text item">修改支付密码</router-link>
		<router-link tag="div" to="/person/wallet/xiugaidiqu" class="text item">修改资料</router-link>
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">我的收藏</p>
        <router-link tag="div" to="/person/collect/pai" class="text item">竞拍收藏</router-link>
        <!-- <router-link tag="div" to="/person/collect/buy" class="text item">买车收藏</router-link>
        <router-link tag="div" to="/person/collect/good" class="text item">商品收藏</router-link> -->
        <div class="line"></div>
      </div>
	  <div class="body">
	    <p class="subtitle">我的竞拍</p>
	    <router-link tag="div" to="/person/myauction" class="text item">竞拍记录</router-link>
	    <router-link tag="div" to="/person/mypaiwu" class="text item">拍物记录</router-link>
	    <div class="line"></div>
	  </div>
      <div class="body">
        <p class="subtitle">我的店铺</p>
        <router-link tag="div" to="/person/design" class="text item">新建商品</router-link>
        <router-link tag="div" to="/person/designmanage" class="text item">商品管理</router-link>
        <router-link tag="div" to="/person/designdata" class="text item">商铺资料</router-link>
        <!-- <div class="text item">担保服务</div> -->
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">尊享服务</p>
        <router-link tag="div" to="/person/service" class="text item">购买服务</router-link>
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">我的分享</p>
        <router-link tag="div" to="/person/share" class="text item">分享战绩</router-link>
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">物流服务</p>
        <router-link tag="div" to="/person/logistics" class="text item">托运记录</router-link>
        <div class="line"></div>
      </div>
      
      <div class="body">
        <p class="subtitle">查询记录</p>
        <router-link tag="div" to="/person/ServeLsit" class="text item">查询记录</router-link>
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">我的订单</p>
        <router-link tag="div" to="/person/order/all" class="text item">全部订单</router-link>
        <router-link tag="div" to="/person/order/waitpay" class="text item">待付款</router-link>
        <router-link tag="div" to="/person/order/deliver" class="text item">待发货</router-link>
        <router-link tag="div" to="/person/order/take" class="text item">待收货</router-link>
        <router-link tag="div" to="/person/order/mark" class="text item">待评价</router-link>
        <router-link tag="div" to="/person/order/over" class="text item">已完成</router-link>
        <router-link tag="div" to="/person/order/retur" class="text item">退货/退款</router-link>
        <!--        <router-link tag="div" to="/person/ServeLsit" class="text item">查询记录</router-link>-->
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">购物车</p>
        <router-link tag="div" to="/person/buycar" class="text item">购物车</router-link>
        <div class="line"></div>
      </div>
      <div class="body">
        <p class="subtitle">我的地址</p>
        <router-link tag="div" to="/person/address" class="text item">地址管理</router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'left-nav'
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
.left-nav {
  width: 186px;
  /*font-family: PingFangSC-Semibold!important;*/

}
.box-card {
  text-align: left;
  .body {
    padding: 15px 0;
    position: relative;
  }
  .body:first-of-type {
    padding-top: 0;
  }
  .body:last-of-type {
    padding-bottom: 0;
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #f5f5f5;
    position: absolute;
    left: -30px;
    bottom: 0px;
    width: 186px;
  }
}

.title {
  font-size: 18px;
  font-weight: 400;
  /*color: rgba(51, 133, 255, 1);*/
  color: #15a0f1;
  // line-height:77px;
  cursor: pointer;
}
.subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  // line-height: 55px;
  padding-bottom: 10px;
}
.text:hover {
  color: @base-color;
}
.text.router-link-exact-active {
  color: @base-color;
}
.text {
  cursor: pointer;

  font-size: 14px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  // line-height: 94px;
  padding: 5px 0;
}

/deep/ .el-card__header,
/deep/ .el-card__body {
  padding-left: 30px;
}
</style>
