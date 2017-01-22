<template>
  <div id="app">
    <!-- AppHero -->
    <AppHero></AppHero>
    <router-link to="/songlist">歌曲列表</router-link>
    <router-link to="/albumlist">专辑列表</router-link>
    <router-view></router-view>
    <AppRecommend></AppRecommend>
  </div>
</template>

<script>
// import axios from 'axios'
import AppHero from './components/AppHero.vue'
import AppRecommend from './components/AppRecommend.vue'

export default {
  components: {
    AppHero,
    AppRecommend
  }
}
</script>

<style lang="scss" scoped>
  
</style>
