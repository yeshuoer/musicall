import Vue from 'vue'
import Vuex from 'vuex'
import songresult from './modules/songresult.js'
import albumresult from './modules/albumresult.js'
import sheetresult from './modules/sheetresult.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    songresult,
    albumresult,
    sheetresult
  }
})
