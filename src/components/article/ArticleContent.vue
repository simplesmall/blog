<template>
  <el-card class="box-card">
    <slot />
  </el-card>
</template>

<script>
export default {
  name: 'ArticleContent'
}
</script>

<style scoped>
.box-card{
  width: 98%;
  margin: 10px auto;
  max-width: 1400px;
}
</style>
