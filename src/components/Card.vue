<template>
  <div>
    <Query
      :title="info.title"
      :plate="info.plate"
      :type="info.type"
      :engine="info.engine"
      :frame="info.frame"
      @close="dialogVisible = false"
      :dialogVisible="dialogVisible"
    />
    <Wuliu @close="dialogVisible1 = false" :dialogVisiblee="dialogVisible1"></Wuliu>
    <div class="card">
      <div class="card-item1 card-item" @click="weizhang" >
        <span class="card-title">违章查询</span>
        <a class="card-enter" >点击进入 ></a>
<!--        <img class="bg-img" src="../assets/images/weizhang.png" alt />-->
        <div class="card-item-logo"></div>
      </div>
      <a class="card-item2 card-item" href="https://m.che300.com/partner/zcp" target="_blank">
        <span class="card-title">快速估价</span>
        <a class="card-enter"  >点击进入 ></a>
<!--        <img class="bg-img" src="../assets/images/iconfontzhizuobiaozhun09.png" alt />-->
        <div class="card-item-logo"></div>
      </a>
      <div class="card-item3 card-item" @click="weibao">
        <span class="card-title">查看维保</span>
        <span class="card-enter">点击进入 ></span>
<!--        <img class="bg-img" src="../assets/images/qichebaoyangweixiushenqing.png" alt />-->
        <div class="card-item-logo"></div>
      </div>
      <div class="card-item4 card-item" @click="dialogVisible1 = true" >
        <span class="card-title">物流服务</span>
        <a class="card-enter"  >点击进入 ></a>
<!--        <img class="bg-img" src="../assets/images/wuliu.png" alt />-->
        <div class="card-item-logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Query from "@/components/Query.vue";
import Wuliu from "@/components/Wuliu.vue";
export default {
  name: 'card',
  components: { Query, Wuliu },
  data () {
    return ({
      info: {
        title: '',
        type: 0,
      },
      dialogVisible: false,
      dialogVisible1: false,
    })
  },
  methods: {
    /* 违章 */
    weizhang () {
      this.info = {
        title: '查看违章',
        type: 0,
      }
      this.dialogVisible = true
    },
    /* 查看维保 */
    weibao () {
      this.info = {
        title: '查看维保',
        type: 1,
      }
      this.dialogVisible = true
    },
    getQueryResult (res) {
      console.log("13"+res);
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bg-img {
  position: absolute;
  left: 30px;
  bottom: 5px;
}
.card-title {
  /*width: 138px;*/
  /*height: 34px;*/
  /*font-size: 34px;*/
  font-family: MicrosoftYaHei;
  /*font-weight: 400;*/
  position: absolute;
  left: 50%;
  bottom: 60px;
  height: 18px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  transform: translateX(-50%);

}
.card-enter {
  /*width: 95px;*/
  height: 20px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #000000!important;
  /*line-height: 90px;*/
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
}
.card-item {
  margin-bottom: 20px;
  position: relative;
  width: 274px;
  height: 272px;
  /*background-color: #ffffff;*/
  border: solid 1px #dcdcdc;
  background: #ffffff url("../assets/images/sebbg.png") no-repeat 50% -70px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;

}
.card-item-logo {
  width: 83px;
  height: 83px;
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);

}
.card-item:hover {
  background-image: none;
  box-shadow: 0px 0px 14px 2px rgba(69, 67, 65, 0.2);
  border: 1px solid #fd8129;
  border-top: 10px solid #fd8129;

}
.card-item1 {
  .card-item-logo {
    background: url("../assets/images/weizhang.c0a130bd.png");
  }
}
.card-item1:hover {
  .card-item-logo {
    background: url("../assets/images/weizhangye.png");
    background-size: cover;
  }
}
.card-item2 {
  .card-item-logo {
    background-size: 100%;
    background: url("../assets/images/iconfontzhizuobiaozhun09.png") no-repeat center;
  }
}

.card-item2:hover {
  .card-item-logo {
    background: url("../assets/images/iconfontzhizuobiaozhun09.e80789fd.png") no-repeat center;

  }
}

.card-item3 {
  .card-item-logo {
    background-size: cover;
    background: url("../assets/images/qichebaoyangweixiushenqing.da3f4286.png") no-repeat center;
  }
}
.card-item3:hover {
  .card-item-logo {
    background: url("../assets/images/qichebaoyangweixiushenqing.da3f42861111.png") no-repeat center;

  }
}
.card-item4 {
  .card-item-logo {
    background-size: cover;
    background: url("../assets/images/wuliu.9dd82298.png") no-repeat;
  }
}
.card-item4:hover {
  .card-item-logo {
    background: url("../assets/images/wuliu.9dd82298555.png") no-repeat center;

  }
}


/*.card-item1 {*/
/*  display: inline-block;*/
/*  width: 570px;*/
/*  height: 260px;*/
/*  background: linear-gradient(*/
/*    45deg,*/
/*    rgba(251, 112, 97, 1),*/
/*    rgba(252, 141, 73, 1)*/
/*  );*/
/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
/*  border-radius: 20px;*/
/*}*/
/*.card-item2 {*/
/*  display: inline-block;*/
/*  width: 570px;*/
/*  height: 260px;*/
/*  background: linear-gradient(*/
/*    45deg,*/
/*    rgba(250, 152, 52, 1),*/
/*    rgba(253, 191, 48, 1)*/
/*  );*/
/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
/*  border-radius: 20px;*/
/*}*/
/*.card-item3 {*/
/*  display: inline-block;*/
/*  width: 570px;*/
/*  height: 260px;*/
/*  background: linear-gradient(*/
/*    45deg,*/
/*    rgba(69, 202, 255, 1),*/
/*    rgba(105, 210, 254, 1)*/
/*  );*/
/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
/*  border-radius: 20px;*/
/*}*/
/*.card-item4 {*/
/*  display: inline-block;*/
/*  width: 570px;*/
/*  height: 260px;*/
/*  background: linear-gradient(*/
/*    45deg,*/
/*    rgba(50, 199, 173, 1),*/
/*    rgba(54, 214, 163, 1)*/
/*  );*/
/*  box-shadow: 0px 8px 12px 0px rgba(6, 0, 1, 0.24);*/
/*  border-radius: 20px;*/
/*}*/
</style>
