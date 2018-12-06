import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const TrafficStat = {
  state: {
    color: '#D93600',
    car: '',
    train: '',
    walk: '',
    origin: '',
    good: [
      {
        main: 'Seat back and relax, nothing but clear roads ahead.',
        sub: 'There\'s never enough time to do all the nothing you want. ⏳⏲'
      }
    ],
    medium: [
      {
        main: 'A little traffic, no need to panic just turn on your radio and chill',
        sub: 'One good thing about music, when it hits you, you feel no pain. 🎶🎵'
      }
    ],
    bad: [
      {
        main: 'The Traffic ahead seems to be excessive. Why not try a different route.',
        sub: 'Wherever you go, there are three icons that everyone knows: Jesus Christ, Messi and Coca-Cola.😉😉😉😉'
      }
    ]
  },
  actions,
  getters,
  mutations
}
