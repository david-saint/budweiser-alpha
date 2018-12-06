<template>
  <div class="MatchCountdown--container">
    <div class="right--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="left--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="top">
      <h2>Countdown to kick-off</h2>
      <p>{{ time }}</p>
    </div>
    <div class="countdown">
      <img src="../assets/img/match.png" width="100%" height="auto" alt="">
      <div class="countdown--cont">
        <p class="md">Matchday {{ matchday }}</p>
        <div class="ms">
          <div class="ms--team l">
            <img :src="localTeam.flag" alt="">
            {{ localTeam.name }}
          </div>
          <div class="ms--team r">
            {{ visitorTeam.name }}
            <img :src="visitorTeam.flag" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div>
        Powered by: 
        <img src="../assets/img/gnn-logo.png" alt="">
      </div>
      <div>
        UEFA Champions League Sponsors |
        <img src="../assets/img/heineken-logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    visitorTeam() {
      return this.$store.getters.countdownVisitorTeam;
    },
    localTeam() {
      return this.$store.getters.countdownLocalTeam;
    },
    dateTime() {
      return this.$store.getters.countdownDateTime;
    },
    matchday() {
      return this.$store.getters.countdownMatchday;
    },
    time() {
      return this.$store.getters.countdownTime;
    },
    stadium() {
      return this.$store.getters.countdownStadium;
    },
    width() {
      return window.innerWidth;
    },
    height() {
      return window.innerHeight;
    },
  },
  beforeCreate() {
    this.$store.dispatch('getCountdownInfo');
  },
  mounted() {
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,800');
  body {
    margin: 0;
    padding: 0;
  }
  .MatchCountdown--container {
    height: 100vh;
    background-image: url(../assets/img/bg-grass.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .right--bottle {
      position: absolute;
      top: 0;
      right: 25px;
      img {height: 100vh; width: auto;}
    }
    .left--bottle {
      position: absolute;
      top: 0;
      left: 25px;
      img {height: 100vh; width: auto;}
    }
    .top {
      width: 500px;
      height: 135px;
      background-image: url(../assets/img/mc-countdown.png);
      background-repeat: no-repeat;
      background-position: top center;
      background-size: 100% auto;
      font-family: 'Montserrat', sans-serif;
      color: #9B6A00;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 2.8px;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
      }
      p {
        font-weight: 800;
        font-size: 55px;
        letter-spacing: 9px;
        margin: 0;
      }
    }
    .countdown {
      width: 60%;
      position: relative;
      .countdown--cont {
        width: 100%;
        height: 68%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        p.md {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 36px;
          margin: 0;
          letter-spacing: 2px;
          color: #9B6A00;
          margin-top: 20px;
          text-transform: uppercase;
        }
        .ms {
          height: 230px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;

          .ms--team {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 30px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            text-transform: uppercase;

            &.l img {margin-right: 65px;}
            &.r img {margin-left: 65px;}
          }
        }
      }
    }
    .foot {
      width: calc(100vw - 600px);
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 26px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 30px;
        color: #ffffff;
        img {margin: 0 20px;}
      }
    }
  }
</style>