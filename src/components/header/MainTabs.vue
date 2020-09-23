<template>
  <div class="main-tabs">
    <div class="profile">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div class="tab-container" @click="openSkill">技术</div>
    <div class="tab-container" @click="openLife">生活</div>
    <div class="tab-container" @click="openStudy">学习</div>
    <div class="tab-container" @click="openGossip">杂谈</div>
    <div class="tittle">简小的博客</div>
    <div class="setting"><i class="el-icon-s-tools" style="cursor: pointer" @click="openSetting"></i></div>
  </div>
</template>

<script>
export default {
  name: 'MainTabs',
  methods: {
    openGossip () {
      this.$router.push('/gossip')
    },
    openStudy () {
      this.$router.push('/study')
    },
    openLife () {
      this.$router.push('/life')
    },
    openSkill () {
      this.$router.push('/skill')
    },
    openSetting () {
      console.log('打开设置页面')
    }
  }
}
</script>

<style scoped>
  .setting {
    width: 120px;
    height: 120px;
    margin-left: auto;
    color: yellow;
    text-align: center;
    font-size: 35px;
    line-height: 120px;
  }

  .setting i:hover {
    rotation: 45deg;
  }

  .profile {
    width: 120px;
    height: 120px;
    background: yellow;
    margin-right: auto;
  }

  .tittle {
    width: 400px;
    height: 60px;
    margin: 30px 10px;
    /*background: red;*/
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }

  .tab-container {
    width: 90px;
    height: 50px;
    background: mintcream;
    border-radius: 5px;
    margin: 30px 10px;
    box-shadow: 5px 5px 5px springgreen;
    font-size: 24px;
    color: darksalmon;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }

  .main-tabs {
    width: 100%;
    height: 120px;
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
  }
</style>
