<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading" :style="{backgroundColor:sourceColor}">
      <span>{{source}}</span>
    </div>
    <div class="panel-body" :style="{color:sourceColor}">
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
              <a class="btn" :style="{color:sourceColor}">
                <span @click="plusSong(song.artists[0].name,song.name,song.id)" class="glyphicon glyphicon-plus"></span>
              </a>
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
    },
    albumSource(){
      return this.$store.state.albumdetail.source
    },
    sourceColor() {
      switch (this.$store.state.albumdetail.source) {
        case 'netease':
          return 'crimson'
          break;
        case 'xiami':
          return 'darkorange'
          break;
        case 'qq':
          return 'mediumseagreen'
          break;
      }
    }
  },
  methods: {
    plusSong(singer,name, id) {
      this.$store.dispatch('plussong', {
        source: this.albumSource,
        singer,
        name,
        id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
td a {
    padding-top: 0;
    padding-bottom: 0;
}
.panel-heading {
    span {
        color: white;
    }
}
.glyphicon-plus:hover {
    cursor: pointer;
}
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
