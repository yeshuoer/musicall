<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading">
      {{source}}
    </div>
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <img class="media-object" :src="cover">
        </div>
        <div class="media-body">
          <h4 class="media-heading">专辑：{{sheetname}}</h4>
          <p>创建者：{{author}}</p>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>歌曲</th>
            <th>专辑</th>
            <th>歌手</th>
            <th>类型</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in songs">
            <td>{{song.name}}</td>
            <td>{{sheetname}}</td>
            <td>{{song.artists[0].name}}</td>
            <td>{{song.needPay?'收费':'免费'}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  computed: {
    author(){
      return this.$store.state.sheetdetail.sheet_detail.author.name
    },
    cover() {
      return this.$store.state.sheetdetail.sheet_detail.cover
    },
    sheetname() {
      return this.$store.state.sheetdetail.sheet_detail.name
    },
    songs() {
      return this.$store.state.sheetdetail.sheet_detail.songList
    },
    source() {
      switch (this.$store.state.sheetdetail.source) {
        case 'netease':
          return '网易云音乐'
          break;
        case 'xiami':
          return '虾米音乐'
          break;
        case 'qq':
          return 'QQ 音乐'
          break;
      }
    }
  },
  methods: {
    test() {
      console.log(this.$store.state.sheetdetail.sheet_detail.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.media{
  padding-bottom: 40px;
  img{
    width: 200px;
    height: 200px;
  }
  h4,p{
    padding: 10px;
  }
}
</style>
