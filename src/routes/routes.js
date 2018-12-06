import HeinekenAd from '../components/HeinekenAd.vue';
import LiveScores from '../components/LiveScores.vue';
import GoalScored from '../components/GoalScored.vue';
import GroupTable from '../components/GroupTable.vue';
// import GoalHighlights from '../components/GoalHighlights.vue';
import MatchCountdown from '../components/MatchCountdown.vue';
import MatchFormation from '../components/MatchFormation.vue';
import LiveCommentary from '../components/LiveCommentary.vue';
import MatchPossession from '../components/MatchPossession.vue';
// import NaijaSupporters from '../components/NaijaSupporters.vue';
import PenaltyShootOut from '../components/PenaltyShootOut.vue';

export const routes = [
	{
		path: '/',
		component: MatchCountdown,
	},
	{
		path: '/possession',
		component: MatchPossession,
	},
	{
		path: '/formation',
		component: MatchFormation
	},
	// {
	// 	path: '/goal',
	// 	component: GoalScored,
	// 	props: true
	// },
	{
		name: 'goal',
		path: '/goal/:score/:assist/:time/:team/:origin',
		component: GoalScored,
		props: true
	},
	{
		path: '/live',
		component: LiveScores,
	},
	{
		path: '/group',
		component: GroupTable
	},
	{
		path: '/ad/1',
		component: HeinekenAd
	},
	// {
	// 	path: '/naija',
	// 	component: NaijaSupporters
	// },
	// {
	// 	path: '/highlight',
	// 	component: GoalHighlights
	// },
	{
		path: '/commentary',
		component: LiveCommentary
	},
	{
		path: '/penalty',
		component: PenaltyShootOut
	},
]