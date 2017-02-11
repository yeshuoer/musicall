<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <a class="btn" @click="showNetease">网易云音乐</a>
        <a class="btn" @click="showXiami">虾米音乐</a>
        <a class="btn" @click="showQQ">QQ 音乐</a>
      </div>
      <SubAlbumResult v-show="neteaseShow" source="netease"></SubAlbumResult>
      <SubAlbumResult v-show="xiamiShow" source="xiami"></SubAlbumResult>
      <SubAlbumResult v-show="qqShow" source="qq"></SubAlbumResult>
    </div>
  </div>
</template>

<script>
import SubAlbumResult from './SubAlbumResult.vue'

export default {
  data() {
    return {
      neteaseShow: true,
      xiamiShow: false,
      qqShow: false
    }
  },
  components: {
    SubAlbumResult
  },
  methods: {
    showNetease() {
      this.neteaseShow = true
      this.xiamiShow = false
      this.qqShow = false
    },
    showXiami() {
      this.xiamiShow = true
      this.neteaseShow = false
      this.qqShow = false
    },
    showQQ() {
      this.qqShow = true
      this.neteaseShow = false
      this.xiamiShow = false
    }
  }
}
</script>

<style lang="css"></style>
