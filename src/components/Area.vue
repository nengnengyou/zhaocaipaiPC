<template>
  <div class="area" :style="{'background-color':bgc}">
    <div class="area-inner">
      <div class="area-header">
        <span class="title-line left-line">
          <img src="../assets/images/smallDots.png"/>
        </span>
        <span class="title" :style="{'color':color}">{{title}}</span>
        <span class="title-line right-line">
          <img src="../assets/images/smallDots.png"/>
        </span>
        <div class="between-line-small"></div>
        <span class="subtitle">{{subtitle}}</span>
        <router-link class="classify" :to="classify" v-show="classify!=''">
          全部分类
          <img class="you-jian" src="../assets/images/you.png" alt />
          <!-- <i class="fa fa-arrow-right"></i> -->
        </router-link>
      </div>
      <div class="between-line"></div>
      <div class="area-body">
        <slot></slot>
        <router-link :to="link" class="more" href="#" v-show="ismore" :style="{'color':btncolor}">
          查看更多 >
<!--          <img class="you-jian-1" src="../assets/images/you.png" alt />-->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'areaa',
  props: {
    title: String,
    subtitle: String,
    bgc: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#444'
    },
    btncolor: {
      type: String,
      default: '#000'
    },
    link: {
      type: String,
      default: '/'
    },
    ismore: {
      type: Boolean,
      default: false
    },
    classify: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.area-inner {
  /*<!--width: @conent-width;-->*/
  width: 100%;
  margin: 0 auto;
  padding-top: 74px;
  padding-bottom: 106px;
}
.you-jian {
  width: 28px;
  height: 28px;
  vertical-align: bottom;
}
.you-jian-1 {
  width: 28px;
  vertical-align: middle;
  margin-bottom: 10px;
  height: 28px;
}
.area-header {
  padding: 13px 0;
  position: relative;
      text-align: center;
  .title {
    font-size: 38px;
    color: #444;
  }
  .title-line {
    display: block;
    height: 1px;
    width: 40%;
    position: absolute;
    background-color: #fcc095;
    top: 36px;
    img {
      position: absolute;
      top: -13px;
    }

  }
  .left-line {
    left: 0;
    img {
      right: -13px;
    }
  }
  .right-line {
    right: 0;
    img {
      left: -13px;
    }
  }
  .classify {
    font-size: 22px;
    font-family: SimSun;
    font-weight: 400;
    color: rgba(131, 129, 129, 1);
    text-decoration: none;
    position: absolute;
    bottom: 15px;
    right: 20px;
  }
  .between-line-small {
    visibility: hidden;
    width: 50px;
    height: 6px;
    background: @base-color;
    border-radius: 3px;
    /*margin: 10px auto;*/
  }
  .subtitle {
    font-size: 14px;
    color: #999;
  }
}
/*<!--.between-line {-->*/
/*<!--  background: rgba(153, 153, 153, 0.2);-->*/
/*<!--  height: 2px;-->*/
/*<!--  width: @conent-width;-->*/
/*<!--  margin: 0 auto;-->*/
/*<!--}-->*/
.area-body {
  padding: 20px 0;
  width: @conent-width;
  margin: 0 auto;
  .more {
    display: block;
    /*width: 89px;*/
    /*height: 21px;*/
    /*font-size: 22px;*/
    /*font-family: SimSun;*/
    /*font-weight: 400;*/
    /*!*color: rgba(131, 129, 129, 1);*!*/
    line-height: 52px;
    text-decoration: none;
    text-align: center;

    width: 198px;
    height: 52px;
    border-radius: 10px;
    border: solid 1px #0096ff;
    margin: 0 auto;
    margin-top: 62px;

  }
}
</style>
