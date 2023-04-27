<template>
  <div class="auction-home" ref="auction_home">
    <!-- 协议 -->
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      title=""
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div style="height: 500px; overflow: auto;">
        <p v-html="xieyi"></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 进入批次前弹窗协议 -->

    <el-dialog
      :close-on-click-modal="false"
      :show-close="false"
      :close-on-press-escape="false"
      title="本批次竞拍规则及描述"
      v-if="piciVisible"
      :visible.sync="piciVisible"
      width="50%"
    >
      <div style="height: 400px; overflow: auto;">
        <p v-html="xieyi2.txt"></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="piciVisible = false">取 消</el-button>
        <el-button type="primary" @click="tiaozhuan2">同 意</el-button>
      </span>
    </el-dialog>

    <!-- 同意协议 -->
    <!-- <el-dialog :close-on-press-escape="false" :show-close="false" :destroy-on-close="false" :close-on-click-modal="false"
		 title="阅读协议" :visible.sync="centerDialogVisible" width="50%" center>
			<div class="blog-content" v-html="xieyi[0].content"></div>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" :disabled="disabled" @click="centerDialogVisible = false">{{okText}}</el-button>
			</span>
		</el-dialog> -->

    <!-- 轮播 -->
    <!-- 	<el-carousel :interval="6000" height="400px">
			<el-carousel-item v-for="item in ads" :key="item">
				<div class="ads" :style="{'background': 'url('+item+') no-repeat center center','background-size':'cover'}"></div>
			</el-carousel-item>
		</el-carousel> -->
    <!-- 轮播 -->

    <banner></banner>

    <div class="auctionhome">
      <div class="auctionhome_left">
        <!-- 上方筛选搜索 -->
        <div class="auctionhome_left_top">
          <div
            class="auctionhome_left_top1"
            style=" font-family: '宋体';font-weight: 700; "
          >
            <!-- <el-button type="primary" style="width: 96px;" @click='getResources()'>全部</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(1)'>二手车</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(2)'>债券车</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(3)'>事故车</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(4)'>商用车</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(7)'>新能源</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(5)'>公共资源</el-button>
						<el-button type="primary" style="width: 96px;" @click='getResources(6)'>新车直供</el-button> -->

            <el-radio
              style="margin: 0;background-color: #fff; "
              v-model="radio2"
              label="0"
              border
              size="medium"
              @change="getResources()"
              >全部</el-radio
            >
            <el-radio
              v-for="item in carfenlei"
              style="margin: 0;background-color: #fff; margin-left: 5px;"
              v-model="radio2"
              :label="item.id"
              border
              size="medium"
              @change="getResources(item.id)"
              >{{ item.name }}</el-radio
            >
            <!-- <el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="1" border size="medium"
						 @change="getResources(1)">二手车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="2" border size="medium"
						 @change="getResources(2)">债权车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="3" border size="medium"
						 @change="getResources(3)">打包二手车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="4" border size="medium"
						 @change="getResources(4)">商用车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="5" border size="medium"
						 @change="getResources(5)">事故车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="6" border size="medium"
						 @change="getResources(6)">新车</el-radio>
						<el-radio style="margin: 0;background-color: #fff; margin-left: 10px;" v-model="radio2" label="7" border size="medium"
						 @change="getResources(7)">新能源</el-radio> -->
          </div>

          <!-- 	<div class="auctionhome_left_top2">

						

					</div> -->

          <div class="auctionhome_left_top3">
            <!-- <div class="ahsearch">
              <div class="el-input el-input--suffix" style="width:540px;">
                <input
                  type="text"
                  autocomplete="off"
                  placeholder="输入车辆名称、批次号、车架号"
                  class="el-input__inner"
                  v-model="searchtext"
                />
                <span
                  @click="ahsearch(null, searchtext)"
                  class="el-input__suffix"
                  ><span class="el-input__suffix-inner">
                    <i class="el-input__icon el-icon-search"></i>
                  </span>
                </span>
              </div>
              <el-button
                type="primary"
                style="width: 99px;;"
                @click="ahsearch(null, searchtext, true)"
                >查询</el-button
              >
              <el-button
                type="primary"
                style="margin-left: 57px;width: 144px; background-color: #ffa509;"
                @click="goRecord"
                >竞拍记录</el-button
              >
            </div> -->
            <div style="margin-top: 15px;">
              <el-input
                placeholder="请输入车辆名称、批次号、车架号"
                v-model="searchtext2"
                class="input-with-select"
              >
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="批次" value="1"></el-option>
                  <el-option label="车辆" value="2"></el-option>
                </el-select>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="ahsearch()"
                ></el-button>
              </el-input>
            </div>
          </div>
        </div>

        <!--全部竞拍、正在竞拍-->

        <div
          class="auctionhome_left_zhong"
          style="width: 889px; margin-top: 11px;"
        >
          <div class="sort-bar">
            <div class="sort-orders">
              <div>
                <a
                  @click="
                    isd = true;
                    qiehuan('2');
                  "
                  :class="{ isdescending: isd }"
                  class="descending"
                  >正在竞拍</a
                >
                <a
                  @click="
                    isd = false;
                    qiehuan('');
                  "
                  :class="{ isdescending: !isd }"
                  class="descending"
                  >全部竞拍</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- 批次列表 -->
        <div class="auctionhome_left_nuv">
          <div class="left_nuv_item" v-loading="loading">
            <div v-if="num == 0" class="sousuokong">
              <span>
                对不起，没有你搜索的内容!
                <br />
                <span
                  style="font-size: 18px; color: #da002b;cursor: pointer;text-decoration: underline;"
                  @click="
                    isd = false;
                    qiehuan('');
                  "
                  >{{ isd ? "去全部竞拍看看>>" : "" }}</span
                >
              </span>
            </div>
            <div class="left_nuv_Auction_content">
              <!-- <div class="left_nuvcontent_item" v-for="(item,index) in package" :key="index" @click="tiaozhuan2(item.id)">

								<div class="auctionhome_item_left">
									<p style="font-size: 15px;display: block;height: 197px;overflow: hidden;" v-html="item.desc"></p>
									<span style="padding-left: 14px;">{{item.company}}</span>

								</div>

								<div class="auctionhome_item_right">
									<div style="float: left;">

										<p class="auctionhome_item-title">{{item.title}}</p>
										
										<div class="auctionhome_item-store">
											<div>
												竞拍方式:
												<span class="auctionhome_item-text">{{item.is_pack=="1"?"打包拍":""}}{{item.is_vip=="1"?"  会员拍":""}}{{"  "+item.status_text}}</span>
											</div>
										
										</div>
										<div class="auctionhome_item-store">											
											<div>
												开始时间:
												<span class="auctionhome_item-text"> {{timestampToTime(item.start_time)}} </span>
											</div>

											<div>结束时间:
												<span class="auctionhome_item-text"> {{timestampToTime(item.end_time)}} </span>
											</div>
											<div style="margin-top: 10px;">
												<span class="ispaimai"> {{isend(item.end_time)}}</span>
											</div>

										</div>

									</div>
									<div style="
								background-color: #008060; 
								color: #f6f6ea;
								width: 80px; 
								height:  102px; 
								float: right;
								text-align: center;">
										<p><span class="auctionhome_side-text">{{item.car_num}}</span></p>
										<p><span class="auctionhome_side-num">辆</span></p>


									</div>

								</div>

							</div> -->

              <div
                class="Auction_content_item"
                v-for="item in package"
                :key="item.id"
                @click="tiaozhuan2(item.id, item.start_time)"
              >
                <!-- @click="tiaozhuan2(item.id,item.start_time)" -->
                <!-- <div class="Auction_content_item" v-for="item in package" :key="item.id" @click="tanchutieyi(item.id,item.start_time,item.desc+item.rule)"> -->

                <div class="Auction_content_item_left">
                  <!-- <img src="../assets/images/jp_you2.jpg" alt=""> -->

                  <div
                    v-if="!isend(item.end_time)"
                    style="background-color:#919191; height: 60px; line-height: 60px; float: left; text-align: center; padding: 0px 10px;"
                  >
                    <span class="side-text">已结束</span>
                  </div>

                  <div
                    v-if="isend(item.end_time) && !isend(item.start_time)"
                    style="background-color:#ff9600; height: 60px; line-height: 60px; float: left; text-align: center; padding: 0px 10px;"
                  >
                    <span class="side-text">竞拍中</span>
                  </div>

                  <div
                    v-if="isend(item.end_time) && isend(item.start_time)"
                    style="width: 75px;background-color:#008060; height: 60px; line-height: 60px; float: left; text-align: center; padding: 0px 10px;"
                  >
                    <span class="side-text">预拍</span>
                  </div>
                </div>

                <div class="Auction_content_item_right">
                  <div style="float: left;">
                    <!-- <a style="flex-direction: none;" :href="'/index.html#/auctionhome/auction?id='+item.id">
											<p class="item-title">{{item.title}}</p>
										</a> -->

                    <p class="item-title">{{ item.title }}</p>
                    <div class="item-store_2">
                      <div>
                        <span class="item-text" style="padding: 0;"
                          >{{ item.is_pack == "1" ? "打包" : "单台"
                          }}{{ item.status_text
                          }}{{
                            item.is_vip == "1" ? " 会员拍" : ""
                          }}&nbsp;&nbsp;{{
                            item.second == 1 ? "二轮竞拍" : ""
                          }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <div
                    style="background-color:#0f94fa; height: 60px; line-height: 60px; float: right; text-align: center; padding: 0px 10px;"
                  >
                    <p>
                      <span class="side-text">{{ item.car_num }}辆</span>
                    </p>
                  </div>
                  <p
                    style="padding-top:5px;    font-size: 14px; color: #7d7d7d;   padding-left: 20px;display: block;height: 113px;width: 527px;overflow: hidden;float: left;"
                    v-html="item.desc"
                  ></p>

                  <div
                    style="padding-top: 10px; padding-left: 8px; float: left;display: flex;"
                  >
                    <div style="width: 138px;">
                      <span class="item-text">{{ item.company }}</span>
                    </div>
                    <div style="position: relative;width: 408px;">
                      <div
                        class="item-text"
                        style="position: absolute;right: 0px;"
                      >
                        结束时间:

                        <span class="item-text" style="color: #f42121;">
                          {{ timestampToTime(item.end_time) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!num == 0">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="20"
            layout="prev, pager, next, jumper"
            :total="this.num"
            style="margin: 0 auto; width: 566px;"
          >
          </el-pagination>
        </div>
      </div>

      <div class="auctionhome_right">
        <div class="auctionhome_right_top">
          <div class="right_top_zuo zzz" @click="souc = true">
            <b
              class="xuanzhongb"
              :style="souc ? 'border-bottom: 3px solid #1f9bde;' : ''"
              >我的收藏</b
            >
            <!-- :class="{you_active:souc}" -->
          </div>

          <div class="right_top_you zzz" @click="souc = false">
            <b
              class="xuanzhongb"
              :style="!souc ? 'border-bottom: 3px solid #1f9bde;' : ''"
              >我的提醒</b
            ><!-- :class="{you_active:!souc} -->
          </div>

          <!-- <div class="right_top_zuo zzz" style="" :class="{you_active:souc}" @click="souc =true">
						我的收藏

					</div>


					<div class="right_top_you zzz" :class="{you_active:!souc}" @click="souc =false ;">
						我的提醒

					</div> -->
        </div>

        <div
          class="auctionhome_right_txt"
          style="width: 300px;position: relative; background-color: rgb(251, 249, 249);"
        >
          <div class="right_top_sc" v-if="souc">
            <div
              v-if="souchang.length == 0"
              style="width: 161px; margin: 10px auto 0 auto;; padding: 159px 0;"
            >
              <span style="    font-family: cursive;">收藏列表空空如也~~~</span>
            </div>

            <div
              class="right_top_sc_item"
              v-for="item in souchang"
              :key="item.auction_car_id"
            >
              <div class="sc_item_img" style="float: left;">
                <img
                  v-if="item.image"
                  style="width: 100%;height: 100%;"
                  :src="item.image"
                  alt=""
                />
                <img
                  v-if="!item.image"
                  style="width: 100%;height: 100%;"
                  src="../assets/images/zanwutupian.png"
                  alt=""
                />
              </div>
              <div
                class="sc_item_txt"
                style="float: left;width: 192px;margin-left: 5px;"
              >
                <h5 style="margin: 0;">
                  <a
                    @click="goauction(item.auction_car_id)"
                    class="sc_item_txt_a"
                    >{{ item.title }}</a
                  >
                </h5>
                <!-- <h5 @click="goauction(item.auction_car_id)" style="width: 194px;cursor: pointer;   margin-left: 5px;  max-height: 54px;margin: 0;font-size: 16px;overflow: hidden;"> {{item.title}}</h5> -->

                <p
                  style="font-size: 12px; overflow: hidden; margin-left: 12px; position: absolute;    bottom: 7px;"
                >
                  {{ item.catid_text }}|{{ item.car_number }}|{{
                    item.status_text
                  }}
                </p>
              </div>
            </div>
            <div
              v-if="souchang.length != 0 && scgd"
              style="height: 20px;"
            ></div>
            <div
              v-if="souchang.length != 0 && scgd"
              class="gengduo"
              @click="goCollection"
            >
              更多>>
            </div>
          </div>

          <div class="right_top_tx" style="padding-top: 15px;" v-if="!souc">
            <el-timeline :reverse="false">
              <el-timeline-item
                v-for="(activity, index) in tongzhi"
                :key="index"
                :timestamp="activity.create_time"
              >
                <p>{{ activity.content }}</p>
              </el-timeline-item>
            </el-timeline>

            <!-- <div class="right_top_sc_item" style="border-bottom: 1px solid;" v-for="item in tongzhi" :key="item.id">

							<div class="sc_item_txt" style="float: left;">
								<h5 style="margin: 0px;padding: 5px 0px 0px;">
									<p style="    width: 283px;
						height: 57px;
						overflow: hidden;">{{item.content}}</p>
								</h5>

								<p style="position: absolute; right: 3px;bottom: 3px;">{{item.create_time}}</p>

							</div>

						</div>
						<div style="height: 20px;"></div>
						<div class="gengduo" @click="gotongzhi"> 更多>></div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Areaa from '@/components/Area.vue'
//import Product from '@/components/Product.vue'
import banner from "./banner.vue";
export default {
  name: "auction-home",
  /*components: {
			Areaa,
			Product,
		},*/

  components: {
    banner,
  },

  data() {
    return {
      searchtext2: "",
      select: "",
      loading: true,

      isd: true,
      type: "2",

      radio2: "0",

      //搜索框内容
      searchtext: "",

      activeName2: "first",
      souc: true,

      refresh: true,
      shishi: [],
      ads: [],
      disabled: true,
      centerDialogVisible: false,
      yupai: [],
      dialogVisible: false,
      xieyi: "",
      orderTime: 2,
      okText: "确 定 ",

      //显示数组
      package: [],

      //总数组
      Zpackage: [],

      num: 0,
      p: 1,

      scgd: false,

      //页数
      currentPage1: 1,

      souchang: [],

      tongzhi: [],

      //资源包协议
      piciVisible: false,
      xieyi2: {
        id: "",
        time: "",
        txt: "",
      },

      //车辆分类
      carfenlei: "",
    };
  },

  mounted() {
    if (this.$route.query.id != null && this.$route.query.id != "") {
      let id = this.$route.query.id;
      this.radio2 = id;
      this.getResources(id);
    } else {
      this.getResources();
    }

    //this.getSessionList1()
    //this.getSessionList()
    //this.getUseBanner()
    //this.getXieyi()
    this.xieyiModel();
    this.getCarCate();
    //收藏列表
    this.getCollection();
    this.getNotice();

    /* 刷新计时器 */
    setInterval(() => {
      this.refresh = !this.refresh;
    }, 1000);
  },

  created() {
    // if (this.$route.query.id != null || this.$route.query.id != '') {
    // 	let id = this.$route.query.id
    // 	this.radio2 = id
    // 	this.getResources(id)
    // } else {
    // 	this.getResources()
    // }
    // //this.getSessionList1()
    // //this.getSessionList()
    // //this.getUseBanner()
    // //this.getXieyi()
    // this.xieyiModel()
    // //收藏列表
    // this.getCollection()
    // this.getNotice()
    // /* 刷新计时器 */
    // setInterval(() => {
    // 	this.refresh = !this.refresh
    // }, 1000);
  },

  methods: {
    //获取车辆分类
    getCarCate() {
      this.$api.getCarCate().then((res) => {
        // console.log(res, "2222222222");
        this.carfenlei = res.data.list;
        // console.log(res, "2222222222");
      });
    },

    //切换正在竞拍和全部
    qiehuan(type) {
      this.p = 1;
      //this.isd=!this.isd
      this.type = type;
      this.getResources();
    },

    //收藏列表车辆详情跳转
    goauction(id) {
      //this.$route.push('/auctionhome/AuctionDetail?id=' + id)
      window.open("#/auctionhome/AuctionDetail?id=" + id);
    },

    //获取通知列表
    getNotice() {
      this.$api.getNotice().then((res) => {
        for (let i = 0; i < 8; i++) {
          //console.log(res)
          this.tongzhi.push(res.data[i]);
        }
      });
    },

    //获取收藏列表
    getCollection() {
      this.$api
        .carLikeList({
          p: 1,
          row: 5,
        })
        .then((res) => {
          this.souchang = res.data.list;
          if (res.data.count > 1) {
            this.scgd = true;
          } else {
            this.scgd = false;
          }
          //console.log(res);
        });
    },

    //页数跳转↓
    handleCurrentChange(val) {
      this.p = val;
      this.getResources();

      // this.package.length = 0;
      // let i = val * 30;
      // let y = i - 30;
      // //let x=i-this.Zpackage.length;
      // if (i - this.Zpackage.length > 0) {
      // 	for (; y < this.Zpackage.length; y++) {
      // 		//console.log('1');
      // 		this.package.push(this.Zpackage[y]);
      // 	}

      // } else {
      // 	for (; y < i; y++) {
      // 		//console.log('2');
      // 		this.package.push(this.Zpackage[y]);
      // 	}
      // }
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      //this.$refs.auction_home.scrollTop=0;

      //console.log(`当前页: ${val}`);
    },
    //页数跳转↑

    //资源包跳转前的同意协议
    tanchutieyi(id, time, txt) {
      this.xieyi2.id = id;
      this.xieyi2.time = time;
      this.xieyi2.txt = txt;
      //this.piciVisible=true
    },

    //资源包的跳转
    tiaozhuan2(id, time) {
      // this.piciVisible=false
      // id=this.xieyi2.id
      // time=this.xieyi2.time

      this.$api.tongji({ cat_id: id });
      if (this.isend(time)) {
        this.$message.warning("预拍资源包暂不能打开");
      } else {
        // this.$router.push('auctionhome/auction?id=' + id);
        window.open("#/auctionhome/auction?id=" + id, "_blank");
      }
      //this.$router.push('auctionhome/auction?id=' + id);
    },

    //右边收藏与提醒的切换
    dianji() {
      this.souc = !this.souc;
    },

    //搜索
    ahsearch() {
      //   console.log(this.select);
      this.$api
        .getSearchList({
          title: this.searchtext2,
          type: this.select,
        })
        .then((res) => {
          // let p = [];
          var p2 = [];
          // console.log(res);
          for (let key in res.data.list) {
            // let p = res.data.list[key];
            // console.log(res.data.list[key]);
            for (let i in res.data.list[key]) {
              //   var p2 = [];
              p2.push(res.data.list[key][i]);
              //   console.log(res.data.list[key][i]);
            }
            // p.push(res.data.list[key]);
          }
          //   console.log(p2);

          this.package = p2;
          this.num = this.package.length;
        });
      this.searchtext2 = "";
      // console.log(this.package);
      //console.log(20);
    },

    //获取资源包
    getResources(id, company, t) {
      //console.log(this.searchtext);
      //console.log(company);

      /* if (t&&company!="") {
					this.radio2 = '8'
				} */
      this.loading = true;
      //this.num=0
      if (id) {
        this.p = 1;
        this.currentPage1 = 1;
      }
      // id!=""?this.p=1:'';
      this.package.length = 0;
      //this.currentPage1 = 1;
      this.$api
        .getSessionList({
          type: this.type,
          catid: this.radio2, // id,
          company: this.searchtext, // company,
          p: this.p,
          row: 20,
        })
        .then((response) => {
          console.log(response, 111111111111);
          //console.log(response.data.lest.data.length);
          // this.Zpackage.length = 0;
          this.package.length = 0;
          //   this.num = response.data.list;
          // console.log(this.num);
          // this.Zpackage = response.data.list.data;
          this.package = response.data.list.data;
          this.num = this.package.length;
          // console.log(this.package.length);
          // this.Zpackage = this.sortKey(this.Zpackage, 'end_time')
          this.package = this.sortKey(this.package, "end_time");
          //console.log(this.Zpackage);
          this.loading = false;

          /* if (this.Zpackage.length <= 0) {
						return
					}
					let max = this.Zpackage.length

					if (max >= 30) {
						max = 30;
					}

					for (let i = 0; i < max; i++) {
						this.package.push(response.data.list.data[i])
					} */

          // this.package = this.sortKey(this.package, 'end_time')

          //console.log(this.package);

          //console.log(this.package);
          //console.log("********************");
          //console.log(this.package[3].id)
          //return;
        });
    },

    sortKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },

    /*是否结束*/
    isend(endtime) {
      //var time = this.time.endtime;
      //console.log(111)

      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var end = endtime * 1000;
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime > 0) {
        return true;
      } else {
        return false;
      }
    },

    isCarsShow(time) {
      let currentTime = Date.parse(new Date());
      currentTime = currentTime / 1000;
      return currentTime < time;
    },

    /* 获取协议 */
    getXieyi() {
      this.$api
        .getFuwuxieyi({
          name: "shiyong",
        })
        .then((res) => {
          this.xieyi = res.data.content;
        });
    },
    /* 协议框 */
    xieyiModel() {
      //this.dialogVisible = true
      let time = setInterval(() => {
        this.orderTime -= 1;
        this.okText = `确 定 ${this.orderTime}`;
        if (!this.orderTime) {
          this.disabled = false;
          this.okText = "确 定";
          clearTimeout(time);
        }
      }, 1000);
    },
    /* 获取幻灯片 */
    async getUseBanner() {
      let ads = await this.$api.getUseBanner({
        typeid: 4,
      });
      this.ads = ads.data.map((item) => item.image);
    },
    toDetail(id) {
      // this.$router.push(`/auctionhome/auctiondetail?id=${id}`)
      window.open(`#/auctionhome/auctiondetail?id=${id}`, "_blank");
    },

    //收藏列表
    goCollection() {
      window.open(`#/person/collect/pai`, "_blank");
    },

    //通知中心
    gotongzhi() {
      window.open(`#/person`, "_blank");
    },

    //竞拍记录
    goRecord() {
      //let id = this.$route.query.id
      window.open(`#/person/myauction`, "_blank");
    },

    /*async getSessionList() {
				let res = await this.$api.getSessionList1()
				let resData = res.data;
				res.data.forEach((item, index) => {
					this.$api.getSessionList({
						auction_session_id: item.id,
						type: 1
					}).then(result => {
						if (item.status_text == '实时拍' || item.status_text == '竞拍结束') {
							item.carList = result.data.data
							// this.shishi.push(item)
							resData[index].carList = result.data.data;

						} else {
							item.carList = result.data.data
							this.yupai.push(item)
						}
					})
				});
				this.shishi = resData;

			},*/

    /* countTime(time, nowTimea) {
				//获取当前时间
				var date = new Date();
				var now = date.getTime();
				//设置截止时间
				var end = time * 1000;
				//时间差
				var leftTime = end - now;
				//定义变量 d,h,m,s保存倒计时的时间
				if (leftTime >= 0) {
					var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
					var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
					var m = Math.floor(leftTime / 1000 / 60 % 60);
					var s = Math.floor(leftTime / 1000 % 60);
				}
				//递归每秒调用countTime方法，显示动态时间效果
				setTimeout(this.countTime, 1000);
				return ([d, h, m, s])
			}, */

    //时间戳转换
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h =
        date.getHours() < 10
          ? "0" + date.getHours() + ":"
          : date.getHours() + ":";
      var m =
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + ":"
          : date.getMinutes() + ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input-group__append,
/deep/.el-input-group__prepend {
  width: 60px;
}

.auction-home {
}

.blog-content {
  height: 500px;
  overflow-y: scroll;
}

.ads {
  width: 100%;
  height: 554px;
  background: url("../assets/images/banner.png") no-repeat center center;
  background-size: cover;
}

.pai-card {
  height: 365px;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
}

/* 修改子组件样式 */
.pro {
  display: inline-block;
  width: 299px !important;
  height: 100% !important;

  /deep/ .img-box,
  /deep/ .img {
    width: 100%;
    height: 210px !important;
  }

  /deep/ .pro-con {
    height: 138px !important;
  }

  /deep/ .title {
    font-size: 22px !important;
  }

  /deep/ .subtitle {
    font-size: 17px !important;
  }

  /deep/ .price {
    font-size: 22px !important;
  }
}

.left-info {
  width: 430px;
  height: 100%;
  padding: 20px;
  position: relative;
  text-align: left;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  box-sizing: border-box;
  float: left;

  .title {
    font-size: 34px;
    color: rgba(51, 51, 51, 1);
  }

  .count {
    font-size: 20px;
    color: rgba(102, 102, 102, 1);
    position: absolute;
    top: 54px;
    right: 20px;
    display: inline-block;
    // line-height:35px;
  }

  .content-box {
    width: 100%;
    overflow: hidden;
    height: 195px;
  }

  .content {
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
    top: 46px;
    right: 26px;
  }

  .time {
    font-size: 14px;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 35px;
  }

  .timenum {
    display: inline-block;
    width: 37px;
    height: 42px;
    background: rgba(236, 27, 60, 1);
    border-radius: 10px;
    text-align: center;
    font-size: 26px;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}

.right-more {
  cursor: pointer;
  width: 166px;
  height: 100%;
  background: rgba(51, 133, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  display: inline-block;
  font-size: 23px;
  float: right;

  .auction-more {
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    display: inline-block;
    width: 50px;
    margin-top: 75%;
    margin-left: 20%;
    font-size: 23px;
  }

  .right {
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    display: inline-block;
    width: 50px;
    margin-top: -75%;
  }
}

.auctionhome {
  width: 1220px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid #ccc;
  //border-top: none;
  position: relative;
}

.auctionhome_left {
  margin-left: 10px;
}

.auctionhome_left_top {
  margin-top: 10px;
  width: 889px;
  padding-top: 11px;
  //padding-left: 74px;
  padding-bottom: 24px;
  //background-color: darkgray;
  background-color: #eeeeee;
}

.auctionhome_left_top1,
.auctionhome_left_top2,
.auctionhome_left_top3 {
  padding-top: 10px;
  padding-left: 15px;
}

.auctionhome_left_nuv {
  width: 890px;
  margin-top: 13px;
}

.left_nuv_Auction_content {
  /*width: 80%;*/
  /*height: 515px;*/
  min-height: 50vh;
  margin: 0 auto 0 auto;
  //background-color: bisque;
}
.sousuokong {
  text-align: center;
  font: 22px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}

.left_nuvcontent_item {
  cursor: pointer;
  background-color: #373b41;
  height: 220px;
  /*width: 95%;*/
  /*margin: 0 auto 22px auto;*/
  border: 2px solid #dcdcdc;
  margin-bottom: 14px;
}

.left_nuvcontent_item:hover {
  border: 2px solid #800019;
}

.Auction_content_item:hover {
  border: 2px solid #800019;
}

.auctionhome_item_left {
  float: left;
  width: 50%;
  height: 100%;
  background-color: #1469e2;
  overflow: hidden;
}

.auctionhome_item_right {
  float: left;
  width: 50%;
  height: 100%;
  background-color: #a9a9a9;
}

.auctionhome_item-title {
  display: block;
  padding-top: 20px;
  padding-left: 20px;
  line-height: 30px;
  text-align: left;
  width: 387px;
  color: #1b1b1b;
  font-size: 20px;
  font-weight: 700;
}

.auctionhome_item-store {
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 12px;
}

.auctionhome_item-text {
  padding-left: 14px;
}

.auctionhome_side-num {
  font-size: 34px;
  width: 80px;
  text-align: center;
  font-family: Tahoma;
}

.auctionhome_side-text {
  font-size: 34px;
  font-weight: 700;
  width: 80px;
  text-align: center;
}

.ispaimai {
  font-size: 27px;
  color: #800019;
}

/****************************/
.auctionhome_right {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 300px;
  /*height: 500px;
		background-color: #85CE61;*/
}

.auctionhome_right_top {
  display: flex;
  //background-color: #85CE61;
  background-color: #eeeeee;
}

.zzz {
  width: 95px;
  /* height: 50px; */
  // background: blanchedalmond;
  //background: #fdb93f;
  margin: 22px;
  /* padding: 19px; */
  text-align: center;
  justify-content: center;
  padding: 13px;
  cursor: pointer;
  border-radius: 10px;
}

.you_active {
  // background-color: #CF9236;
  background-color: #f28317;
  // background: none;
  color: #fff;
}

.right_top_sc_item {
  width: 95%;
  height: 88px;
  //background-color: #85B6FF;
  padding-bottom: 8px;
  position: relative;
  margin: 0 auto;
  margin-top: 7px;
  //cursor: pointer;
  border-bottom: 0.5px solid rgb(200 200 200);
  // border: 0.5px solid rgba(200, 200, 200, 0);
}

// .right_top_sc_item:hover {
// 	border: 0.5px solid #800019;
// }

.right_top_sc_item .sc_item_img {
  height: 100%;
  width: 30%;
  //background-color: #000000;
}

.gengduo {
  // width: 56px;
  // float: right;
  // margin-top: 10px;
  // cursor: pointer;
  width: 56px;
  cursor: pointer;
  bottom: 0;
  right: 0;
  position: absolute;
}

/******/
.Auction_content_item {
  cursor: pointer;
  //background-color: #373B41;
  height: 220px;
  //width: 95%;
  margin: 0 auto 22px auto;
  border: 2px solid #dcdcdc;
}

.Auction_content_item_left {
  float: left;
  width: 326px;
  height: 100%;
  //background-color: #1469E2;
  background-image: url(../assets/images/jp_you2.jpg);
}

.Auction_content_item_right {
  float: right;
  width: 560px;
  height: 100%;
  background-color: #eeeeee;
}

.item-title {
  display: block;
  padding-top: 12px;
  padding-left: 20px;
  line-height: 30px;
  text-align: left;
  width: 400px;
  color: #1b1b1b;
  font-size: 24px;
  font-weight: 700;
}

.item-store_2 {
  padding-left: 20px;
  padding-top: 4px;
  //padding-bottom: 10px;
}

.item-text {
  padding-left: 14px;
  font-size: 20px;
  color: #434343;
}

.side-text {
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  //width: 80px;
  text-align: center;
}

.sc_item_txt .sc_item_txt_a:hover {
  text-decoration: underline;
  color: #1f9bde;
}

a:visited {
  color: #000;
}

.sc_item_txt_a {
  cursor: pointer;
  margin-left: 5px;
  max-height: 54px;
  margin: 0;
  text-decoration: none;
  font-size: 16px;
  overflow: hidden;
}

.sort-bar {
  border: 1px solid #dedede;
  background-color: #eeeeee;
}

.sort-orders {
  text-align: left;
  font-size: 16px;
}

.sort-orders a {
  display: inline-block;
  padding: 12px 24px;
  vertical-align: middle;
  color: #333;
  border-right: 1px solid #dedede;
  text-decoration: none;
  cursor: pointer;
  *display: inline;
  *zoom: 1;
  *margin-right: 0;
}
.isdescending {
  background-color: #fff;
  color: #800019;
}

.sort-orders a:hover {
  color: #800019;
  //background-color: #fff;
}
/deep/ .Scene ul {
  margin-top: 5px;
  width: auto;
}

.xuanzhongb {
  font-size: 18px;
}
</style>
