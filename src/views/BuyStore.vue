<template>
  <div class="buy-store">
    <div class="option-card">
      <div class="bottom-line">
        <span class="search-title">买车</span>
        <input v-model="option.shop_name" class="search" />
        <button class="search-button">搜索</button>
      </div>
      <div class="options">
        <div class="line clearfloat one-line">
          <span class="line-left fl">品牌</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.car_category">
              <el-checkbox
                class="option"
                v-for="item in filt.carCate"
                :label="item.name"
                :key="item.id"
              >{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <a @click="showMore" class="line-right option more">{{hiddenText}}</a>
        </div>

        <div class="line">
          <span class="line-left">地区</span>
          <el-cascader
            :options="filt.areaList"
            v-model="option.province"
            :props="areaProp"
            clearable
          ></el-cascader>
        </div>
      </div>
    </div>
    <div class="store-body">
      <div class="prolist" v-for="item in shopList " :key="item.id">
        <div class="store-header">
          <i class="store-icon fa fa-credit-card"></i>
          <span class="store-title">{{item.shop_name}}</span>
          <el-rate class="rate" disabled></el-rate>
          <button @click="enterShop(item.id)" class="enter-shop">进店</button>
          <el-divider></el-divider>
        </div>
        <div class="store-inner">
          <product-big
            :isPai="false"
            class="pro-item"
            v-for="element in item.car_list.data"
            :key="element.id"
            @click.native="toDetail(element.id)"
            :imgsrc="element.img[0]"
            :title="element.title"
            :subtitle="element.card_time+'丨'+element.city+'丨'+element.carno"
            :price="element.price+'元'"
          ></product-big>
        </div>
      </div>
      <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
import ProductBig from '@/components/ProductBig.vue'

export default {
  name: 'buy-store',
  components: { ProductBig },
  watch: {
    option: {
      handler (val) {
        this.getShopList()
      },
      deep: true
    }
  },
  created () {
    this.getCarCategory()
    this.getShopList()
  },
  data () {
    return {
      hiddenText: '更多',
      hiddenWidth: 50 + 'px',
      areaProp: {
        checkStrictly: true,
        lazy: true,
        lazyLoad: async function (node, resolve) {
          const { level } = node;
          const nodes = await this.getAreasp(node.value)
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          resolve(nodes)
        }.bind(this)
      },
      shopList: [],
      filt: {
        carCate: [],
      },
      option: {
        car_category: [],
        province: [],
        shop_name: ''
      },
    }
  },
  methods: {
    toDetail (id) {
      window.open(`index.html#/cardetail?id=${id}`, '_blank')
      // this.$router.push(`/cardetail?id=${id}`)
    },
    enterShop (id) {
      this.$router.push(`/buystoredetail?id=${id}`)
    },
    getShopList () {
      let params = {
        car_category: this.option.car_category.toString() || undefined,
        city: this.option.province[1],
        area: this.option.province[2],
        province: this.option.province[0],
        shop_name: this.option.shop_name
      }
      // if (!params.car_category) delete params.car_category
      this.$api.shopList(params).then(res => {
        this.shopList = res.data
      })
    },
    /* 一波数据请求 */
    showMore () {
      if (this.hiddenWidth == 'auto') {
        this.hiddenWidth = 50 + 'px'
        this.hiddenText = '更多'
      } else {
        this.hiddenWidth = 'auto';
        this.hiddenText = '收起'
      }
    },
    /* 三级联动 */
    async getAreasp (id) {
      var tempArr = []
      let res = await this.$api.getAreas({ id: id })
      res.data.forEach(item => {
        tempArr.push({ value: item.id, label: item.name })
      });
      return tempArr
    },
    getCarCategory () {
      this.$api.getCarCategory().then(res => {
        this.filt.carCate = res.data
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
/* 此处代码粘贴，可能重复，明白就好了 */

.bottom-line {
  .b-btn-title {
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    // line-height: 90px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
.line {
  position: relative;
  .line-left {
    width: 150px;
    display: inline-block;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
  .line-right {
    float: right;
  }
  .line-right-inner {
    overflow: hidden;
    height: 50px;
    // width: 960px;
    width: 965px;
    float: right;
  }
  margin-bottom: 22px;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
}
/deep/ .el-cascader {
  width: 70%;
}
/deep/ .el-checkbox-group {
  display: inline-block;
}
/deep/ .el-checkbox__input {
  display: none;
}
/deep/ .el-checkbox__label {
  font-size: 18px;
  font-weight: 400;
  color: #666666;
  line-height: 35px;
  padding: 0;
}
/deep/ .is-checked {
  background: rgba(51, 133, 255, 1);
  border-radius: 10px;
  color: #fff;
  line-height: 30px;
  /deep/ .el-checkbox__label {
    color: #fff;
  }
}
/deep/ .option:first-of-type {
  // margin-left: 0;
}
/deep/ .option {
  padding: 0;
  display: inline-block;
  padding: 0 5px;
  margin: 0 25px 5px 0;
  height: 36px;
}
/* 此处代码粘贴，可能重复，明白就好了 --- end */

.buy-store {
  padding-top: 80px;
  background-color: #f5f5f7;
}
.store-body {
  background-color: #fff;
  padding-bottom: 20px;
  margin-top: 30px;
}
.line-right {
  float: right;
}
.bottom-line {
  display: flex;
  margin-bottom: 35px;
  align-items: flex-end;
}
.line {
  margin-bottom: 22px;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
}
.line-left {
  width: 150px;
  display: inline-block;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.more {
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
  color: rgba(239, 26, 26, 1);
  position: absolute;
  right: -30px;
}

.option-card {
  width: @conent-width;
  // height: 430px;
  box-sizing: border-box;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 9px 9px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 40px;
}

.bottom-line {
  .search-title {
    font-size: 26px;
    color: rgba(51, 51, 51, 1);
    line-height: 54px;
    margin-right: 50px;
  }
  .search {
    padding-left: 10px;
    width: 356px;
    height: 47px;
    background: rgba(238, 238, 238, 1);
    margin-right: 50px;
    border-radius: 10px;
  }
  .search-button {
    width: 122px;
    height: 50px;
    background: rgba(51, 133, 255, 1);
    border-radius: 10px;

    font-size: 22px;
    color: rgba(255, 255, 255, 1);
  }
  .shoucang {
    width: 209px;
    height: 83px;
    background: rgba(53, 208, 163, 1);
    border-radius: 10px;
  }
  .jilu {
    width: 209px;
    height: 83px;
    background: rgba(255, 204, 40, 1);
    border-radius: 10px;
  }
}

/* 列表 */
.prolist {
  background-color: #fff;
  padding: 20px;

  /* 店铺头 */
  .store-header,
  .store-inner {
    text-align: left;
    width: @conent-width;
    margin: 0 auto;
  }
  .store-inner {
    // margin-right: -20px;
    // margin-bottom: -20px;
  }
  .pro-item {
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 20px;
  }

  // .store-inner {
  //   width: @conent-width;
  //   text-align: left;
  //   margin: 0 auto;
  //   margin: 0 auto;
  //   // display: flex;
  //   // justify-content: space-between;
  //   margin-bottom: -20px;
  //   margin-right: -20px;

  // }
  .store-icon {
    font-size: 26px;
  }
  .store-title {
    display: inline-block;
    padding: 0 50px 0 18px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 35px;
  }

  /* 修改子组件 */
  .rate {
    display: inline-block;
    /deep/ i {
      line-height: 8px;
      font-size: 30px;
    }
  }

  .enter-shop {
    cursor: pointer;
    width: 121px;
    height: 36px;
    border: 1px solid rgba(236, 27, 60, 1);
    border-radius: 10px;
    color: rgba(236, 27, 60, 1);
    font-size: 20px;
    line-height: 35px;
    background-color: #fff;
    float: right;
  }
}
</style>
