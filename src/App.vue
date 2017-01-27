<template>
<div id="app" class="container-fluid">
  <!-- AppHeader -->
  <AppHeader></AppHeader>
  <button type="button" @click="playc" name="button">播放</button>
  <div class="">
    <button type="button" @click="jump" name="button">result</button>
  </div>
  <router-link to="recommend">推荐</router-link>
  <router-link to="result">搜索结果</router-link>
  <router-view></router-view>
</div>
</template>

<script>
import * as buzz from 'buzz'
import AppHeader from './components/AppHeader.vue'
// var buzz =require('buzz')


export default {
  methods: {
    jump() {
      this.$router.push('result')
    },
    playc() {
      var mySound = new buzz.sound("http://dl.stream.qqmusic.qq.com/M800003OUlho2HcRHC.mp3?vkey=F3999399BC7326A1B3E3BC83FF8F80FF84B96098EB0FCFBE76F5E52F74D83124DACF6B31CE4929E38C23442FE3CBA0E307B4F33E27C19ABE&guid=750558160&fromtag=30")
      mySound.play()
    }
  },
  components: {
    AppHeader
  }
}
</script>

<style lang="css"></style>
