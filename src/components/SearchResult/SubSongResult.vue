<template lang="html">
  <div class="sub-song-result">
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>歌曲</th>
            <th>专辑</th>
            <th>歌手</th>
            <th>类型</th>
            <th>添加歌曲</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in sourceSongs">
            <td>{{song.name}}</td>
            <td>{{song.album.name}}</td>
            <td>{{song.artists[0].name}}</td>
            <td>{{song.needPay?'收费':'免费'}}</td>
            <td>
              <a class="btn" :style="{color:color}">
                <span @click="plusSong(source,song.name,song.artists[0].name,song.id)" class="glyphicon glyphicon-plus"></span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 翻页 -->
    <div class="text-center">
      <ul class="pager">
        <li @click="prePage(1)"><a :style="{color:color}"><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
        <li @click="nextPage(1)"><a :style="{color:color}">下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source', 'color'],
  data() {
    return {
      page: 1
    }
  },
  computed: {
    neteaseSongs() {
      return this.$store.getters.neteaseSongs
    },
    xiamiSongs() {
      return this.$store.getters.xiamiSongs
    },
    qqSongs() {
      return this.$store.getters.qqSongs
    },
    sourceSongs() {
      if (this.source === 'netease') {
        return this.neteaseSongs
      } else if (this.source === 'xiami') {
        return this.xiamiSongs
      } else if (this.source === 'qq') {
        return this.qqSongs
      }
    }
  },
  methods: {
    nextPage() {
      let keyword = this.$store.state.song.keyword
      this.page += 1
      this.$store.dispatch(
        'changeSongPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
    },
    prePage() {
      let keyword = this.$store.state.song.keyword
      if (this.page > 1) {
        this.page -= 1
      }
      this.$store.dispatch(
        'changeSongPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
    },
    plusSong(source, name, singer, id) {
      this.$store.dispatch('plussong', {
        source,
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
.pager {
    margin-top: 0;
    padding-top: 0;
}
.glyphicon-headphones,
.glyphicon-plus:hover {
    cursor: pointer;
}
</style>
