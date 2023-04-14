<template>
  <div id="person-logistics">
    <p class="person-big-title">物流服务</p>
    <p class="person-small-title">托运记录</p>
    <div class="logconent">
      <el-table :data="jilu" border stripe style="width: 100%">
        <el-table-column prop="wuliu_goodsname" label="货物名称" align="center"></el-table-column>
        <el-table-column prop="wuliu_endyunfei" label="物流价格" align="center"></el-table-column>
        <el-table-column label="物流状态" align="center">
          <template slot-scope="scope">
            <!-- 1审核中、2已核价、3待发货、4运输中、5已完成 -->
            <span v-if="scope.row.wuliu_status == 0">暂无</span>
            <span v-if="scope.row.wuliu_status == 1">审核中</span>
            <span v-if="scope.row.wuliu_status == 2">已核价</span>
            <span v-if="scope.row.wuliu_status == 3">代发货</span>
            <span v-if="scope.row.wuliu_status == 4">运输中</span>
            <span v-if="scope.row.wuliu_status == 5">已完成</span>
          </template>
        </el-table-column>
        <el-table-column prop="create_at" label="发布时间" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1',
      jilu: [],

    };
  },
  created () {
    this.wuliu()
  },
  methods: {
    wuliu () {
      this.$api.wuliu().then(res => {
        this.jilu = res.data.datas
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/base.less");
#person-logistics {
  background-color: #fff;
  // padding-top: 90px;
  // padding-bottom: 20px;
}
.logistics-inner {
  // width: @conent-width;
  // margin: 0 auto;
}
.logconent {
  // padding-left: 10px;
  ul > li {
    list-style-type: none;
    height: 30px;
  }
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
