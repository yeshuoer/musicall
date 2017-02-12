<template lang="html">
  <div>
    <div class="panel panel-default" :style="{color:currentColor}">
      <div class="panel-heading" :style="{backgroundColor:currentColor}">
        <a class="btn" @click="showNetease">网易云音乐</a>
        <a class="btn" @click="showXiami">虾米音乐</a>
        <a class="btn" @click="showQQ">QQ 音乐</a>
      </div>
      <SubSheetResult v-show="neteaseShow" source="netease" :color="currentColor"></SubSheetResult>
      <SubSheetResult v-show="xiamiShow" source="xiami" :color="currentColor"></SubSheetResult>
      <SubSheetResult v-show="qqShow" source="qq" :color="currentColor"></SubSheetResult>
    </div>
  </div>
</template>

<script>
import SubSheetResult from './SubSheetResult.vue'

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
    SubSheetResult
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
.panel-heading {
    a {
        color: white;
    }
}
</style>
