import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  loading: false,
  keyword: '',
  neteaseAlbumResult: {
    albumList: null
  },
  xiamiAlbumResult: {
    albumList: null
  },
  qqAlbumResult: {
    albumList: null
  }
}

const getters = {
  neteaseAlbums: state => state.neteaseAlbumResult.albumList,
  xiamiAlbums: state => state.xiamiAlbumResult.albumList,
  qqAlbums: state => state.qqAlbumResult.albumList
}

const actions = {
  getAlbums({
    commit
  }, searchkey) {
    state.loading = true
    commit(type.KEYWORD, searchkey)
    axios.get(`http://musicall.leanapp.cn/api/searchalbum/netease?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_NETEASE_ALBUMS, res.data)
        state.loading = false
      })
      .catch(err => {
        console.log(err)
        state.loading = false
      })
    axios.get(`http://musicall.leanapp.cn/api/searchalbum/xiami?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_XIAMI_ALBUMS, res.data)
      })
      .catch(err => console.log(err))
    axios.get(`http://musicall.leanapp.cn/api/searchalbum/qq?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_QQ_ALBUMS, res.data)
      })
      .catch(err => console.log(err))
  },
  changeAlbumPage({
    commit
  }, to) {
    axios.get(`http://musicall.leanapp.cn/api/searchalbum/${to.source}?key=${to.key}&page=${to.page}`)
      .then(res => {
        switch (to.source) {
          case 'netease':
            commit(type.GET_NETEASE_ALBUMS, res.data)
            break;
          case 'xiami':
            commit(type.GET_XIAMI_ALBUMS, res.data)
            break;
          case 'qq':
            commit(type.GET_QQ_ALBUMS, res.data)
            break;
        }
      })
      .catch(err => console.log(err))
  },
}

const mutations = {
  [type.GET_NETEASE_ALBUMS](state, payload) {
    state.neteaseAlbumResult = payload
  },
  [type.GET_XIAMI_ALBUMS](state, payload) {
    state.xiamiAlbumResult = payload
  },
  [type.GET_QQ_ALBUMS](state, payload) {
    state.qqAlbumResult = payload
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
