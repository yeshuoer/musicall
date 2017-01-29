import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  album_detail: {
    songList: [],
    name: '',
    cover:'',
    artist:{
      name:''
    }
  },
  source: ''
}

const actions = {
  albumdetail({
    commit
  }, to) {
    axios.get(`http://musicall.leanapp.cn/api/getalbum/${to.source}?id=${to.id}`)
      .then(res => {
        console.log(res.data)
        commit(type.ALBUM_DETAIL, res.data)
        commit(type.ALBUM_SOURCE, to.source)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.ALBUM_DETAIL](state, payload) {
    state.album_detail = payload
  },
  [type.ALBUM_SOURCE](state, payload) {
    state.source = payload
  }
}

export default {
  state,
  actions,
  mutations
}
