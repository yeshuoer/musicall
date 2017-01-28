<template lang="html">
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
import SongResult from './SearchResult/SongResult.vue'
import AlbumResult from './SearchResult/AlbumResult.vue'
import SheetResult from './SearchResult/SheetResult.vue'
import AlbumDetail from './SearchResult/AlbumDetail.vue'
import SheetDetail from './SearchResult/SheetDetail.vue'

export default {
  components: {
    SongResult,
    SheetResult,
    AlbumResult,
    AlbumDetail,
    SheetDetail
  }
}
</script>

<style lang="css">
</style>
