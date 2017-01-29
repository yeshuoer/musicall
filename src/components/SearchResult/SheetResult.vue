<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        网易云音乐
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="sheet in neteaseSheets">
            <a @click="sheetDetail('netease',sheet.id)" class="thumbnail">
              <img :src="sheet.cover">
              <div class="caption">
                <p class="text-center">{{sheet.name}}</p>
                <p class="text-center">{{sheet.author.name}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <ul class="pager">
         <li @click="prePage(1)"><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li @click="nextPage(1)"><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        虾米音乐
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="sheet in xiamiSheets">
            <a @click="sheetDetail('xiami',sheet.id)" class="thumbnail">
              <img :src="sheet.cover">
              <div class="caption">
                <p class="text-center">{{sheet.name}}</p>
                <p class="text-center">{{sheet.author.name}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <ul class="pager">
         <li @click="prePage(2)"><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li @click="nextPage(2)"><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        QQ 音乐
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="sheet in qqSheets">
            <a @click="sheetDetail('qq',sheet.id)" class="thumbnail">
              <img :src="sheet.cover">
              <div class="caption">
                <p class="text-center">{{sheet.name}}</p>
                <p class="text-center">{{sheet.author.name}}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <ul class="pager">
         <li @click="prePage(3)"><a><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
         <li @click="nextPage(3)"><a>下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      neteasePage: 1,
      xiamiPage: 1,
      qqPage: 1
    }
  },
  computed: mapGetters([
    'neteaseSheets','xiamiSheets','qqSheets'
  ]),
  methods: {
    nextPage(type) {
      let keyword = this.$store.state.sheet.keyword
      switch (type) {
        case 1:
          this.neteasePage += 1
          this.$store.dispatch(
            'changeSheetPage', {
              source: 'netease',
              key: keyword,
              page: this.neteasePage
            })
          break;
        case 2:
          this.xiamiPage += 1
          this.$store.dispatch('changeSheetPage', {
            source: 'xiami',
            key: keyword,
            page: this.xiamiPage
          })
          break;
        case 3:
          this.qqPage += 1
          this.$store.dispatch('changeSheetPage', {
            source: 'qq',
            key: keyword,
            page: this.qqPage
          })
          break;
      }
    },
    prePage(type) {
      let keyword = this.$store.state.sheet.keyword
      switch (type) {
        case 1:
          if (this.neteasePage > 1) {
            this.neteasePage -= 1
          }
          this.$store.dispatch(
            'changeSheetPage', {
              source: 'netease',
              key: keyword,
              page: this.neteasePage
            })
          break;
        case 2:
          if (this.xiamiPage > 1) {
            this.xiamiPage -= 1
          }
          this.$store.dispatch('changeSheetPage', {
            source: 'xiami',
            key: keyword,
            page: this.xiamiPage
          })
          break;
        case 3:
          if (this.qqPage > 1) {
            this.qqPage -= 1
          }
          this.$store.dispatch('changeSheetPage', {
            source: 'qq',
            key: keyword,
            page: this.qqPage
          })
          break;
      }
    },
    sheetDetail(source, id) {
      this.$router.push('/result/sheetdetail')
      this.$store.dispatch('sheetdetail', {
        source: source,
        id: id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
p.text-center{
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.col-xs-6{
  img{
    height: 140px;
  }
}
.pager {
    margin-top: 0;
    padding-top: 0;
}
</style>
