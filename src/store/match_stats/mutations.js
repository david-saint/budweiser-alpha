export default {
	// set the Match statistics
	setMatchStat(state, object) {
		state.first_team = object.one;
		state.second_team = object.two;
	},
	// set the status of the match.. (boolean: true|false)
	setMatchStatus(state, status) {
		state.match = status
	},
	// set the time minutes and seconds
	setMatchTime(state, {minute, second}) {
		state.time.minute = minute;
		state.time.second = second;
	},
	// set the goals in the match
	setMatchGoals(state, goals) {
		state.goal.goals = goals
	},
	// set the count of the number of goals
	setMatchGoalsCount(state, count) {
		state.goal.count = count
	},
	// set the match comment
	setMatchComment(state, comment) {
		state.comment = comment;
	}
}