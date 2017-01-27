<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        网易云音乐
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="album in neteaseAlbums">
            <a href="#" class="thumbnail">
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
         <li><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  computed: mapGetters([
    'neteaseAlbums','xiamiAlbums','qqAlbums'
  ])
}
</script>

<style lang="scss" scoped>
.row{
  height: auto;
}
p.text-center{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.col-xs-6{
  img{
    height: 140px;
  }
}
.pager {
    margin-top: 0;
    padding-top: 0;
}
</style>
