import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  albumResult: {
    netease: {
      albumList: null
    },
    xiami: {
      albumList: null
    },
    qq: {
      albumList: null
    }
  }
}

const getters = {
  neteaseAlbums: state => state.albumResult.netease.albumList,
  xiamiAlbums: state => state.albumResult.xiami.albumList,
  qqAlbums: state => state.albumResult.qq.albumList
}

const actions = {
  getAlbums({
    commit
  }, searchkey) {
    axios.get(`http://musicall.leanapp.cn/api/searchalbum/all?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_ALBUMS, res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.GET_ALBUMS](state, payload) {
    state.albumResult = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
