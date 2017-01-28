import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  sheet_detail: null
}

const actions = {
  sheetdetail({
    commit
  }, to) {
    axios.get(`http://leanapp.cn/api/getsheet/${to.type}?id=${to.id}`)
      .then(res => {
        commit(type.SHEET_DETAIL, res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.SHEET_DETAIL](state, payload) {
    state.sheet_detail = payload
  }
}
