<template>
  <div class="small-store">
    <div class="img-box">
      <img class="img" :src="this.imgsrc" alt />
    </div>
    <div class="pro-con">
      <p class="title">{{title}}</p>
      <p class="subtitle">{{subtitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'small-store',
  data () {
    return {

    }
  },
  props: {
    title: String,
    subtitle: String,
    price: String,
    imgsrc: String
  }
}
</script>
<style lang="less" scoped>
.small-store {
  width: 285px;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.img-box,
.img {
  height: 237px;
  width: 100%;
}
.pro-con {
  height: 83px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  p {
    margin: 0;
    text-align: left;
  }
  .title {
    font-size: 22px;
    height: 24px;
    overflow: hidden;
    color: rgba(102, 102, 102, 1);
  }
  .subtitle {
    font-size: 16px;
    height: 18px;
    overflow: hidden;
    color: rgba(136, 136, 136, 1);
  }
}
</style>
