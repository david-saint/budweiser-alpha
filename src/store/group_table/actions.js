export default {
	// get information about a random group
	getGroupInfo({ commit, rootState }) {
		function getGroup() {
			// build the url
			const url = `https://soccer.sportmonks.com/api/v2.0/standings/season/${rootState.season_id}?api_token=${rootState.token}`;
			// query the url
			axios.get(url)
				.then(response => {
					// defactor the response
					const data = response.data.data;
					// get a random group
					let i = Math.floor(Math.random() * data.length);
					// select the group
					const group = data[i];
					// get the group name
					const groupName = group.name;
					// save the group name
					commit('setGroupName', groupName);
					// create the dummy teams array
					const groupTeams = new Array();
					// loop through the teams in the group
					for (let team of group.standings.data) {
						// push the necessary data into the dummy teams array
						groupTeams.push({
							name: team.team_name,
							played: team.overall.games_played,
							won: team.overall.won,
							drawn: team.overall.draw,
							lost: team.overall.lost,
							points: team.total.points,
							position: team.position
						});
					}
					// save the group teams
					commit('setGroupTeams', groupTeams);
					
				})
				.catch(error => console.error(error));
			// repeat this recursively every 30 seconds
				setTimeout(function () {
					// recursively call this function
					getGroup();
				}, 30000);
		}
		// call the function
		getGroup();
	}
}