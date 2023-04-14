#### 首页车品超市栏位展示3个 以及招财生活中车品超市栏位和不良资产栏位
    url:api/Goods/indexGoods
    	method:get
    	参数
    	num 不传默认展示3个 传入num可获取指定的数据集个数
        is_buliang 是否筛选不良资产 0否 1是
    {
        "code": 1,
        "msg": "操作成功",
        "data": [
            {
                "id": 20,
                "title": "智能类1",
                "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                "showprice": "60.00",
                "address_p": "山东省",
                "address_c": "聊城市"
            }
        ]
    }
    
###美容保养列表
    url:api/Baoyang/index
    	method:get
    	参数
    	keywords 搜索关键字
        
    {
        "code": 1,
        "msg": "操作成功",
        "data": {
            "total": 1,
            "per_page": 10,
            "current_page": 1,
            "last_page": 1,
            "data": [
                {
                    "title": "汽车美容保养店3",
                    "address": "济南市区",
                    "img": "http://auction.jzbwlkj.com/upload/admin/20190605/c61168c8b9a50f11da9c8a6ec0316a36.jpg"
                }
            ]
        }
    }  

##车品超市

####获取车品超市商品分类	
	url:api/Goods/getGoodsCate
	method:get
	参数
	pid  父级id 为空默认获取一级分类 
	{
	    "code": 1, 
	    "msg": "操作成功",
	    "data": [
	        {
	            "id": 3,        分类id
	            "parent_id": 1, 
	            "name": "秋冬坐垫", 分类名称
	            "list_order": 11,  
	            "img": "http://auction.jzbwlkj.com/upload/admin/20190523/63d365425146c47a057c827bce1e31a5.jpg", 封面
	            "status": 1 
	        }
	    ]
	}
		 
####获取车品超市商品列表 和 不良资产商品列表

	url:api/Goods/getGoods
	method:get
	参数
	is_buliang 是否筛选不良资产 0否 1是
	cid  分类id
	keyword 搜索关键字
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": [
	        {
	            "id": 20,
	            "title": "长长的描述",
	            "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
	            "showprice": "60.00"
	        }
	    ]
	}
		
####获取商品基本信息
	 
	url:api/Goods/getGoodsDetail
	method:get
	参数
	id  商品id
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": {
	        "id": 19,
	        "title": "高级汽车脚垫", 
	        "banner": [幻灯片
	            "http://auction.jzbwlkj.com/upload/admin/20190521/55ae3fb26dcc3e3bc5d94e022e3f6f1e.png",
	            "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg"
	        ],
	        "showprice": "100.00", //展示价格
	        "postage": "0", 邮费 
	        "content": "<p>高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1高级汽车脚垫1</p>", 图文详情
	        "address_p": "湖北省", 发货地省
	        "address_c": "天门市", 发货地市
	        "spec_type_id":2 商品规格类型id 获取商品规格使用
	        "status": 1 
	    }
	}
	
####获取商品全部规格
	 
	url:api/Goods/getGoodsSpec
	method:get
	参数
	spec_type_id  在获取商品基本信息传入
	 
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": [
	        {
	            "attr_name": "颜色",
	            "list": [
	                {
	                    "id": 1,
	                    "type_id": 1,
	                    "attr_id": 1,
	                    "attr_name": "颜色",
	                    "attr_value": "红色"
	                },
	                {
	                    "id": 3,
	                    "type_id": 1,
	                    "attr_id": 1,
	                    "attr_name": "颜色",
	                    "attr_value": "紫色"
	                }
	            ]
	        },
	        {
	            "attr_name": "大小",
	            "list": [
	                {
	                    "id": 6,
	                    "type_id": 1,
	                    "attr_id": 2,
	                    "attr_name": "大小",
	                    "attr_value": "大"
	                },
	                {
	                    "id": 7,
	                    "type_id": 1,
	                    "attr_id": 2,
	                    "attr_name": "大小",
	                    "attr_value": "小"
	                }
	            ]
	        }        
	    ]
	}

 
####获取该商品规格价格和库存
	url:api/Goods/getGoodsPrice
	method:get
	参数
	goods_id 商品id
	spec_str 规格根据获得的规格 依次 组合 id 以_链接 结尾  例子：8_6_1_
	 
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": {
	        "stock": 2,     库存
	        "price": "120.00" 价格
	        "image": "http://auction.jzbwlkj.com/upload/admin/20190603/3702f78ce09d3fd2c71aef75804be77b.jpg" 该规格的图片路径
	    }
	}
 
####加入购物车
 
	url:api/Goods/addCart
	method:get
	参数
	goods_id 商品id
	spec_str 规格根据获得的规格 依次 组合 id 以_链接 结尾  例子：8_6_1_
	num      加入的数量 默认为1
	 
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": ""
	}
 
####查看购物车
	
	url:api/Goods/seeCart
	method:get
	
	{
	    "code": 1,
	    "msg": "操作成功",
	    "data": {
	        "totalMoney": "820.00",总价格
	        "marketDatas": [
	            {
	                "id": 5,
	                "uid": 1,
	                "goods_id": 18,
	                "spec_str": "内嵌式",
	                "title": "智能导航1",
	                "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
	                "price": "260.00",
	                "num": 3
	            }
	        ]
	    }
	}
####获取购物车选中的价格
	
	url: api/Goods/getSelectMoney
	method:get
	参数
	购物车商品id id数组集合 selectGoodsId[]
	 
	{
	    "code": 1,
	    "msg": "ok",
	    "data": "820.00" 总价格
	}
 
####购物车界面 商品+1

	url: api/Goods/IncCart
	method:get
	参数
	购物车商品id 
	商品数量num 不传默认每次+1
	````
	````
	{
	    "code": 1,
	    "msg": "ok",
	    "data": ""
	}
 
####购物车界面 商品-1
 
	url: api/Goods/desCart
	method:get
	参数
	购物车商品id 
	 
	 {
	     "code": 1,
	     "msg": "ok",
	     "data": ""
	 }
####购物车界面 批量删除商品
    url: api/Goods/delCart
    method:post
    参数
    购物车商品id[] id数组集合
     
     
    {
        "code": 1,
        "msg": "删除成功",
        "data": ""
    }
    
####获取默认收货地址
    url: api/Goods/getDefaultAddr
    method:get
    {
        "code": 1,
        "msg": "ok",
        "data": {
            "id": 6,
            "user_id": 14,
            "user_name": "张三",
            "mobile": "15210437600",
            "area": "山东省 济宁市 兖州市",
            "address": "永华新百汇",
            "create_time": 1558419106,
            "default_addr": 1
        }
    }
####商品界面结算 确认订单
    url: api/Goods/confirmOrder
        method:get
        参数
        goods_id 商品id
        spec_str 规格组合
        stock 数量
        usedabi 是否使用代币 0为不使用 1为使用 可省略 默认为使用
    {
      "code": 1,
      "msg": "操作成功",
      "data": {
          "goods_id": 19,   商品id
          "spec_str": "9_6_1_", 规格组合
          "stock": 2, 购买数量
          "price": "120.00", 单价
          "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg", 封面图
          "title": "高级汽车脚垫1", 标题
          "token_money": 30, 代币个数
          "postage": "20", 邮费
          "spec_name": "女-大-红色", 选择规格
          "goods_money": "240.00", 商品总价
          "dikouMoney": "0.41", 抵扣价格
          "money": "259.59" 最终价格
      }
    }
                  
####提交订单
    url: api/Goods/submitOrder
        method:get
        参数
        goods_id 商品id
        spec_str 规格组合
        stock 数量
        usedabi 是否使用代币 默认是 0为不使用
        addressid 地址id

    {
        "code": 1,
        "msg": "ok",
        "data": {
            "id": "2",  订单id
            "money": "1459.59" 支付金额
        }
    }
    
#### 购物车进入结算界面
     url: api/Goods/confirmCartOrder
        method:get
        参数
        id[] 购物车商品id组
        
    {
        "code": 1,
        "msg": "操作成功",
        "data": {
            "dikoumoney": "0.41",   抵扣金额
            "goodsAllMoney": "520", 商品费用
            "postageMoney": 0,      邮费
            "money": "519.59",      最终价格
            "data": {
                "19": {
                    "goods_id": 19,
                    "goods_money": 480,
                    "goods_postage": "0.00",
                    "token_money": 120,
                    "daibidixian": "1.20",
                    "data": [
                        {
                            "title": "高级汽车脚垫1",
                            "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                            "spec_str": "9_6_1_",
                            "spec_name": "女-大-红色",
                            "price": "120.00",
                            "num": 3
                        },
                        {
                            "title": "高级汽车脚垫1",
                            "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                            "spec_str": "9_7_1_",
                            "spec_name": "女-小-红色",
                            "price": "120.00",
                            "num": 1
                        }
                    ]
                },
                "20": {
                    "goods_id": 20,
                    "goods_money": 40,
                    "goods_postage": "0.00",
                    "token_money": 50,
                    "daibidixian": "0.50",
                    "data": [
                        {
                            "title": "智能类1",
                            "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                            "spec_str": "5_",
                            "spec_name": "内嵌式",
                            "price": "20.00",
                            "num": 2
                        }
                    ]
                }
            }
        }
    }
####提交购物车订单
      url: api/Goods/submitCartOrder
            method:post
            参数
            id[] 购物车id组
            usedabi 使用代币状态 1使用 0不使用
            addressid 地址id
            name=msg+goods_id    留言input框 name名为 msg+商品id 例子： name='msg+16'
      返回：
         {
              "code": 1,
              "msg": "ok",
              "data": {
                  "id": "2",  订单id
                  "money": "1459.59" 支付金额
              }
          }
#### 选择支付界面
      url: api/Goods/submitMyOrder
                method:get
                参数
                id 订单id
                paytype 支付类型 0:余额,1:支付宝,2:微信支付,3:银联
                
        余额返回数据                
        {
            "code": 1,
            "msg": "ok",
            "data": {
                "balance": "100.09",
                "havebalance": "90.09",
                "money": "10.00",
                "order_no": "2019052949100535"
            }
        }
        

/*****************************  我的订单 ***************************************/
#### 订单状态
    订单状态（
      0、已下单待支付、
      1、已支付待发货、
      2、已发货待收货、
      3、已收货、待评价、
      4、订单完成、	
      5、订单取消 恢复库存、订单自已取消 用户自己操作
      6、申请退款
      7、订单关闭	
        ）
####获取我的订单列表
    url: api/Goods/getMyOrder
            method:get
            参数; status 状态 默认为空全部查询 ['0待支付', '1待发货', '2待收货', '3待评价', '4完成交易', '5订单取消', '6申请退款中', '7订单关闭'],                        
        {
            "code": 1,
            "msg": "ok",
            "data": {
                "total": 6,
                "per_page": 1, 
                "current_page": 1,
                "last_page": 6,
                "data": [
                    {
                        "id": 25, 订单id                    
                        "money": "139.70", 最后价格
                        "status": 0, 状态 
                        "ordertime": "2019-05-30 10:12", 订单时间
                        "totalnum": 1, 共计件数
                        "getOrderDetails": [
                            {
                                "id": 4, 
                                "order_id": 25,
                                "title": "高级汽车脚垫1", 标题
                                "img": "admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg", 图片
                                "spec_str": "9_6_1_",
                                "spec_name": "女-大-红色", 规格
                                "stock": 1, 数量
                                "unit_price": "120.00" 单价
                            }
                        ]
                    }
                ]
            }
        }

        
        
#### 待付款
      url: api/Goods/submitMyOrder
            method:get
            参数
            id 该商品订单id
      返回：
       {
           "code": 1,
           "msg": "ok",
           "data": {
               "money": "39.71", 支付金额
               "id": 16 订单id
           }
       }
       
  
#### 查看订单
      url: api/Goods/seeOrder
            method:get
            参数
            id 该商品订单id
      返回：
      {
          "code": 1,
          "msg": "ok",
          "data": {
              "id": 42,
              "uid": 1,
              "goods_id": 6,
              "goods_order_no": "20190529141524rcl3",
              "order_no": null,
              "unified_id": 16,
              "pay_type": null,
              "daibi": 12,
              "daibidixian": "0.12",
              "goods_money": "260.00",
              "postage": "0.00",
              "money": "259.88",
              "address": "山东省济宁市兖州市",
              "address_content": "龙桥街道SOHO兖州",
              "username": "张三丰",
              "tel": "18353709197",
              "msg": "",
              "postname": null,
              "postno": null,
              "snapshot": "&lt;p&gt;智能设备1智能设备1智能设",
              "status": 0,
              "ordertime": "2019-05-30 10:12",
              "paytime": null,
              "totalnum": 1,
              "getOrderDetails": [
                  {
                      "id": 18,
                      "order_id": 42,
                      "title": "智能导航1",
                      "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                      "spec_str": "5_",
                      "spec_name": "内嵌式",
                      "stock": 1,
                      "unit_price": "260.00"
                  }
              ]
          }
      }
      
      
      
####订单查询快递
    url: api/Goods/seePost
         method:get
         参数
         id 订单id
         
    {
        "code": 1,
        "msg": "操作成功",
        "data": {
            "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
            "goods_order_no": "20190529141524rcl3",
            "postname": "顺丰",
            "postno": "1234561",
            "postData": [
                {
                    "AcceptTime": "2019-06-04 10:34:29",
                    "AcceptStation": "快件已经签收，签收人：张启明[武汉市]",
                    "Remark": "已经签收"
                },
                {
                    "AcceptTime": "2019-06-01 10:34:29",
                    "AcceptStation": "快件到达武汉市武昌区徐东大街1号网点[武汉市]",
                    "Remark": "到达目的城市"
                },
                {
                    "AcceptTime": "2019-05-31 10:34:29",
                    "AcceptStation": "快件在离开深圳集散中心，发往武汉市[深圳市]",
                    "Remark": "离开发件城市"
                },
                {
                    "AcceptTime": "2019-05-30 10:34:29",
                    "AcceptStation": "快件已经到达深圳集散中心[深圳市]",
                    "Remark": null
                },
                {
                    "AcceptTime": "2019-05-29 10:34:29",
                    "AcceptStation": "深圳福田保税区网点已揽件[深圳市]",
                    "Remark": "已揽件"
                }
            ]
        }
    }      

           
            
####确认收货
    url: api/Goods/confirmGetOrder
         method:get
         参数
         id 订单id
         {
             "code": 1,
             "msg": "操作成功",
             "data": "收货成功"
         }    
           
#### 获取 取消原因 退款原因 以及客服集合
      url: api/Goods/getOption
            method:get
            参数
            type 类型：cancelreason 取消原因 backreason 退款原因 marketkefu 车品超市客服集合  
           cancelreason 取消原因 backreason 退款原因 
           {
               "code": 1,
               "msg": "操作成功",
               "data": [
                   "商品无货",
                   "不想要了",
                   "商品信息填写错误",
                   "地址信息填写错误",
                   "商品降价",
                   "其他"
               ]
           }
           marketkefu 车品超市客服集合  
            {
                "code": 1,
                "msg": "操作成功",
                "data": [
                    "1888888888",
                    "1999999999"
                ]
            }
#### 取消订单
    url: api/Goods/cancelOrder
            method:post
            参数
            id 订单id
            reason 取消选择的原因 字符串
            {
                "code": 1,
                "msg": "操作成功",
                "data": ""
            }
#### 付款后 未发货 申请退款
    url: api/Goods/sendBeforeBack
            method:post
            参数
            id 订单id            
            reason 取消选择的原因 字符串
            money 填写金额
            msg 退款说明
            img 添加的图片 每个路径以|分割
            {
                "code": 1,
                "msg": "操作成功",
                "data": "申请成功,请等待后台处理"
            }
               
#### 退款退货 - 仅退款
    url: api/Goods/onlyBackMoney
            method:post
            参数
            id 订单id            
            reason 取消选择的原因 字符串
            money 填写金额
            msg 退款说明
            img 添加的图片 每个路径以|分割    
            {
                "code": 1,
                "msg": "操作成功",
                "data": "申请成功,请等待后台处理"
            }
            
            
#### 退款退货 - 退款退货
    url: api/Goods/backMoneyGoods
            method:post
            参数
            id 订单id            
            reason 取消选择的原因 字符串
            money 填写金额
            msg 退款说明
            img 添加的图片 每个路径以|分割         
            {
                "code": 1,
                "msg": "操作成功",
                "data": "申请成功,请等待后台处理"
            }
                         
####  填写退货信息
    url: api/Goods/writeBackMoneyGoods
            method:post
            参数
            id 订单id         
            postname 物流公司名字
            postno   物流单号
            
             
                       
####当订单状态为退货退款6时，订单额外的状态为     
    1、待发货，申请退款 
    2、收货后，申请退款不退货 
    3、退货退款 申请中 
    4、退货退款 申请通过  前台填写快递信息 
    5、后台收货后处理
    6、完成退款        
####退货退款列表
      url: api/Goods/getMyBackOrder
             method:get
             参数
             orderstatus    //全部 订单状态为6 7 //处理中 订单状态为6
             
      {
          "code": 1,
          "msg": "ok",
          "data": {
              "total": 2,
              "per_page": 15,
              "current_page": 1,
              "last_page": 1,
              "data": [
                  {
                      "id": 41,
                      "paymoney": "39.71", 实付金额
                      "time": "2019-19-05-31 17:59", 时间
                      "bstatus": 6, 退款状态 （    1、待发货，申请退款 
                                                  2、收货后，申请退款不退货 
                                                  3、退货退款 申请中 
                                                  4、退货退款 申请通过  前台填写快递信息 
                                                  5、后台收货后处理
                                                  6、完成退款 ）
                      "backmoney": "23.00", 退还金额
                      "getOrderDetails": [
                          {
                              "id": 17,
                              "order_id": 41,
                              "title": "智能类1",
                              "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                              "spec_str": "5_",
                              "spec_name": "内嵌式",
                              "stock": 2,
                              "unit_price": "20.00"
                          }
                      ]
                  }                   
              ]
          }
      }
                  
                       
####立即评价界面
      url: api/Goods/comment
             method:get
             参数
             id 订单id
            {
                "code": 1,
                "msg": "操作成功",
                "data": {
                    "title": "智能导航1",
                    "img": "http://auction.jzbwlkj.com/upload/admin/20190524/ea848f96fde9fa4754cda36ecf32d1f6.jpg",
                    "order_id": "42",
                    "goods_id": 20
                }
            }
        
####提交用户评价
      url: api/Goods/postComment
             method:post
             参数
             id 订单id
             order_id 订单id
             goods_id 商品id
             msg 留言
             img 多个图片路径用|链接
           {
               "code": 1,
               "msg": "操作成功",
               "data": "评论成功"
           }
                                                  
####获取某个商品的评价列表
        url: api/Goods/getCommentList
             method:get
             参数
             goods_id 商品id
             {
                 "code": 1,
                 "msg": "操作成功",
                 "data": {
                     "total": 2,
                     "per_page": 10,
                     "current_page": 1,
                     "last_page": 1,
                     "data": [
                         {
                             "id": 1,
                             "msg": "niubiai", 留言
                             "img": [ 评价图片
                                 "http://auction.jzbwlkj.com/upload/20190531/7c801d24196e0058d0020537bb61ce50.jpg",
                                 "http://auction.jzbwlkj.com/upload/20190531/7c801d24196e0058d0020537bb61ce50.jpg"
                             ],
                             "time": "2019-06-01 11:38:00", 时间
                             "user_nickname": "超级管理员", 昵称
                             "avatar": "http://auction.jzbwlkj.com/upload/20190531/7c801d24196e0058d0020537bb61ce50.jpg" 头像
                         } 
                     ]
                 }
             }