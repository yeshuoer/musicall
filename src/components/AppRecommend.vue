<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        音乐推荐
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <a href="#" class="thumbnail">
              <img src="https://p.qpic.cn/music_cover/J95ocQUib6X9I7CKCVE9Qib4n5hUOWqgEByseocwtAXEiaZZwu2TxPTDA/600" alt="...">
              <div class="caption">
                <p class="text-center">Thumbnail label</p>
              </div>
            </a>
          </div>
          <Item></Item>
        </div>
      </div>
      <div class="text-center">
        <ul class="pager">
         <li><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './AppRecommend/Item.vue'

export default {
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.pager {
    padding-top: 0;
    margin-top: 0;
}
p.text-center {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
