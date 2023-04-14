<template>
  <router-link to="/person/buycar" tag="div" id="carp">
    <i class="fa fa-cart-plus"></i>
  </router-link>
</template>
<style lang="less" scoped>
@import url("../assets/base.less");
#carp {
  width: 80px;
  height: 80px;
  background-color: @base-color;
  color: #fff;
  font-size: 48px;
  text-align: center;
  position: fixed;
  right: 0;
  top: 35%;
  border-radius: 25% 0 0 25%;
  cursor: pointer;
  i {
    position: relative;
    top: 50%;
    transform: translate(0, -60%);
  }
}
</style>
