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
          <h4 class="media-heading">专辑：{{albumname}}</h4>
          <p>音乐人：{{artist}}</p>
        </div>
      </div>
      <table class="table table-striped">
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
            <td>{{albumname}}</td>
            <td>{{song.artists[0].name}}</td>
            <td>{{song.needPay?'收费':'免费'}}</td>
            <td>
              <span @click="plusSong(song.name,song.id)" class="glyphicon glyphicon-plus"></span>
            </td>
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
  data() {
    return {
      albumSource: this.$store.state.albumdetail.source
    }
  },
  computed: {
    artist() {
      return this.$store.state.albumdetail.album_detail.artist.name
    },
    cover() {
      return this.$store.state.albumdetail.album_detail.cover
    },
    albumname() {
      return this.$store.state.albumdetail.album_detail.name
    },
    songs() {
      return this.$store.state.albumdetail.album_detail.songList
    },
    source() {
      switch (this.$store.state.albumdetail.source) {
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
    plusSong(name, id) {
      this.$store.dispatch('plussong', {
        source: this.albumSource,
        name,
        id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
    padding-bottom: 40px;
    img {
        width: 200px;
        width: 200px;
    }
    h4,
    p {
        padding: 10px;
    }
}
</style>
