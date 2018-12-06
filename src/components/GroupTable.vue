<template>
	<transition>
		<div class="GroupTable--container">
      <div class="right--bottle">
        <img src="../assets/img/he-bottle.png" alt="">
      </div>
      <div class="left--bottle">
        <img src="../assets/img/he-bottle.png" alt="">
      </div>
			<div class="table">
				<h1 class="center title">{{ groupName }}</h1>
        <h2 class="sub">UEFA CHAMPIONS LEAGUE TABLE</h2>
				<hr width="100%">
				<table>
					<thead>
						<tr>
							<th></th>
							<th><h1>PL</h1></th>
							<th></th>
							<th><h1>W</h1></th>
							<th><h1>D</h1></th>
							<th><h1>L</h1></th>
							<th><h1>Points</h1></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="team in groupTeams">
							<td><h1>{{ team.name }}</h1></td>
							<td class="white"><h1>{{ team.played }}</h1></td>
							<td><h1></h1></td>
							<td class="white"><h1>{{ team.won }}</h1></td>
							<td class="white"><h1>{{ team.drawn }}</h1></td>
							<td class="white"><h1>{{ team.lost }}</h1></td>
							<td><h1>{{ team.points }}</h1></td>
						</tr>
					</tbody>
				</table>
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
	</transition>
</template>

<script>
	export default {
    beforeCreate() {
      this.$store.dispatch('getGroupInfo');
    },
    mounted() {
    },
    computed: {
      groupName() {
        return this.$store.getters.groupTableName
      },
      groupTeams() {
        return this.$store.getters.groupTableTeams.sort((a,b) => a.position - b.position);
      }
    }
	}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600,800');

.center {text-align: center;}
.white {
  background-color: #fff;
  h1 {
    font-family: 'Montserrat';
    font-weight: 300 !important;
    line-height: 47px;
    font-size: 20px;
    letter-spacing: 1.29581px;
    color: #175958 !important;
    margin: 0;
  }
}
.GroupTable--container {
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
  .table {
    width: 50%;
    height: 60%;
    padding-top: 30px;

    h1.title {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: bold;
      line-height: 108px;
      font-size: 74.5078px;
      letter-spacing: 1.29581px;
      color: #FFFFFF;
      margin: 30px;
    }
    h2.sub {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: normal;
      line-height: 47px;
      font-size: 32.3953px;
      letter-spacing: 1.29581px;
      text-align: center;
      color: #FFFFFF;
    }

    table {
      margin-right: auto;
      margin-left: auto;
      border-spacing: 20px 0;
      th, td {
        padding: 15px 25px;
        text-align: center;
        min-width: 60px;
        h1 {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 30px;
        letter-spacing: 1.29581px;
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
</style>