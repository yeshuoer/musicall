<template lang="html">
  <div class="">
    <div class="panel panel-default" :style="{color:currentColor}">
      <div class="panel-heading">
        <a class="btn" @click="showNetease">网易云音乐</a>
        <a class="btn" @click="showXiami">虾米音乐</a>
        <a class="btn" @click="showQQ">QQ 音乐</a>
      </div>
      <SubSongResult v-show="neteaseShow" source="netease"></SubSongResult>
      <SubSongResult v-show="xiamiShow" source="xiami"></SubSongResult>
      <SubSongResult v-show="qqShow" source="qq"></SubSongResult>
    </div>
  </div>
</template>

<script>
import SubSongResult from './SubSongResult.vue'

export default {
  data() {
    return {
      currentColor: '#c10d0c',
      neteaseShow: true,
      xiamiShow: false,
      qqShow: false
    }
  },
  components: {
    SubSongResult
  },
  methods: {
    showNetease() {
      this.neteaseShow = true
      this.xiamiShow = false
      this.qqShow = false
      this.currentColor = '#c10d0c'
    },
    showXiami() {
      this.xiamiShow = true
      this.neteaseShow = false
      this.qqShow = false
      this.currentColor = '#cc5a18'
    },
    showQQ() {
      this.qqShow = true
      this.neteaseShow = false
      this.xiamiShow = false
      this.currentColor = '#31c27c'
    }
  }
}
</script>

<style lang="scss" scoped>
.pager {
    margin-top: 0;
    padding-top: 0;
}
.glyphicon-plus:hover {
    cursor: pointer;
}
</style>
