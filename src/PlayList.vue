<template lang="html">
  <div class="playlist">
    <div class="triangle-up"></div>
    <div class="buttons">
      <a class="btn">
        <span @click="playSong" class="glyphicon glyphicon-play"></span>
      </a>
      <a class="btn">
        <span @click="pauseSong" class="glyphicon glyphicon-pause"></span>
      </a>
      <a class="btn" @click="next">下一首</a>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>歌曲</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in list" >
          <td><span v-if="song.isplaying" class="glyphicon glyphicon-volume-up"></span></td>
          <td @click="playSelf(song)"><span class="song-name">{{song.name}}</span></td>
          <td>
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
import * as buzz from 'buzz'

export default {
  data() {
    return {
      duration: 1000,
      current: 0
    }
  },
  computed: {
    list() {
      return this.$store.state.playlist.play_list
    }
  },
  methods: {
    playSelf(song) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].sound) {
          if (this.list[i].sound.isPaused()) {
            this.list[i].sound.stop()
          }
        }
      }
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isplaying) {
          this.list[i].isplaying = false
          this.list[i].sound.stop()
          break
        }
      }
      song.sound = new buzz.sound(song.url)
      song.sound.bind("playing", function() {
        setInterval(function() {
          this.current = song.sound.getTime()
        }, 1000)
      })
      song.sound.play()
      song.isplaying = true
    },
    playSong() {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].sound) {
          if (this.list[i].sound.isPaused()) {
            this.list[i].isplaying = true
            this.list[i].sound.play()
          }
        }
      }
    },
    pauseSong() {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isplaying) {
          this.list[i].isplaying = false
          this.list[i].sound.pause()
          break
        }
      }
    },
    next() {
      if (this.list[this.list.length - 1].isplaying) {
        this.list[this.list.length - 1].isplaying = false
        this.list[this.list.length - 1].sound.stop()
        this.list[0].isplaying = true
        this.list[0].sound = new buzz.sound(this.list[0].url)
        this.list[0].sound.play()
      } else {
        for (var i = 0; i < this.list.length - 1; i++) {
          if (this.list[i].isplaying) {
            this.list[i].isplaying = false
            this.list[i].sound.stop()
            this.list[i + 1].isplaying = true
            this.list[i + 1].sound = new buzz.sound(this.list[i + 1].url)
            this.list[i + 1].sound.play()
            break
          }
        }
      }
    },
    removeSong(song) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isplaying) {
          this.list[i].isplaying = false
          this.list[i].sound.stop()
          break
        }
      }
      let k = this.list.indexOf(song)
      this.list.splice(k, 1)
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
        td {
            vertical-align: baseline;
        }
        a.btn {
            color: white;
            &:hover {
                color: pink;
            }
        }
    }
}
.buttons {
    background-color: salmon;
    display: flex;
    padding: 20px;
    justify-content: space-around;
    a {
        background-color: white;
        color: salmon;
    }
}
.song-name:hover {
    cursor: pointer;
    color: pink;
}
.triangle-up {
    margin-left: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid salmon;
}
</style>
