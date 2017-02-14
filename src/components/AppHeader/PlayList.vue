<template lang="html">
  <div class="playlist">
    <div class="triangle-up"></div>
    <table class="table">
      <thead>
        <tr>
          <th class="icon-th"></th>
          <th>音乐列表</th>
          <th class="icon-th"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in list" >
          <td align="right">
            <span v-if="song.state==='playing'?true:false" class="glyphicon glyphicon-volume-up"></span>
            <span v-if="song.state==='paused'?true:false" class="glyphicon glyphicon-volume-down"></span>
          </td>
          <td class="song-name">
            <span>{{song.name}}</span> - <span>{{song.singer}}</span>
          </td>
          <td class="buttons">
            <a @click='playSong(song)' class="btn">
              <span class="glyphicon glyphicon-play"></span>
            </a>
            <a @click='pauseSong(song)' class="btn">
              <span class="glyphicon glyphicon-pause"></span>
            </a>
            <a @click='removeSong(song)' class="btn">
              <span class="glyphicon glyphicon-remove"></span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toogle: false
    }
  },
  computed: {
    list() {
      return this.$store.state.playlist.play_list
    }
  },
  methods: {
    playSong(song) {
      this.$store.dispatch('playsong', {
        song
      })
    },
    pauseSong(song) {
      this.$store.dispatch('pausesong', {
        song
      })
    },
    removeSong(song) {
      this.$store.dispatch('removesong', {
        song
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist {
    position: absolute;
    left: 1%;
    top: 61px;
    z-index: 2;
    width: 96%;
    .table {
        background-color: salmon;
        color: white;
        .icon-th {
            width: 20px;
        }
        td {
            vertical-align: baseline;
        }
        td.buttons {
            display: flex;
        }
        a.btn {
            color: white;
            &:hover {
                color: pink;
            }
        }
    }
}
// .song-name:hover {
//     cursor: pointer;
//     color: pink;
// }
.triangle-up {
    margin-left: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid salmon;
}
</style>
