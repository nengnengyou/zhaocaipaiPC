<template>
  <div class="media" :title="title">
    <div class="left">
      <img class="img" :src="imgsrc" alt />
      <div class="tag">新闻></div>
    </div>
    <div class="right">
      <p class="title">{{title}}</p>
<!--      <p v-html="conent" class="conent"></p>-->
      <div class="foot">
        <span class="time">发布日期:{{time}} </span>
        <span class="count">浏览量:{{count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'media',
  props: {
    title: String,
    conent: String,
    imgsrc: String,
    count: Number,
    time: String
  }
}
</script>
<style lang="less" scoped>
@import url("../assets/base.less");

.media {
  position: relative;
  /*width: 728px;*/
  /*height: 170px;*/
  width: 276px;
  height: 230px;
  /*background: rgb(247, 207, 32);*/
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  float: left;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 4px;
  p {
    margin: 0px;
    padding: 0;
    text-align: left;
  }
  .img {
    width: 100%;
    height: 175px;
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
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    line-height: 35px;
  }
  .title {
    font-size: 14px;
    text-indent: 14px;
    overflow: hidden;
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    width: 100%;/*需要配合宽度来使用*/
  }
  .foot {
    font-size: 12px;
    color: #7e7e7e;
    text-align: right;
    line-height: 30px;
    padding-right: 10px;
  }
}


.media:nth-child(odd) {
  margin-bottom: 26px;
}

.media:nth-child(even) {
  margin-left: 25px;
  margin-bottom: 26px;
}


/*
.left {
  display: inline-block;
  width: 223px;
  height: 169px;
  float: left;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
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
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    line-height: 35px;
  }
}

.right {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  .title {
    width: 474px;
    height: 32px;
    overflow: hidden;
    font-size: 26px;
    color: rgba(79, 78, 78, 1);
  }
  .conent {
    width: 474px;
    height: 72px;
    overflow: hidden;
    font-size: 20px;
    color: rgba(153, 153, 153, 1);
    line-height: 34px;
  }
  .time,
  .count {
    width: 117px;
    font-size: 20px;
    color: rgba(153, 153, 153, 1);
  }
  .foot {
    display: flex;
    justify-content: space-between;
  }
}*/
</style>
