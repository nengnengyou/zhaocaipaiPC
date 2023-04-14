<template>
  <div class="buy-store">
    <!-- 轮播 -->
    <el-carousel height="608px">
      <el-carousel-item v-for="item in this.info.shop.images" :key="item">
        <div
          class="ads"
          :style="{'background': 'url('+item+') no-repeat center center','background-size':'cover'}"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <div class="prolist">
      <div class="store-header">
        <div class="top">
          <span class="store-title">{{info.shop.shop_name}}</span>
          <!-- <el-rate disabled class="rate" v-model="info.level"></el-rate> -->
          <!-- <button class="enter-shop">投诉</button> -->
        </div>
        <div class="bottom">
          <!-- <span class="tag">{{info.list.car_category}}系列</span> -->
          <span class="localtion">{{info.shop.city+info.shop.address}}</span>
          <!-- <span class="count">共{{info.car_list.data.length}}件商品</span> -->
        </div>

        <el-divider></el-divider>
      </div>
      <div class="inner">
        <product-big
          @click.native="toDetail(item.id)"
          :isPai="false"
          class="pro-item"
          v-for="item in info.list"
          :key="item.id"
          :imgsrc="item.image[0]"
          :title="item.title"
          :subtitle="item.card_time+'丨'+item.city+'丨'+item.carno"
          :price="item.price+'元'"
        ></product-big>
      </div>
	<!--  <el-pagination style="margin: 0px auto;width: 480px;" @current-change="handleCurrentChange"  layout="prev, pager, next, jumper" :page-count="conunt" :pager-count='7'>
	  </el-pagination> -->
	  <div style="margin: 0 auto;
	  width: 530px;
	  text-align: center;">
	  		<el-pagination style="margin: 0px auto;width: 480px;" @current-change="handleCurrentChange"  layout="prev, pager, next, jumper" :page-count="conunt" :pager-count='7'>
	  		  </el-pagination>
	  	</div>
	  
      <!-- <el-pagination class="pages" background layout="prev, pager, next" :total="1000"></el-pagination> -->
    </div>
	
  </div>
</template>

<script>
import ProductBig from '@/components/ProductBig.vue'

export default {
  name: 'buy-store',
  components: { ProductBig },
  data () {
    return {
      info: {
		  shop:'',
	  },
      ads: [],
	  sid:'',
	  conunt:1,
	  p:1,
    }
  },
  created () {
    this.shopInfo()
  },
  methods: {
    toDetail (id) {
     // window.open(`/cardetail?id=${id}`, '_blank')
	  window.open(`index.html#/cardetail?id=${id}&sid=${this.sid}`, '_blank')
      // this.$router.push(`/cardetail?id=${id}`)
    },
    shopInfo () {
		this.sid=this.$route.query.sid
      let params = {
        shop_id: this.sid,
		p:this.p,		
      }
      this.$api.shopIndex(params).then(res => {
        this.info = res.data     
		
		// for(let i=0;i<this.info.list.length;i++){
		// 	let ings = this.info.list[i].image.split(",");
		// 	this.info.list[i].image=ings		
		// }
		
		// let ings = this.info.shop.image.split(",");
		 this.conunt=this.info.count
		// this.ads = ings
		console.log(this.info)
      })
    },
	
	//分页
	handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
		this.p = val
		this.shopInfo();
		document.body.scrollTop = document.documentElement.scrollTop = 0
	},
	
	
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.buy-store {
  background-color: #f5f5f7;
}
.bottom-line {
  display: flex;
  margin-bottom: 35px;
  align-items: flex-end;
}
.ads {
  width: 100%;
  height: 554px;
  background: url("../assets/images/banner.png") no-repeat center center;
  background-size: cover;
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
  text-decoration: underline;
  color: rgba(239, 26, 26, 1);
}
.active {
  background: rgba(51, 133, 255, 1);
  border-radius: 10px;
  color: #fff;
  line-height: 30px;
}

/* 列表 */
.prolist {
  background-color: #fff;
  // margin-top: 30px;
  padding: 20px;

  /* 店铺头 */
  .store-header {
    text-align: left;
    width: @conent-width;
    margin: 0 auto;
    .bottom {
      padding-top: 50px;
      position: relative;
    }
    .tag {
      width: 88px;
      height: 26px;
      border: 1px solid rgba(51, 133, 255, 1);
      position: absolute;
      top: 11px;
      font-size: 20px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51, 133, 255, 1);
      text-align: center;
      line-height: 26px;
    }
    .localtion,
    .count {
      font-size: 20px;
      font-family: PingFangSC-Regular;
      color: rgba(153, 153, 153, 1);
      // line-height: 566px;
    }
    .count {
      float: right;
    }
  }
  .store-icon {
    font-size: 26px;
  }
  .store-title {
    display: inline-block;
    padding: 0 50px 0 0px;
    font-size: 29px;
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

  .inner {
    width: @conent-width;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -20px;
    .pro-item {
      margin-bottom: 20px;
      margin-right: 12px;
    }
  }
}
</style>
