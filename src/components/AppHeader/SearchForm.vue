<template lang="html">
    <div class="row">
      <!-- 选择内容下拉框 -->
      <div class="col-sm-4 col-md-3 col-lg-2">
        <select class="form-control">
          <option>Song</option>
          <option>Album</option>
          <option>PlayList</option>
        </select>
      </div>

      <div class="col-sm-8">
        <div class="input-group">
          <!-- 搜索框 -->
          <input class="form-control" type="text" placeholder="请输入搜索内容">
          <!-- 搜索按钮 -->
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

</style>
