<template>
  <transition name="slide">
  	<div class="container">
      <div class="vid-container">
        <div class="vid">
          <embed src="https://cc.sporttube.com/embed/WxhCCCG" height="100%" width="100% ">
        </div>
      </div>
      <div class="static-side">
        <div class="fifa-s">
          <img src="../assets/img/rectangle.png" height="70px">
          <img src="../assets/img/typo.png" height="45px">
        </div>
        <div>
          <p class="cocacola">Coca Cola World Cup</p>
          <p class="gotd">Goal of the day</p>
        </div>
        <div class="coke">
          <img src="../assets/img/coke-bottle.png" alt="" height="200px">
          <img src="../assets/img/coke-flat.png" alt="" width="50%" style="float: right;">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
    mounted() {
    }
	}
</script>

<style lang="scss">
	@import '../sass/goal_of_the_day.scss'
</style>