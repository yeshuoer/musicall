methods: {
  playself() {

  },
  loadsong() {
    this.songs.forEach(function(song) {
      song.howl = new Howl({
        src: [song.src]
      })
    })
    this.songs[0].howl.play()
  },
  playsong() {
    for (let song of this.songs) {
      if (song.is_paused) {
        song.is_paused = false
        song.howl.play()
      }
    }
  },
  pausesong() {
    for (let song of this.songs) {
      if (song.howl.playing()) {
        song.is_paused = true
        song.howl.pause()
      }
    }
  },
  stopsong() {
    for (let song of this.songs) {
      if (song.howl.playing()) {
        song.howl.stop()
      }
    }
  },
  playpre() {
    let id
    if (this.songs[0].howl.playing()) {
      this.songs[0].howl.stop()
      this.songs[this.songs.length - 1].howl.play()
    } else {
      for (var i = 0; i < this.songs.length - 1; i++) {
        if (this.songs[i].howl.playing()) {
          this.songs[i].howl.stop()
          id = i
          break
        }
      }
      this.songs[id - 1].howl.play()
    }
  },
  playnext() {
    let id
    if (this.songs[this.songs.length - 1].howl.playing()) {
      this.songs[this.songs.length - 1].howl.stop()
      this.songs[0].howl.play()
    } else {
      for (var i = 0; i < this.songs.length - 1; i++) {
        if (this.songs[i].howl.playing()) {
          this.songs[i].howl.stop()
          id = i
          break
        }
      }
      this.songs[id + 1].howl.play()
    }
  }
},


data() {
  return {
    hehe: '',
    songs: [{
        title: 'one',
        src: 'http://dl.stream.qqmusic.qq.com/M800001ucwE018fmRe.mp3?vkey=5ABEE335E049786D506E548C12A2919B2D09FFA774D8338AF49FFBA86762BFAE03E2E69F5A33C7A00EA14C8A7EF2724096CF2D112E499095&guid=876452590&fromtag=30',
        howl: null,
        is_willplay: false,
        is_paused: false
      },
      {
        title: 'two',
        src: 'http://dl.stream.qqmusic.qq.com/M800003OUlho2HcRHC.mp3?vkey=5D72DE32824FE7CCD309DFEAF496AC23E2AB949163851D643AE5D12F29F82F2ED96142361A9959C93A622ACD84CD752EC5142FFAAE1B4338&guid=287782783&fromtag=30',
        howl: null,
        is_willplay: false,
        is_paused: false
      },
      {
        title: 'three',
        src: 'http://om5.alicdn.com/931/2931/32156/373568_2319965_l.mp3?auth_key=d0d7cc577a6127f7c291a6a5d6ad338a-1485745200-0-null',
        howl: null,
        is_willplay: false,
        is_paused: false
      }
    ]
  }
},
