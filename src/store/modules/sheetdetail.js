import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  sheet_detail: {
    songList: [],
    name: '',
    cover: '',
    author: {
      name: ''
    }
  },
  source: ''
}

const actions = {
  sheetdetail({
    commit
  }, to) {
    axios.get(`http://musicall.leanapp.cn/api/getasheet/${to.source}?id=${to.id}`)
      .then(res => {
        commit(type.sheet_detail, res.data)
        commit(type.SHEET_SOURCE, to.source)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.sheet_detail](state, payload) {
    state.sheet_detail = payload
  },
  [type.SHEET_SOURCE](state, payload) {
    state.source = payload
  }
}

export default {
  state,
  actions,
  mutations
}
