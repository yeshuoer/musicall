<template lang="html">
  <div class="musicIcon">
    <a v-if="showPlayList" @click="toogleShowPlayList" class="btn">
      <span class="glyphicon glyphicon-music"></span>
    </a>
    <a v-else @click="toogleShowPlayList" class="btn">
      <span class="glyphicon glyphicon-list"></span>
    </a>
    <span>播放列表</span>
  </div>
</template>

<script>
import PlayList from './PlayList.vue'

export default {
  data() {
    return {
      showPlayList: false
    }
  },
  methods: {
    toogleShowPlayList() {
      this.showPlayList = !this.showPlayList
      this.$store.state.showPlayList = !this.$store.state.showPlayList
    }
  }
}
</script>

<style lang="scss" scoped>
.musicButton {
    margin: 0 auto;
}
.glyphicon {
    font-size: 3em;
    // color: white;
}
</style>
