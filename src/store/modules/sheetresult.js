import * as type from '../mutation-types'
import axios from 'axios'

const state = {
  sheetResult: {
    netease: {
      sheetList: null
    },
    xiami: {
      sheetList: null
    },
    qq: {
      sheetList: null
    }
  }
}

const getters = {
  neteaseSheets: state => state.sheetResult.netease.sheetList,
  xiamiSheets: state => state.sheetResult.xiami.sheetList,
  qqSheets: state => state.sheetResult.qq.sheetList
}

const actions = {
  getSheets({
    commit
  }, searchkey) {
    axios.get(`http://musicall.leanapp.cn/api/searchsheet/all?key=${searchkey}&page=1`)
      .then(res => {
        commit(type.GET_SHEETS, res.data)
      })
      .catch(err => console.log(err))
  }
}

const mutations = {
  [type.GET_SHEETS](state, payload) {
    state.sheetResult = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
