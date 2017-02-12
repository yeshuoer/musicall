<template lang="html">
  <div>
    <div class="panel panel-default" :style="{color:currentColor}">
      <div class="panel-heading" :style="{backgroundColor:currentColor}">
        <a class="btn" @click="showNetease">网易云音乐</a>
        <a class="btn" @click="showXiami">虾米音乐</a>
        <a class="btn" @click="showQQ">QQ 音乐</a>
      </div>
      <SubSongResult v-show="neteaseShow" source="netease" :color="currentColor"></SubSongResult>
      <SubSongResult v-show="xiamiShow" source="xiami" :color="currentColor"></SubSongResult>
      <SubSongResult v-show="qqShow" source="qq" :color="currentColor"></SubSongResult>
    </div>
  </div>
</template>

<script>
import SubSongResult from './SubSongResult.vue'

export default {
  data() {
    return {
      currentColor: 'crimson',
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
      this.currentColor = 'crimson'
    },
    showXiami() {
      this.xiamiShow = true
      this.neteaseShow = false
      this.qqShow = false
      this.currentColor = 'darkorange'
    },
    showQQ() {
      this.qqShow = true
      this.neteaseShow = false
      this.xiamiShow = false
      this.currentColor = 'mediumseagreen'
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-heading{
  a{
    color: white;
  }
}
.pager {
    margin-top: 0;
    padding-top: 0;
}
.glyphicon-plus:hover {
    cursor: pointer;
}
</style>
