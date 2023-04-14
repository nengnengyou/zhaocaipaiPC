<template>
  <div class="ad">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in ads" :key="item">
        <div
          class="ads"
          :style="{'background': 'url('+item+') no-repeat center center','background-size':'cover'}"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- <img class="ads" :src="ads[0]" alt /> -->
  </div>
</template>

<script>
export default {
  name: 'ad',
  created () {
    this.getUseBanner()
  },
  data () {
    return {
      ads: []
    }
  },
  methods: {
    async getUseBanner () {
      let ads = await this.$api.getUseBanner({ typeid: 7 })
      this.ads = ads.data.map(item => item.image)
      console.log(this.ads);
    }
  }

}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.ad,
.bg-img {
  .ads {
    height: 200px;
    /*margin: 20px 0;*/
  }
  height: 200px;
  /*background: url("../assets/images/ad.png");*/
  width: @conent-width;
  text-align: center;
  margin: 0 auto;
}
</style>
