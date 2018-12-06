export default {
  // gets the basic information needed for the countdown page
  getCountdownInfo({ commit, rootState, dispatch }) {
    // build the url
    const url = `https://soccer.sportmonks.com/api/v2.0/seasons/${rootState.season_id}?api_token=${rootState.token}&include=stages.fixtures.localTeam,stages.fixtures.visitorTeam,stages.fixtures.round,stages.fixtures.venue`;
    // use axios to call the url endpoint
    axios.get(url)
      .then((response) => {
        // defactor the response
        const { data: { data: { stages: { data: stages } } } } = response;
        // get data for the group stage
        const groupStage = stages.find(val => val.id === 7456626);
        // get the groupstage fixtures to come
        const fixtures = groupStage.fixtures.data.filter((value) => {
          // convert the date to GMT
          const fixtureDate = new Date(`${value.time.starting_at.date_time} ${value.time.starting_at.timezone}`);
          // get current date
          const currentDate = new Date();
          // return true if the current time is less than the fixtures time
          return currentDate.getTime() <= fixtureDate.getTime();
        });
        console.log(fixtures);
        // the first item is the needed match
        const match = fixtures[1];
        // get the date
        const matchDate = new Date(`${match.time.starting_at.date_time} ${match.time.starting_at.timezone}`);
        // created an object of the needed variables
        const obj = {
          matchday: match.round.data.name,
          stadium: match.venue.data.name,
          date_time: {
            date: match.time.starting_at.date,
            time: `${matchDate.getHours()}:${(matchDate.getMinutes() < 10) ? `0 ${matchDate.getMinutes().toString()}` : matchDate.getMinutes().toString()}`,
          },
          localTeam: {
            id: match.localTeam.data.id,
            name: match.localTeam.data.name,
            shortName: match.localTeam.data.short_code,
            flag: match.localTeam.data.logo_path,
          },
          visitorTeam: {
            id: match.visitorTeam.data.id,
            name: match.visitorTeam.data.name,
            shortName: match.visitorTeam.data.short_code,
            flag: match.visitorTeam.data.logo_path,
          },
        };
        // commit the changes to a mutation
        commit('setCountdownState', obj);
        // dispatch the countdown time function
        dispatch('getCountdownTime', matchDate);
      })
      .catch(error => console.error(error));
  },
  getCountdownTime({ commit, dispatch }, matchDate) {
    // Set the date we are counting down to
    const date = matchDate.getTime();
    // function to pad the numbers
    function pad(d) {
      return (d < 10) ? `0${d.toString()}` : d.toString();
    }
    // Update the countdown every 1 second
    const x = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();
      // Find the distance between now and the countdown date
      const distance = date - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));
      // set the time in the element
      const time = `${(days > 0) ? `${days}d` : ''} ${hours}:${minutes}:${seconds}`;
      // If the countdown is finished, write some text
      if (distance < 0) {
        // cancel the loop
        clearInterval(x);
        // set the time to display expired
        dispatch('getCountdownInfo');
      }
      commit('setCountdownTime', time);
    }, 1000);
  },
};
