import * as type from '../mutation-types'
import axios from 'axios'
import * as buzz from 'buzz'

const state = {
  play_list: []
}

const actions = {
  plussong({
    commit
  }, info) {
    axios.get(`http://musicall.leanapp.cn/api/getsong/${info.source}?id=${info.id}`)
      .then(res => {
        commit(type.PLUS_SONG, {
          name: info.name,
          singer: info.singer,
          url: res.data.url
        })
      })
      .then(() => {
        let list = state.play_list
        list[list.length - 1].sound = new buzz.sound(list[list.length - 1].url)
      })
      .catch(err => console.log(err))
  },
  playsong({
    commit
  }, song) {
    commit(type.PLAY_SONG, song.song)
  },
  pausesong({
    commit
  }, song) {
    commit(type.PAUSE_SONG, song.song)
  },
  removesong({
    commit
  }, song) {
    commit(type.REMOVE_SONG, song.song)
  }
}

const mutations = {
  [type.PLUS_SONG](state, payload) {
    payload.state = 'stoped'
    state.play_list.push(payload)
  },
  [type.PLAY_SONG](state, song) {
    if (song.state === 'paused') {
      song.state = 'playing'
      song.sound.play()
    } else if (song.state === 'playing' || song.state === 'stoped') {
      for (var i = 0; i < state.play_list.length; i++) {
        state.play_list[i].state = 'stoped'
        state.play_list[i].sound.stop()
      }
      song.state = 'playing'
      song.sound.play()
    }
  },
  [type.PAUSE_SONG](state, song) {
    if (song.state === 'playing') {
      song.state = 'paused'
      song.sound.pause()
    }
  },
  [type.REMOVE_SONG](state, song) {
    if (song.state === 'playing' || song.state === 'paused') {
      song.sound.stop()
    }
    let k = state.play_list.indexOf(song)
    state.play_list.splice(k, 1)
  }
}

export default {
  state,
  actions,
  mutations
}
