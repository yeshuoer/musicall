/*
 * 引入 Vue 全家桶
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
import App from './App.vue'
import AppRecommend from './components/AppRecommend.vue'
import SearchResult from './components/SearchResult.vue'

import './assets/bootstrap.css'

/*
 * 使用 Vue 插件
 */
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:AppRecommend
  },
  {
    path: '/recommend',
    component: AppRecommend
  },
  {
    path: '/result',
    component: SearchResult
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
