<template>
  <transition name="fade">
  	<div class="container">
      <div class="bottom">
        <div class="left">
          <div class="t">
            <span class="g">G</span>
            <span class="o" id="o1">O</span>
            <span class="o" id="o2">O</span>
            <span class="o" id="o3">O</span>
            <span class="a" id="a1">A</span>
            <span class="a" id="a2">A</span>
            <span class="a" id="a3">A</span>
            <span class="l" id="l1">L</span>
            <span class="l" id="l2">L</span>
            <span class="l" id="l3">L</span>
            <span class="ap" id="ap1">!</span>
            <span class="ap" id="ap2">!</span>
            <span class="ap" id="ap3">!</span>
          </div>
          <div class="b">
            <p>{{ time }}' <!-- <img src="../assets/img/ball.png" alt="" id="ball"> --> {{ score }} <br> <span>ASSIST - <b>{{ assist }}.</b></span></p>
          </div>
        </div>
        <div class="right">
          <img src="../assets/img/he-bottle.png" alt="" id="coke-bottle">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default {
    props: ['score', 'assist', 'time', 'team', 'origin'],
    mounted() {
      setTimeout(() => {
        window.location.href = `/${this.origin}` // or naija-supporters
      }, 20000);
    }
  }
</script>

<style lang="scss">
@import '../sass/partials/_goal_page_effect';
@font-face {
    font-family: 'blowbrush';
    src:url(../assets/fonts/blowbrush.ttf) format('truetype');
}

body {
  margin: 0;
  color: #fff;
  width: 100%;
  height: 100vh;
  background: red;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  background-image: url(../assets/img/bg-grass.png);
  background-size: cover;
}


.container {
  width: 90%;
  height: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: space-around;

  .top {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    #cup {height: 120px;}
    #type {height: 80px;}
    #coke-ish {height: 100px;}
  }

  .bottom {
    display: inherit;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    #coke-bottle {height: 650px;}

    .left {
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .right {
      width: 15%;
      position: relative;
      transform-origin: center;
      animation: swing 5s 0s both infinite;

      svg {
        position: absolute;
        left: 0;
        width: 195px;
        top: 50%;
        transform: translateY(-55%);
      }
    }
  }
}
</style>