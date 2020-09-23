<template>
  <div>
    <el-button type="primary" @click="axiosTest">点 击</el-button>
    <el-button type="primary" @click="method2">主要按钮</el-button>
    <ArticleContent></ArticleContent>
  </div>
</template>

<script>
import {fetch, post} from '../utils/request'
import ArticleContent from './article/ArticleContent'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    axiosTest () {
      console.log('oashh')
      fetch('/hello', {
        data: 1
      }).then((res) => {
        console.log(res)
      })
    },
    method2 () {
      post('/guess', {
        params: {
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
