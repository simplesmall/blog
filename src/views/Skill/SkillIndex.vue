<template>
<div>
  <ArticleContent>
    <div class="inline">
      <div class="snap-img"></div>
      <div class="content">
        <div class="summary">简单叙述 </div>
        <div class="show-data">评论点赞</div>
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
