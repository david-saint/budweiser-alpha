import Vue from 'vue';
import Vuex from 'vuex';

import { countdown } from './countdown/store';
import { matchStat } from './match_stats/store';
import { groupTable } from './group_table/store';
import { TrafficStat } from './traffic_stat/store';
import { bridalWedding } from './bridal_wedding/store';
import { naijaSupporters } from './naija_supporters/store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: 'Gfv90zzwtXqD533oy4okBIXIrhMnNwU6Szie0exeR5SfyiJwFehZXZxeIX2O',
    // google: 'AIzaSyAyc5n1BQTKa1FV58sbF0MfmAxzSJJ-1jY',
    season_id: 12962, // World-cup: 892
    time: 1450000,
    coke_token: '7530451271.a5a7f83.961f3fe88e2545e29f6e0f9ca7c7218f', // instagram token for naija supporters ot_dave
    brides_token: '7530451271.a5a7f83.961f3fe88e2545e29f6e0f9ca7c7218f', // instagram token for bridal candle.ng
  },
  modules: {
    countdown, groupTable, matchStat, naijaSupporters, bridalWedding, TrafficStat,
  },
});
