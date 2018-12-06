import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const groupTable = {
	state: {
		group_name: '',
		teams: []
	},
	actions,
	getters,
	mutations
}