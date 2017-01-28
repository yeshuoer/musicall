import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  keyword:'',
  neteaseSheetResult: {
    playlists: null
  },
  xiamiSheetResult: {
    playlists: null
  },
  qqSheetResult: {
    playlists: null
  }
}

const getters = {
  neteaseSheets: state => state.neteaseSheetResult.playlists,
  xiamiSheets: state => state.xiamiSheetResult.playlists,
  qqSheets: state => state.qqSheetResult.playlists
}

const actions = {
  getSheets({
    commit
  }, searchkey) {
    commit(type.KEYWORD, searchkey)
    axios.get(`http://musicall.leanapp.cn/api/searchsheet/netease?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_NETEASE_SHEETS, res.data)
      })
      .catch(err => console.log(err))
    axios.get(`http://musicall.leanapp.cn/api/searchsheet/xiami?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_XIAMI_SHEETS, res.data)
      })
      .catch(err => console.log(err))
    axios.get(`http://musicall.leanapp.cn/api/searchsheet/qq?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_QQ_SHEETS, res.data)
      })
      .catch(err => console.log(err))
  },
  changeSheetPage({
    commit
  }, to) {
    axios.get(`http://musicall.leanapp.cn/api/searchsheet/${to.source}?key=${to.key}&page=${to.page}`)
      .then(res => {
        switch (to.source) {
          case 'netease':
            commit(type.GET_NETEASE_SHEETS, res.data)
            break;
          case 'xiami':
            commit(type.GET_XIAMI_SHEETS, res.data)
            break;
          case 'qq':
            commit(type.GET_QQ_SHEETS, res.data)
            break;
        }
      })
      .catch(err => console.log(err))
  },
}

const mutations = {
  [type.GET_NETEASE_SHEETS](state, payload) {
    state.neteaseSheetResult = payload
  },
  [type.GET_XIAMI_SHEETS](state, payload) {
    state.xiamiSheetResult = payload
  },
  [type.GET_QQ_SHEETS](state, payload) {
    state.qqSheetResult = payload
  },
  [type.KEYWORD](state, payload) {
    state.keyword = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
