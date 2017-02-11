<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <a class="btn" @click="showNetease">网易云音乐</a>
        <a class="btn" @click="showXiami">虾米音乐</a>
        <a class="btn" @click="showQQ">QQ 音乐</a>
      </div>
      <SubSheetResult v-show="neteaseShow" source="netease"></SubSheetResult>
      <SubSheetResult v-show="xiamiShow" source="xiami"></SubSheetResult>
      <SubSheetResult v-show="qqShow" source="qq"></SubSheetResult>
    </div>
  </div>
</template>

<script>
import SubSheetResult from './SubSheetResult.vue'

export default {
  data() {
    return {
      neteaseShow: true,
      xiamiShow: false,
      qqShow: false
    }
  },
  components: {
    SubSheetResult
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
