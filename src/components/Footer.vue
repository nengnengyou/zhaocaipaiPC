<template>
  <div class="footer">
    <!--    <img class="qr-code" src="../assets/images/ercode.png" />-->
    <!--    <div class="harp"></div>-->
    <!--    <div class="footer-info clearfloat">-->
    <!--      <ul class="info-nav clearfloat info-content">-->
    <!--        <li>-->
    <!--          <router-link to="/">首页</router-link>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <router-link to="/buycomm">我要买车</router-link>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <router-link to="/sell">我要卖车</router-link>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <router-link to="/service">服务大厅</router-link>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <router-link to="/life">招财生活</router-link>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--      <p class="info-content">服务热线：400-696-4566</p>-->
    <!--      <p class="info-content">鲁ICP 备 19019886号 山东招财万福网络科技有限公司 版权所有</p>-->
    <!--    </div>-->

    <!-- 隐私协议 -->
    <el-dialog :title="xieyitxt.title" :visible.sync="xieyibox" width="50%">
      <div style="height: 400px;overflow: auto;">
        <div id="aaa" v-html="xieyitxt.content"></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="xieyibox = false">取 消</el-button>
        <el-button type="primary" @click="xieyibox = false">确 定</el-button>
      </span>
    </el-dialog>

    <div class="di">
      <div>
        <span>服务热线：400-696-4566</span>
        <span
          ><a
            class="atitle"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            >鲁ICP 备 19019886号</a
          ></span
        >
        <span
          ><a
            class="atitle"
            href="https://www.zhaocaipaipai.com/PC/mulu/img/B2-20210068.png"
            target="_blank"
            >增值电信业务经营许可证:鲁B2-20210068</a
          ></span
        >
        <span>山东招财万福网络科技有限公司 版权所有</span>
        <span>
          <!-- <a target="_blank" href="https://www.zhaocaipaipai.com/privacy-agreement.html">隐私协议</a> -->
          <a
            @click="getxieyi"
            style="cursor: pointer;text-decoration: underline;"
            >隐私协议</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      xieyitxt: "",
      xieyibox: false,
    };
  },

  methods: {
    getxieyi() {
      this.$api.getFuwuxieyi({ name: "yinsi" }).then((res) => {
        this.xieyitxt = res.data;
        this.xieyibox = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/base.less");

#aaa {
  color: #000000;
}

/*.footer {
  width: 100%;
  margin-top: 20px;
  height: 257px;
  background: rgba(41, 41, 41, 1);
  position: relative;
}
.info-content {
  // width: 50px;
  // display: inline-block;
  // line-height: 30px;
  padding-top: 20px;
}
.harp {
  width: 3px;
  height: 240px;
  background-color: #434343;
  position: absolute;
  left: 40%;
  top: 0;
  box-shadow: -3px 0px 2px #1e1e1e;
}
.qr-code {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 26%;
  top: 50%;
  transform: translate(0, -50%);
}
.footer-info {
  left: 47%;
  color: #bdbdbd;
  position: absolute;
  text-align: left;
  top: 50%;
  transform: translate(0, -50%);
  // width: 100%;
  ul {
    margin: 0 auto;
    padding: 0px;
    width: auto;
    width: 100%;
    display: inline-block;
  }
  li {
    list-style: none;
    float: left;
    border-right: solid 1px #bdbdbd;
    padding: 0 20px;
  }
  li:last-of-type {
    border-right: none;
  }
  li:first-of-type {
    padding-left: 0;
  }
  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #bdbdbd;
  }
}*/

.footer {
  height: 62px;
  width: 100%;
  background-color: #373b41;
  text-align: center;

  .di {
    div {
      margin: 0 auto;
      font-size: 12px;
      color: #fefefe !important;
      line-height: 62px;

      span:nth-child(2),
      span:nth-child(3) {
        margin: 0 50px;
      }
    }
    .atitle {
      color: #aaa7a7;
    }
  }
}
</style>
