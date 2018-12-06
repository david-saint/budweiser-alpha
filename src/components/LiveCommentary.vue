<template>
  <div class="LiveCommentary--container">
    <div class="right--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="left--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="top">
      <p>{{ minutes.join('') }}:{{ seconds.join('') }}</p>
    </div>
    
    <div class="mid">
      <div>
        Powered by: 
        <img src="../assets/img/gnn-logo.png" alt="">
      </div>
      <div class="comment">
        <div class="head">UEFA CHAMPIONS LEAGUE - LIVE</div>
        <div class="body">
          <div class="time">{{ comment.minute }}"</div>
          <div class="co">{{ comment.text }}</div>
        </div>
      </div>
      <div>
        UEFA Champions League Sponsors |
        <img src="../assets/img/heineken-logo.png" alt="">
      </div>
    </div>

    <div class="bottom">
      <img :src="firstTeam.logo" alt="">
      <div class="div">
        <span>HT</span>
        <p><span>{{ firstTeam.score }}</span> - <span>{{ secondTeam.score }}</span></p>
      </div>
      <img :src="secondTeam.logo" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        minute: '',
        second: ''
      }
    },
    beforeCreate() {
      this.$store.dispatch('getMatchStat');
    },

    mounted() {
      // listen for the goal-scored event
      bus.$on('goal-scored', (goals) => {
        // get the count of the goals
        let count = this.$store.getters.matchGoalsCount;
        // get the score 
        let score = goals.player_name ? goals.player_name : 'null';
        // get the assist
        let assist = goals.player_assist_name ? goals.player_assist_name : 'null';
        // get the time
        let time = goals.minute;
        // get the team id
        let team = goals.team_id;
        // redirect to the goal page
       window.location.href = `/goal/${score}/${assist}/${time}/${team}/commentary`;
      });
    },

    computed: {
      firstTeam() {
        return this.$store.getters.matchFirstTeam;
      },
      secondTeam() {
        return this.$store.getters.matchSecondTeam;
      },
      minutes() {
        let m = (this.$store.getters.matchTime.minute) ? ((this.$store.getters.matchTime.minute < 10) ? '0' + this.$store.getters.matchTime.minute.toString() : this.$store.getters.matchTime.minute.toString()) : '00' ;
        return [...m]
      },
      seconds() {
        let s = (this.$store.getters.matchTime.second) ? ((this.$store.getters.matchTime.second < 10 ) ? '0' + this.$store.getters.matchTime.second.toString() : this.$store.getters.matchTime.second.toString()) : '00';
        return ([...s]);
      },
      comment() {
        return this.$store.getters.matchComment
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,900');
  @font-face {
    font-family: 'Helvetica Neue';
    src:url(../assets/fonts/HelveticaNeue.ttf) format('truetype');
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .LiveCommentary--container {
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
      img {height: auto; width: 14vw;}
    }
    .left--bottle {
      position: absolute;
      top: 0;
      left: 25px;
      img {height: auto; width: 14vw;}
    }
    .top {
      width: 450px;
      height: 145px;
      background-image: url(../assets/img/toptime.svg);
      background-position: top center;
      background-repeat: no-repeat;
      background-size: 100% auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      p {
        margin: 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 95px;
        color: #FFFFFF;
      }
    }
    .bottom {
      width: 800px;
      height: 185px;
      background-image: url(../assets/img/bottomscore1.svg);
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 100% auto;
      padding: 25px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;

      img {width: auto; height: auto; max-height: 90%;}
      .div {
        text-align: center;
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 95px;
        color: #102C55;
        span {
          font-size: 36px;
          letter-spacing: normal;
        }
        p {
          span {font-size: 95px;}
          text-align: center;
          margin: 0;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    .mid {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        color: #ffffff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 26px;
        img {margin: 0 20px;}
        &:not(.comment) {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
      .comment {
        width: 100%;
        position: relative;
        margin-top: 60px;
        margin-bottom: 15px;
        .head {
          width: 60%;
          height: 75px;
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          background: #122649;
          box-shadow: 1.9px 5.7px 6px rgba(16, 45, 87, 0.22);
          text-transform: uppercase;
          font-family: 'Helvetica Neue';
          font-size: 55px;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .body {
          width: 100%;
          padding-top: 50px;
          border-radius: 10px;
          background: #FFFFFF;
          padding: 50px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          box-sizing: border-box;
          .time, .co {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: bold;
            line-height: 66px;
            font-size: 48.5895px;
            color: #102C55;
          }
          .time {width: 15%;}
          .co { padding: 0 25px;}
        }
      }
    }
  }
</style>