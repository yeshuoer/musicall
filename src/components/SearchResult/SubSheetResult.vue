<template lang="html">
  <div class="">
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" v-for="sheet in sourceSheets">
          <a @click="sheetDetail(sheet.id)" class="thumbnail">
            <img :src="sheet.cover">
            <div class="caption" :style="{color:color}">
              <p class="text-center">{{sheet.name}}</p>
              <p class="text-center">{{sheet.author.name}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <ul class="pager">
       <li @click="prePage()"><a :style="{color:color}"><span class="glyphicon glyphicon-arrow-left"></span> 上一页</a></li>
       <li @click="nextPage()"><a :style="{color:color}">下一页 <span class="glyphicon glyphicon-arrow-right"></span></a></li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source','color'],
  data() {
    return {
      page: 1
    }
  },
  computed: {
    neteaseSheets() {
      return this.$store.getters.neteaseSheets
    },
    xiamiSheets() {
      return this.$store.getters.xiamiSheets
    },
    qqSheets() {
      return this.$store.getters.qqSheets
    },
    sourceSheets() {
      if (this.source === 'netease') {
        return this.neteaseSheets
      } else if (this.source === 'xiami') {
        return this.xiamiSheets
      } else if (this.source === 'qq') {
        return this.qqSheets
      }
    }
  },
  methods: {
    nextPage() {
      let keyword = this.$store.state.sheet.keyword
      this.page += 1
      this.$store.dispatch(
        'changesheetPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
    },
    prePage(type) {
      let keyword = this.$store.state.sheet.keyword
      if (this.page > 1) {
        this.page -= 1
      }
      this.$store.dispatch(
        'changesheetPage', {
          source: this.source,
          key: keyword,
          page: this.page
        })
      },
      sheetDetail(id) {
        this.$router.push('/result/sheetdetail')
        this.$store.dispatch('sheetdetail', {
          source: this.source,
          id: id
        })
      }
  },
}
</script>

<style lang="scss" scoped>
p.text-center {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.col-xs-6 {
    img {
        height: 140px;
    }
}
.pager {
    margin-top: 0;
    padding-top: 0;
}
</style>
