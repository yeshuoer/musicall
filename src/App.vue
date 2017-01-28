<template>
  <div id="app" class="container-fluid">
    <!-- AppHeader -->
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import * as buzz from 'buzz'
import AppHeader from './components/AppHeader.vue'
// var buzz =require('buzz')


export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="css"></style>
