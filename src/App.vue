<template>
  <div id="app">
    <MainTabs></MainTabs>
    <div class="container">
      <div class="left-panel">
        left panel
      </div>
      <div class="center">
        <router-view/>
      </div>
    </div>
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
  .left-panel{
    width: 100px;
    height: 400px;
    background: peachpuff;
    position: fixed;
    left: 6rem;
    margin-top: 7rem;
  }
  .container{
    /*display: flex;*/
    /*flex-direction: row;*/
  }
  #app {
    height: calc(100vh - 16px);
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: -8px;
  }
</style>
