<template>
  <div id="person-collect">
    <p class="person-big-title">我的收藏</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="竞拍收藏" name="pai">
        <div class="prolist">
          <div class="inner">
            <!-- <product-big @click.native="toDetail(item.auction_car_id,1)" class="pro-item" v-for="item in favList" :key="item.auction_car_id" :isPai="false"
						 :imgsrc="item.image" :title="item.title" :subtitle="$moment(item.end_time * 1000).format('YYYY')+'丨'+item.catid_text+'丨'+item.car_number"
						 :price="item.start_price+'元'"></product-big> -->

            <product-big
              @click.native="toDetail(item.auction_car_id, 1)"
              class="pro-item"
              v-for="item in favList.list"
              :key="item.auction_car_id"
              :isPai="false"
              :imgsrc="item.image"
              :title="item.title"
              :subtitle="
                item.catid_text +
                  '丨' +
                  item.car_number +
                  '丨' +
                  item.status_text
              "
              :price="item.start_price + '元'"
            ></product-big>
          </div>
        </div>

        <el-pagination
          background
          :page-size="20"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :page-count="this.favList.count"
        >
        </el-pagination>
      </el-tab-pane>

      <!-- <el-tab-pane label="买车收藏" name="buy">
				<div class="prolist">
					<div class="inner">
						<product-big @click.native="toDetail(item.car_id,2)" class="pro-item" v-for="item in bayList" :key="item.car_info.id"
						 :isPai="false" :imgsrc="item.car_info.img[0]" :title="item.car_info.title" :subtitle="item.car_info.carno+'丨'+item.car_info.city+'丨'+item.car_info.attribute"
						 :price="item.car_info.start_price+'元'"></product-big>
					</div>
				</div>
			</el-tab-pane> -->

      <!-- <el-tab-pane label="商品收藏" name="good"> -->
      <!-- <div class="prolist">-->
      <!--          <div class="inner">-->
      <!--            <product-big-->
      <!--              @click.native="toDetail"-->
      <!--              class="pro-item"-->
      <!--              v-for="item in 8"-->
      <!--              :key="item"-->
      <!--              :isPai="false"-->
      <!--              imgsrc="../assets/images/product.png"-->
      <!--              title="奥迪A4L 2015款 35 T..."-->
      <!--              subtitle="2016丨北京丨京A123**"-->
      <!--              price="15.00元"-->
      <!--            ></product-big>-->
      <!--          </div>-->
      <!--         </div> -->
      <!-- </el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import ProductBig from "@/components/ProductBig.vue";
export default {
  components: {
    ProductBig,
  },
  data() {
    return {
      activeName: "pai",
      favList: [],
      bayList: [],
      page: 0,
      ischang: true,
      auction_car_id: 0,
    };
  },
  created() {
    this.type = this.$route.params.type;
    this.getUserFavCar();
    this.getBayCarList();
  },
  beforeRouteUpdate(to, from, next) {
    this.activeName = to.params.type;
    next();
  },
  methods: {
    toDetail(id, type) {
      if (type == 1) {
        window.open(`index.html#/auctionhome/auctiondetail?id=${id}`, "_blank");
        // this.$router.push(`/auctionhome/auctiondetail?id=${id}`)
      } else if (type == 2) {
        window.open(`index.html#/cardetail?id=${id}`, "_blank");
        // this.$router.push(`/cardetail?id=${id}`)
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push(`/person/collect/${this.activeName}`);
    },
    /* 买车收藏列表 */
    getBayCarList() {
      this.$api
        .carLikeList({
          p: 1,
          row: 20,
        })
        .then((res) => {
          this.bayList = res.data;
        });
    },

    /* 竞拍收藏列表 */
    /* getUserFavCar() {
				let param = {
					page: this.page
				}
				this.$api.getUserFavCar(param).then(res => {
					this.favList = res.data
				})
				this.$router.push(`/person/collect/${this.activeName}`)
			},
			 */
    getUserFavCar() {
      this.$api
        .carLikeList({
          p: this.page,
          row: 20,
        })
        .then((res) => {
          this.favList = res.data;
          this.auction_car_id = res.data.list.auction_car_id;
          console.log(this.favList);
        });
      this.$router.push(`/person/collect/${this.activeName}`);
    },

    handleCurrentChange(options) {
      this.page = options;
      this.getUserFavCar();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");

#person-collect {
  background-color: #fff;
  // padding-top: 90px;
  // padding-bottom: 20px;
}

.collect-inner {
  // width: @conent-width;
  // margin: 0 auto;
}

.good-img {
  width: 90px;
  height: 90px;
  vertical-align: middle;
  padding-right: 30px;
  float: left;
}

.title {
  padding-bottom: 18px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  padding-top: 10px;
  // line-height:59px;
  text-align: left;
}

.sub-title {
  font-size: 13px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  text-align: left;
  // line-height: 59px;
}

/* 列表 */
.prolist {
  background-color: #fff;
  // margin-top: 30px;
  padding: 20px;

  .inner:after {
    content: "";
    display: block;
    height: 0;
    width: 49%;
  }

  .inner {
    // width: @conent-width;
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

/* 修改缩略图 */
.pro-item {
  width: 210px;
  height: 236px;

  /deep/.img,
  /deep/.img-box {
    height: 180px;
  }

  /deep/.pro-con {
    height: 65px;
    overflow: hidden;
  }

  /deep/.title {
    font-size: 15px;
  }

  /deep/.subtitle {
    font-size: 11px;
  }

  /deep/.pai-price {
    font-size: 12px;
  }

  /deep/.jingpai-line {
    font-size: 12px;
  }
}

/deep/.el-button + .el-button {
  margin: 0;
}

/deep/ .el-table thead {
  background: rgba(247, 247, 247, 1) !important;
  font-size: 15px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  // line-height:43px;
}

/deep/ .el-table th,
.el-table tr {
  background: rgba(247, 247, 247, 1) !important;
}

/deep/.el-table {
  color: #333 !important;
}
</style>
