import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  play_list: [],
  is_playing: false
}

const actions = {
  plussong({
    commit
  }, info) {
    axios.get(`http://musicall.leanapp.cn/api/getsong/${info.source}?id=${info.id}`)
      .then(res => {
        commit(type.PLUS_SONG, {
          name: info.name,
          url: res.data.url
        })
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.PLUS_SONG](state, payload) {
    payload.isplaying=false
    state.play_list.push(payload)
  }
}

export default {
  state,
  actions,
  mutations
}
