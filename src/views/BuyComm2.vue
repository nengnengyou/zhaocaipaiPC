<template>
  <div class="buycomm">
    <div class="option-card">
      <div class="bottom-line">
        <span class="search-title">买车</span>
        <input @keydown.native="bayCarList" v-model="option.title" class="search" />
        <button @click="bayCarList" class="search-button">搜索</button>
      </div>
      <div class="options">
        <div class="line clearfloat one-line">
          <span class="line-left fl">品牌</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.category">
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
        <div class="line clearfloat one-line">
          <span class="line-left fl">属性</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.attribute">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.carAttr"
                :label="item.name"
                :key="index"
              >{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="line clearfloat one-line">
          <span class="line-left fl">价格</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.pay_num">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.pay_num"
                :label="item"
                :key="index"
              >{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="line clearfloat one-line">
          <span class="line-left fl">车龄</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.card_time">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.card_time"
                :label="item"
                :key="index"
              >{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="line clearfloat one-line">
          <span class="line-left fl">表显里程</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.mileage">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.mileage"
                :label="item.name"
                :key="index"
              >{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="line clearfloat one-line">
          <span class="line-left fl">颜色</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.color">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.carColor"
                :label="item.name"
                :key="index"
              >{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <div class="line clearfloat one-line">
          <span class="line-left fl">能否过户</span>
          <div class="line-right-inner" :style="{'height':hiddenWidth}">
            <el-checkbox-group v-model="option.transfer">
              <el-checkbox
                class="option"
                v-for="(item,index) in filt.transfer"
                :label="item"
                :key="index"
              >{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>
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

    <div class="prolist">
      <div class="inner">
        <product-big
          @click.native="toDetail(item.id)"
          :isPai="false"
          class="pro-item"
          v-for="item in carList"
          :key="item.id"
          :imgsrc="item.img[0]"
          :title="item.title"
          :subtitle="item.card_time+'丨'+item.city+'丨'+item.carno"
          :price="item.price+'元'"
        ></product-big>
      </div>
      <!-- <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </div>
  </div>
</template>

<script>
import ProductBig from '@/components/ProductBig.vue'

export default {
  name: 'buycomm',
  components: { ProductBig },
  watch: {
    option: {
      handler (val) {
        this.bayCarList()
      },
      deep: true
    }
  },
  data () {
    return {
      hiddenText: '更多',
      hiddenWidth: 50 + 'px',
      carList: [],
      filt: {
        carCate: [],
        carAttr: [],
        areaList: [],
        pay_num: [],
        carColor: [],
        mileage: [],
        card_time: [],
        transfer: []
      },
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
      option: {
        category: [],
        attribute: [],
        province: [],
        pay_num: [],
        mileage: [],
        color: [],
        card_time: [],
        transfer: [],
        title: ''
      },
    }
  },
  created () {
    this.bayCarList()
    /* 一大波筛选数据的获取 */
    this.getCarCategory()
    this.getCarAttr()
    this.getCarMileage()
    this.getCarColor()
    this.getShoudong()
  },
  methods: {
    showMore () {
      if (this.hiddenWidth == 'auto') {
        this.hiddenWidth = 50 + 'px'
        this.hiddenText = '更多'
      } else {
        this.hiddenWidth = 'auto';
        this.hiddenText = '收起'
      }
    },
    toDetail (id) {
      window.open(`/cardetail?id=${id}`, '_blank')
      // this.$router.push(`/cardetail?id=${id}`)
    },
    /* 获取列表 */
    bayCarList () {
      let params = {
        category: this.option.category.toString(),
        attribute: this.option.attribute.toString(),
        // province: this.option.province[this.option.province.length - 1],
        city: this.option.province[1],
        area: this.option.province[2],
        province: this.option.province[0],

        pay_num: this.option.pay_num.toString(),
        mileage: this.option.mileage.toString(),
        color: this.option.color.toString(),
        card_time: this.option.card_time.toString(),
        transfer: this.option.transfer.toString(),
        title: this.option.title
      }
      if (!params.attribute) delete params.attribute
      this.$api.bayCarList(params).then(res => {
        // console.log(res);
        this.carList = res.data
      })
    },
    /* 一大波筛选数据的获取 */
    getCarCategory () {
      this.$api.getCarCategory().then(res => {
        this.filt.carCate = res.data
      })
    },
    getCarAttr () {
      this.$api.carAttribute().then(res => {
        this.filt.carAttr = res.data
      })
    },
    getCarMileage () {
      this.$api.carMileage().then(res => {
        this.filt.mileage = res.data
      })
    },
    getCarColor () {
      this.$api.carColor().then(res => {
        this.filt.carColor = res.data
      })
    },
    /* 价格手动 */
    getShoudong () {
      this.filt.pay_num = ['3万元以下', '3-5万', '5-7万', '7-9万', '9万元以上']
      this.filt.card_time = ['1年以内', '1-3年', '3-5年', '5-8年']
      this.filt.transfer = ['能', '不能']
    },

    /* 三级联动 */
    async getAreasp (id) {
      var tempArr = []
      let res = await this.$api.getAreas({ id: id })
      res.data.forEach(item => {
        tempArr.push({ value: item.id, label: item.name })
      });
      return tempArr
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.buycomm {
  padding-top: 80px;
  background-color: #f5f5f7;
}
.bottom-line {
  display: flex;
  margin-bottom: 35px;
  align-items: flex-end;
}
.line-right {
  float: right;
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
  margin-top: 30px;
  padding: 20px;

  .inner {
    width: @conent-width;
    margin: 0 auto;
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: -20px;
    .pro-item {
      margin-bottom: 20px;
      margin-right: 12px;
    }
  }
}
</style>
