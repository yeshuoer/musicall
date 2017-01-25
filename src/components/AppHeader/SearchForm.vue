<template lang="html">
    <div class="row">
      <!-- 选择内容下拉框 -->
      <div class="section1 col-xs-4">
        <select class="form-control pull-right" name="">
          <option value="song">歌曲</option>
          <option value="album">专辑</option>
          <option value="sheet">歌单</option>
        </select>
      </div>

      <!-- 搜索框 -->
      <div class="section2 col-xs-6">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="请输入搜索内容">
          <span class="input-group-btn">
            <button class="btn">搜索</button>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
select{
  width: 80px;
}
.input-group{
  width: 220px;
}
</style>
