<template lang="html">
  <div class="">
    <div class="panel panel-default">
      <div class="panel-heading">
        网易云音乐
      </div>
      <div class="panel-body">
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
            <tr v-for="song in neteaseSongs">
              <td>{{song.name}}</td>
              <td>{{song.album.name}}</td>
              <td>{{song.artists[0].name}}</td>
              <td>{{song.needPay?'收费':'免费'}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 翻页 -->
      <div class="text-center">
        <ul class="pager">
         <li><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        虾米音乐
      </div>
      <div class="panel-body">
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
            <tr v-for="song in xiamiSongs">
              <td>{{song.name}}</td>
              <td>{{song.album.name}}</td>
              <td>{{song.artists[0].name}}</td>
              <td>{{song.needPay?'收费':'免费'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 翻页 -->
      <div class="text-center">
        <ul class="pager">
         <li><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        QQ 音乐
      </div>
      <div class="panel-body">
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
            <tr v-for="song in qqSongs">
              <td>{{song.name}}</td>
              <td>{{song.album.name}}</td>
              <td>{{song.artists[0].name}}</td>
              <td>{{song.needPay?'收费':'免费'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 翻页 -->
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
    'neteaseSongs','xiamiSongs','qqSongs'
  ])

}
</script>

<style lang="scss" scoped>
.pager {
    margin-top: 0;
    padding-top: 0;
}
</style>
