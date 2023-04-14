<template>
  <div class="zhao-detail">
    <car-position></car-position>
    <detail isType="zhao"></detail>
  </div>
</template>

<script>
import carPosition from '@/components/carPosition.vue'
import Detail from '@/components/Detail.vue'
export default {
  name: 'zhao-detail',
  components: { Detail, carPosition }
}
</script>

<style lang="less" scoped>
</style>
