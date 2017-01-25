<template lang="html">
    <div class="row">
      <!-- 左侧音乐按钮 -->
      <div class="musicButton col-xs-4 col-sm-1 col-xs-offset-4 col-sm-offset-0">
        <MusicButton></MusicButton>
      </div>
      <!-- 搜索功能 -->
      <div class="searchForm col-xs-12 col-sm-11">
        <SearchForm></SearchForm>
      </div>
    </div>
 </template>

<script>
import MusicButton from './AppHeader/MusicButton.vue'
import SearchForm from './AppHeader/SearchForm.vue'

export default {
  components: {
    MusicButton,
    SearchForm
  }
}
</script>

<style lang="scss" scoped>
.searchForm{
  margin-top: 13px;
  margin-bottom: 18px;
}
</style>
