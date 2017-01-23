<template lang="html">
    <div class="parent row">
      <!-- 左侧音乐按钮 -->
      <div class="musicButton col-xs-12 col-sm-1">
        <MusicButton></MusicButton>
      </div>
      <!-- 搜索功能 -->
      <div class="searchForm col-xs-12 col-sm-6 col-sm-offset-1">
        <SearchForm></SearchForm>
      </div>
      <!-- 音乐来源 -->
      <div class="musicSource col-xs-12 col-sm-4">
        <MusicSource></MusicSource>
      </div>
    </div>
 </template>

<script>
import MusicButton from './AppHeader/MusicButton.vue'
import SearchForm from './AppHeader/SearchForm.vue'
import MusicSource from './AppHeader/MusicSource.vue'

export default {
  components: {
    MusicButton,
    SearchForm,
    MusicSource
  }
}
</script>

<style lang="scss" scoped>
  .parent{
    background-color: lightgreen;
    height: 80px;
    .musicButton{
      margin-top: 10px;
    }
    .searchForm{
      margin-top: 23px;
    }
    .musicSource{
      padding: 15px 0;
      margin-top: 14px;
    }
  }
</style>
