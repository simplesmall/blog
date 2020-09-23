<template>
  <div>
    <el-button type="primary" @click="axiosTest">测试get</el-button>
    <el-button type="primary" @click="method2">测试post</el-button>
    <ArticleContent></ArticleContent>
  </div>
</template>

<script>
import ArticleContent from './article/ArticleContent'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    axiosTest () {
      this.$fetch({
        url: '/hello',
        method: 'get',
        params: {
          id: 12
        }
      }).then((res) => {
        console.log(res)
      })
    },
    method2 () {
      this.$fetch({
        url: '/update',
        method: 'post',
        data: {
          age: 11
        }
      }).then((res) => {
        console.log(res)
      })
    }
  },
  components: {
    ArticleContent
  }
}
</script>

<style scoped>
</style>
