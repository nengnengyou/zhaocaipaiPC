<template>
  <div class="video" >

    <div class="mask" :style="style">

      <i class="play fa fa-play-circle-o"></i>
    </div>
    <div class="tag">视频></div>

    <p class="title">{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'videoa',
  props: ['imgsrc','title'],
  data () {
    return {
      style: { background: `url('${this.imgsrc}') no-repeat center center` }
    }
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/base.less");
.video {
  width: 592px;
  height: 487px;
  margin-right: 22px;
  margin-left: 8px;
  margin-bottom: 24px!important;
  background-color: #f0f0f0;
  /*background: rgba(0, 0, 0, 0.2);*/
  border-radius: 4px;
  position: relative;

  background-size: cover !important;

  .title {
    font-size: 18px;
    line-height: 30px;
    color: #435061;
    text-align: left;
    margin-top: 33px;
  }
}
.tag {
  width: 80px;
  height: 35px;
  background: @base-color;
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  top: 17px;
  left: -8px;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  line-height: 35px;
  z-index: 2;
}
.mask {
  position: relative;
  height: 370px;
  background-color: #000;
  width: 100%;
  /*height: 100%;*/
  opacity: 0.4;
  background-size: cover !important;
}
.play {
  font-size: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #fff;
}
</style>
