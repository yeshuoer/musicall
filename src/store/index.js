import Vue from 'vue'
import Vuex from 'vuex'
import songresult from './modules/songresult.js'
import albumresult from './modules/albumresult.js'
import sheetresult from './modules/sheetresult.js'
import albumdetail from './modules/albumdetail.js'
import sheetdetail from './modules/sheetdetail.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    song:songresult,
    album:albumresult,
    sheet:sheetresult,
    albumdetail:albumdetail,
    sheetdetail:sheetdetail
  }
})
