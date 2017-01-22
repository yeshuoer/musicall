/*
 * 引入 Vue 全家桶
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
// import axios from 'axios'
import App from './App.vue'
import './assets/bootstrap.css'

/*
 * 使用 Vue 插件
 */
// Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
