<template>
<div id="app">
  <div class="container-fluid">
    <!-- AppHeader -->
    <AppHeader></AppHeader>
    <PlayList v-show="showPlayList"></PlayList>
    <router-view></router-view>
  </div>
  <footer>
    <p class="info">Copyright © 2017 yeshuoer.</p>
  </footer>
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import PlayList from './components/AppHeader/PlayList.vue'

export default {
  components: {
    AppHeader,
    PlayList
  },
  computed: {
    showPlayList() {
      return this.$store.state.showPlayList
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}
</style>
