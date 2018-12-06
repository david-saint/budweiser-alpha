<template>
  <div class="container">
    <div class="left">
      <img src="../assets/img/he-bottle.png" height="100%">
      <!-- <svg class="svg" viewBox="0 0 183 118" fill="#FFFFFF">
        <clipPath id="clip-path">
          <path d="M505.665 2.5L180.165 0L4.66553 4.5C-1.35787 181.604 -1.20848 280.898 3.16546 458C111.964 463.027 173.332 464.513 283.665 464H402.665L500.165 460.5L588.665 456.5L591.665 299V135L587.165 5.5L505.665 2.5Z" transform="translate(-180.166 0.5)" fill="#C4C4C4"/>
        </clipPath>
       image clip-path="url(#clip-path)" :xlink:href="localTeam.flag"  :src="localTeam.flag" alt="Image" width="100%" class="svg__image" />
        <image clip-path="url(#clip-path)" :xlink:href="require(`../assets/img/15251.png`)"  :src="require(`../assets/img/15251.png`)" alt="Image" width="100%" class="svg__image" /> 
      </svg> -->
    </div>
    <div class="content">
      <div class="top">
        <!-- <img src="../assets/img/russia.png" alt=""> -->
      </div>
      <p class="pk-t">Penalty shoot-out</p>

      <div class="pk-teams">
        <div class="pk-team">
          <p>RUS</p>
          <div>
            <span class="goal"></span>
            <span class="goal"></span>
            <span class="miss"></span>
            <span class="goal"></span>
            <span></span>
          </div>
        </div>
        <div class="pk-team">
          <p>SDA</p>
          <div>
            <span class="goal"></span>
            <span class="goal"></span>
            <span class="goal"></span>
            <span class="goal"></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <div class="bottom">
        <!-- <img src="../assets/img/sponsors.png" alt=""> -->
      </div>
    </div>
    <div class="right">
      <img src="../assets/img/he-bottle.png" height="100%">
      <div class="image">
        <!-- <img src="../assets/img/18562.png" height="100%"> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
@import '../sass/penalty_shootout.scss'
</style>