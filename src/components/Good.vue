<template>
  <div class="good">
    <img class="img" :src="imgsrc" alt />
    <div class="pro-con" :style="isPai?{'padding-bottom':'0px'}:{'padding-bottom':'12px'}">
      <p class="price">{{price}}</p>
      <p class="subtitle">{{subtitle}}</p>
      <p v-if="mark" class="mark">
        {{mark}}
        <span style="color:#666666">条评价</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'good',
  data () {
    return {

    }
  },
  props: {
    price: String,
    subtitle: String,
    mark: String,
    imgsrc: String
  }
}
</script>
<style lang="less" scoped>
.good {
  width: 285px;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.img {
  height: 192px;
  height: 200px;
  width: 100%;
}
.pro-con {
  height: 122px;
  padding: 12px 12px 0px 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  p {
    margin: 0;
    text-align: left;
  }
  .price {
    color: #495056;
    font-size: 20px;

    font-size: 23px;
    font-weight: 400;
    color: rgba(232, 64, 42, 1);
    // line-height:90px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    color: rgba(73, 80, 86, 1);
    line-height: 24px;
  }
  .mark {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(233, 8, 8, 1);
    // line-height: 90px;
  }
}
</style>
