<template lang="html">
    <div class="row">
      <!-- 选择内容下拉框 -->
      <div class="section1 col-xs-4">
        <select class="form-control pull-right" v-model="searchType" name="">
          <option value="searchsong">歌曲</option>
          <option value="searchalbum">专辑</option>
          <option value="searchsheet">歌单</option>
        </select>
      </div>

      <!-- 搜索框 -->
      <div class="section2 col-xs-6">
        <div class="input-group">
          <input class="form-control" type="text" v-model="searchKey" placeholder="请输入搜索内容">
          <span class="input-group-btn">
            <button class="btn" @click="search">搜索</button>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchType: 'searchsong',
      searchKey: ''
    }
  },
  methods: {
    // 搜索按钮
    search() {
      if (this.searchType === 'searchsong') {
        // 搜索歌曲
        this.$store.dispatch('getSongs', this.searchKey)
      } else if (this.searchType === 'searchalbum') {
        // 搜索专辑
        this.$store.dispatch('getAlbums',this.searchKey)
      } else if (this.searchType === 'searchsheet') {
        // 搜索歌单
        this.$store.dispatch('getSheets',this.searchKey)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
select {
    width: 80px;
}
.input-group {
    width: 220px;
}
</style>
