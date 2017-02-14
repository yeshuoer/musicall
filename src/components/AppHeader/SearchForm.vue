<template lang="html">
    <div class="search-form center-block">
      <!-- 选择内容下拉框 -->
      <select class="form-control pull-left" v-model="searchType" name="">
        <option value="searchsong">歌曲</option>
        <option value="searchalbum">专辑</option>
        <option value="searchsheet">歌单</option>
      </select>
      <!-- 搜索框 -->
      <div class="input-group pull-right">
        <input class="form-control" type="text" v-model="searchKey" placeholder="请输入搜索内容">
        <span class="input-group-btn">
          <button class="btn" @click="search">搜索</button>
        </span>
      </div>
      <Loading v-if="songLoading"></Loading>
      <Loading v-if="albumLoading"></Loading>
      <Loading v-if="sheetLoading"></Loading>
    </div>
</template>

<script>
import Loading from '../Loading.vue'

export default {
  data() {
    return {
      searchType: 'searchsong',
      searchKey: ''
    }
  },
  computed: {
    songLoading() {
      return this.$store.state.song.loading
    },
    albumLoading() {
      return this.$store.state.album.loading
    },
    sheetLoading() {
      return this.$store.state.sheet.loading
    }
  },
  components: {
    Loading
  },
  methods: {
    // 搜索按钮
    search() {
      if (this.searchType === 'searchsong') {
        // 搜索歌曲
        this.$store.dispatch('getSongs', this.searchKey)
        this.$router.push('/result/songs')
      } else if (this.searchType === 'searchalbum') {
        // 搜索专辑
        this.$store.dispatch('getAlbums', this.searchKey)
        this.$router.push('/result/albums')
      } else if (this.searchType === 'searchsheet') {
        // 搜索歌单
        this.$store.dispatch('getSheets', this.searchKey)
        this.$router.push('/result/sheets')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
    width: 300px;
    padding-bottom: 50px;
}
select {
    width: 80px;
}
.input-group {
    width: 200px;
}
button.btn{
  background-color: salmon;
  color: white;
}
</style>
