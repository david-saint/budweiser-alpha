import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const countdown = {
	state: {
		time: '',
		stadium: '',
		matchday: '',
		date_time: {
			date: '',
			time: ''
		},
		localTeam: {
			id: '',
			name: '',
			shortName: '',
			flag: ''
		},
		visitorTeam: {
			id: '',
			name: '',
			shortName: '',
			flag: ''
		}
	},
	actions,
	getters,
	mutations
}