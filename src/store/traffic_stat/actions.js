export default {
  getTrafficStat({ state, commit, rootState }, { origin, destination }) {
    function getTrafficData() {
      // build the url structure
      // https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.long},${origin.lat}&destinations=${destination.long},${destination.lat}&key=${rootState.google}
      const url = `https://remembrance-lumberjack-69271.herokuapp.com/?originLong=${origin.long}&originLat=${origin.lat}&destinationLong=${destination.long}&destinationLat=${destination.lat}`;
      // call the endpoint
      axios.get(url)
        .then(response => {
          // defactor the response
          const data = response.data;
          // get the origin address from the response
          const origin = data.origin_addresses[0].split(',')[0];
          // commit the origin address to the store
          commit('setTrafficOrign', origin);
          // get the array containing important values
          const el = data.rows[0].elements[0];
          // calculate the speed from the distance and time
          const speed = el.distance.value / el.duration.value;
          // commit the speed to the stores
          commit('setTrafficCar', el.duration.text);
          // determine what color to commit based on speed
          if (speed >= 20) {
            // this is when there is no traffic
            commit('setTrafficColor', '#27AE60');
          } else if (speed >= 12) {
            // this is when there's a slight triffic
            commit('setTrafficColor', '#F2C94C');
          } else {
            // this is when ther's alot of traffic
            commit('setTrafficColor', '#D93600');
          }
          // get the time for walkin
          axios.get(`${url}&mode=walking`).then(response => { commit('setTrafficWalk', response.data.rows[0].elements[0].duration.text) });
          // get the time for trains
          axios.get(`${url}&mode=transit`).then(response => { commit('setTrafficTrain', response.data.rows[0].elements[0].duration.text) });
        })
        .catch(error => {
          console.error(error)
        });
        // repeat this recursively every 2 minutes
        setTimeout(function () {
          // recursively call this function
          getTrafficData();
        }, 120000);
    }

    getTrafficData();
  }
}