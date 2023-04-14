<template>
  <div id="AreaSelect">
    <el-cascader :props="props"></el-cascader>
  </div>
</template>
<script>
export default {
  name: 'AreaSelect',
  data () {
    return {
      props: {
        lazy: true
      }
    }
  },
  created () {
    this.getAreas(1772)
  },
  methods: {
    async getAreas (id) {
      let params = {
        id: id
      }
      let res = await this.$api.getAreas(params)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
