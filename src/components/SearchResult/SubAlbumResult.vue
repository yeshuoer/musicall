<template lang="html">
  <div class="">
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="album in sourceAlbums">
          <a @click="albumDetail(album.id)" class="thumbnail">
            <img :src="album.cover">
            <div class="caption">
              <p class="text-center">{{album.name}}</p>
              <p class="text-center">{{album.artist.name}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <ul class="pager">
       <li @click="prePage()"><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
       <li @click="nextPage()"><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],
  data() {
    return {
      page: 1
    }
  },
  computed: {
    neteaseAlbums() {
      return this.$store.getters.neteaseAlbums
    },
    xiamiAlbums() {
      return this.$store.getters.xiamiAlbums
    },
    qqAlbums() {
      return this.$store.getters.qqAlbums
    },
    sourceAlbums() {
      if (this.source === 'netease') {
        return this.neteaseAlbums
      } else if (this.source === 'xiami') {
        return this.xiamiAlbums
      } else if (this.source === 'qq') {
        return this.qqAlbums
      }
    }
  },
  methods: {
    nextPage() {
      let keyword = this.$store.state.album.keyword
      this.page += 1
      this.$store.dispatch(
        'changeAlbumPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
    },
    prePage(type) {
      let keyword = this.$store.state.album.keyword
      if (this.page > 1) {
        this.page -= 1
      }
      this.$store.dispatch(
        'changeAlbumPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
      },
      albumDetail(id) {
        this.$router.push('/result/albumdetail')
        this.$store.dispatch('albumdetail', {
          source: this.source,
          id: id
        })
      }
  },
}
</script>

<style lang="scss" scoped>
p.text-center {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.col-xs-6 {
    img {
        height: 140px;
    }
}
.pager {
    margin-top: 0;
    padding-top: 0;
}
</style>
