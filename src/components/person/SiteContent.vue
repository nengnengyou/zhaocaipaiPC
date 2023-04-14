<template>
  <div class="site-connect">
    <el-card class="box-card">
      <div slot="header" class="header2 clearfloat">
        <span class="title">平台留言</span>
      </div>
      <div class="connect-conent">
        <textarea style="border-radius: 3px;" placeholder="输入留言信息....." v-model="message" id cols="30" rows="10"></textarea>
        <button @click="setMessage" class="up">留言</button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'site-connect',
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$api.getUserInfo().then(res => {
        this.userInfo = res.data
      })
    },
    setMessage () {
      let params = {
        message: this.message
      }
      this.$api.pingtaiMessage(params).then(res => {
        this.$message.success(res.msg)
        this.message = ''
      })
    }
  },
  data () {
    return {
      userInfo: {},
      message: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
/deep/.el-avatar img {
  width: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.box-card {
  text-align: left;
}
.title {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  // line-height:69px;
}
.item {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  line-height: 25px;
}
textarea {
  margin-top: 10px;
  width: 165px;
  height: 128px;
  background: rgba(247, 247, 247, 1);
  border-radius: 10px;
  resize: none;
}
.up {
  cursor: pointer;
  margin-top: 10px;
  width: 80px;
  height: 25px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 13px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  // line-height:69px;
}
.icon {
  padding-right: 10px;
}
/deep/ .el-card__header,
/deep/ .el-card__body {
  padding: 20px 16px;
  border-bottom: none;
}
/deep/ .el-card__body {
  padding-top: 0px;
}
</style>
