<template>
  <div id="person-center">
    <div class="center-inner">
      <user-info class="user-info"></user-info>
      <order-list class="order-list"></order-list>
      <connect class="connect"></connect>
      <!-- <site-content class="connect"></site-content> -->
    </div>
  </div>
</template>
<script>
import UserInfo from "@/components/person/UserInfo.vue";
import OrderList from "@/components/person/OrderList.vue";
import Connect from "@/components/person/Connect.vue";
import SiteContent from "@/components/person/SiteContent.vue";
export default {
  name: 'person-center',
  components: { UserInfo, OrderList, Connect, SiteContent }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
#person-center {
  // padding-top: 90px;
  // padding-bottom: 20px;
}
.center-inner {
  // width: @conent-width;
  // margin: 0 auto;
}
.order-list {
  width: 750px;
  float: left;
}
.user-info {
  margin-bottom: 18px;
}
.connect {
  width: 212px;
  float: right;
}
.site-connect {
  width: 212px;
  float: right;
  margin-top: 20px;
}
</style>
