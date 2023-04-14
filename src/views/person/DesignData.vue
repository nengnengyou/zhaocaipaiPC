<template>
  <div id="person-design-data">
    <p class="person-big-title">我的店铺</p>
	<div class="person-s-div">
		<p class="person-xiugai">商铺资料</p>
		<p class="person-xiugai" style="cursor: pointer;" @click="goSell">修改资料</p>
		<!-- <p class="person-xiugai">修改资料</p> -->
	</div>
    
    <div class="info clearfloat">
      <div class="info-item">
        <p class="title">供应商属性：</p>
        <p class="subtitle">{{info.attribute?'法人':'个人'}}</p>
      </div>
      <div class="info-item">
        <p class="title">真实姓名：</p>
        <p class="subtitle">{{info.real_name}}</p>
        <span class="shu"></span>
      </div>
      <div class="info-item">
        <p class="title">手机号：</p>
        <p class="subtitle">{{info.mobile}}</p>
        <span class="shu"></span>
      </div>
      <div class="info-item">
        <p class="title">商铺信息：</p>
        <p class="subtitle">{{info.shop_name}}</p>
        <span class="shu"></span>
      </div>
    </div>
    <div class="address">
      <span class="title">商铺地址：</span>
      <span class="subtitle">{{info.address}}</span>
    </div>
    <!-- <div class="images">
      <span class="title">商铺照片：</span>
      <div class="images-inner">
        <div class="img-box" v-for="(item,index) in info.images" :key="index">
          <i @click="delete_img(item)" class="card-icon fa fa-trash-o"></i>
          <img class="img-item" :src="item" alt />
        </div>
      </div>
    </div> -->
	<div class="images">
	  <span class="title">营业执照：</span>
	  <div class="images-inner">
	    <!-- <div class="img-box" v-for="(item,index) in info.images" :key="index">
	      <i @click="delete_img(item)" class="card-icon fa fa-trash-o"></i>
	      <img class="img-item" :src="item" alt />
	    </div> -->
		<viewer :images="info.business_image">
			<div class="banner__wrapper" style="margin-bottom: 5px;">
				<div class="banner__inner">
		
					<!-- <div style="margin-bottom: 5px;" class="item_img" v-for="(item,index) in cartxt.car_pic_url" :key="index"> -->
					<div class="banner-img__wrapper">	
		
						<img :src="info.business_image" alt="加载失败" title="点击查看大图" style="cursor: pointer; width: 100%;">
					</div>
				</div>
			</div>
		</viewer>
		<!-- <img class="img-item" :src="info.business_image" alt /> -->
	  </div>
	</div>
    <!-- <div style="text-align:center;">
      <el-upload
        name="file"
        :show-file-list="false"
        action='/api/common/upload'
        :on-success="handleAvatarSuccess"
      >
        <el-button type="primary" class="up">上传商铺照片</el-button>
      </el-upload>
    </div> -->
  </div>
</template>
<script>
import { baseURL } from "@/service/axiosConfig.js";
export default {
  data () {
    return {
      info: {},
      baseURL: baseURL,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created () {
    this.shopIndex2()
  },
  methods: {
    delete_img (img) {
      this.$api.delete_img({ img: img }).then(res => {
        this.shopIndex()
        this.$message.success(res.msg)
      })
    },
    handleAvatarSuccess (res, obj) {
      /* 请求上传图片 */
	  //let a = JSON.parse(this.setRes(res)) 
	  let a = res
	  console.log(a)
      let params = {
        images: a.data.url
      }
      this.$api.add_img(params).then(res => {
        this.shopIndex()
      })
    },
	
	
	goSell(){
		this.$router.push({
					path: '/sell',
					query: {
						shoptxt: this.info
					}
				})
	},
	
	//处理res
	setRes(res) {
		let g = res.indexOf('{"code"')
		let z = res.length;
		let x = decodeURI(res.substring(g, z));
		//console.log(x)
		return x;
	},
	
	shopIndex2() {
		this.$api.fapaishenqing().then(res => {
			console.log(res)
			if(res.code==1){
				if (res.data == null || res.data.check_status != 1) {
					// if(res.data.check_status == 2){
						
					// }
				// if (res.data == null) {
					this.$router.push('/sell')
				} else {
					this.info = res.data
				}
			}else{
				this.$router.push('/sell')
				
			}
		})
	},
	
    shopIndex () {
      this.$api.fapaishenqing().then(res => {
        if (res.data == null) {
          this.$router.push('/sell')
        } else {
          this.info = res.data
		  console.log(this.info)
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
#person-design-data {
  background-color: #fff;
  // padding-top: 90px;
  // padding-bottom: 20px;
}
.person-big-title {
  padding-bottom: 30px;
}

.person-s-div{
	display: flex;
	justify-content: space-between;
	 border-bottom: 1px solid #e6e6e6;
}
.design-inner {
  // width: @conent-width;
  // margin: 0 auto;
}
.person-small-title {
  margin-bottom: 0px;
}
.person-xiugai{
	font-size: 18px;
	    font-family: MicrosoftYaHei;
	    font-weight: 400;
	    color: #333333;
	    
	    //margin-bottom: 20px;
	    padding-bottom: 10px;
}

.img-box {
  position: relative;
  .card-icon {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    font-size: 64px;
    color: red;
    z-index: 2;
  }
}
/*  */
.info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
}
.address {
  padding: 20px 0;
  .title {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    padding-right: 10px;
    color: rgba(51, 51, 51, 1);
  }
  .subtitle {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
  }
}

.images {
  .title {
    float: left;
    padding-right: 10px;
  }
  .images-inner {
    width: 670px;
    margin-bottom: -20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    // border-bottom: 1px solid rgba(230, 230, 230, 1);
    .img-item {
      display: inline-block;
      width: 208px;
      height: 150px;
      margin-bottom: 20px;

      background: rgba(51, 133, 255, 1);
      border-radius: 10px;
    }
  }
}
.up {
  width: 180px;
  height: 40px;
  background: rgba(51, 133, 255, 1);
  border-radius: 4px;
  font-size: 17px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 0 auto;
  margin-top: 50px;
}
.info-item {
  float: left;
  padding: 25px 25px 30px 30px;
  // border-right: 1px solid rgba(230, 230, 230, 1);
  align-items: flex-start;
  position: relative;
  .shu {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: inline-block;
    width: 1px;
    background-color: rgba(230, 230, 230, 1);
  }
  .title {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 17px;
  }
  .subtitle {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
  }
}

/deep/.el-button + .el-button {
  margin: 0;
}
/deep/ .el-form-item__label,
/deep/ .el-checkbox__label {
  font-size: 16px;
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
.banner-img__wrapper {
		// position: absolute;
		// width: 1920px;
		//  height: 500px;
		//left: 50%;
		//margin-left: -960px;
	}

	.banner__inner {
		position: relative;
		width: 100%;
		overflow: hidden;
		//height: 674px;
	}
</style>
