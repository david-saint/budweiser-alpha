export default {
	// the countdown time
	countdownTime: state => state.time,
	// the countdown matchday
	countdownMatchday: state => state.matchday,
	// the countdown date/time
	countdownDateTime: state => state.date_time,
	// the countdown local team info
	countdownLocalTeam: state => state.localTeam,
	// the countdown visitor team info
	countdownVisitorTeam: state => state.visitorTeam,
	// the countdown stadium
	countdownStadium: state => state.stadium,
}