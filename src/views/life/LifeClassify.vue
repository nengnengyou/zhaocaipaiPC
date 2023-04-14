<template>
  <div class="life-classify">
    <!-- 轮播 -->
    <div class="ads"></div>
    <areaa title="车品超市" subtitle="Supermarket">
      <div class="market">
        <div @click="toGoodList(item.id)" v-for="item in list" :key="item.id" class="classify">
          <img class="imgsrc" :src="item.img" />
          <span class="title">{{item.name}}</span>
        </div>
      </div>
      <!-- 暂时取消分类 -->
      <!-- <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </areaa>
  </div>
</template>

<script>
import Areaa from '@/components/Area.vue'
export default {
  name: 'life-classify',
  components: { Areaa },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getGoodsCate()
  },
  methods: {
    async toGoodList (id) {
      /* 这里还要调一次获取二级分类，也是醉了 */
      let params = {
        pid: id
      }
      let res = await this.$api.getGoodsCate(params)
      this.$router.push(`/life/lifelist?id=${res.data[0].id}`)
    },
    getGoodsCate () {
      this.$api.getGoodsCate().then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
.market {
  display: flex;
  // justify-content: space-between;
  margin-bottom: 15px;
  margin-right: -15px;
  flex-wrap: wrap;
}
.ads {
  width: 100%;
  height: 554px;
  background: url("../../assets/images/banner.png") no-repeat center center;
  background-size: cover;
}
.inner {
  width: @conent-width;
  margin: 0 auto;
  margin-top: 50px;
}
.classify {
  cursor: pointer;
  width: 285px;
  height: 320px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(238, 238, 238, 1);
}
.classify {
  margin-right: 15px;
  margin-bottom: 15px;
}
.imgsrc {
  width: 100%;
  height: 258px;
}
.title {
  font-size: 24px;
  color: rgba(102, 102, 102, 1);
  line-height: 54px;
}
</style>
