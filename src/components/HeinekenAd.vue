<template>
  <div class="HeinekenAd--container">
    <div class="championslogo">
      <img src="../assets/img/champe.png" alt="">
    </div>
    <div class="hei">
      <img src="../assets/img/he-brand.png" alt="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  body {
    margin:  0;
    padding:  0;
    overflow: hidden;
  }
  .HeinekenAd--container {
    height: 100vh;
    width:  100vw;
    background-image: url(../assets/img/he-ad-bg.png);
    background-position: center center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .championslogo {
      position: absolute;
      top: 50px;
      right: 100px;
    }
    .hei {
      margin-left: 150px;
      width: 650px;
      img { width: 100%; height: auto;}
    }
  }
</style>