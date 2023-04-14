<template>
  <div class="service">
    <!-- 轮播 -->
    <div class="ads"></div>

    <!-- 区域 -->
    <div class="inner">
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'service',
  components: { Card },
  data () {
    return {
      ads: [
        'http://5b0988e595225.cdn.sohucs.com/images/20180618/2e10fb6487be409f95c876ee09bd0adf.gif',
        'https://img.zcool.cn/community/0129bf594a15d3a8012193a34b855b.jpg@1280w_1l_2o_100sh.jpg'
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.ads {
  width: 100%;
  height: 554px;
  background: url("../assets/images/banner.png") no-repeat center center;
  background-size: cover;
}
.inner {
  width: @conent-width;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
