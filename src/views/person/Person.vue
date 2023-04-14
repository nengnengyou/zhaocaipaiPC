<template>
  <div id="person" :style="style">
    <!-- <el-breadcrumb class="mianbao" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/person' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>-->
    <div class="person-inner">
      <left-nav></left-nav>
      <router-view class="center2" />
    </div>
  </div>
</template>
<script>
import LeftNav from "@/components/person/LeftNav.vue";
export default {
  name: 'person',
  components: { LeftNav },
  data () {
    return {
      isHome: true,
      style: { 'background-color': '#f5f5f7'},
      userInfo: {}
    }
  },
  created () {
    if (this.$route.name != 'center') {
      this.isHome = false
    } else {
      this.isHome = true
    }
  },
  methods: {
    /* 改变首页状态 */

  },
  watch: {
    isHome (val) {
      if (val) {
        this.style = { 'background-color': '#f5f5f7' }
      } else {
        this.style = { 'background-color': '#fff' }
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    if (to.name != 'center') {
      this.isHome = false
    } else {
      this.isHome = true
    }
    next()
  },
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
#person {
  padding-top: 44px;
  padding-bottom: 20px;
  // background-color: #f5f5f7;
  background-color: #fff;
  transition: all 0.3s;
}
.person-inner {
  width: @conent-width;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.center2 {
  width: 982px;
  text-align: left;
}
.mianbao {
  width: @conent-width;
  margin: 0 auto;
  padding-bottom: 15px;
}
</style>
