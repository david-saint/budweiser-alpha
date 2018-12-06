import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const matchStat = {
	state: {
		match: false,
		first_team: {
			id: '',
			name: '',
			logo: '',
			score: '',
			possession: ''
		},
		second_team: {
			id: '',
			name: '',
			logo: '',
			score: '',
			possession: ''
		},
		time: {
			minute: 0,
			second: 0
		},
		goal: {
			count: 0,
			goals: []
		},
		comment: {
			minute: '',
			text: ''
		}
	},
	actions,
	getters,
	mutations
}