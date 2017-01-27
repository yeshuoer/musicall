import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  songResult: {
    netease: {
      songList: null
    },
    xiami: {
      songList: null
    },
    qq: {
      songList: null
    }
  }
}

const getters = {
  neteaseSongs: state => state.songResult.netease.songList,
  xiamiSongs: state => state.songResult.xiami.songList,
  qqSongs: state => state.songResult.qq.songList
}

const actions = {
  getSongs({
    commit
  }, searchkey) {
    axios.get(`http://musicall.leanapp.cn/api/searchsong/all?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_SONGS, res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.GET_SONGS](state, payload) {
    state.songResult = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
