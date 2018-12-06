export default {
	// get the first (home) team
	matchFirstTeam: state => state.first_team,
	// get the second (away) team
	matchSecondTeam: state => state.second_team,
	// get the time (object: {minute, second, status})
	matchTime: state => state.time,
	// get the match status (boolean: true|false)
	matchStatus: state => state.match,
	// get the match goals (array of objects)
	matchGoals: state => state.goal.goals,
	// get the match goal count (integer)
	matchGoalsCount: state => state.goal.count,
	// get the root states iteration length
	indexTime: (state, getters, rootState) => rootState.time,
	// get the match comment
	matchComment: state => state.comment
}