import { bus } from '../../bus'

export default {
	getMatchStat({ state, commit, rootState }) {
		function getStat() {
			// set the timer variable
			let w;
			// build the url structure
			const url = `https://soccer.sportmonks.com/api/v2.0/livescores/now?api_token=${rootState.token}&include=localTeam,visitorTeam,stats,goals`;
			// call the endpoint
			axios.get(url)
				.then(response => {
					// defactor the response
					const data = response.data.data;
					// find the world cup match
					const match = data.find(value => value.season_id === rootState.season_id);
					// if there is no world cup match return false
					if(!match) { commit('setMatchStatus', false); return; }
					// if there is a world cup match return true
					commit('setMatchStatus', true);
					// get comments
					axios.get(`https://soccer.sportmonks.com/api/v2.0/commentaries/fixture/${match.id}?api_token=${rootState.token}`)
						.then(response => {
							commit('setMatchComment', { minute: response.data.data[0].minute, text: response.data.data[0].comment });
						})
						.catch(error => {console.error(error)});
					// get the local and visiting teams
					const localteam_id = match.localteam_id, visitorteam_id = match.visitorteam_id;
					// set the requied details needed for the local team
					const localTeam = {
						id: localteam_id,
						name: match.localTeam.data.name,
						logo: match.localTeam.data.logo_path,
						score: match.scores.localteam_score,
						possession: match.stats.data.find(value => value.team_id === localteam_id).possessiontime
					}
					// set the requied details needed for the visitor team
					const visitorTeam = {
						id: visitorteam_id,
						name: match.visitorTeam.data.name,
						logo: match.visitorTeam.data.logo_path,
						score: match.scores.visitorteam_score,
						possession: match.stats.data.find(value => value.team_id === visitorteam_id).possessiontime
					}
					// set dummy second and time
					let s = match.time.second, m = match.time.minute;
					// store the results
					commit('setMatchStat', {one: localTeam, two: visitorTeam});
					// create a dummy array to store goals
					const goals = [];
					// loop through all the goals in the match
					match.goals.data.forEach(value => {
						// push object into the dummy goals array
						goals.push({
							id: value.team_id,
							score: value.player_name,
							assist: value.player_assist_name,
							minute: value.minute
						})
					});
					// store the number of goals
					commit('setMatchGoals', goals);
					commit('setMatchGoalsCount', goals.length);
					// if it is not half time and full time
					if( !(match.time.status == "HT" || match.time.status == "FT") ) {
						// determine fresh goal
						const freshGoal = match.goals.data.find(value => (m - value.minute) < 2);
						// if the number of goals has incremented
						if (freshGoal) {
							// emit event here
							bus.$emit('goal-scored', freshGoal);
							// log it for me to view
						}
						// change the time every second
						w = setInterval(function () {
							// if the second is greater than 59 increment the minute
							m = (s >= 59) ? (m + 1) : m;
							// if the second is 59 change it to 0/ else increment it
							s = (s >= 59) ? 0 : (s + 1);
							// save the new time
							commit('setMatchTime', {minute: m, second: s});
						}, 1000);
						return w;
					} else {
						commit('setMatchTime', {minute: m, second: s});
					}
				})
				.catch(error => {
					console.error(error);
				});
			// repeat this recursively every 30 seconds
			setTimeout(function () {
				// clear the timer
				clearInterval(w);
				// recursively call this function
				getStat();
			}, 30000);
		}
		//  call the function
		getStat();
	}
}