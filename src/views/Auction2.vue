<template>
  <div class="auction">

    <!-- 同意协议 -->
    <el-dialog
            :close-on-press-escape="false"
            :show-close="false"
            :destroy-on-close="false"
            :close-on-click-modal="false"
            title="阅读协议"
            :visible.sync="centerDialogVisible"
            width="50%"
            center
    >
      <div class="blog-content rule-text" v-html="rule"></div>

      <span slot="footer" class="dialog-footer">
        <el-button
                type="primary"
                :disabled="disabled"
                @click="centerDialogVisible = false"
        >{{okText}}</el-button>
      </span>
    </el-dialog>

    <div class="option-card">
<!--      <div class="options">-->
<!--        <div class="line clearfloat one-line">-->
<!--          <span class="line-left fl">车辆品牌</span>-->
<!--          <div class="line-right-inner" :style="{'height':hiddenWidth}">-->
<!--            <el-checkbox-group v-model="carCateGroup">-->
<!--              <el-checkbox-->
<!--                class="option"-->
<!--                v-for="item in carCate"-->
<!--                :label="item.name"-->
<!--                :key="item.id"-->
<!--              >{{item.name}}</el-checkbox>-->
<!--            </el-checkbox-group>-->
<!--          </div>-->
<!--          <a @click="showMore" class="line-right option more">{{hiddenText}}</a>-->
<!--        </div>-->
<!--        <div class="line">-->
<!--          <span class="line-left">车牌属地</span>-->
<!--          <el-cascader :options="areaLista" v-model="areaa" :props="areaProp" clearable></el-cascader>-->
<!--          &lt;!&ndash; <a class="line-right option more">更多</a> &ndash;&gt;-->
<!--        </div>-->
<!--        <div class="line">-->
<!--          <span class="line-left">车辆属性</span>-->
<!--          <el-checkbox-group v-model="carAttrGroup">-->
<!--            <el-checkbox-->
<!--              class="option"-->
<!--              v-for="item in carAttr"-->
<!--              :label="item.id"-->
<!--              :key="item.id"-->
<!--            >{{item.name}}</el-checkbox>-->
<!--          </el-checkbox-group>-->
<!--          &lt;!&ndash; <a class="line-right option more">更多</a> &ndash;&gt;-->
<!--        </div>-->
<!--        <div class="line">-->
<!--          <span class="line-left">提车地点</span>-->
<!--          <el-cascader :options="areaList" v-model="area" :props="areaProp" clearable></el-cascader>-->
<!--          &lt;!&ndash; <a class="line-right option more">更多</a> &ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->


      <div class="bottom-line">
        <span class="search-title">极速拍</span>
        <el-input v-model="option.carNum_or_carVin" class="search" placeholder="请输入车牌号或者车架号">
          <el-button slot="append" type="primary" icon="el-icon-search" @click="search()" class="text-color"  style="background-color: rgba(51, 133, 255, 1);color: white"></el-button>
        </el-input>
<!--        <button class="search-button" @click="search()">搜索</button>-->
        <button class="search-button1" @click="reset()">重置</button>
        <div class="search-line">

        </div>
        <router-link to="/person/collect/pai" tag="button" class="shoucang">
          <div class="b-btn-title">竞拍收藏</div>
        </router-link>
        <router-link to="/person/myauction" class="jilu">
          <div class="b-btn-title">竞拍记录</div>
        </router-link>



        <div class="bulk">
          <el-button type="primary" @click="goBulk">批量报价</el-button>
        </div>
      </div>
    </div>
    <div class="prolist">
      <div class="inner">
        <product-big
          @click.native="toDetail(item.id)"
          class="pro-item"
          v-for="item in carList"
          :key="item.id"
          :imgsrc="item.cover"
          :title="item.title"
          :subtitle="item.brand_info+'丨'+item.car_number"
          :price="item.start_price?'￥'+item.start_price+'元':''"
          :end_time="item.end_time"
        ></product-big>
      </div>
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageSize"
        :current-page.sync="option.page"
        @current-change="getCarList"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import ProductBig from '@/components/ProductBig.vue'

export default {
  name: 'auction',
  components: { ProductBig },
  data () {
    return {
      hiddenText: '更多',
      hiddenWidth: 50 + 'px',
      carList: [],

      total: 0,
      pageSize: 0,
      areaLista: [],
      areaa: [],
      areaList: [],
      area: [],
      carCateGroup: [],
      carCate: [],
      carAttrGroup: [],
      carAttr: [],
      centerDialogVisible: false,
      orderTime: 2,
      okText: '确 定 ',
      disabled: true,
      rule: '',



      option: {
        auction_session_id: this.$route.query.id,
        tp: '',
        tc: '',
        ta: '',
        cp: '',
        carNum_or_carVin: '',
        cc: '',
        brand_info: [],
        car_type: '',
        page: 1
      },
      areaProp: {
        checkStrictly: true,
        lazy: true,
        lazyLoad: async function (node, resolve) {
          const { level } = node;
          try {
            const nodes = await this.getAreasp(node.data.tempValue)
            resolve(nodes)
          } catch (error) {
            const nodes = await this.getAreasp(1)
            resolve(nodes)
          }
        }.bind(this)
      }
    }
  },
  watch: {
    /* 监听提车地点选择 */
    area (val) {
      this.option.tp = val[0] ? val[0] : '',
        this.option.tc = val[1] ? val[1] : '',
        this.option.ta = val[2] ? val[2] : ''
      this.getCarList()
    },
    /* 监听车牌地点选择 */
    areaa (val) {
      this.option.cp = val[0] ? val[0] : '',
        this.option.cc = val[1] ? val[1] : ''
      this.getCarList()
    },
    /* 车品牌 */
    carCateGroup (val) {
      // let tempStr = val.toString().replace(/,/g, '|')
      this.option.brand_info = val
      this.getCarList()
    },
    /* 车属性 */
    carAttrGroup (val) {
      this.option.car_type = val
      this.getCarList()
    }
  },
  methods: {

    goBulk() {
      let id = this.$route.query.id
      window.open(`/auctionhome/blukauction?id=${id}`, '_blank')
    },

    /* 获取协议 */
    getXieyi () {
      this.$api.getSessionList().then(res => {
        let data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == this.option.auction_session_id) {
            this.rule = data[i].rule;
          }
        }
      })
    },
    /* 协议框 */
    xieyiModel () {
      this.centerDialogVisible = true
      let time = setInterval(() => {
        this.orderTime -= 1
        this.okText = `确 定 ${this.orderTime}`
        if (!this.orderTime) {
          this.disabled = false
          this.okText = '确 定'
          clearTimeout(time)
        }
      }, 1000);
      // this.disabled = false
      // this.okText = '确 定'
    },
    /* 重置 */
    reset () {
      this.carCateGroup = [],
        this.areaa = [],
        this.carAttrGroup = [],
        this.area = []
      this.option.carNum_or_carVin = []
      this.getCarList()
    },
    search () {
      this.getCarList()
    },
    /* 查看更多 */
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
      // this.$router.push('/auctionhome/auctiondetail?id=' + id)
      window.open(`/auctionhome/auctiondetail?id=${id}`, '_blank')
    },

    async getCarList (obj) {
      /* 判断分页 */
      let res = await this.$api.getSessionList(this.option)
      this.carList = res.data.data
      this.current_page = res.data.current_page
      this.total = res.data.total
      this.pageSize = res.data.per_page
    },
    /* 三级联动 */
    async getAreasp (id) {
      var tempArr = []
      let res = await this.$api.getAreas({ id: id })
      res.data.forEach(item => {
        tempArr.push({ tempValue: item.id, value: item.id, label: item.name })
      });
      return tempArr
    },
    getCarCategory () {
      this.$api.getCarCategory().then(res => {
        this.carCate = res.data
      })
    },
    getCarAttr () {
      this.$api.carAttribute().then(res => {
        this.carAttr = res.data
      })
    }
  },
  created () {
    let sessionId = this.$route.query.id
    if (sessionId) {
      this.getCarList()
    }
    this.getCarAttr()
    this.getCarCategory()
    this.getXieyi()
    this.xieyiModel()
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");

.auction {
  padding-top: 80px;
  background-color: #f5f5f7;
}
.rule-text {
  font-size: 16px;
  line-height: 20px;
}

.bottom-line {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .b-btn-title {
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);

    // line-height: 90px;
    position: absolute;
    top: 7px;
    left: 57px;
  }
  /*.bulk {*/
  /*  position: absolute;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*}*/

  .bulk {
    height: 42px;
    border-radius: 10px;
    .el-button {

      height: 42px;
    }
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

.more {
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
  color: rgba(239, 26, 26, 1);
  position: absolute;
  right: -30px;
}
.active {
}

.text-color {
  background-color: rgba(51, 133, 255, 1);
}

.option-card {
  box-sizing: border-box;
  width: @conent-width;
  // height: 430px;
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
  }
  .search {
    width: 356px;
    /*height: 47px;*/
    /*background: rgba(238, 238, 238, 1);*/
    /*border-radius: 10px;*/
    padding-left: 10px;
    box-sizing: border-box;
  }
  .search-button,
  .search-button1 {
    cursor: pointer;
    width: 122px;
    height: 42px;
    background: #29f56c;
    border-radius: 10px;
    text-align: center;
    /*margin-right: 20px;*/


    font-size: 22px;
    color: rgba(255, 255, 255, 1);
  }
  .search-line {
    height: 42px;
    margin: 0 20px;
    width: 2px;
    background-color: #c0c4cc;
  }
  .search-button1 {
    background: rgb(3, 112, 39);
  }
  .shoucang,
  .jilu {
    cursor: pointer;
    position: relative;
  }
  .shoucang {
    width: 209px;
    height: 42px;
    background: #fda82a;
    border-radius: 10px;
  }
  .jilu {
    width: 209px;
    height: 42px;
    background: #f75404;
    border-radius: 10px;
  }
}

/* 列表 */
.prolist {
  background-color: #fff;
  margin-top: 30px;
  padding: 20px;
  .inner:after {
    content: "";
    display: block;
    height: 0;
    width: 49%;
  }
  .inner {
    width: @conent-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: -20px;

    .pro-item {
      margin-bottom: 20px;

    }
  }
}
</style>
