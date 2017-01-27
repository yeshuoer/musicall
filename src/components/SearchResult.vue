<template lang="html">
  <div class="">
    <AlbumResult></AlbumResult>
    <SongResult></SongResult>
    <!-- <SheetResult></SheetResult> -->
  </div>
</template>

<script>
import SongResult from './SearchResult/SongResult.vue'
import AlbumResult from './SearchResult/AlbumResult.vue'
// import SheetResult from './SearchResult/SheetResult.vue'

export default {
  components: {
    SongResult,
    // SheetResult,
    AlbumResult
  }
}
</script>

<style lang="css">
</style>
