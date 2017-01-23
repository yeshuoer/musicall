<template>
<div id="app">
  <!-- AppHeader -->
  <AppHeader></AppHeader>
  <!-- <router-link to="/songlist">歌曲列表</router-link>
    <router-link to="/albumlist">专辑列表</router-link> -->
  <!-- <router-view></router-view> -->
  <AppRecommend></AppRecommend>
  <AlbumDetail></AlbumDetail>
  <ul>
    <li @click="playc">1</li>
    <li @click="playc">2</li>
    <li @click="playc">3</li>
  </ul>
  <button type="button" @click="play" name="button">播放</button>
  <button type="button" @click="play2" name="button">播放2</button>
  <button type="button" @click="play3" name="button">播放3</button>
</div>
</template>

<script>
// import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppRecommend from './components/AppRecommend.vue'
import AlbumDetail from './components/AlbumDetail.vue'
import {
  Howl
} from 'howler'


export default {
  data() {
    return {
      hehe: '',
      songs: ['http://dl.stream.qqmusic.qq.com/M800001ucwE018fmRe.mp3?vkey=5ABEE335E049786D506E548C12A2919B2D09FFA774D8338AF49FFBA86762BFAE03E2E69F5A33C7A00EA14C8A7EF2724096CF2D112E499095&guid=876452590&fromtag=30',
        'http://dl.stream.qqmusic.qq.com/M800003OUlho2HcRHC.mp3?vkey=5D72DE32824FE7CCD309DFEAF496AC23E2AB949163851D643AE5D12F29F82F2ED96142361A9959C93A622ACD84CD752EC5142FFAAE1B4338&guid=287782783&fromtag=30',
        'http://om5.alicdn.com/931/2931/32156/373568_2319965_l.mp3?auth_key=d0d7cc577a6127f7c291a6a5d6ad338a-1485745200-0-null'
      ],
      ids: []
    }
  },
  methods: {
    playc() {
      var that = this
      for (var i = 0; i < this.songs.length; i++) {
        that.ids.push(new Howl({
          src: this.songs[i]
        }))
        that.ids[i].once('load',function () {
          that.ids[i].play()
        })
      }
    },
    next(){
      that.ids
    }
  },
  components: {
    AppHeader,
    AppRecommend,
    AlbumDetail
  }
}
</script>

Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.Error: Source sample is missing.<style lang="scss" scoped></style>
