import { post, get, getArray } from "./axiosConfig";
export default {
  /*上传一条车友圈 */

  upquan(obj) {
    return post("/api/car_friend_circle/dynamic_add", obj);
  },

  upquanx(obj) {
    return post("/api/car_circle/release", obj);
  },

  /*车友圈点赞 */
  msgdianzan(obj) {
    return post("/api/car_friend_circle/praise", obj);
  },

  /*新车友圈点赞 */
  quandianzan(type, obj) {
    if (type) {
      return post("/api/car_circle/praise", obj);
    } else {
      return post("/api/car_circle/cancel_praise", obj);
    }
  },

  /*车友圈关注 */
  guanzhu(type, obj) {
    if (type) {
      return post("/api/car_circle/to_focus", obj);
    } else {
      return post("/api/car_circle/cancel_focus", obj);
    }
  },

  //服务订单列表 /api/fuwu/fuwuList

  /*车友圈 我的 */

  circlemy(obj) {
    return post("/api/car_circle/my", obj);
  },

  //删除我的 */
  delcirclemy(obj) {
    return post("/api/car_circle/delete_my", obj);
  },

  /*资讯点赞*/
  newsdianzan(obj) {
    return post("/api/news/addPraise", obj);
  },

  //评论 /api/car_circle/comment
  msgpinglun(obj) {
    return post("/api/car_circle/comment", obj);
  },

  getip() {
    return get("http://pv.sohu.com/cityjson");
  },
  getdingwei(obj) {
    return get("https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php", obj);
  },

  /* 获取车辆推荐 */
  likeCarList() {
    return get("/api/car/likeCarList");
  },
  /* 首页 幻灯片 */
  getUseBanner(objId) {
    return post("/api/home/index", objId);
  },
  /* 拍卖中心 */
  getSessionList(idObj) {
    if (idObj != undefined) {
      return post("/api/bidding/auction_session_index", idObj);
    } else {
      return post("/api/bidding/auction_session_index");
    }
  },

  //拍卖车列表
  getAuctionCar(idObj) {
    return post("/api/bidding/auction_car_index", idObj);
  },

  //车辆分类 /api/bidding/car_cate
  getCarCate(idObj) {
    return post("/api/bidding/car_cate", idObj);
  },

  //获取车辆详情
  carDetail(idObj) {
    return post("/api/bidding/car_info", idObj);
  },

  //投标报价
  bidadd(idObj) {
    return get("/api/bidding/add", idObj);
  },

  // 批量报价
  sendAddBid(objId) {
    return post("/api/bidding/add_bid", objId);
  },
  /* 获取提车地点 */
  getAreas(obj) {
    return post("/api/common/get_area", obj);
  },
  getCarCategory() {
    return get("api/Shop/carCategory");
  },
  getCarAttr() {
    return get("api/Area/getCarAttr");
  },
  /* 用户登录 */
  userLogin(userObj) {
    return post("/api/user/login", userObj);
  },
  // 用户退出登录
  userLogout(obj) {
    return get("/api/user/logout", obj);
  },

  /* 用户中心 */
  /* 竞拍收藏 */
  getUserFavCar(param) {
    return post("/api/auction/getUserFavCar", param);
  },
  getUserServeList(t, idObj) {
    if (t == 0) {
      return post("/api/fuwu/fuwuListByType", idObj);
    } else {
      return post("/api/fuwu/fuwuList", idObj);
    }
  },
  // getUserServeListTest (idObj) {
  //   return post('/api/fuwu/fuwuListByTypeTest',idObj)
  // },
  delUserFav() {
    return get("/api/auction/delUserFav");
  },
  addUserFav(idObj) {
    return post("/api/auction/addUserFav", idObj);
  },

  /* 个人中心 */
  getUserInfo() {
    return post("/api/index/index");
  },
  /* 用户注册 */
  duanxin(obj) {
    return post("/api/sms/send", obj);
  },
  register(obj) {
    return post("/api/user/register", obj);
  },

  /* 竞拍记录 */
  jingpaiJilu(obj) {
    return post("/api/index/bidding_list", obj);
  },

  // 获取竞拍结果
  jingpaiResult(obj) {
    return get("/api/index/bidding_car_info", obj);
  },

  /* 出价 */
  biddingAdd(obj) {
    return post("/api/bidding/add", obj);
  },

  //所有协议
  //shiyong=使用协议,qianbao=钱包说明,weizhang=违章查询协议,fuwu=服务购买协议,
  //baozheng=保证金使用说明,zhaocai=招财币使用说明,tuiguang=推广规则,weibao=维保查询协议,zunxiang=尊享服务提示
  getFuwuxieyi(obj) {
    return post("/api/home/agreement", obj);
  },

  /* 三方查询 类型 0:违章,1:维保,2:综合*/
  setFuwuIndent(obj) {
    return get("/api/fuwu/fuwu", obj);
  },

  /*获取查询订单号*/
  getFuwuIndent(obj) {
    return post("/api/fuwu/setFuwuIndent", obj);
  },

  setMessage(obj) {
    return post("/api/center/setMessage", obj);
  },

  /* 一系列体现接口 */

  drawBalance(obj) {
    return post("/api/moneybag/drawBalance", obj);
  },
  bondDraw(obj) {
    return post("/api/index/moneyRecharge", obj);
  },
  bondThaw(obj) {
    return post("/api/bond/bondThaw", obj);
  },

  /* 充值接口 */
  setMoneybagIndent(obj) {
    return post("/api/moneybag/setMoneybagIndent", obj);
  },
  bondRecharge(obj) {
    return post("/api/index/bondRecharge", obj);
  },

  /* 获取尊享服务 */
  vipList(obj) {
    return post("/api/Vip/vipList", obj);
  },

  /*申请尊享服务退保证金*/
  tuibaozhengjin(obj) {
    return post("/api/vip/expire", obj);
  },

  /* 开通等级 */
  upVip(obj) {
    return post("/api/Vip/upVip", obj);
  },

  /*续费尊享服务*/

  xufeiVip(obj) {
    return get("/api/vip/renew_vip", obj);
  },
  Vipsq(obj) {
    return get("/api/vip/sq", obj);
  },

  /* 分享 */
  Recommend(obj) {
    return post("/api/user/invite", obj);
  },
  getXieyi(obj) {
    return post("/api/fuwu/getXieyi", obj);
  },
  pingtaiMessage(obj) {
    return post("/api/center/pingtaiMessage", obj);
  },

  /* 支付密码 */
  checkhavepaypass(obj) {
    return post("/api/wuliu/checkhavepaypass", obj);
  },

  //设置支付密码功能
  setpaypass(obj) {
    return post("/api/center/doPayPassword", obj);
  },

  //修改手机号
  xiugaiMobile(obj) {
    return post("/api/user/changemobile", obj);
  },

  /* wechat支付 */
  WxpayInfo(obj) {
    return get("/api/moneybag/WxpayInfo", obj);
  },
  AliPayInfo(obj) {
    return get("/api/moneybag/AliPayInfo", obj);
  },

  // 获取订单状态
  checkyuepass(obj) {
    return get("/api/moneybag/checkOrderStatus", obj);
  },

  /* 查询维保信息 */
  fuwu(obj) {
    return post("/api/Fuwu/fuwu", obj);
  },

  //维保/综合信息：api/fuwu/result_info
  getweibao(obj) {
    return post("api/fuwu/result_info ", obj);
  },

  /*违章记录里面查询违章*/
  fuwuIfo(obj) {
    return post("/api/fuwu/fuwuInfo", obj);
  },
  balancepay(obj) {
    return post("/api/moneybag/balancepay", obj);
  },
  forget(obj) {
    return post("/api/user/resetpwd", obj);
  },

  /* 车品超市 */
  getGoods(obj) {
    return post("/api/Goods/getGoods", obj);
  },
  getGoodsCate(obj) {
    return post("/api/Goods/getGoodsCateWithPC", obj);
  },
  getGoodsDetail(obj) {
    return post("/api/Goods/getGoodsDetail", obj);
  },
  /* 商品规格 */
  getGoodsSpec(obj) {
    return post("/api/Goods/getGoodsSpec", obj);
  },
  getCommentList(obj) {
    return post("/api/Goods/getCommentList", obj);
  },
  submitOrder(obj) {
    return get("/api/goods/submitOrder", obj);
  },

  //商品界面结算 确认订单 /api/goods/confirmOrder

  confirm(obj) {
    return get("/api/goods/confirmOrder", obj);
  },

  /* 收获地址 */
  addressList(obj) {
    return get("/api/index/addressList", obj);
  },
  addAddress(obj) {
    return get("/api/index/addAddress", obj);
  },
  default_addr(obj) {
    return get("/api/index/default_addr", obj);
  },
  /* 删除地址 */
  deleteAddress(obj) {
    return get("/api/index/deleteAddress", obj);
  },
  /* 商品支付 */
  goodPay(obj) {
    return post("/api/Goods/pay", obj);
  },

  /* 购物车 */
  addCart(obj) {
    return post("/api/Goods/addCart", obj);
  },

  /* 美容保养 */
  baoyangIndex(obj) {
    return post("/api/Baoyang/index", obj);
  },

  /* 推荐专区车品超市栏位 */
  indexGoods(obj) {
    return post("/api/goods/indexGoods", obj);
  },
  seeCart(obj) {
    return post("/api/goods/seeCart", obj);
  },

  /* 购物车 */
  delCart(obj) {
    return post("/api/goods/delCart", obj);
  },
  desCart(obj) {
    return post("/api/goods/desCart", obj);
  },
  IncCart(obj) {
    return post("/api/goods/IncCart", obj);
  },
  getSelectMoney(obj) {
    return post("/api/goods/getSelectMoney", obj);
  },
  updateCartGoodNum(obj) {
    return post("/api/goods/updateCartGoodNum", obj);
  },
  submitCartOrder(obj) {
    return post("/api/Goods/submitCartOrder", obj);
  },
  getMyOrder(obj) {
    return post("/api/Goods/getMyOrder", obj);
  },
  /* 商品付款 */
  submitMyOrder(obj) {
    return post("/api/Goods/submitMyOrder", obj);
  },
  cancelOrder(obj) {
    return post("/api/goods/cancelOrder", obj);
  },
  confirmGetOrder(obj) {
    return post("/api/Goods/confirmGetOrder", obj);
  },

  /* 收货接口 */
  comment(obj) {
    return post("/api/Goods/comment", obj);
  },
  //商品评价
  postComment(obj) {
    return post("/api/goods/postComment", obj);
  },

  /* 买车 */
  carColor(obj) {
    return get("/api/shop/shop_color", obj);
  },
  carMileage(obj) {
    return get("/api/shop/shop_mileage", obj);
  },
  bayCarList(obj) {
    return post("/api/shop/car_list", obj);
  },
  carAttribute(obj) {
    return post("/api/shop/shop_attribute", obj);
  },

  carNoLike(obj) {
    return get("/api/bidding/cancel_favorite", obj);
  },
  carLike(obj) {
    return get("/api/bidding/add_favorite", obj);
  },
  carInfo(obj) {
    return post("/api/shop/car_info", obj);
  },

  shopList(obj) {
    return post("/api/shop/shopList", obj);
  },
  shopIndex(obj) {
    return post("/api/shop/shopIndex", obj);
  },
  /* 查询个人商铺信息 */
  shopInfo(obj) {
    return post("/api/shop/my_shop", obj);
  },
  carList(obj) {
    return post("/api/shop/shop_car_product", obj);
  },
  shopSettled(obj) {
    return get("/api/shop/shopSettled", obj);
  },
  upload_img(obj) {
    return post("/api/file/upload_img", obj);
  },

  shopExamineCause(obj) {
    return post("/api/shop/shopExamineCause", obj);
  },
  add_img(obj) {
    return get("/api/shop/edit_shop_images", obj);
  },
  delete_img(obj) {
    return post("/api/shop/delete_img", obj);
  },
  carAdd(obj) {
    return get("/api/shop/carAdd", obj);
  },

  /*车辆添加选择属性*/

  //汽车属性
  getCarAttribute(obj) {
    return post("/api/shop/shop_attribute", obj);
  },
  //汽车品牌
  getCarCategory(obj) {
    return post("/api/shop/shop_car_category", obj);
  },
  //汽车颜色
  getCarColor(obj) {
    return post("/api/shop/shop_color", obj);
  },
  // 汽车表显公里
  getCarMileage(obj) {
    return post("/api/shop/shop_mileage", obj);
  },
  // 汽车排放标准
  getCarPaifang(obj) {
    return post("/api/shop/shop_paifang", obj);
  },
  //汽车排量变速
  getCarPailiang(obj) {
    return post("/api/shop/shop_pailiang", obj);
  },

  carIsOnline(obj) {
    return post("/api/shop/carIsOnline", obj);
  },
  carDelete(obj) {
    return post("/api/shop/del_car", obj);
  },
  carEdit(obj) {
    return post("/api/shop/carEdit", obj);
  },
  editAvatar(obj) {
    return post("/api/user/profile", obj);
  },

  /* 物流服务 */
  save(obj) {
    return post("/api/wuliu/save", obj);
  },

  wuliu(obj) {
    return post("/api/wuliu", obj);
  },

  newGetList(obj) {
    return post("/api/news/getList", obj);
  },
  newGetInfo(obj) {
    return post("/api/news/getInfo", obj);
  },
  sendBeforeBack(obj) {
    return post("/api/Goods/sendBeforeBack", obj);
  },
  getMoneybagAgreement(obj) {
    return post("/api/moneybag/getMoneybagAgreement", obj);
  },
  carLikeList(obj) {
    return post("/api/index/favorite_list", obj);
  },

  getNotice(obj) {
    return post("/api/index/notice_index", obj);
  },

  getMoneyLog() {
    return post("/api/index/money_info");
  },

  //直播api  http://192.168.5.32

  //登录
  loginlive(obj) {
    return post("/api/user/login", obj);
  },

  //会员中心
  userzx(obj) {
    return post("/api/user/index", obj);
  },

  //获取直播列表
  getlivelist(obj) {
    return post("/api/t_live/get_live_list", obj);
  },

  //获取播流地址
  getplay(obj) {
    return post("/api/t_live/get_play_live_url", obj);
  },

  //获取直播间商品
  getshangpin(obj) {
    return get("/api/t_live/get_live_goods", obj);
  },

  //获取主播拍卖商品
  getpaishangpin(obj) {
    return get("/api/bidding_goods/goods_list", obj);
  },

  //拍物记录
  getpaiwujilu(obj) {
    return get("/api/bidding_goods/bidding_list", obj);
  },

  //直播间拍拍卖投标
  livetou(obj) {
    return get("/api/bidding_goods/bidding", obj);
  },

  //获取直播打赏商品
  getliwu(obj) {
    return post("/api/t_live/get_live_gift", obj);
  },

  //打赏主播
  dashang(obj) {
    return get("/api/t_live/reward_gift_log", obj);
  },

  //离开直播间
  outlive(obj) {
    return get("/api/t_live/leave_live_url", obj);
  },

  //绑定客户端链接
  bindingurl(obj) {
    return get("/api/t_live/bind", obj);
  },

  //发送消息
  sendNews(obj) {
    return post("/api/t_live/send", obj);
  },

  //车友圈

  // 动态列表

  getStatelist(obj) {
    return post("/api/car_friend_circle/state_list", obj);
  },

  //关注圈列表  已关注 /api/car_circle/focus

  getGuanlist(obj) {
    return post("/api/car_circle/focus", obj);
  },

  //热榜圈列表  热榜 /api/car_circle/hot

  getQuanlist(obj) {
    return post("/api/car_circle/hot", obj);
  },

  //新动态列表
  getStatelist2(obj) {
    return post("/api/car_circle/index", obj);
  },

  //资讯列表  /api/news/getList
  getNew(obj) {
    return post("/api/news/getList", obj);
  },

  //金额兑换招财币
  duihuanbi(obj) {
    return post("/api/user/transform", obj);
  },
  //我的招财币兑换记录
  getzhaocailog(obj) {
    return post("/api/user/my_transform_log", obj);
  },

  //申请发拍权限 /api/user_acution/auction_apply
  applyshooting(obj) {
    return post("/api/user_acution/auction_apply", obj);
  },

  //发拍申请 /api/user_acution/my_auction
  fapaishenqing(obj) {
    return post("/api/user_acution/my_auction", obj);
  },

  //发布车源(添加/修改) /api/user_acution/edit_car
  edit_car(obj) {
    return post("/api/user_acution/edit_car", obj);
  },

  //我的发布 /api/user_acution/my_car
  my_car(obj) {
    return post("/api/user_acution/my_car", obj);
  },

  //车辆详情 /api/user_acution/car_info
  usercar_info(obj) {
    return post("/api/user_acution/car_info", obj);
  },
  //上下架 /api/user_acution/up_lower
  onup(obj) {
    return post("/api/user_acution/up_lower", obj);
  },

  //申请流拍 /api/user_auction/apply_pass
  liupai(obj) {
    return post("/api/user_acution/apply_pass", obj);
  },

  //车辆列表 /api/user_acution/car_index
  shangjiache(obj) {
    return post("/api/user_acution/car_index", obj);
  },

  //发拍者车辆详情： user_car_info
  shangjiache2(obj) {
    return post("/api/user_acution/user_car_info", obj);
  },

  //投标 /api/user_acution/bidding
  shangjiatoubiao(obj) {
    return post("/api/user_acution/bidding", obj);
  },

  //批量导入 /api/report/import
  piliangdaoru(obj) {
    return post("/api/report/import", obj);
  },
  //检测列表 /api/report/index
  getjiancelist(obj) {
    return post("/api/report/index", obj);
  },

  //api/report/detail
  getjiancexx(obj) {
    return post("/api/report/detail", obj);
  },
  ///api/report/edit
  tijiaoxiugai(obj) {
    return post("/api/report/edit", obj);
  },

  //查维保 /api/report/chaWeibao
  chaweibao(obj) {
    return post("/api/report/chaWeibao", obj);
  },
  //查出险 /api/report/chaChuXian
  chachuxian(obj) {
    return post("/api/report/chaChuXian", obj);
  },

  tongji(obj) {
    return post("/api/Bidding/user_interest", obj);
  },

  // chatiaoshu (obj){
  // 	  return post('/api/fuwu/setFuwuIndent',obj)
  // },

  //大屏第一次打开
  bigScreanFirst(obj) {
    return post("/api/online_bidding/big_screan_first", obj);
  },

  //大屏
  bigScrean(obj) {
    return post("/api/online_bidding/big_screan", obj);
  },
  //绑定车和客户端链接 /api/online_bidding/bind
  bigBind(obj) {
    return post("/api/online_bidding/bind", obj);
  },

  //申请更换客服 api/user/change_kefu 参数：info = 申请原因
  changeKefu(obj) {
    return post("/api/user/change_kefu", obj);
  },
  //提现记录：api/user/draw_log  返回：type_text = 提现类型，status_text=审核状态 cause=退款原因
  tixianjilu(obj) {
    return post("/api/user/draw_log", obj);
  },
  //充值记录： api/user/recharge_log type_text = 提现类型，status_text=交易状态 ，pay_time=支付时间,create_time=创建时间
  chongzhijilu(obj) {
    return post("/api/user/recharge_log", obj);
  },
  //主营模块 /api/home/main_module
  getmokuai(obj) {
    return post("/api/home/main_module", obj);
  },
  //批次列表搜索
  getSearchList(obj) {
    return post("/api/home/auction_session_search", obj);
  },
  // 提车地列表车辆详情
  getCarSearchDetail(param) {
    return post("/api/bidding/acs_for_cpi", param);
  },
  // 提车地列表
  getAuctionCarSearch(param) {
    return post("/api/bidding/auction_car_search", param);
  },
};
