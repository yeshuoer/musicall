<template lang="html">
  <div class="panel panel-default">
    <div class="panel-heading">
      音乐推荐
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('002PXabV2HU3Qr','qq')" class="thumbnail">
            <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002PXabV2HU3Qr.jpg" alt="...">
            <div class="caption">
              <p class="text-center">红旗下的蛋</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('815','xiami')" class="thumbnail">
            <img src="https://pic.xiami.net/images/album/img98/198/8151393244608.jpg" alt="...">
            <div class="caption">
              <p class="text-center">山河水</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('18903','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/P1goeQ7SoxEkFsb4ZDijMw==/7746059418324672.jpg" alt="...">
            <div class="caption">
              <p class="text-center">七里香</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('38306','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg" alt="...">
            <div class="caption">
              <p class="text-center">万能青年旅店</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('32156','xiami')" class="thumbnail">
            <img src="https://pic.xiami.net/images/album/img31/2931/321561469601661.png" alt="...">
            <div class="caption">
              <p class="text-center">Super Star</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('1722549','netease')" class="thumbnail">
            <img src="https://p4.music.126.net/bSSNudfcjiyNKpUgMgBQbw==/2532175279901175.jpg" alt="...">
            <div class="caption">
              <p class="text-center">Rage Against The Machine</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('2045054','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/ICJFRFfm9-xh3jYpmobjpg==/6666339000046936.jpg" alt="...">
            <div class="caption">
              <p class="text-center">Hex</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('002s0om10giZik','qq')" class="thumbnail">
            <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002s0om10giZik.jpg" alt="...">
            <div class="caption">
              <p class="text-center">给你一点颜色</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('1958223','netease')" class="thumbnail">
            <img src="https://p4.music.126.net/Qh4G8UwEJ0zQCGKYYbiGPQ==/6668538023378082.jpg" alt="...">
            <div class="caption">
              <p class="text-center">Thriller</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('28956','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/StkqprSJyT3QALaRFSxXCA==/27487790711210.jpg" alt="...">
            <div class="caption">
              <p class="text-center">灰色人种</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('34927036','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/TCs6dqwYhfTHdqDx-LkiBA==/18293674463398351.jpg" alt="...">
            <div class="caption">
              <p class="text-center">Legacy</p>
            </div>
          </a>
        </div>
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <a @click="albumDetail('29748','netease')" class="thumbnail">
            <img src="https://p3.music.126.net/Qa3HtyHZOqVbQapHGB1zog==/52776558134329.jpg" alt="...">
            <div class="caption">
              <p class="text-center">浮躁</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    albumDetail(id, source) {
      this.$router.push('/result/albumdetail')
      this.$store.dispatch('albumdetail', {
        source: source,
        id: id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div.panel-heading {
    background-color: salmon;
    color: white;
}
.caption p{
  color: salmon;
}
.pager {
    padding-top: 0;
    margin-top: 0;
}
p.text-center {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
