<template lang="html">
  <div class="music-button">
    <div class="musicIcon">
      <a v-if="showPlayList" @click="toogleShowPlayList" class="btn">
        <span class="glyphicon glyphicon-music"></span>
      </a>
      <a v-else @click="toogleShowPlayList" class="btn">
        <span class="glyphicon glyphicon-list"></span>
      </a>
      <span>播放列表</span>
    </div>
    <div class="musicIcon">
      <a @click="toRecommend" class="btn">
        <span class="glyphicon glyphicon-home"></span>
      </a>
    </div>
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
    },
    toRecommend(){
      this.$router.push('/recommend')
    }
  }
}
</script>

<style lang="scss" scoped>
.music-button{
  display: flex;
  justify-content: space-between;
}
.musicIcon>span{
  color: salmon;
}
.glyphicon {
    font-size: 3em;
    color: salmon;
}
</style>
