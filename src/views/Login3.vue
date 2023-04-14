<template>
  <div class="login">
    <!-- 注册协议 -->
    <el-dialog title="协议" :visible.sync="dialogVisible" width="50%">
      <p v-html="xieyi"></p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 区域 -->
    <div class="box-card">

      <p class="login-title">欢迎登录招财拍</p>



      <div class="login-type">
        <div class="login-type-item " @click="switchType('pwd')" :class="type=='pwd'?'login-type-item-active':''">密码登录</div>
        <div class="login-type-item" @click="switchType('code')" :class="type=='code'?'login-type-item-active':''">短信登录</div>
      </div>


      <div class="login-conent ">

        <el-input class="login-input"
                placeholder="请输入手机号"
                v-model="userLogin.username"
        >
          <i slot="prefix" class="el-input__icon icon-user"></i>
        </el-input>


        <el-input v-if="type == 'pwd'"
                class="login-input"
                placeholder="请输入密码"
                  show-password
                v-model="userLogin.password"
        >
          <i slot="prefix" class="el-input__icon icon-keyboard"></i>
        </el-input>

        <el-input v-if="type == 'code'"
                  class="login-input"
                  placeholder="请输入验证码"
                  v-model="userLogin.code"
        >
          <i slot="prefix" class="el-input__icon icon-mobile"></i>
          <el-button slot="append" @click="getCode" :disabled="clickCode">{{timeTips}}</el-button>
        </el-input>




        <div class="login-c">
          <p class="login-c-text">
            <router-link to="/register">快速注册 ></router-link>
          </p>
          <p class="login-c-text">
            <router-link style="color:#3385FF" to="/forget">忘记密码?></router-link>
          </p>
        </div>

        <el-button class="up-btn" type="primary" @click="onSubmit">登陆</el-button>

      </div>



      <p class="user-xieyi1 user-xieyi">
        <!-- <i class="iconfont icon-duihao" style="color:#35CCAA"></i> -->
        <el-checkbox v-model="checked">
          我已同意
          <a
                  @click="dialogVisible = true "
                  style="color:#3385FF;cursor: pointer;"
          >《招财拍平台使用协议》</a>
        </el-checkbox>
      </p>




    </div>
  </div>
</template>

<script>
import local from "../service/localstorage";
import Fingerprintjs from "fingerprintjs2"
export default {
  name: 'login',
  data () {
    return {
      checked: false,
      dialogVisible: false,
      xieyi: '',
      type: 'pwd',   //判断是密码还是短信
      time: 60,
      timeTips: '获取验证码',
      clickCode: false,
      style: { 'height': '100vh' },
      userLogin: {
        username: '',
        password: '',
        device_type: 'web',
        device_info: '',
        code: '',   //验证码登录
        agent: 'pc'
      }

    }
  },
  methods: {
    timeDown() {
      let _this = this

      this.clickCode = true
      let timer = setInterval(() => {
        if(this.time > 0) {
          this.time--;
          this.timeTips = '已发送（' + this.time + ')'
        }else {
          this.clickCode = false
          this.time = 60
          this.timeTips = '重新获取验证码'
          clearInterval(timer)
        }
      },1000)
    },
    getCode() {
      this.$api.duanxin({mobile:this.userLogin.username}).then(res => {
        if(res.code == 1) {
          this.$message.success('验证码发送成功！')

          this.timeDown();
        }else {
          this.$message.error('验证码发送失败！')
        }
      })
    },
    switchType(type) {
      this.type = type
    },
    getXieyi () {
      this.$api.getXieyi().then(res => {
        this.xieyi = res.data[0].content
      })
    },
    onSubmit () {
      if (!this.checked) {
        this.$message.error('请先同意用户协议！')
        return false
      }
      if(this.type == 'pwd') {
        this.userLogin.code = '';
      }else if(this.type == 'code') {
        this.userLogin.password = ''
      }else {
        this.$message.error('登录类型错误！')
      }
      /* this.$router.push('/person') */
      let userInfo = {}
      this.$api.userLogin(this.userLogin).then(res => {
        this.$message({
          showClose: true,
          message: '登陆成功',
          type: 'success'
        });
        this.$router.push('/person')

        window.localStorage.setItem('token', res.data.token)
        this.$store.commit('saveToken', res.data.token)
      })
    },
    getDeviceInfo() {
      // let fingerprint = new Fingerprintjs().get();
      // console.log(fingerprint)
      let _this = this;

      if (window.requestIdleCallback) {
        requestIdleCallback(function () {
          Fingerprintjs.get(function (components) {
            console.log(components) // an array of components: {key: ..., value: ...}
            var values = components.map(function (component) { return component.value })
            console.log(values)
            var murmur = Fingerprintjs.x64hash128(values.join(''), 31)
            console.log(murmur);//在这里就是打印的浏览器指纹
            _this.userLogin.device_info = murmur

          })
        })
      } else {
        setTimeout(function () {
          Fingerprintjs.get(function (components) {
            console.log(components) // an array of components: {key: ..., value: ...}
            var values = components.map(function (component) { return component.value })
            var murmur = Fingerprintjs.x64hash128(values.join(''), 31)
            console.log(murmur);//在这里就是打印的浏览器指纹
            _this.userLogin.device_info = murmur

          })
        }, 500)
      }
      //
    }
  },
  created () {
    this.style = { 'height': `100vh` }
    this.getXieyi()
    this.getDeviceInfo();
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.box-card {





  box-sizing: border-box;
  position: absolute;
  top: 130px;
  right: 191px;
  width: 520px;
  height: 560px;
  background-color: #ffffff;
  border-radius: 20px;
  .login-c {
    display: flex;
    justify-content: space-between;

    .login-c-text {
     a {
       color: #c4c4c4!important;
     }
    }
  }
  .login-type {
    font-size: 29px;
    color: #5a5a5a;
    display: flex;
    justify-content: space-between;
    margin: 39px 70px;
    .login-type-item {
      padding: 4px;
      cursor: pointer;

    }
    .login-type-item-active {
      border-bottom: 2px solid #1469e2;
    }

  }

  .login-conent {
    padding: 0 30px;
  }
  .login-title {
    margin-top: 10px;
    text-align: center;
    font-size: 38px;
    font-weight: normal;
    font-stretch: normal;

    letter-spacing: 0px;
    color: #1469e2;

  }

  .login-input {
    margin-bottom: 20px;

  }

  p {
    margin: 0;
  }
  text-align: left;
  /*width: 580px;*/
  padding: 30px;
  // height: 360px;
  padding-top: 20px;
  margin: 0 auto;
  .title {
    font-size: 32px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    // line-height: 90px;
  }
  .sub-title {
    padding-top: 15px;
    padding-bottom: 30px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    // line-height: 90px;
    text-align: right;
    a {
      text-decoration: none;
      color: @base-color;
    }
  }
}
.creat {
  text-align: center;
  margin: 0 auto;
}


/deep/ .el-select .el-input .el-select__caret {
  color: @base-color;
}
/deep/ .el-form-item__label {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  border-radius: 4px 0 0 4px;
  line-height: 38px;
}
/deep/ .el-input__inner {
  font-size: 16px;
  height: 40px;
  border-radius: 0 4px 4px 0;
}
/deep/ .el-input__inner,
/deep/ .el-form-item__label {
  background-color: #f7f7f7;
  border: 1px solid rgba(230, 230, 230, 1);
  box-sizing: border-box;
}
/deep/ .el-select {
  width: 100%;
}
.login {
  position: relative;
  /*margin-top: 70px;*/
  height: 100vh;
  // height: 780px;
  // height: 70%;
  padding-top: 190px;
  background: url("../assets/images/login1.png") no-repeat;
  background-size: cover;
}
.user-xieyi {
  padding-top: 20px;
  font-size: 14px;
}
.user-xieyi1 {
  padding-bottom: 20px;
  font-size: 14px;

  text-align: center;
}
.up-btn {
  width: 100%;
  margin-top: 20px;
}

@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?sqvant');
  src:  url('../assets/fonts/icomoon.eot?sqvant#iefix') format('embedded-opentype'),
  url('../assets/fonts/icomoon.ttf?sqvant') format('truetype'),
  url('../assets/fonts/icomoon.woff?sqvant') format('woff'),
  url('../assets/fonts/icomoon.svg?sqvant#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-keyboard:before {
  content: "\e955";
}
.icon-mobile:before {
  content: "\e958";
}
.icon-user:before {
  content: "\e971";

}
.icon-gift:before {
  content: "\e99f";
}

</style>