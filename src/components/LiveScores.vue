<template>
  <div class="LiveScores--container">
    <div class="lv">
      <img src="../assets/img/test.png" alt="">
      <img src="../assets/img/rt.png" class="rt" alt="">
      <div class="champe">
        <img src="../assets/img/champe.png" alt="">
      </div>
    </div>
    <div class="ls">
      <div class="pb">
        <p>Powered by:</p>
        <img src="../assets/img/gnn-logo.png" alt="">
      </div>
      <div class="pt">
        88:00
      </div>
      <div class="ps">
        <div class="team">
          <img src="" alt="">
          Napoli
        </div>
        <p class="score">1 - 1</p>
        <div class="away team">
          <img src="" alt="">
          Liverpool
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .LiveScores--container {
    height: 100vh;
    width: 100vw;
    background-image: url(../assets/img/bg-grass.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    position: relative;
    display: flex;
    flex-direction: row;

    .lv {
      width: 45%;
      height: 100%;
      position: relative;
      img:not(.rt) { height: auto; width: 100%;}
      .rt {position: absolute; top: 0; right: 0;}
      .champe { position: absolute; top: 50px; left: 80px;  img {height: 230px; width: 230px; z-index: 1;} }
    }
    .ls {
      width: 55%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .pb {
        p {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-size: 32px;
          text-align: center;
          margin: 0;
          color: #FFFFFF;
        }
        img { width: 600px; height: 100%;}
      }
      .pt {
        background-image: url(../assets/img/lsbg.svg);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: top center;
        width: 80%;
        height: 105px;
        margin: 75px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 50.1846px;
        letter-spacing: 18.9234px;
        color: #0E3C39;
      }
      .ps {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;

        .team {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Montserrat';
          font-weight: 300;
          line-height: 63px;
          font-size: 38.13px;
          text-align: center;
          letter-spacing: 1.5252px;
          color: #FFFFFF;
          margin: 0 50px;
          img { width: 180px; height: 180px; margin-bottom: 30px;}
        }
        p.score {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-size: 88.0716px;
          letter-spacing: 4.2052px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 230px;
          color: #FFFFFF;
        }
      }
    }
  }
</style>