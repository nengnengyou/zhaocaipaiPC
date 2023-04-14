<template>
  <div class="life">
    <car-position></car-position>
    <!-- 轮播 -->
    <div class="ads"></div>
    <areaa title="车品超市" classify="/life/lifeclassify" subtitle="Supermarket">
      <div class="pro-list">
        <div class="inner">
          <product-by
            @click.native="toZhaodetail(item.id)"
            class="pro"
            v-for="item in goods"
            :key="item.id"
            :imgsrc="item.img"
            :title="item.title"
            :price="item.showprice + '元'"
          ></product-by>
        </div>
      </div>
    </areaa>
    <areaa
      title="保养美容"
      link="/life/lifelist?type=upkeep"
      subtitle="Maintenance beauty"
      bgc="#f5f5f7"
      :ismore="true"
    >
      <div class="pro-list">
        <div class="inner">
          <small-store
            @click.native="toStore"
            class="pro"
            v-for="item in baoyangList"
            :key="item.id"
            :imgsrc="item.img"
            :title="item.title"
            :subtitle="item.address"
          ></small-store>
        </div>
      </div>
    </areaa>
    <areaa title="不良资产处理" subtitle="Dealing with Non-performing Assets">
      <div class="pro-list">
        <div class="inner">
          <product-by
            @click.native="toZhaodetail(item.id)"
            class="pro"
            v-for="item in buliang"
            :key="item.id"
            :imgsrc="item.img"
            :title="item.title"
            :price="item.showprice + '元'"
          ></product-by>
        </div>
      </div>
    </areaa>
  </div>
</template>

<script>
import ProductBy from '@/components/ProductBy.vue'
import SmallStore from '@/components/SmallStore.vue'
import Areaa from '@/components/Area.vue'
import carPosition from '@/components/carPosition.vue'
export default {
  name: 'life',
  components: { Areaa, ProductBy, SmallStore, carPosition },
  data () {
    return {
      goods: [],
      baoyangList: [],
      buliang: []
    }
  },
  created () {
    this.getGoods()
    this.indexGoods()
    /* 保养 */
    this.baoyangIndex()
  },
  methods: {

    /* 获取不良资产 */
    indexGoods () {
      let params = {
        is_buliang: 1
      }
      this.$api.indexGoods(params).then(res => {
        this.buliang = res.data
      })
    },
    toZhaodetail (id) {
      this.$router.push(`/life/zhaodetail?id=${id}`)
    },
    toStore () {
      // this.$router.push('/buystoredetail')
    },
    baoyangIndex () {
      let params = {
        num: 8,
        keywords: '',
        page: 1
      }
      this.$api.baoyangIndex(params).then(res => {
        this.baoyangList = res.data.data
      })
    },
    getGoods () {
      let params = {
        cid: '',
        keyword: ''
      }
      this.$api.getGoods(params).then(res => {
        this.goods = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
.pro-list {
  .inner {
    width: @conent-width;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: -15px;
    margin-right: -10px;
  }
}
.pro {
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 10px;
}
.ads {
  width: 100%;
  height: 554px;
  background: url("../../assets/images/banner.png") no-repeat center center;
  background-size: cover;
}
</style>
