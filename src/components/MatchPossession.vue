<template>
	<div class="MatchPossession--container">
    <div class="right--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="left--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="top">
      <div class="timebox">{{ minutes[0] }}</div>
      <div class="timebox">{{ minutes[1] }}</div>
      <div class="separator">:</div>
      <div class="timebox">{{ seconds[0] }}</div>
      <div class="timebox">{{ seconds[1] }}</div>
    </div>

    <div class="possession">
      <div class="lt">
        <img :src="firstTeam.logo" alt="" class="abs">
        <!-- <img src="../assets/img/crown.png" alt=""> -->
      </div>
      <div class="sco">
        <div class="t">
          <span>{{ firstTeam.score }}</span>
          <img src="../assets/img/goal.png" alt="">
          <span>{{ secondTeam.score }}</span>
        </div>
        <div class="b">
          <span>{{ firstTeam.possession }}%</span>
          <img src="../assets/img/posp.png" alt="">
          <span>{{ secondTeam.possession }}%</span>
        </div>
      </div>
      <div class="rt">
        <img :src="secondTeam.logo" alt="" class="abs">
        <!-- <img src="../assets/img/crown.png" alt=""> -->
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
import { bus } from '../bus';
import { router } from '../routes/router';

export default {
  data() {
    return {
      minute: '',
      second: '',
    };
  },

  beforeCreate() {
    this.$store.dispatch('getMatchStat');
  },

  mounted() {
    // listen for the goal-scored event
    bus.$on('goal-scored', (goals) => {
      // get the count of the goals
      const count = this.$store.getters.matchGoalsCount;
      // get the score
      const score = goals.player_name ? goals.player_name : 'null';
      // get the assist
      const assist = goals.player_assist_name ? goals.player_assist_name : 'null';
      // get the time
      const time = goals.minute;
      // get the team id
      const team = goals.team_id;
      // redirect to the goal page
      window.location.href = `/goal/${score}/${assist}/${time}/${team}/possession`;
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
      const m = (this.$store.getters.matchTime.minute) ? ((this.$store.getters.matchTime.minute < 10) ? '0' + this.$store.getters.matchTime.minute.toString() : this.$store.getters.matchTime.minute.toString()) : '00' ;
      return [...m];
    },
    seconds() {
      const s = (this.$store.getters.matchTime.second) ? ((this.$store.getters.matchTime.second < 10 ) ? '0' + this.$store.getters.matchTime.second.toString() : this.$store.getters.matchTime.second.toString()) : '00';
      return ([...s]);
    },
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,800');
	body {
    background-image: url('../assets/img/bg-grass.png');
    background-color: #ED2F23;
    margin-top: -10px;
  }
  img.abs {
    // position: absolute;
  }
  .timebox {
    width: 100px;
    height: 130px;
    background: #ffffff;
    padding: 5px;
    display: inline-block;
    position: relative;
    text-align: center;
    color: #346B19;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
    letter-spacing: 0px;
    border-radius: 10%;
  }

  .separator {
    color: #ffffff;
    display: inline-block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: normal;
    line-height: 97px;
    font-size: 120.096px;
    margin-top: 0;
    position: relative;
    text-align: center;
  }

  .MatchPossession--container {
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
    .possession {
      height: 375px;
      width: 75%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .lt,.rt {
        height: 100%;
        width: 365px;
        padding: 15px;
        img {width: 100%; height: auto;}
      }
      .sco {
        width: calc(100% - 730px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .t,.b {
          height: 50%;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .t {
          align-items: center;
          border-bottom: 2px solid #ffffff;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: normal;
            line-height: 121px;
            font-size: 200px;
            color: #FFFFFF;
          }
        }
        .b {
          align-items: baseline;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 900;
            line-height: 86px;
            font-size: 100px;
            color: #FFFFFF;
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


  
  @media only screen and (max-height: 500px) {
    .timebox {width: 50px; height: 65px; padding: 3px; font-size: 50px;}
    .separator {line-height: 0px; font-size: 60px;}
    .country {width: 170px; height: 170px;}
    .home { font-size: 65px; }
    .away { font-size: 65px; }
    .goal {height: 75px; width: 75px;}
    .possession { font-size: 40px; }
    .russia img { height: 75px; }
    .cocacola img { height: 75px; }
    .container { top: -100px; }
    .crown { margin: 0 25px; }
    .crown .c { top: 16px; left: 16px; height: 138px; width: 138px; }
  }
</style>