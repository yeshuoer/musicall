import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  album_detail: null
}

const actions = {
  albumdetail({
    commit
  }, to) {
    axios.get(`http://leanapp.cn/api/getalbum/${to.type}?id=${to.id}`)
      .then(res => {
        commit(type.ALBUM_DETAIL, res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.ALBUM_DETAIL](state, payload) {
    state.album_detail = payload
  }
}
