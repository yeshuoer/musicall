<template lang="html">
    <div class="row">
      <!-- 操作按钮 -->
      <div class="musicButton">
        <MusicButton></MusicButton>
      </div>
      <!-- 搜索功能 -->
      <div class="searchForm">
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
