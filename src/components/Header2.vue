<template>
  <div class="header" ref="header">
    <div class="headerr">
      <img src="../assets/images/logo.png" class="logo" />

      <div class="inner">
        <el-menu
          :router="true"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 70px;"
        >
          <!-- <el-menu-item index="/home"><router-link to="/home" class="child-item ">首页</router-link>首页</el-menu-item>
          <el-menu-item index="/buy"><router-link to="/buy" class="child-item ">拍车专场</router-link>拍车专场</el-menu-item>
          <el-menu-item index="/Auction"><router-link to="/Auction" class="child-item ">随手拍物</router-link>随手拍物</el-menu-item>
          <el-menu-item index="/sell"><router-link to="/sell" class="child-item ">商家车源</router-link>商家车源</el-menu-item>
          <el-menu-item index="/life"><router-link to="/life" class="child-item ">配件商城</router-link>配件商城</el-menu-item>
          <el-menu-item index="/service"><router-link to="/service" class="child-item ">常用服务</router-link>常用服务</el-menu-item>
          <el-menu-item v-if="pdlogin" index="reg"><router-link to="/home" class="child-item tow">个人中心</router-link>个人中心</el-menu-item> -->

          <el-menu-item index="/" style="height: 70px;">首页</el-menu-item>
          <!-- <el-menu-item index="/auctionhome" style="height: 70px;">拍车专场</el-menu-item>
          <el-menu-item index="/sell" style="height: 70px;">随手拍物</el-menu-item>
          <el-menu-item index="/buycomm" style="height: 70px;">商家车源</el-menu-item>
          <el-menu-item index="/life" style="height: 70px;">配件商城</el-menu-item>
          <el-menu-item index="/service" style="height: 70px;">常用服务</el-menu-item>
          <el-menu-item v-if="pdlogin" index="/person" style="height: 70px;">个人中心</el-menu-item> -->

          <!-- <el-menu-item v-if="!pdlogin" index="login">登录/注册</el-menu-item> -->
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header2",
  data() {
    return {
      activeIndex: "/",
      pdlogin: true,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    /* //判断是否登录
      judge() {
        var token = localStorage.getItem('token');
        console.log("token");
        console.log(token);

        if (token == null ) {
          console.log("2");

        }else {
          this.pdlogin = "true";
          console.log(token);
        }
      } */

    //判断路由
    /*panduanluyou() {
        this.$router.push('/')
        var name = this.$router.name;
        if (name == '/login') {

        }
      }*/
  },

  mounted() {
    // this.judge();
    this.panduanluyou();
  },
};
</script>
<style>
.header {
  height: 70px;
  min-width: 100%;
  /*max-width: 100%;*/
  /*width: 100%;*/
  background-color: #545c64;
  position: fixed;
  top: 0;
  z-index: 1001;
  color: white;
}

.header .inner {
  float: right;
}

.header .headerr {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 14px;
}

.header .logo {
  float: left;
  cursor: pointer;

  /* margin: 0 0 0 30px;*/
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  height: 70px;
  font-size: 20px;
  line-height: 70px;
}

.buycar:hover > {
  .child {
    display: block;
  }
}

.child {
  display: none;
  color: rgba(51, 133, 255, 1) !important;
  width: 100%;
  position: absolute;
  top: 68px;
  left: 0;
  z-index: 5;
}

.child-item {
  text-decoration: none;
}
</style>
