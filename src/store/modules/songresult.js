import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  loading: false,
  keyword: '',
  neteaseSongResult: {
    songList: null
  },
  xiamiSongResult: {
    songList: null
  },
  qqSongResult: {
    songList: null
  }
}

const getters = {
  neteaseSongs: state => state.neteaseSongResult.songList,
  xiamiSongs: state => state.xiamiSongResult.songList,
  qqSongs: state => state.qqSongResult.songList
}

const actions = {
  getSongs({
    commit
  }, searchkey) {
    state.loading = true
    commit(type.KEYWORD, searchkey)
    axios.get(`http://musicall.leanapp.cn/api/searchsong/netease?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_NETEASE_SONGS, res.data)
        state.loading = false
      })
      .catch(err => {
        console.log(err)
        state.loading = false
      })
    axios.get(`http://musicall.leanapp.cn/api/searchsong/xiami?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_XIAMI_SONGS, res.data)
      })
      .catch(err => console.log(err))
    axios.get(`http://musicall.leanapp.cn/api/searchsong/qq?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_QQ_SONGS, res.data)
      })
      .catch(err => console.log(err))
  },
  changeSongPage({
    commit
  }, to) {
    axios.get(`http://musicall.leanapp.cn/api/searchsong/${to.source}?key=${to.key}&page=${to.page}`)
      .then(res => {
        switch (to.source) {
          case 'netease':
            commit(type.GET_NETEASE_SONGS, res.data)
            break;
          case 'xiami':
            commit(type.GET_XIAMI_SONGS, res.data)
            break;
          case 'qq':
            commit(type.GET_QQ_SONGS, res.data)
            break;
        }
      })
      .catch(err => console.log(err))
  },
}

const mutations = {
  [type.GET_NETEASE_SONGS](state, payload) {
    state.neteaseSongResult = payload
  },
  [type.GET_XIAMI_SONGS](state, payload) {
    state.xiamiSongResult = payload
  },
  [type.GET_QQ_SONGS](state, payload) {
    state.qqSongResult = payload
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
