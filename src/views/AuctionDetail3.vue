<template>
  <div class="auction-detail">
    <detail :carInfo="carInfo" isType="pai"></detail>
  </div>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
  name: 'auction-detail',
  components: { Detail },
  data () {
    return {
      carInfo: {}
    }
  },
  created () {
    this.getCarDetail()
  },
  methods: {
    getCarDetail () {
      let id = this.$route.query.id
      this.$api.carDetail({ id: id }).then(res => {
        this.carInfo = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
