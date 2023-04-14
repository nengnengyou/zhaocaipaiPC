<template>
  <div class="life-list">
    <div class="inner">
      <div class="header clearfloat">
        <!-- <div class="orderby">价格</div>
        <div style="color:red;" class="orderby">评论 ↑</div>-->

        <router-link to="/person/buycar" tag="div" class="cart">
          <i class="fa fa-cart-arrow-down"></i>
        </router-link>
      </div>
      <div v-if="$route.query.type != 'upkeep'" class="prolist">
        <good
          @click.native="toZhaodetail(item.id)"
          class="pro"
          v-for="item in goods"
          :key="item.id"
          :imgsrc="item.img"
          :subtitle="item.title"
          :price="item.showprice+'元'"
        ></good>
      </div>
      <div v-if="$route.query.type == 'upkeep'" class="prolist">
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
      <el-pagination class="pages" background layout="prev, pager, next" :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
import Good from "@/components/Good.vue"
import SmallStore from '@/components/SmallStore.vue'
export default {
  name: 'life-list',
  components: { Good, SmallStore },
  data () {
    return {
      goods: [],
      baoyangList: [],
      total: 0
    }
  },
  created () {
    this.getGoods()
    if (this.$route.query.type == 'upkeep') {
      this.baoyangIndex()
    }
  },
  methods: {
    baoyangIndex () {
      let params = {
        num: 8,
        keywords: '',
        page: 1
      }
      this.$api.baoyangIndex(params).then(res => {
        this.baoyangList = res.data.data
        this.total = res.data.total
      })
    },
    getGoods () {
      let params = {
        cid: this.$route.query.id,
        keyword: ''
      }
      this.$api.getGoods(params).then(res => {
        this.goods = res.data
      })
    },
    toZhaodetail (id) {
      window.open(`/life/zhaodetail?id=${id}`, '_blank')
      // this.$router.push(`/life/zhaodetail?id=${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
.life-list {
  padding-top: 100px;
}
.inner {
  width: @conent-width;
  margin: 0 auto;
  padding-bottom: 20px;
}
.pro {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 10px;
}
.prolist {
  display: flex;
  flex-flow: row wrap;
  // justify-content: space-between;
  margin-bottom: -20px;
}
.header {
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 10px;
  .cart {
    cursor: pointer;
    width: 118px;
    height: 47px;
    background: rgba(51, 133, 255, 1);
    border-radius: 5px;
    display: inline-block;
    float: right;
    color: #fff;
    font-size: 38px;
  }
  .orderby {
    display: inline-block;
    float: left;
    width: 146px;
    height: 46px;
    border: 1px solid rgba(210, 210, 210, 1);
    text-align: center;
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    line-height: 46px;
  }
}
</style>
