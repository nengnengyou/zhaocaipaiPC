<template>
  <div id="referDetl">
    <div class="rdArea">
      <p class="detlTitle">{{info.title}}</p>
      <div class="detlSubTit">
        <span>{{$moment(info.add_time * 1000).format('YYYY-MM')}} 观看次数:{{info.praise_num}}</span>
        <!-- <span>查看人数: 2314</span> -->
      </div>
      <p v-if="info.type == 0" v-html="info.content" class="richTxt"></p>
      <video v-if="info.type == 1" class="video" controls="controls" autoplay :src="info.video_url"></video>
    </div>
  </div>
</template>
<script>
export default {
  name: "referDetl",
  created () {
    this.newGetInfo()
  },
  data () {
    return {
      info: {
      }
    };
  },
  watch: {

  },
  methods: {
    newGetInfo () {
      let params = {
        id: this.$route.query.id
      }
      this.$api.newGetInfo(params).then(res => {
        this.info = res.data
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/base.less");
.preNews {
  cursor: pointer;
}
.video {
  width: 100%;
}
#referDetl {
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 100px 0;
  .rdArea {
    width: @conent-width;

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p.detlTitle {
      font-size: 28px;
      font-weight: 600;
      line-height: 52px;
      text-align: center;
    }
    .detlSubTit {
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #555555;
    }
    .richTxt {
      font-size: 20px;
    }
    .nextAndpre {
      font-size: 20px;
      color: #e30005;
      margin-top: 30px;
      .nextNews {
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }

  .mrdArea {
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    p.detlTitle {
      font-size: 28px;
      font-weight: 600;
      line-height: 52px;
      text-align: center;
    }
    .detlSubTit {
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #555555;
    }
    .richTxt {
      font-size: 20px;
      img {
        // width: 100% !important;
      }
    }
    .nextAndpre {
      font-size: 20px;
      color: #e30005;
      margin-top: 30px;
      .nextNews {
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
}
</style>

