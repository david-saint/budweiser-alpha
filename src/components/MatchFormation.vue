<template>
  <div class="MatchFormation--container">
    <div class="right--bottle">
      <img src="../assets/img/he-bottle.png" alt="">
    </div>
    <div class="formation">
      <div class="crown">
        <img src="../assets/img/he-crown.png" alt="" width="223px" height="223px">
        <h1>SSC NAPOLI</h1>
        <div class="divider"></div>
        <p>4 - 4 - 2</p>
      </div>
      <div class="match">
        <img src="../assets/img/pitch.png" alt="">
        <div class="players">
          <div class="row">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
          </div>
          <div class="row">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
          </div>
          <div class="row"></div>
          <div class="row">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
            <img src="../assets/img/he-crown.png" alt="">
          </div>
          <div class="row">
            <img src="../assets/img/he-crown.png" alt="" class="gk">
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

};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .MatchFormation--container {
    height: 100vh;
    background-image: url(../assets/img/bg-grass.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .right--bottle {
      position: absolute;
      top: 0;
      right: 325px;
      img {height: 100%; width: auto;}
    }

    .formation {
      height: 85%;
      width: calc(100vw - 900px);
      box-sizing: border-box;
      padding: 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      .crown {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img { margin-bottom: 21px; }
        h1 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 41.8997px;
          letter-spacing: 8px;
          margin: 0;
          color: #FFFFFF;
        }
        div.divider {
          width: 70%;
          height: 3px;
          background-color: #fff;
          content: " ";
          margin-top: 5px;
        }
        p {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          line-height: 70px;
          font-size: 71.066px;
          letter-spacing: 8px;
          color: #FFFFFF;
        }
      }
      .match {
        position: relative;
        height: calc(100% - 50px);
        img { height: 100%; width: auto; }

        .players {
          position: absolute;
          height: 90%;
          width: 100%;
          bottom: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: stretch;

          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            img {
              height: 15%;
              width: 15%;
              &.gk {width: 10%; height: 10%;}
              &:nth-child(2) {
                margin-top: 45px;
              }
              &:nth-child(3) {
                margin-top: 45px;
              }
            }
          }
        }
      }
    }
  
    .foot {
      width: calc(100vw - 600px);
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      font-size: 26px;
      padding: 0 40px;
      box-sizing: border-box;
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