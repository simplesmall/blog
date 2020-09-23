<template>
<div>
  <ArticleContent v-for="(item,index) in itemList" :key="index">
    <div class="inline">
      <div class="snap-img">{{item.snapImg}}</div>
      <div class="content">
        <div class="summary">{{item.article}}--{{item.summary}}</div>
        <div class="show-data">评论:{{item.comment}}  点赞:{{item.admire}} 收藏 : {{item.collection}}</div>
      </div>
    </div>
  </ArticleContent>
  <ArticleContent></ArticleContent>
</div>
</template>

<script>
import ArticleContent from '../../components/article/ArticleContent'
export default {
  name: 'SkillIndex',
  data () {
    return {
      itemList: [
        {
          snapImg: 'http://www.sdohds.com/sd.jpg',
          article: '文章标题',
          summary: '这是一段简单的文章叙述',
          comment: 12,
          admire: 22,
          collection: 4
        },
        {
          snapImg: 'http://www.sdohds.com/sd.jpg',
          article: '文章标题',
          summary: '这是一段简单的文章叙述',
          comment: 12,
          admire: 22,
          collection: 4
        }
      ]
    }
  },
  components: {
    ArticleContent
  }
}
</script>

<style scoped>
  .summary{
    width: 100%;
    height: 200px;
    background: deeppink;
  }
  .show-data{
    width: 100%;
    height: 90px;
    background: orangered;
    margin-top: 10px;
  }
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .snap-img{
    width: 500px;
    height: 300px;
    background: springgreen;
    margin-right: 10px;
  }
.inline{
  display: flex;
  flex-direction: row;
}
</style>
