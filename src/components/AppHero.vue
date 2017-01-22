<template lang="html">
  <section class="hero is-success">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head level">
        <!-- 左侧音乐按钮 -->
        <div class="musicButton level-item">
          <MusicButton></MusicButton>
        </div>
        <!-- 搜索功能 -->
        <div class="searchForm level-item">
          <SearchForm></SearchForm>
        </div>
        <!-- 音乐来源 -->
        <div class="musicSource level-item">
          <MusicSource></MusicSource>
        </div>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            三大曲库
          </h1>
          <h2 class="subtitle">
            网易云音乐、虾米音乐、QQ 音乐
          </h2>
        </div>
      </div>
  </section>
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
.hero-head{
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  .level-item{
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding-right: 20px;
  }
  .musicButton{
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
  }
  @media screen and (max-width: 768px){
    .musicButton{
      justify-content: center;
    }
  }
}
</style>
