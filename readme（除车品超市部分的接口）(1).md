# 通用参数说明（接口信息以json格式返回）
- 发送设置头部
```
|  参数              | 说明   
|:---:              | :---: 
| XX-Token          | 用户token  (必须)
| XX-Device-Type    | 用户设备类型(必须)

```
# 竞拍
## 获取场次列表
```
    url     /api/auction/getSessionList
```
## 获取场次车辆列表
```
    url     /api/auction/getCarList
```
-   参数说明
```
    auction_session_id      场次id
```
## 获取拍卖车辆详情
```
    url     /api/auction/carDetail
```
-   参数说明
```
    id      拍卖车辆id
```
-   返回说明
```
    "data": {
        "id": 83,
        "auction_session_id": 2,            //  拍卖场次id
        "auction_session_name": "第二场次", //  拍卖场次名称
        "title": "测试车辆2",               //  车辆标题
        "car_sn": "10001",                  //  车辆编号
        "name": "张三",                     // 所属人
        "pic_pre": "my_",                   // 图片前缀
        "start_price": "100.00",            //  起拍价
        "brand_info": "宝驴x5",             //  品牌信息
        "frame_number": "21545115",         //  车架号
        "car_number": "鲁H51254",           //  车牌号
        "engine_number": "25412545",        //  发动机号
        "mileage_number": "20000",          //  表里程
        "get_card_time": "2018-10-1",       //  上牌时间
        "car_color": "白色",                //  车辆颜色
        "car_type": 1,                      //  车辆类型
        "car_type_name": "债权车",          //  车辆类型名称
        "check_report_path": null,          //  检查报告地址
        "is_change": 1,                     //  是否过户 0 否 1 是
        "car_place_id": 268,                //  提车地的id
        "car_place_name": "济宁",           //  提车地的id
        "is_driving_license": 1,            //  是否有行驶证 0 否 1 是
        "is_key": 1,                        //  是否有钥匙 0 否 1 是
        "is_normal": 1,                     //  是否正常启动 0 否 1 是
        "note": "sdfs",                     //  备注信息
        "is_registration_cert": 1,          //  车辆登记证书 0 否 1 有
        "is_settlement_proof": 1,           //  结清证明 0 否 1 有
        "is_decompression_letter": 1,       //  解压委托书 0 否 1 有
        "is_business_license": 1,           //  营业执照 0 否 1 有
        "is_mortgage": 1,                   //  车辆抵押登记申请表 0 否 1 有
        "is_transfer_agreement": 1,         //  债权转让协议 0 否 1 有
        "add_time": 1558516334,             //  添加时间
        "is_collection": 0,                 //  是否已收藏
        "resource_path": "2019520",         //  资源包名称
        "car_pic_url": []                   //  车辆图片
    }
```

## 投标
```
    url     /api/bidding/add
```
-   参数说明
```
    auction_car_id      竞拍车辆id
    money               竞拍金额
```
## 获取已投标场次列表
```
    url     /api/bidding/getSessionList
```
-   参数说明
```
    status      竞拍状态 0 竞拍中 1 已中标 2 未中标 3 已结清 4 已弃标 默认全部
```
## 获取投标车辆列表
```
    url     /api/bidding/getCarList
```
-   参数说明
```
    session_id  竞拍场次id
```
# 物流服务
##  获取托运记录列表
```
    url：/api/wuliu
    method: get
    说明：每次请求获取10条数据，page省略默认获取最新发布的10条。
```

- 参数

| 参数  | 说明   
|:---:  | :---: 
| page  | 页码 (可省略 默认是第一页)

- 返回
```         
    请求返回
    {
        "code": 1,
        "msg": "查询成功",
        "data": {
            "allcount": 1,
            "pagenum": 1,
            "datas": [
                {
                    "wuliu_id": 1,
                    "wuliu_goodsname": "豪车大咖",
                    "create_at": "2019-05-08 16:38:13",
                    "wuliu_endyunfei": "30.00",
                    "wuliu_status": 1
                }                
            ]
        }
    }
    参数说明：
    //总条数 $allcount
    //总页数 $pagenum
    //数据 $datas
        字段：
            wuliu_id 物流id
            wuliu_goodsname 托运货物名称
            create_at 发布时间
            wuliu_yunfei 物流价格
            wuliu_status 物流状态    
       
```

## 创建发布任务
```
    url：/api/wuliu/save
    method： post
```
- 参数 
```
| 参数             | 说明   
|:---:            | :---: 
| wuliu_start_p   | 装货地省
| wuliu_start_c   | 装货地市
| wuliu_start_a   | 装货地区
| wuliu_startaddr | 装货详细地址
| wuliu_end_p     | 卸货地省
| wuliu_end_c     | 卸货地市
| wuliu_end_a     | 卸货地区
| wuliu_endaddr   | 卸货详细地址
| wuliu_cartype   | 车型以及尺寸（自填）
| wuliu_zhongliang| 货物重量
| wuliu_tiji      | 货物体积
| wuliu_goodsname | 货名
| wuliu_baoxian   | 保险
| wuliu_zhuanghuotime | 装货时间
| wuliu_paytype   | 支付方式（自填）
| wuliu_zhuangxietype | 装卸方式（自填）
| wuliu_yunfei   | 运费
| wuliu_other    | 备注
| wuliu_status   | 物流状态（1审核中、2已核价、3待发货、4运输中、5已完成）
```
- 返回
```
    提交成功
    {
        "code": 1,
        "msg": "创建成功",
        "data": ""
    }    
```

## 获取发布或者核价后的详情
```
    url：/api/wuliu/read
    method: get
```
- 参数

| 参数       | 说明   
|:---:      | :---: 
|id         |托运单id 类型 int

- 返回
```    
    {
        "code": 1,
        "msg": "获取成功",
        "data": {
            "wuliu_id": 1,      | 托运单id 
            "wuliu_uid": 1,     |发布人id
            "wuliu_no": "201905091025066134", |托运单号
            "wuliu_start_p": "山东省", |装货省 
            "wuliu_start_c": "济宁市", |装货市
            "wuliu_start_a": "兖州",   |装货区
            "wuliu_startaddr": "SOHO",|装货具体地址
            "wuliu_end_p": "山东省",   | 卸货地省
            "wuliu_end_c": "济宁市",   | 卸货地市
            "wuliu_end_a": "兖州",    |卸货地区
            "wuliu_endaddr": "SOHO",  |卸货具体地址
            "wuliu_cartype": "大车",  |需要的车型车长
            "wuliu_zhongliang": 50,  |货物重量
            "wuliu_tiji": 300,       |货物体积
            "wuliu_goodsname": "豪车大咖", |货名
            "wuliu_baoxian": "2000.00",   |保险
            "wuliu_daibi": 0,             |代币
            "wuliu_zhuanghuotime": "2019-06-12 00:00:00", |装货时间
            "wuliu_starttime": null,  |平台发货时间
            "wuliu_endtime": null,    |平台确认收货时间
            "wuliu_shixiaotime": 1557562667, |订单过期时间
            "wuliu_paytype": "支付宝", |支付方式
            "wuliu_zhuangxietype": "自己卸货", |卸货方式 
            "wuliu_yunfei": "30.00",    |货物运费
            "wuliu_endyunfei": "32.00", |核价运费(给用户看，让用户确认是否付钱)
            "wuliu_other": "其他", |备注
            "wuliu_status": 2,    |托运单状态 已核价
            "wuliu_orderpaytype": null, |用户支付订单类型
            "wuliu_pic": null,    |用户上传的图片
            "create_at": "2019-05-08 16:38:13" |托运单生成时间
        }
    }
```    
    

 
## 运输中的托运记录

```
     url：/api/wuliu/details
     method: get
```
 - 参数
 
 | 参数  | 说明   
 |:---:  | :---:
 | id    | 托运单 id
 
 - 返回
```
 请求返回
 
 {
     "code": 1,
     "msg": "ok",
     "data": [
         {
             "wuliutuoyun_id": 1,
             "wuliutuoyun_wid": 1,
             "wuliutuoyun_goods": "客车",
             "wuliutuoyun_time": "2019-05-13 17:02:58",
             "wuliutuoyun_username": "王司机",
             "wuliutuoyun_tel": "1555555",
             "wuliutuoyun_car": "鲁H123"
         },
         {
             "wuliutuoyun_id": 2,
             "wuliutuoyun_wid": 1,
             "wuliutuoyun_goods": "客车3",
             "wuliutuoyun_time": "2019-05-13 17:02:58",
             "wuliutuoyun_username": "王司机3",
             "wuliutuoyun_tel": "15555553",
             "wuliutuoyun_car": "鲁H1233"
         }
     ]
 }
 

```
 
## 取消订单
```
     url：/api/wuliu/delete
     method: post
```
 - 参数
 
 | 参数  | 说明   
 |:---:  | :---:
 | id    | 托运单 id
 
 - 返回
```         
 请求返回
  {
      "code": 1,
      "msg": "取消成功",
      "data": ""
  }
        
```
 
 
 
 
 

## 立即支付
```
     url：/api/wuliu/confirmtask
     method: post
```
 - 参数
  
 | 参数  | 说明   
 |:---:  | :---: 
 | id    | 托运表id
 
 返回
```
 {
     "code": 1,
     "msg": "查询成功",
     "data": {
         "wuliu_endyunfei": "5000.00", 核实运费
         "wuliu_baoxian": "2000.00",   保险
         "usedaibi": 20                可使用代币
     }
 }
```
 
 
 
 
 
## 确认任务 
```
      url：/api/wuliu/paybefore
      method: post
```
  - 参数
   
  | 参数  | 说明   
  |:---:            | :---: 
  | id              | 托运表id
  | daibistatus     | 代币状态 1确认使用 0不使用
  
  返回
 ```
  {
      "code": 1,
      "msg": "ok",
      "data": {
          "allmoney": 2014.00, 支付额度
          "id": "1" 托运单id
      }
  }
 ```

## 选择支付方式 立即支付

```
  url：/api/wuliu/paytype
  method: post
```

  - 参数
  | 参数  | 说明   
  |:---:            | :---: 
  | id              | 托运表id
  
  返回

 ```
  {
      "code": 1,
      "msg": "ok",
      "data": {
          "money": "2000.00",
          "id" : 1
      }
  }
 ```
  
  
  
## 选择支付方式 


```
  url：/api/wuliu/pay
  method: post
```

  - 参数
   
  | 参数  | 说明   
  |:---:            | :---: 
  | id              | 托运单 id
  | orderpaytype    | 支付方式  交易类型:0:余额,1:支付宝,2:微信支付,3:银联
  
####返回
#####余额支付返回钱包余额和支付金额以及剩余金额
#####微信 支付宝 银联支付返回支付所需要的api参数
 ```
  余额支付返回
  {
      "code": 1,
      "msg": "ok",
      "data": {
          "balance": "2016.00", 余额
          "havebalance": "0.00", 还剩余额
          "money": "2016.00", 支付金额
          "order_no": "2019051398575750" 订单号
      }
  }
 ```
  
  #微信 支付宝 银联支付返回
  
  
## 查询是否设置支付密码 pay_pass 
```
  url：/api/wuliu/checkhavepaypass
  method: get
```
```
 没有设置返回
 {
     "code": 0,
     "msg": "没有设置支付密码"
 }
 已经设置返回
 {
     "code": 1,
     "msg": "ok",
     "data": ""
 }
```
####设置支付密码
```
  url：/api/wuliu/setpaypass
  method: post
```
  - 参数
   
  | 参数  | 说明   
  |:---:            | :---: 
  | password        | 密码


```
{
    "code": 1,
    "msg": "ok",
    "data": ""
}
```


### 余额支付界面 获取参数
```
url:/api/wuliu/checkyuepass
method:get

```

  - 参数
   
  | 参数  | 说明   
  |:---:            | :---: 
  | out_trade_no        | 订单号

```
{
    "code": 1,
    "msg": "ok",
    "data": {
        "out_trade_no": "2019051610256541",
        "pay_num": "3005.00",
        "token_money": 20
    }
}
```


### 余额支付界面输入密码后
```
url:/api/moneybag/balancepay
method:get

```

  - 参数
   
  | 参数  | 说明   
  |:---:            | :---: 
  | out_trade_no        | 订单号
  | pay_num        | 支付金额
  | token_money        | 代币
  | paypassword        | 支付密码

```
 {
     "code": 1,
     "msg": "支付成功",
     "data": ""
 }
 
```







  
###上传图片
```
  url：/api/file/upload_img
  method: post
```
  - 参数
     
    | 参数  | 说明   
    |:---:            | :---: 
    | name            | img 文件name名
``` 
{
    "code": 1,
    "msg": "http://www.zc.com/upload/20190513\\aeed9017be1d2366212e4e5c5f5336c5.png",
    "data": "操作成功"
}    
```
###上传图片后 将返回的文件路径 通过接口传入后台 提交图片 
```
  url：/api/wuliu/uploadimg
  method: post
```
  - 参数
     
    | 参数  | 说明   
    |:---:            | :---: 
    | id            | 托运单id
    | wuliu_pic     | 文件路径字符串 多文件链接拼接  请以|链接
```
{
    "code": 1,
    "msg": "上传成功",
    "data": ""
} 
```

 
 
###物流服务客服接口 
```
  url：/api/wuliu/kefu
  method: get
```

```
{
    "code": 1,
    "msg": "",
    "data": {
        "tel": [
            "18888888",
            "19999999",
            "19999999"
        ],
        "banner": "/upload/admin/20190514/df098ee211b76ee0f45cdac2633ac9c6.jpg"
    }
} 
```



/**************************************用户注册*******************************************************/


## 文件上传
```
    url     /api/file/upload_img
```
-   参数

```
    上传使用post方式提交 提交文件需要键值
    参数          说明
    img		 文件对象
   
```
-  	返回

```
  {"code":1,"msg":"修改成功","data":"20190429\\7a7186044bb596799027216cad106a4e.png"}
```


## 用户注册
```
    url     /api/user/register
```
-   参数
```
    username            注册手机号
    password            密码
    code                验证码
    recommend_code	推荐码[选填]
```

## 用户登录
```
    url     /api/user/login
```
-   参数
```
    username            注册手机号
    password            密码
    device_type         设备名称
```

## 忘记密码(重置密码)
```
    url     /api/user/forget
```
-   参数
```
    mobile      手机号
    password    新密码
    repassword  重复密码
    code        短信验证码
```
## 发送短信
```
    url     /api/user/duanxin
```
-   参数
```
    mobile      手机号
```
-	返回
```
{"code":1,"msg":"发送成功!","data":""}
```
## 获取使用协议
```
    url     /api/user/getShiyongAgreement
```
-   参数
```
  无
```
-	返回
```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 1,
        "title": "使用协议",
        "content": "隐私政策\r\n本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄露，请您立即联络本应用客服，以便本应用采取相应措施。\r\n如您对本政策或其他相关事宜有疑问，请通过 https://***.***.com/ 与我们联系。您也可将您的问题发送至***@***.com或寄到如下地址：\r\n地址：*** 法务部 数据及隐私保护中心（收）\r\n邮编：***。\r\n",
        "create_time": 1558165702,
        "update_time": 1558165702
    }
}
```

## 用户退出
```
    url     /api/user/logout
```
# 个人中心
## 获取用户信息(包含绝大部分信息)
```
    url     /api/user/getUserInfo
```
-   参数
```
    无
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 11,
        "user_type": 2,
        "mobile": "183****9197",
        "user_pass": "###405e7610f172b686ac05c3a7c87098c1",
        "pay_pass": null,
        "balance": "5200.00",
        "bond": "1300.00",
        "user_nickname": "",
        "avatar": "",
        "user_status": 1,
        "user_login": "",
        "kefu_id": 8,
        "secretary_wechat": "123",
        "secretary_mobile": "110",
        "create_time": 1557795484,
        "level": 0,
        "action_time": 0,
        "end_time": 0,
        "recommend_code": "000B",
        "recommend_qrcode": "http://auction.jzbwlkj.com/upload/20190515/15579209073156.png",
        "recommend_user_id": null,
        "wechat": null,
        "birthday": 0,
        "user_activation_key": "",
        "last_login_time": 1557900373,
        "last_login_ip": "",
        "coin": 0,
        "more": null,
        "score": 0,
        "signature": "",
        "user_url": "",
        "sex": 0,
        "user_email": "",
        "phone": "18353709197",
        "amount": 1120,
        "thaw_bond": 0,
        "freeze_bond": 2000
    }
}
```
-	返回数据说明

```
id			用户ID
user_type		用户类型;1:admin;2:会员
mobile			手机号(登录用)
user_pass		登录密码
pay_pass		用户支付密码
balance			余额
bond			未冻结保证金
user_nickname		用户昵称
avatar			头像文件路径
user_status		用户状态;0:禁用,1:正常,2:未验证
user_login		用户名
kefu_id			专属客服用户id
secretary_mobile	秘书电话
secretary_wechat	秘书微信
create_time		注册时间
level			尊享会员等级:0,普通用户,1:黄金会员,2:白金会员,3:钻石会员
action_time		尊享会员开始时间
end_time		尊享会员结束时间
recommend_code		推荐码
recommend_qrcode	分享二维码路径
recommend_user_id	上级推荐人用户ID
wechat			客服人员的微信号,正常用户为空
phone			未加密的用户手机号
amount			代币总额(包含可提取,不可提取)
extract_num		可提取代币
no_extract_num		不可提取代币
bond			未冻结保证金
thaw_bond		可解冻保证金总额
freeze_bond		不可解冻保证金总额
sum_bond		总保证金额
sum_freeze_bond		总冻结保证金额
```
## 修改头像
```
    url    /api/center/editAvatar
```
-   参数
```
    	token	用户登录token
	avatar	上传图片返回的绝对路径
```
-	返回

```
{"code":1,"msg":"修改成功","data":"http:\/\/127.0.0.1\/03_paiche\/public\/upload\/20190506\\\\36746021b2fcec31ffa9b3235bcd2554.jpg"}
```
-	返回数据说明

```
	data	头像的绝对路径
```
##	设置支付密码
```
    url     /api/center/doPayPassword
```
-   参数

```
	
	code		验证码
	mobile		手机号
	password	新密码
	repassword	重输密码
```
-	返回

```
{"code":1,"msg":"修改成功","data":""}
```
##	清除缓存
```
    url     /api/center/clearCache
```
-   参数

```
	无
```
-	返回

```
{"code":1,"msg":"清除成功","data":""}
```
##	设置昵称
```
    url     /api/center/setNickname
```
-   参数

```
	token		登录token
	nickname	昵称
```
-	返回

```
{"code":1,"msg":"修改成功","data":""}
```
##	重置手机号
```
    url     /api/center/setMobile
```
-   参数

```
	token		登录token
	password	登录密码
	mobile		新手机号
	code		验证码
```
-	返回

```
{"code":1,"msg":"修改成功,请重新登录","data":""}

```

##	专属客服留言
```
    url     /api/center/setMessage
```
-   参数

```
	token		登录token
	message		留言消息
	
```
-	返回

```
{"code":1,"msg":"操作成功","data":""}

```

##	添加/编辑地址
```
    url     /api/address/addAddress
```
-   参数

```
	token		登录token
	user_name	联系人姓名
	mobile		联系方式
	area		地区
	address		详细地址
	addr_id		地址ID(可选:有此参数为编辑地址,无此参数为添加地址)
```
-	返回

```
{"code":1,"msg":"操作成功","data":""}

```

##	地址列表
```
    url     /api/address/addressList
```
-   参数

```
	token		登录token
	
```
-	返回

```
{"code":1,"msg":"操作成功","data":[{"id":1,"user_id":2,"user_name":"张三","mobile":"4294967295","area":"山东省济宁市兖州市","address":"龙桥街道SOHO兖州","create_time":1557130028,"default_addr":0},{"id":2,"user_id":2,"user_name":"张三丰","mobile":"18353709197","area":"山东省济宁市兖州市","address":"龙桥街道SOHO兖州","create_time":1557131831,"default_addr":0}]}

```

-	返回数据说明

```
	id		地址ID
	user_id		用户ID
	user_name	联系人姓名
	mobile		联系方式
	area		地区
	address		详细地址
	default_addr	是否为默认地址:0:否,1是	
	create_time	创建时间

```
 
##	地址详情
```
    url     /api/address/getAddress
```
-   参数

```
	token		登录token
	addr_id		地址ID
	
```
-	返回

```
{"code":1,"msg":"查询成功","data":{"id":1,"user_id":2,"user_name":"张三","mobile":"4294967295","area":"山东省济宁市兖州市","address":"龙桥街道SOHO兖州","create_time":1557130028,"default_addr":1}}
```

-	返回数据说明

```
	id		地址ID
	user_id		用户ID
	user_name	联系人姓名
	mobile		联系方式
	area		地区
	address		详细地址
	default_addr	是否为默认地址:0:否,1是	
	create_time	创建时间

```



##	删除地址
```
    url     /api/address/deleteAddress
```
-   参数

```
	token		登录token
	addr_id		地址ID
	
```
-	返回

```
{"code":1,"msg":"删除成功","data":}
```
#钱包
##	查询钱包明细
```
    url     /api/moneybag/moneybagLog
```
-   参数

```
	token		登录token
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "total": 12,
        "per_page": 30,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "money": 100,
                "type": 1,
                "msg": "转入-保证金",
                "create_time": "2019-05-15"
            },
            
        ]
    }
}
```
-	返回数据说明

```
	money		金额
	type		类型:0:收入,1:支出
	msg		用途
	
```

##	查询钱包明细详情
```
    url     /api/moneybag/logView
```
-   参数

```
	id		日志ID
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 211,
        "user_id": 17,
        "money": "5000.00",
        "type": 0,
        "order_type": 0,
        "order_id": null,
        "msg": "提现",
        "create_time": "2019-06-04 11:33:41",
        "status": "转入成功",
        "type_msg": "转入"
    }
```
-	返回数据说明

```
	money		金额
	type		类型:0:收入,1:支出
	msg		用途
	type_msg	类型说明
	status		状态说明
	real_name	加密的真实姓名
	account		加密的账户信息
	order_no	订单号
	name		转入方式商品名称等说明
	order_name  	订单单号等说明
	cause		失败原因说明
	cause_info	具体失败原因
	
```
##	钱包说明
```
    url     /api/moneybag/getMoneybagAgreement
```
-   参数

```
	无
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 2,
        "title": "钱包说明",
        "content": "这里是钱包说明,我也不知道说明啥,随便填点,以后再改",
        "create_time": 1558430989,
        "update_time": 1558430989
    }
}
```
-	返回数据说明

```
	title		标题
	content		内容
	create_time	创建时间
	update_time	修改时间
	
```

##	余额提现
```
    url     /api/moneybag/drawBalance
```
-   参数

```
	token		登录token
	pay_num		提现金额
	type		提现类型:提现类型:0:微信,1:支付宝,2:银行卡
	real_name	真实姓名
	account		账户信息
	open_bank	(选填)开户行:当type=2为银行卡支付时(必填)
	
	
```
-	返回

```
{
    "code": 1,
    "msg": {
        "pay_num": "100",
        "account": "银行卡************7981",
        "real_name": "张**",
        "msg": "发起提现申请,等待平台处理"
    },
    "data": "操作成功"
}
```
-	返回数据说明

```
	pay_num		金额
	account		账户信息
	real_name	真实姓名
	msg		提示消息
	
```

##	创建充值订单
```
    url     /api/moneybag/setMoneybagIndent
```
-   参数

```
	
	pay_num		提现金额
	ordertype	订单类型:chongzhi,wuliu
	type		交易支付类型:0:微信支付,1:支付宝,2:银联,
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "创建订单成功",
    "data": {
        "id": 28,
        "user_id": 11,
        "out_trade_no": "2019061199545657",
        "pay_num": "100.00",
        "type": 0,
        "ordertype": "chongzhi",
        "status": 0,
        "create_time": 1560231948,
        "pay_time": null,
        "body": "招财拍-余额充值"
    }
}
```
-	返回数据说明

```
	pay_num		金额
	out_trade_no	订单号
	body		商品描述
	
```

##	微信支付下单
```
    url     /api/moneybag/WxpayInfo
```
-   参数

```
	body		商品描述,格式为XX-XXXX
	total_fee	金额
	out_trade_no	订单号
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": {
        "appid": "wx528504440362a864",
        "partnerid": "1531606391",
        "prepayid": "wx111110335616146351b51f391997743200",
        "noncestr": "boBUrKKcESqWTlI8",
        "package": "Sign=WXPay",
        "timestamp": 1560222633,
        "sign": "D12C930CBDFB9AB8F35936D099A5BFF0D2D3F242920856C4E91E5A4C6C2719BD"
    }
}

##	支付宝支付下单
```
    url     /api/moneybag/AliPayInfo
```
-   参数

```
body  商品描述不能为空
subject 商品标题
total_amount 金额
out_trade_no 唯一订单号
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": "alipay_sdk=alipay-sdk-php-20180705&amp;app_id=2019032063607645&amp;biz_content=%7B%22body%22%3A%22%E6%8B%9B%E8%B4%A2%E6%8B%8D-%E4%BD%99%E9%A2%9D%E5%85%85%E5%80%BC%22%2C%22subject%22%3A+%22%E4%BD%99%E9%A2%9D%E5%85%85%E5%80%BC%22%2C%22out_trade_no%22%3A+%22201906110952%22%2C%22timeout_express%22%3A+%2230m%22%2C%22total_amount%22%3A+%220.01%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&amp;charset=UTF-8&amp;format=json&amp;method=alipay.trade.app.pay&amp;notify_url=http%3A%2F%2Fauction.jzbwlkj.com%2Fapi%2FPaynotify%2FalipayNotify.html&amp;sign_type=RSA2&amp;timestamp=2019-06-11+11%3A12%3A54&amp;version=1.0&amp;sign=TZnQ4AbtqpJ8zQ0AoL62YMx63a%2BeC3GRxmRKzIjCfNocaDi9RS5a3%2B62P1qSVMvLowVJv%2B104meG1yQ%2FFPdem37UZ3WbtyqIYcHhrywSzGERtpZ%2Bt1epQ7Oj%2BOxBYpoEZUfr93GJepI4zflF7t%2F%2FSsUsqpQauSdNWR4lzaZMdtfjCwjChaWZvvuWzg8YnMVOXjgCy4cbka9xrUpETkweABKoTkChZ6NuERemrOLxXb0Imb2RwFTQqBn%2FnjiOtI8ht7F4%2BWsH2U3By9wLkx%2Fzek0FUDYQId8hdxkQbER1Yed0zXCHAML0P7QGzdDjkb1gIc1Qsvk4sdvwd2qmnsDK9g%3D%3D"
}
```
#保证金
##  充值保证金
```
    url     api/bond/bondRecharge
```
-   参数

```
	
	pay_num		充值金额
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "",
    "data": "充值成功"
}
```

##  提现保证金
```
    url     api/bond/bondDraw
```
-   参数

```
	
	pay_num		提现金额
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "",
    "data": "提现成功"
}
```
##  解冻保证金
```
    url     api/bond/bondThaw
```
-   参数

```
	
	无
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "",
    "data": "解冻成功"
}
```
# 分享
## 我的分享
```
    url     api/Recommend/index
```
-   参数

```
	
	无
	
	
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "code": "000B",
        "qrcode": "http://auction.jzbwlkj.com/upload/20190515/15579209073156.png",
        "sum_daibi": 210,
        "sun_arr": [
            {
                "son_daibi": 100,
                "son_mobile": "183****9196"
            },
            {
                "son_daibi": 110,
                "son_mobile": "183****9195"
            }
        ]
    }
}
```
-	返回数据说明

```
code		推荐码
qrcode		推荐二维码
sum_daibi	总共获得的代币
son_daibi	下级用户贡献的代币
son_mobile	下级用户手机号
```

# 尊享服务
## 获取尊享服务列表
```
    url     api/Vip/vipList
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "level": "3",
            "money": "50000",
            "content": "会员冻结投标保证金5万元,可任意参加每批次投标,没有上限,冻结期为1年."
        },
        {
            "level": "2",
            "money": "30000",
            "content": "冻结保证金3万元,可参加同时与5资源包投标竞价,不受每台车1000元保证金限制,冻结期为1年."
        },
        {
            "level": "1",
            "money": "20000",
            "content": "冻结保证金2万元,可参加同时与3资源包投标竞价,不受每台车1000元保证金限制,冻结期为1年."
        },
        {
            "level": "0",
            "money": 0,
            "content": "可参与1资源包投标竞价,投标数量不受限制,开标后1-7个工作日可申请解冻"
        }
    ]
}
```
```
-	返回数据说明

```
level		服务等级0,普通用户,1:黄金会员,2:白金会员,3:钻石会员
money		金额
content		描述
```

## 获取尊享服务应付金额
```
    url     api/Vip/findVip
```
-   参数

```
level		尊享服务等级:0,普通用户,1:黄金会员,2:白金会员,3:钻石会员,(不可传0)

```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": 20000
}
```
## 开通或者升级尊享服务
```
    url     api/Vip/upVip
```
-   参数

```
level		尊享服务等级:0,普通用户,1:黄金会员,2:白金会员,3:钻石会员,(不可传0)
money		应付的金额,使用api/Vip/findVip接口生成的金额
paypassword	支付密码

```
-	返回

```
{
    "code": 1,
    "msg": "开通成功",
    "data": ""
}
```
 


/**************************************招财币*******************************************************/

### 招财币首页
```
url：api/daibi/index
method：get
```
```
{
    "code": 1,
    "msg": "ok",
    "data": {
        "extract_num": 40,  //可提现代币
        "alldaibi": 1152    //总代币 包含冻结的代币
    }
}
```

### 代币明细
```
url:api/daibi/daibilist
method:get
```
```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "allcount": 13,
        "pagenum": 2,
        "datas": [
              {
                    "sum": 60, 代币变化量
                    "payTimeStr": "2019-05-16 15:31:20", 时间
                    "type": 2,  类型 0后台系统更改 1提现 2消费 3推广收入 4订单取消退还
                    "extract_num": 40,  用不到
                    "no_extract_num": 20,   用不到
                    "msg": null,    附加信息
                    "time": 1557991880 用不到
                },
        ]
    }
}

```

### 代币转入余额
```
url:api/daibi/daibiduihuan
method:get
```
```
{
    "code": 1,
    "msg": "ok",
    "data": {
        "extract_num": 5,代币
        "yue": "2.50"   可转换的金额
    }
}
```

 
 
####获取兑换比例
         url: api/Daibi/daibiChangebili
                 method:get
                 {
                     "code": 1,
                     "msg": "操作成功",
                     "data": "1:0.01"
                 }
####传入代币 获取可提现金额
         url: api/Daibi/daibiChange
                 method:get
                 参数
                 num 代币个数
                {
                    "code": 1,
                    "msg": "操作成功",
                    "data": "0.41"
                }
          

### 提交代币转换
```
url:api/daibi/daibiduihuanpost
method:get
```
参数
num 提现的代币个数

```
{
    "code": 1,
    "msg": "ok",
    "data": ""
}
```
# 买卖车
## 我要卖车
### 获取品牌
```
    url     api/shop/carCategory
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 2,
            "name": "奔驰",
            "img": "http://auction.jzbwlkj.com/upload/20190518/204db141a7583fcf7c77dd8ba58dc65e.jpg",
            "create_time": 1558160163,
            "update_time": 1558160163,
            "online": 1
        },
        {
            "id": 3,
            "name": "奥迪",
            "img": "http://auction.jzbwlkj.com/upload/20190520/8ae0b00d8a8bd39c24f3467e227d69dc.jpg",
            "create_time": 1558312763,
            "update_time": 1558312763,
            "online": 1
        }
    ]
}
```
-	返回数据说明

```
id		汽车品牌ID
name		品牌名
img		品牌logo路径
create_time	创建时间
update_time	修改时间
online		是否上线(0下线,1上线)此处只查询上线品牌
```
### 获取汽车属性
```
    url     api/shop/carAttribute
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 2,
            "name": "债权车",
            "create_time": 1558596422
        },
        {
            "id": 3,
            "name": "过户车",
            "create_time": 1558596429
        },
        {
            "id": 4,
            "name": "抵押车",
            "create_time": 1558596437
        },
        {
            "id": 5,
            "name": "事故车",
            "create_time": 1558596442
        },
        {
            "id": 6,
            "name": "二手车",
            "create_time": 1558597305
        }
    ]
}
```
-	返回数据说明

```
id		数据ID
name		名称
create_time	创建时间
```
### 获取汽车颜色
```
    url     api/shop/carColor
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 7,
            "name": "红色",
            "create_time": 1558597493
        },
        {
            "id": 8,
            "name": "黄色",
            "create_time": 1558597500
        },
       
    ]
}
```
-	返回数据说明

```
id		数据ID
name		名称
create_time	创建时间
```
### 获取表显里程
```
    url     api/shop/carMileage
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 13,
            "name": "1万公里以内",
            "create_time": 1558606783
        }
    ]
}
```
-	返回数据说明

```
id		数据ID
name		名称
create_time	创建时间
```
### 获取尾气排放
```
    url     api/shop/carPaifang
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 15,
            "name": "国二及以上",
            "create_time": 1558659350
        },
        {
            "id": 17,
            "name": "国三及以上",
            "create_time": 1558659368
        },
        {
            "id": 18,
            "name": "国四及以上",
            "create_time": 1558659383
        },
        {
            "id": 19,
            "name": "国五",
            "create_time": 1558659395
        }
    ]
}
```
-	返回数据说明

```
id		数据ID
name		名称
create_time	创建时间
```

### 获取排量/变速
```
    url     api/shop/carPailiang
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 15,
            "name": "测试1",
            "create_time": 1558659789
        },
        {
            "id": 16,
            "name": "测试2",
            "create_time": 1558659795
        }
    ]
}
```
-	返回数据说明

```
id		数据ID
name		名称
create_time	创建时间
```

### 商铺入驻
```
    url     api/shop/shopSettled
```
-   参数

```
attribute	供应商属性:0:个人,1:法人
real_name	真实姓名	
idcard		身份证号码
mobile		手机号
wechat		微信号
shop_name	商铺名称
car_category	主营汽车品牌
address		地址
id_photo_0	身份证人像面路径
id_photo_1	身份证国徽面路径
license		营业执照路径(选填:供应商属性为法人时必填)

```
-	返回

```
{
    "code": 1,
    "msg": "申请成功,等待后台审核!",
    "data": ""
}
```
### 获取审核失败信息
```
    url     api/shop/shopExamineCause
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": "测试驳回原因"
}
```
### 删除审核失败的商铺信息
```
    url     api/shop/shopExamineDelete
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": ""
}
```
### 获取个人商铺信息
```
    url     api/shop/shopInfo
```
-   参数

```
无

```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 5,
        "user_id": 11,
        "shop_name": "宝马专营",
        "attribute": 0,
        "real_name": "张三",
        "idcard": "37083000000000000",
        "mobile": "18353709197",
        "wechat": "xqa64545",
        "car_category": "宝马",
        "address": "济宁兖州",
        "id_photo_0": "http://auction.jzbwlkj.com////upload////20190520////a68d6d7922e1ed5d742a7fbaeffd9ffd.jpg",
        "id_photo_1": "http://auction.jzbwlkj.com////upload////20190520////a68d6d7922e1ed5d742a7fbaeffd9ffd.jpg",
        "license": "",
        "status": 1,
        "create_time": "2019-05-23 11:21:50",
        "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190523\\/a5548078461174bdf740a206bada5d9d.jpg",
        "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190523\\/501a7fc502ed34beb89660fafe546ee0.jpg",
        "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190523\\/0a52657fa533731405ade666977d928f.jpg",
        "level": 0
    }
}
```
-	返回数据说明

```
id		商铺ID
user_id		用户ID
shop_name	商铺名
attribute	供应商属性:0:个人,1:法人
real_name	真实姓名
idcard		身份证号码
mobile		手机号码
wechat		微信号
car_category	主营汽车品牌
address		地址
id_photo_0	身份证人像面图片路径
id_photo_1	身份证国徽面图片路径
license		营业执照图片路径,供应商为法人时必填
status		状态:0:下架,1:正常
img1		商铺门店图片路径1
img2		商铺门店图片路径2
img3		商铺门店图片路径3
level		星级
create_time	创建时间
```
### 删除门店图片
```
    url     api/shop/delete_img
```
-   参数

```
img	图片路径

```
-	返回

```
{
    "code": 1,
    "msg": "删除成功",
    "data": ""
}
```
### 上传门店图片
```
    url     api/shop/add_img
```
-   参数

```
img	图片路径

```
-	返回

```
{
    "code": 1,
    "msg": "上传门店图片成功",
    "data": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/e85c8b63faffead7307db11d01652bfa.jpg"
}
```
### 新建商品(汽车)
```
    url     api/shop/carAdd
```
-   参数

```
img			汽车图片路径
title			商品标题
pay_num			价格
carno			车牌号
card_time 		上牌时间
category		汽车品牌(与其余品牌必须填写其中一个)
other_category		其余品牌(同上)
mileage			行驶里程
ascription		牌照归属
year_end_time		年险到期时间
force_end_time		强险到期时间
paifang			排放标准
pailiang		排量/变速
color			车身颜色
attribute		车辆属性
city			所在城市
transfer		是否能过户:0:否,1:是
shop_id			商铺ID

```
-	返回

```
{
    "code": 1,
    "msg": "发布成功,等待后台审核",
    "data": ""
}
```
### 个人商铺汽车列表
```
    url     api/shop/carList
```
-   参数

```

shop_id			商铺ID
type			获取列表类型:0:上架,1:下架,2:审核中,3:审核失败

```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": [
        {
            "id": 1,
            "shop_id": 5,
            "title": "宝马X6",
            "carno": "鲁HW2226",
            "pay_num": "300000.00",
            "img": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/457af0f06de2bc95dadfeec384e0d061.jpg",
            "category": "宝马",
            "other_category": "",
            "mileage": "1万公里",
            "ascription": "济宁",
            "card_time": 1284912000,
            "year_end_time": 1590768000,
            "force_end_time": 1590768000,
            "paifang": "国五",
            "pailiang": "测试1",
            "color": "白色",
            "attribute": "二手车",
            "city": "济宁",
            "transfer": 1,
            "status": 1,
            "online": 1,
            "create_time": 1558666006,
            "cause": ""
        }
    ]
}

```
-	返回数据说明

```
id			车辆ID
shop_id			商铺ID
title			标题
carno			车牌号
pay_num			价格
img			汽车图片路径
category		汽车品牌(与其余品牌必须填写其中一个)
other_category		其余品牌(同上)
card_time 		上牌时间
mileage			行驶里程
ascription		牌照归属
year_end_time		年险到期时间
force_end_time		强险到期时间
paifang			排放标准
pailiang		排量/变速
color			车身颜色
attribute		车辆属性
city			所在城市
transfer		是否能过户:0:否,1:是
status			状态:0:审核中,1:审核完成,2:审核失败
online			是否上线:0:否,1:是	
create_time		创建时间
cause			审核失败原因
```
### 汽车上下架操作
```
    url     api/shop/carIsOnline
```
-   参数

```
car_id	车辆ID
online	操作:0:下架,1:上架

```
-	返回

```
{
    "code": 1,
    "msg": "下架操作成功",
    "data": ""
}
```
### 编辑商品(汽车)
```
    url     api/shop/carEdit
```
-   参数

```
car_id			汽车ID
img			汽车图片路径
title			商品标题
pay_num			价格
carno			车牌号
card_time 		上牌时间
category		汽车品牌(与其余品牌必须填写其中一个)
other_category		其余品牌(同上)
mileage			行驶里程
ascription		牌照归属
year_end_time		年险到期时间
force_end_time		强险到期时间
paifang			排放标准
pailiang		排量/变速
color			车身颜色
attribute		车辆属性
city			所在城市
transfer		是否能过户:0:否,1:是

```
-	返回

```
{
    "code": 1,
    "msg": "修改成功,等待后台审核",
    "data": ""
}
```
### 删除商品(汽车)
```
    url     api/shop/carDelete
```
-   参数

```
car_id			汽车ID


```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": ""
}
```
##我要买车
###查询汽车信息
```
    url     api/car/carInfo
```
-   参数

```
car_id			汽车ID


```
-	返回

```
{
    "code": 1,
    "msg": "操作成功",
    "data": {
        "id": 8,
        "shop_id": 6,
        "title": "宝马X4",
        "carno": "鲁HW22**",
        "pay_num": "25万",
        "img": [
            "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190525\\/7a235c31a141c43234ca29143341b92c.jpg",
            "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190525\\/834dce129a94189ab4b8c2d0c765538d.jpg",
            "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190525\\/0b6b4d2dc369420e27e2c28340568d0a.jpg"
        ],
        "category": "宝马",
        "other_category": "",
        "mileage": "1万公里",
        "ascription": "济宁",
        "card_time": "2018.09",
        "year_end_time": "2020-05-30",
        "force_end_time": "2020-05-30",
        "paifang": "国五",
        "pailiang": "测试1",
        "color": "白色",
        "attribute": "二手车",
        "city": "济宁",
        "transfer": 1,
        "status": 1,
        "online": 1,
        "create_time": "2019-05.25",
        "cause": "",
        "like": "已收藏",
        "shop_info": {
            "id": 6,
            "user_id": 11,
            "shop_name": "宝马专营",
            "attribute": 0,
            "real_name": "张三丰",
            "idcard": "370830241564654874654564",
            "mobile": "18353709197",
            "wechat": "adfwa45454",
            "car_category": "宝马",
            "area": "济宁",
            "address": "山东济宁兖州",
            "id_photo_0": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/5dd5bf47f797ecaf57936e5440e1020e.jpg",
            "id_photo_1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/7ac1007cddf20bde1bc6304cfae13821.jpg",
            "license": "",
            "status": 1,
            "create_time": 1558691571,
            "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/0a38ff1254780f62465e7c5d3d82be23.jp",
            "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1d6faedcfdc31963fb4f8bf41046cd0e.jpg",
            "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1f4c8b23f43c7027b300c42708d56d6d.jpg",
            "level": 0
        }
    }
}
```
-返回数据说明

```
	id 			汽车ID
	shop_id			商铺ID
	title			标题
	carno			车牌号
	pay_num			价格
	img 			车辆照片路径[数组]
	category 		品牌
	other_category	其他品牌
	mileage			行驶里程
	ascription		牌照归属地
	card_time		上牌时间
	year_end_time	年险到期时间
	force_end_time	强险到期时间
	paifang			排放标准
	pailiang		排量/变速
	color			车身颜色
	attribute		车辆属性
	city			所在城市	
	transfer		是否能过户:0:否,1:是
	like			是否收藏
	like_num		收藏次数
shop_info		店铺信息
{
id			商铺ID
user_id			商铺店主用户ID
shop_name		商铺名称
attribute		供应商属性:0:个人,1:法人
real_name		真实姓名
idcard			身份证号码
mobile			手机号码
wechat			微信号
car_category	主营汽车品牌
area			地区
address			地址		
id_photo_0		身份证人像面图片路径
id_photo_1		身份证国徽面图片路径
license			营业执照图片路径,供应商为法人时必填
status			状态:0:下架,1:正常
create_time		创建时间
img1			商铺门店图片路径1	
img2			商铺门店图片路径2	
img3			商铺门店图片路径3
level			星级
}

```

###首页-

```
    url     api/car/likeCarList
```
-   参数

```
无


```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 5,
            "shop_id": 6,
            "title": "宝马X1",
            "carno": "鲁HW2226",
            "pay_num": 830000,
            "img": [
                "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190525\\/53e8631d431a03c3f52cc6fc0a32ed38.jpg"
            ],
            "category": "宝马",
            "other_category": "",
            "mileage": "1万公里",
            "ascription": "济宁",
            "card_time": 1537372800,
            "year_end_time": 1590768000,
            "force_end_time": 1590768000,
            "paifang": "国五",
            "pailiang": "测试1",
            "color": "黑色",
            "attribute": "二手车",
            "city": "济宁",
            "transfer": 1,
            "status": 1,
            "online": 1,
            "create_time": 1558755624,
            "cause": "",
            "like_num": 1,
            "shop_info": {
                "id": 6,
                "user_id": 11,
                "shop_name": "宝马专营",
                "attribute": 0,
                "real_name": "张三丰",
                "idcard": "370830241564654874654564",
                "mobile": "18353709197",
                "wechat": "adfwa45454",
                "car_category": "宝马",
                "area": "济宁",
                "address": "山东济宁兖州",
                "id_photo_0": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/5dd5bf47f797ecaf57936e5440e1020e.jpg",
                "id_photo_1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/7ac1007cddf20bde1bc6304cfae13821.jpg",
                "license": "",
                "status": 1,
                "create_time": 1558691571,
                "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/0a38ff1254780f62465e7c5d3d82be23.jp",
                "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1d6faedcfdc31963fb4f8bf41046cd0e.jpg",
                "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1f4c8b23f43c7027b300c42708d56d6d.jpg",
                "level": 1
            }
        },
        
        
    ]
}
```
-返回数据说明

```
	id 			汽车ID
	shop_id			商铺ID
	title			标题
	carno			车牌号
	pay_num			价格
	img 			车辆照片路径[数组]
	category 		品牌
	other_category	其他品牌
	mileage			行驶里程
	ascription		牌照归属地
	card_time		上牌时间
	year_end_time	年险到期时间
	force_end_time	强险到期时间
	paifang			排放标准
	pailiang		排量/变速
	color			车身颜色
	attribute		车辆属性
	city			所在城市	
	transfer		是否能过户:0:否,1:是
	like			是否收藏
	like_num		收藏次数
shop_info		店铺信息
{
id			商铺ID
user_id			商铺店主用户ID
shop_name		商铺名称
attribute		供应商属性:0:个人,1:法人
real_name		真实姓名
idcard			身份证号码
mobile			手机号码
wechat			微信号
car_category	主营汽车品牌
area			地区
address			地址		
id_photo_0		身份证人像面图片路径
id_photo_1		身份证国徽面图片路径
license			营业执照图片路径,供应商为法人时必填
status			状态:0:下架,1:正常
create_time		创建时间
img1			商铺门店图片路径1	
img2			商铺门店图片路径2	
img3			商铺门店图片路径3
level			星级
}

```
###获取筛选过的商铺列表
```
    url     api/shop/shopList
```
-   参数

```
area			地区[可选][例:济宁,济南,泰安]
car_category		品牌[可选]


```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 6,
            "user_id": 11,
            "shop_name": "宝马专营",
            "attribute": 0,
            "real_name": "张三丰",
            "idcard": "370830241564654874654564",
            "mobile": "18353709197",
            "wechat": "adfwa45454",
            "car_category": "宝马",
            "area": "济宁",
            "address": "山东济宁兖州",
            "id_photo_0": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/5dd5bf47f797ecaf57936e5440e1020e.jpg",
            "id_photo_1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/7ac1007cddf20bde1bc6304cfae13821.jpg",
            "license": "",
            "status": 1,
            "create_time": 1558691571,
            "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/0a38ff1254780f62465e7c5d3d82be23.jp",
            "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1d6faedcfdc31963fb4f8bf41046cd0e.jpg",
            "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1f4c8b23f43c7027b300c42708d56d6d.jpg",
            "level": 0,
            "car_list": [
                {
                    "id": 3,
                    "shop_id": 6,
                    "title": "宝马730",
                    "carno": "鲁HW2226",
                    "pay_num": 830000,
                    "img": [
                        "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/512db52219c6d913f133918737893f61.jpg"
                    ],
                    "category": "宝马",
                    "other_category": "",
                    "mileage": "1万公里以内",
                    "ascription": "济宁",
                    "card_time": 1484912000,
                    "year_end_time": 1590768000,
                    "force_end_time": 1590768000,
                    "paifang": "国五",
                    "pailiang": "测试1",
                    "color": "黑色",
                    "attribute": "二手车",
                    "city": "济宁",
                    "transfer": 1,
                    "status": 1,
                    "online": 1,
                    "create_time": 1558691800,
                    "cause": ""
                },
                
               
            ]
        }
    ]
}
```
-返回数据说明

```
id				商铺ID
user_id			商铺店主用户ID
shop_name		商铺名称
attribute		供应商属性:0:个人,1:法人
real_name		真实姓名
idcard			身份证号码
mobile			手机号码
wechat			微信号
car_category		主营汽车品牌
area			地区
address			地址		
id_photo_0		身份证人像面图片路径
id_photo_1		身份证国徽面图片路径
license			营业执照图片路径,供应商为法人时必填
status			状态:0:下架,1:正常
create_time		创建时间
img1			商铺门店图片路径1	
img2			商铺门店图片路径2	
img3			商铺门店图片路径3
level			星级
car_list		上线的汽车列表
{
	id 				汽车ID
	shop_id			商铺ID
	title			标题
	carno			车牌号
	pay_num			价格
	img 			车辆照片路径[数组]
	category 		品牌
	other_category	其他品牌
	mileage			行驶里程
	ascription		牌照归属地
	card_time		上牌时间
	year_end_time	年险到期时间
	force_end_time	强险到期时间
	paifang			排放标准
	pailiang		排量/变速
	color			车身颜色
	attribute		车辆属性
	city			所在城市	
	transfer		是否能过户:0:否,1:是
}
```

###商铺首页
```
    url     api/shop/shopIndex
```
-   参数

```
shop_id		店铺ID


```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 6,
        "user_id": 11,
        "shop_name": "宝马专营",
        "attribute": 0,
        "real_name": "张三丰",
        "idcard": "370830241564654874654564",
        "mobile": "18353709197",
        "wechat": "adfwa45454",
        "car_category": "宝马",
        "area": "济宁",
        "address": "山东济宁兖州",
        "id_photo_0": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/5dd5bf47f797ecaf57936e5440e1020e.jpg",
        "id_photo_1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/7ac1007cddf20bde1bc6304cfae13821.jpg",
        "license": "",
        "status": 1,
        "create_time": 1558691571,
        "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/0a38ff1254780f62465e7c5d3d82be23.jp",
        "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1d6faedcfdc31963fb4f8bf41046cd0e.jpg",
        "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1f4c8b23f43c7027b300c42708d56d6d.jpg",
        "level": 0,
        "car_list": [
            {
                "id": 3,
                "shop_id": 6,
                "title": "宝马730",
                "carno": "鲁HW2226",
                "pay_num": "83万",
                "img": [
                    "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/512db52219c6d913f133918737893f61.jpg"
                ],
                "category": "宝马",
                "other_category": "",
                "mileage": "1万公里以内",
                "ascription": "济宁",
                "card_time": 1484912000,
                "year_end_time": 1590768000,
                "force_end_time": 1590768000,
                "paifang": "国五",
                "pailiang": "测试1",
                "color": "黑色",
                "attribute": "二手车",
                "city": "济宁",
                "transfer": 1,
                "status": 1,
                "online": 1,
                "create_time": 1558691800,
                "cause": "",
                "like": "已收藏"
            },
            
        ]
    }
}
```
-返回数据说明

```
id				商铺ID
user_id			商铺店主用户ID
shop_name		商铺名称
attribute		供应商属性:0:个人,1:法人
real_name		真实姓名
idcard			身份证号码
mobile			手机号码
wechat			微信号
car_category		主营汽车品牌
area			地区
address			地址		
id_photo_0		身份证人像面图片路径
id_photo_1		身份证国徽面图片路径
license			营业执照图片路径,供应商为法人时必填
status			状态:0:下架,1:正常
create_time		创建时间
img1			商铺门店图片路径1	
img2			商铺门店图片路径2	
img3			商铺门店图片路径3
level			星级
car_list		上线的汽车列表
{
	id 				汽车ID
	shop_id			商铺ID
	title			标题
	carno			车牌号
	pay_num			价格
	img 			车辆照片路径[数组]
	category 		品牌
	other_category	其他品牌
	mileage			行驶里程
	ascription		牌照归属地
	card_time		上牌时间
	year_end_time	年险到期时间
	force_end_time	强险到期时间
	paifang			排放标准
	pailiang		排量/变速
	color			车身颜色
	attribute		车辆属性
	city			所在城市	
	transfer		是否能过户:0:否,1:是
	like			是否收藏
}
```
###获取筛选后的汽车列表
```
    url     api/car/bayCarList
```
-   参数[可选]


```
attribute		车辆属性[二手车]
city			城市
pay_num			价格[3万元以下]
card_time		上牌时间[1年以内]
category		品牌
mileage			表显公里
color			颜色
transfer		能否过户[能]		


```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 3,
            "shop_id": 6,
            "title": "宝马730",
            "carno": "鲁HW22**",
            "pay_num": "83万",
            "img": [
                "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/512db52219c6d913f133918737893f61.jpg"
            ],
            "category": "宝马",
            "other_category": "",
            "mileage": "1万公里以内",
            "ascription": "济宁",
            "card_time": "2017.01",
            "year_end_time": "2020-05-30",
            "force_end_time": "2020-05-30",
            "paifang": "国五",
            "pailiang": "测试1",
            "color": "黑色",
            "attribute": "二手车",
            "city": "济宁",
            "transfer": 1,
            "status": 1,
            "online": 1,
            "create_time": "2019-05.24",
            "cause": "",
            "shop_info": {
                "id": 6,
                "user_id": 11,
                "shop_name": "宝马专营",
                "attribute": 0,
                "real_name": "张三丰",
                "idcard": "370830241564654874654564",
                "mobile": "18353709197",
                "wechat": "adfwa45454",
                "car_category": "宝马",
                "area": "济宁",
                "address": "山东济宁兖州",
                "id_photo_0": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/5dd5bf47f797ecaf57936e5440e1020e.jpg",
                "id_photo_1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/7ac1007cddf20bde1bc6304cfae13821.jpg",
                "license": "",
                "status": 1,
                "create_time": 1558691571,
                "img1": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/0a38ff1254780f62465e7c5d3d82be23.jp",
                "img2": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1d6faedcfdc31963fb4f8bf41046cd0e.jpg",
                "img3": "http:\\/\\/auction.jzbwlkj.com\\/upload\\/20190524\\/1f4c8b23f43c7027b300c42708d56d6d.jpg",
                "level": 0
            },
            "like": "已收藏"
        },
        
    ]
}
```
-返回数据说明

```
同汽车详情

```

###收藏商品(汽车)
```
    url     api/car/carLike
```
-   参数

```
car_id		汽车ID


```
-	返回

```
{
    "code": 1,
    "msg": "收藏成功",
    "data": ""
}
```

###取消收藏商品(汽车)
```
    url     api/car/carNoLike
```
-   参数

```
car_id		汽车ID


```
-	返回

```
{
    "code": 1,
    "msg": "取消收藏成功",
    "data": ""
}
```
###投诉
```
    url     api/car/setComplaint
```
-   参数

```
shop_id		商铺内容ID
content		投诉内容
car_id		汽车ID[选填]


```
-	返回

```
{
    "code": 1,
    "msg": "投诉成功",
    "data": ""
}
```
/**********************************拍卖管理**********************************************/



### 拍卖首页幻灯片

```
    url     api/auction/getBanner
    method  get 

```

```
{
    "code": 1,
    "msg": "",
    "data": [
        {
            "id": 2,
            "slide_id": 1,
            "status": 1,
            "list_order": 1,
            "title": "拍卖幻灯片1",
            "image": "admin/20190521/55ae3fb26dcc3e3bc5d94e022e3f6f1e.png",
            "url": "",
            "target": "",
            "description": "",
            "content": "",
            "more": null
        }
    ]
}
```

### 获取拍卖首页公告

```
    url     api/auction/getRule
    method  get
```

```
{
    "code": 1,
    "msg": "",
    "data": {
        "rule": "<p>如有作弊，立即清除</p>"
    }
}
```

### 首页进入竞拍收藏 获取收藏车辆列表数据
```
url:api/auction/getUserFavCar
method:get
```
```
{
    "code": 1,
  "msg": ""
    "data": [
        {
            "id": 2,
            "title": "测试车辆",
            "car_type": "抵押车",
            "car_number": "鲁H51254",
            "start_time": 1557753180,
            "end_time": 1558345140,
            "name": "济宁市",
            "collection": 1 收藏状态 1收藏 0为收藏
        }
    ]
}
```

### 获取首页竞拍场次列表
```
    url：api/auction/getSessionList
    method:get
```

```
{
    "code": 1,
    "msg": "",
    "data": [
        {
            "id": 2,
            "title": "第二场次",
            "desc": "第二场次", 
            "start_time": 1558257900,
            "end_time": 1558505700,
            "car_num": 10,
            "status_text": "实时拍"
        }
    ]
}
```



### 进入场次 获取筛选条件数据
#### 获取提车地点 和 车牌属地请求地址一致
```
    url：api/Area/getAreas
    method:get
    参数
    id  获取该id下的所有地区 从0开始
    id=1  返回所有中国的省份数据
    id=0  显示国家数据 目前只有中国 
    所以要获取所有地点信息  需要传id=1  
```

```
{
    "code": 1,
    "msg": "",
    "data": [
        {
            "id": 1,
            "name": "中国",
            "pinyin": "\ufeffZhongGuo",
            "pid": 0,
            "status": 0,
            "sort": 0,
            "temp": "",
            "letter": "\ufeffZ",
            "is_open": 0,
            "level": 0,
            "region": 0
        }
    ]
}
```

#### 获取车辆品牌
```
    url：api/Shop/carCategory
    method:get
```

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 2,
            "name": "奔驰",
            "img": "http://auction.jzbwlkj.com/upload/20190518/204db141a7583fcf7c77dd8ba58dc65e.jpg",
            "create_time": 1558160163,
            "update_time": 1558160163,
            "online": 1
        }
    ]
}
```

#### 获取车辆属性
```
    url：api/Area/getCarAttr
    method:get
```

```
{
    "code": 1,
    "msg": "",
    "data": [
        "债权车", 0
        "过户车", 1
        "抵押车", 2
        "二手",   3
        "事故车"  4
    ]
}
```




### 进入场次 获取该场次的竞拍车辆列表

```
    url：api/auction/getCarList
    method:get
    搜索参数
    auction_session_id 场次id
    tp  提车地省 id
    tc  提车地市 id
    ta  提车地区 id
    cp  车牌归属省 字符串 （山东省）
    cc  车牌归属市 字符串 （济宁市）
    brand_info 车辆品牌 字符串 （宝马）
    car_type  id  0"债权车" 1"过户车", 2"抵押车", 3"二手",4"事故车"        
```

```
{
    "code": 1,
    "msg": "",
    "data": [
        {
            "id": 3,
            "title": "测试车辆2",
            "car_type": "过户车",
            "car_number": "鲁H51254",
            "start_time": 1558257900,
            "end_time": 1558505700,
            "name": "济宁市",
            "collection": 0 收藏状态 1收藏 0为收藏
        }
    ]
}
```

### 添加收藏
```
url:api/auction/addUserFav
method：get
参数
cid 收藏的车辆id
```
```
{
    "code": 1,
    "msg": "",
    "data": "收藏成功"
}
```
### 取消收藏
```
url:api/auction/delUserFav
method:get
参数
cid 取消收藏车辆id
```
```
{
    "code": 1,
    "msg": "",
    "data": "已取消"
}
```

## 外接服务
### 获取服务金额
```
    url     /api/fuwu/getMoney
```
-   参数

```
无
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "weizhang_money": "5",
        "weibao_money": "8"
    }
}
```
-	返回数据说明

```
	weizhang_money		查违章金额
	weibao_money		查维保金额
	
	
```
### 生成服务订单
```
    url     /api/fuwu/setFuwuIndent
```
-   参数

```
	pay_num		订单金额
	order_type	订单类型:0:违章,1:维保
	
```
-	返回

```
{
    "code": 1,
    "msg": "创建订单成功",
    "data": {
        "id": 4,
        "user_id": 11,
        "out_trade_no": "2019052256545010",
        "pay_num": "10.00",
        "order_type": 0,
        "status": 0,
        "create_time": 1558508840,
        "refund_update_time": null,
        "pay_time": null
    }
}
```
-	返回数据说明

```
	id		订单ID
	user_id		用户ID
	order_type	唯一订单号
	pay_num		金额
	order_type	订单类型:0:违章,1:维保
	status		状态:0:未付款,1:交易成功,2:已退款,3:交易关闭
	create_time	创建时间
	refund_update_time	退款时间
	pay_time	支付时间
	
```

### 查询服务
```
    url     /api/fuwu/fuwu
```
-   参数

```
carno		车牌号
engineno	发动机号
classno		大架号
out_trade_no	唯一订单号
type		服务类型:0:违章,1:维保
	
```
-	0违章返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        {
            "id": 8,
            "hphm": "赣G60P12",
            "hpzl": 2,
            "weizhang_time": "2013-12-29 11:57:29",
            "area": "杭瑞高速462公里600米",
            "act": "机动车从匝道进入或驶离高速公路时不按规定使用灯光的",
            "fen": 0,
            "money": "100.00",
            "handled": "0",
            "wzcity": "江西"
        },
        
    ]
}
```
-	0违章数据返回说明

```
	id		违章数据ID
	hphm		车牌号
	hpzl		车型:1:大型车,2:小型车
	weizhang_time	违章时间
	area		违章地点
	act		违章行为
	fen		违章扣分(仅供参考，不一定有值)
	money		违章罚款(仅供参考，不一定有值)
	handled		是否处理,1处理 0未处理 空未知
	wzcity		违章城市(仅供参考，不一定有值)
	
```
-	1维保返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 4,
        "hphm": "黑G79343",
        "vin": "LFV2A21K5A3104753",
        "enginno": "J68201",
        "brand": "大众",
        "carType": "三厢",
        "seriesName": "速腾",
        "modelName": "速腾FV7146TATG轿车",
        "transmissionType": "双离合变速器",
        "productionArea": "合资",
        "displacement": "1.39",
        "carComponentRecordsFlag": 0,
        "carConstructRecordsFlag": 1,
        "carOutsideRecordsFlag": 1,
        "carFireFlag": 0,
        "carWaterFlag": 0,
        "mileageIsNormalFlag": 1,
        "effluentStandard": null,
        "lastMainTainTime": "2016-12-19",
        "lastRepairTime": "2016-12-19",
        "mainTainTimes": 0.9,
        "makeDate": "2010",
        "reportNo": "201905221122658214",
        "makeReportDate": "2019-05-22 11:26",
        "manufacturer": "一汽大众",
        "mileageEstimate": "68800",
        "mileageEveryYear": "7705",
        "normalRepairRecords": [
            
            {
                "content": "保养; 速腾TSI常规20000KM保养*; 检查右前门下垂; 更换刹车油; ",
                "date": "2016-01-29",
                "mainTainDate": 1453996800000,
                "materal": "火花塞 CFB:4; 全合成顶级机油(0w40):1; 机油滤清器:1; 滤清器:1; 刹车液():1; 六角头组合螺塞:1; 节气门免拆清洗剂:1; 发动机润滑系统清洗剂:1; 火花塞 CFB:4; 火花塞 CFB:-4; ",
                "mileage": 38500,
                "payType": null,
                "remark": null,
                "totalMoney": null,
                "type": "保养"
            },
            
        ],
        "outsideAnalyzeRepairRecords": [
            {
                "content": "事故; 前杠喷漆(四周下部); 右后叶子板喷漆; ",
                "date": "2011-12-31",
                "mainTainDate": 1325260800000,
                "materal": "银灰漆及附料; ",
                "mileage": 0,
                "payType": null,
                "remark": null,
                "totalMoney": null,
                "type": "事故"
            },
            
        ],
        "componentAnalyzeRepairRecords": null,
        "constructAnalyzeRepairRecords": [
            {
                "content": "事故; 自费6112; 右后翼子板整型; 右后翼子板喷漆; B柱喷漆; B柱整型; 换右后车门导轨及隔音板; 换右前车门导轨及隔音板; 换右前车门锁体及支架; 换右前车门皮; 换右后车门皮; 右后车门喷漆; 右前车门喷漆; 后保险杠喷漆; ",
                "date": "2012-01-19",
                "mainTainDate": 1326902400000,
                "materal": "车门外板(C):1; 车门外板（C类）:1; 支撑条（替换1K5 833 300 H）ST:1; 隔音板:2; 支撑条 ST:1; 支撑条:1; 把手支座总成(C):1; 车门锁:1; 尾端外饰板（C类）:1; 钱已交 票已开 6112:1; ",
                "mileage": 9200,
                "payType": null,
                "remark": null,
                "totalMoney": null,
                "type": "事故"
            }
        ],
        "create_time": 2019-05-22 16:02:00
    }
}
```
-	1维保返回数据说明

```
id			维保数据id
hphm			车牌号
vin			大架号
enginno			发动机号
brand			品牌名
carType			车辆类型
seriesName		车系
modelName		车型
transmissionType	变速箱类型
productionArea		产地
displacement		排量
carComponentRecordsFlag	重要组成部分是否有维修:0:否1:是
carConstructRecordsFlag	结构部件是否有维修:0:否1:是
carOutsideRecordsFlag	外观覆盖件是否有维修:0:否1:是
carFireFlag		是否火烧:0:否1:是
carWaterFlag		是否水泡:0:否1:是
mileageIsNormalFlag	公里数是否正常:0:否1:是
effluentStandard	排放标准		
lastMainTainTime	最后一次保养时间
lastRepairTime		最后一次维修时间
mainTainTimes		每年保养次数
makeDate		生产年份
reportNo		报告编号
makeReportDate		报告生成时间
manufacturer		报告生成厂商
mileageEstimate		预估公里数
mileageEveryYear	每年行驶公里数
normalRepairRecords	该车所有的维修报告	
outsideAnalyzeRepairRecords	外观覆盖件详细维修记录
componentAnalyzeRepairRecords	重要组件详细维修记录
constructAnalyzeRepairRecords	结构详细维修记录
create_time		创建时间
content			维修详细的内容
date			维修的时间
materal			维修的材料
mileage			维修的公里数
payType			支付的类型
remark			备注
type			维修类型

```

### 获取服务金额
```
    url     /api/fuwu/getMoney
```
-   参数

```
无
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "weizhang_money": "5",
        "weibao_money": "8"
    }
}
```
-	返回数据说明

```
	weizhang_money		查违章金额
	weibao_money		查维保金额
	
	
```

### 访问估价日志
```
    url     /api/fuwu/setGujiaLog
```
-   参数

```
	无
	
```
-	返回

```
{
    "code": 1,
    "msg": "写入日志成功",
    "data": 
}
```
###获取后台设置的查询协议
```
    url     /api/fuwu/getFuwuXieyi
```
-   参数

```
	无
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": {
        "id": 3,
        "title": "第三方查询协议",
        "content": "查询协议",
        "create_time": 1558947861,
        "update_time": 1558947861
    }
}
```
###获取后台设置的所有协议
```
    url     /api/fuwu/getXieyi
```
-   参数

```
	无
	
```
-	返回

```
{
    "code": 1,
    "msg": "查询成功",
    "data": [
        
        {
            "id": 2,
            "title": "钱包说明",
            "content": "这里是钱包说明,我也不知道说明啥,随便填点,以后再改",
            "create_time": 1558430989,
            "update_time": 1558430989
        },
        {
            "id": 3,
            "title": "第三方查询协议",
            "content": "查询协议",
            "create_time": 1558947861,
            "update_time": 1558947861
        },

    ]
}
```


# 资讯
## 获取资讯列表
```
    url     /api/news/getList
```
-   参数
```
    type    取值 0 新闻 1 视频 默认 0
```
## 获取资讯详情
```
    url     /api/news/getInfo
```
-   参数
```
    id      资讯id
```
## 资讯点赞
```
    url     /api/news/addPraise
```
-   参数
```
    news_id      资讯id
```
## 取消资讯点赞
```
    url     /api/news/delPraise
```
-   参数
```
    news_id      资讯id
```
## 添加评论
```
    url     /api/news/addComment
```
-   参数
```
    news_id      资讯id
    content      评论内容
```

####首页幻灯片
    url     api/Index/getBanner
    method  get
    {
        "code": 1,
        "msg": "操作成功",
        "data": [
            {
                "id": 4,
                "slide_id": 2,
                "status": 1,
                "list_order": 10000,
                "title": "首页幻灯片1",
                "image": "http://auction.jzbwlkj.com/upload/admin/20190604/9757b057417b7a77d7b495cc5cd37e6f.png",
                "url": "",
                "target": "",
                "description": "",
                "content": "",
                "more": null
            }
        ]
    }
        
#### 首页推荐专区车品超市栏位展示3个     
    url:api/Goods/indexGoods
    	method:get
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


#### 获取公司400电话
    url:api/index/getSystemTel
        method:get
        参数：
        type： persontel * 个人中心： 
               auctiontel* 招财拍： 
    {
        "code": 1,
        "msg": "操作成功",
        "data": [
            "400-123456"
        ]
    }