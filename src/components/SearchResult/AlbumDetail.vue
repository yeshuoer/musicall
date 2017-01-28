<template lang="html">
<div class="">
  <!-- <div class="panel panel-default">
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
       <li @click="prePage(1)"><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
       <li @click="nextPage(1)"><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
     </ul>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
