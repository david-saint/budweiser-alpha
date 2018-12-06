export default {
	// set the count down information
	setCountdownState(state, object) {
		state.matchday = object.matchday;
		state.date_time.date = object.date_time.date;
		state.date_time.time = object.date_time.time;
		state.localTeam.name = object.localTeam.name;
		state.localTeam.shortName = object.localTeam.shortName;
		state.localTeam.flag = object.localTeam.flag;
		state.localTeam.id = object.localTeam.id;
		state.visitorTeam.name = object.visitorTeam.name;
		state.visitorTeam.shortName = object.visitorTeam.shortName;
		state.visitorTeam.flag = object.visitorTeam.flag;
		state.visitorTeam.id = object.visitorTeam.id;
		state.stadium = object.stadium;
	},
	// set the countdown time
	setCountdownTime(state, time) {
		state.time = time
	}
}