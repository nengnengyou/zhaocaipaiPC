<template>
  <div class="register">
    <!-- 注册协议 -->
    <el-dialog title="协议" :visible.sync="dialogVisible" width="50%">
      <p v-html="xieyi"></p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 区域 -->

    <el-card class="box-card">
      <p class="title">用户注册</p>
      <p class="sub-title">
        已有招财拍账号
        <router-link class="tologin" to="/login">登陆 ></router-link>

        <!-- <a href="#">登陆 ></a> -->
      </p>
      <el-form ref="form" :model="sizeForm" label-width="110px" size="mini">
        <el-form-item label="国家/地区">
          <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <el-option label="中国" value="china"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="+86(中国)">
          <el-input v-model="sizeForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码">
          <el-input v-model="sizeForm.code"></el-input>
          <a @click="getCode" class="send-code" type="text">{{code.text}}</a>
        </el-form-item>
        <el-form-item label="邀请码(选填)">
          <el-input v-model="sizeForm.invite_code"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="sizeForm.repassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="sizeForm.password"></el-input>
        </el-form-item>
        <div style="text-align:center;margin-left:0;" size="large">
          <el-button class="up-btn" type="primary" @click="onSubmit">立即创建</el-button>
          <p class="user-xieyi">
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
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      checked: false,
      dialogVisible: false,
      xieyi: '',
      code: {
        text: '发送验证码',
        status: true
      },
      style: { 'height': '0px' },
	  
      sizeForm: {
        region: 'china',
		type:1,
        mobile: '',
        code: '',
        invite_code: '',
        repassword: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit () {
      if (!this.checked) {
        this.$message.error('请先同意用户协议！')
        return false
      }
      this.$api.register(this.sizeForm).then(res => {
        this.$message.success(res.msg)
      })
    },
    getXieyi () {
      this.$api.getXieyi().then(res => {
        this.xieyi = res.data[0].content
      })
    },
    getCode () {
      let phoneNum = this.sizeForm.username
      let valid_rule = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
      if (!valid_rule.test(phoneNum)) {
        this.$message({
          type: 'error',
          message: '手机号码格式有误'
        })
        return false;
      }
      let params = { mobile: phoneNum }
      this.$api.duanxin(params).then(res => {
        /* 改变等待状态 */
        let time = 60
        let timer = setInterval(() => {
          this.code = {
            text: `${time}s`,
            status: true
          }
          time -= 1
          if (time <= 0) {
            clearInterval(timer)
            this.code = {
              text: `发送验证码`,
              status: false
            }
          }
        }, 1000);
        this.$message({
          type: 'success',
          message: res.msg
        })
      })
    },
  },
  created () {
    this.style = { 'height': `100vh` }
    this.getXieyi()
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.box-card {
  p {
    margin: 0;
  }
  text-align: left;
  width: 580px;
  padding: 30px;
  // height: 535px;
  padding-top: 20px;
  margin: 0 auto;
  .title {
    font-size: 32px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    // line-height: 90px;
  }
  .send-code {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    background-color: transparent;
    color: @base-color;
    cursor: pointer;
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
    .tologin {
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
  // text-align: justify;
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
.register {
  margin-top: 70px;
  height: 100vh;
  // height: 70%;
  padding-top: 150px;
  background: url("../assets/images/logoinbg.jpg") no-repeat;
  background-size: cover;
}
.user-xieyi {
  padding-top: 20px;
  font-size: 14px;
}
.up-btn {
  width: 352px;
}
</style>
