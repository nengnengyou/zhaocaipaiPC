<template>
  <div class="query">
    <!-- 填写信息 -->
    <el-dialog title="物流服务" :visible.sync="dialogVisiblee" :before-close="handleClose" width="50%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="装货地">
          <el-cascader v-model="form.wuliu_start" :props="areaProp" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.wuliu_startaddr"></el-input>
        </el-form-item>
        <el-form-item label="卸货地">
          <el-cascader v-model="form.wuliu_end" :props="areaPropA" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.wuliu_endaddr"></el-input>
        </el-form-item>
        <el-form-item label="需要的车长">
          <el-input v-model="form.wuliu_cartype"></el-input>
        </el-form-item>

        <el-form :inline="true">
          <el-form-item style="width:40%" label="货物重量">
            <el-input v-model="form.wuliu_zhongliang" placeholder="货物重量"></el-input>
          </el-form-item>
          <el-form-item style="width:55%" label="货物体积">
            <el-input v-model="form.wuliu_tiji" placeholder="货物体积"></el-input>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <!-- 货物 -->
        <el-form-item label="货名">
          <el-input v-model="form.wuliu_goodsname"></el-input>
        </el-form-item>
        <el-form-item label="保险">
          <el-input v-model="form.wuliu_baoxian"></el-input>
        </el-form-item>
        <el-form-item label="装货时间">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="form.wuliu_zhuanghuotime"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-input v-model="form.wuliu_paytype"></el-input>
        </el-form-item>
        <el-form-item label="装卸方式">
          <el-input v-model="form.wuliu_zhuangxietype"></el-input>
        </el-form-item>
        <el-form-item label="货物运费">
          <el-input v-model="form.wuliu_yunfei"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.wuliu_other"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblee = false">取 消</el-button>
        <el-button type="primary" @click="select">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'query',
  props: ['dialogVisiblee'],
  data () {
    return {
      areaProp: {
        checkStrictly: true,
        lazy: true,
        lazyLoad: async function (node, resolve) {
          const { level } = node;
          try {
            const nodes = await this.getAreasp(node.data.tempValue)
            resolve(nodes)
          } catch (error) {
            const nodes = await this.getAreasp(1)
            resolve(nodes)
          }
        }.bind(this)
      },
      areaPropA: {
        checkStrictly: true,
        lazy: true,
        lazyLoad: async function (node, resolve) {
          const { level } = node;
          try {
            const nodes = await this.getAreasp(node.data.tempValue)
            resolve(nodes)
          } catch (error) {
            const nodes = await this.getAreasp(1)
            resolve(nodes)
          }
        }.bind(this)
      },
      form: {
        wuliu_start: '',
        wuliu_startaddr: '',
        wuliu_end: '',
        wuliu_endaddr: '',
        wuliu_cartype: '',
        wuliu_zhongliang: '',
        wuliu_tiji: '',
        wuliu_goodsname: '',
        wuliu_baoxian: '',
        wuliu_zhuanghuotime: '',
        wuliu_paytype: '',
        wuliu_zhuangxietype: '',
        wuliu_yunfei: '',
        wuliu_other: '',
        wuliu_status: '',
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    /* 三级联动 */
    async getAreasp (id) {
      var tempArr = []
      let res = await this.$api.getAreas({ id: id })
      res.data.forEach(item => {
        tempArr.push({ tempValue: item.id, value: item.name, label: item.name })
      });
      return tempArr
    },
    select () {
      /* 省 市 区 分开 */
      this.form.wuliu_start_p = this.form.wuliu_start[0]
      this.form.wuliu_start_c = this.form.wuliu_start[1]
      this.form.wuliu_start_a = this.form.wuliu_start[2]

      this.form.wuliu_end_p = this.form.wuliu_end[0]
      this.form.wuliu_end_c = this.form.wuliu_end[1]
      this.form.wuliu_end_a = this.form.wuliu_end[2]

      delete this.form.wuliu_start
      delete this.form.wuliu_end

      this.$api.save(this.form).then(res => {
        this.$message(res.msg)
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/base.less");
.el-cascader {
  width: 100%;
}
.el-date-editor {
  width: 100%;
}
</style>
