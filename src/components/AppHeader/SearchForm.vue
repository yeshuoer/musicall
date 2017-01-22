<template lang="html">
  <div class="columns">
    <!-- 选择内容下拉框 -->
    <p class="control selectOption">
      <span class="select">
        <select>
          <option>Song</option>
          <option>Singer</option>
          <option>Album</option>
          <option>PlayList</option>
        </select>
      </span>
    </p>
    <!-- 搜索框 -->
    <p class="control searchForm has-addons">
      <input class="input" type="text" placeholder="请输入搜索内容">
      <!-- 搜索按钮 -->
      <a class="button is-danger">搜索</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .columns{
    display: flex;
    align-items: center;
    .selectOption{
      margin-top: 14px;
    }
    .searchForm{
      width: 140px;
    }
  }
</style>
