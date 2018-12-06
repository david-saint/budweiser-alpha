<template>
	<div class="container">
		<div class="content">
			<div class="fifa-s">
				<img src="../assets/img/rectangle.png" id="cup" >
				<img src="../assets/img/typo.png" id="type">
			</div>
			<div class="coke">
				<p>Share <br> A Coke <br> with</p>
				<img src="../assets/img/coke-bottle-copy.png" id="coke_bottle">
				<p>our <br> Super <br> Eagles</p>
			</div>
			<div class="cb" style="text-align: center;">
				<img src="../assets/img/coke-flat.png" alt="" id="">
			</div>
		</div>
		<div class="left">
			<div class="items">
        <div v-for="image in images.filter((value, index) => (index % 2) == 0)" :style="{backgroundImage: `url(${image})`}" alt="" class="ig_images"></div>
			</div>
		</div>
		<div class="right">
			<div class="items">
        <div v-for="image in images.filter((value, index) => (index % 2) == 1)" :style="{backgroundImage: `url(${image})`}" alt="" class="ig_images"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('getSupportersImages');
  },
  computed: {
    images() {
      const getRandom = (array = this.$store.getters.naijaImages, n = 4) => {
        const shuffled = array.sort(() => .5 - Math.random());// shuffle  
        return shuffled.slice(0,n); // return n unique elements
      }
      // repeat this recursively every 30 seconds
      setTimeout(function () {
        // recursively call this function
         getRandom();
      }, 10000);
      return getRandom();
    }
  }
}
</script>

<style lang="scss">
	@import '../sass/naija_supporters.scss'
</style>