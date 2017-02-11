import Vue from 'vue'
import Vuex from 'vuex'
import songresult from './modules/songresult.js'
import albumresult from './modules/albumresult.js'
import sheetresult from './modules/sheetresult.js'
import albumdetail from './modules/albumdetail.js'
import sheetdetail from './modules/sheetdetail.js'
import playlist from './modules/playlist.js'

Vue.use(Vuex)

const state = {
  showPlayList: false
}

export default new Vuex.Store({
  state,
  modules: {
    song: songresult,
    album: albumresult,
    sheet: sheetresult,
    albumdetail,
    sheetdetail,
    playlist
  }
})
