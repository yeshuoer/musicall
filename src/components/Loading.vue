<template lang="html">
<div class="loading">
  <img src="../assets/loading.gif" alt="">
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading{
  background-color: lightblue;
  position: absolute;
  opacity: 0.9;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
