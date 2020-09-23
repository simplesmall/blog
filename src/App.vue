<template>
  <div id="app">
    <MainTabs></MainTabs>
    <ArticleContent>
    <router-view/>
    </ArticleContent>
  </div>
</template>

<script>
import MainTabs from './components/header/MainTabs'
import ArticleContent from './components/article/ArticleContent'
export default {
  name: 'App',
  components: {
    MainTabs,
    ArticleContent
  }
}
</script>

<style>
#app {
  height: calc(100vh - 16px);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: -8px;
}
</style>
