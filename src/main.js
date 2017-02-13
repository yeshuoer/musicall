/*
 * 引入 Vue 全家桶及组件
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import App from './App.vue'
import AppRecommend from './components/AppRecommend.vue'
import SearchResult from './components/SearchResult.vue'
import SongResult from './components/SearchResult/SongResult.vue'
import AlbumResult from './components/SearchResult/AlbumResult.vue'
import SheetResult from './components/SearchResult/SheetResult.vue'
import AlbumDetail from './components/SearchResult/AlbumDetail.vue'
import SheetDetail from './components/SearchResult/SheetDetail.vue'
import Loading from './components/Loading.vue'

import './assets/bootstrap.css'

/*
 * 使用 Vue 插件
 */
Vue.use(VueRouter)

// 路由设置
const routes = [{
    path: '/',
    component: AppRecommend
  },
  // 首页为曲目推荐
  {
    path: '/recommend',
    component: AppRecommend
  },
  // 搜索结果页面
  {
    path: '/result',
    component: SearchResult,
    // 搜索页展示
    children: [{
      path: 'songs',
      component: SongResult
    }, {
      path: 'albums',
      component: AlbumResult
    }, {
      path: 'sheets',
      component: SheetResult
    }, {
      path: 'albumdetail',
      component: AlbumDetail
    }, {
      path: 'sheetdetail',
      component: SheetDetail
    }]
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
