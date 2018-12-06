export default {
  getBrideImage({ state, commit, rootState }) {
    // build the url structure
    const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${rootState.brides_token}`;
    // call the endpoint
    axios.get(url)
      .then(response => {
        // defactor the response
        const data = response.data.data;
        // create dummy array
        const image = data[0].images.standard_resolution.url
        // store the results in the state
        commit('setBrideImage', image);
      })
      .catch(error => {
        console.log(error)
      });
  },
  getWallImages({ state, commit, rootState }) {
    function getImages(url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${rootState.brides_token}`) {
      // call the endpoint
      axios.get(url)
        .then(response => {
          // defactor the response
          const data = response.data.data;
          // create dummy array
          const imgs = new Array();
          // store each image in the array
          data.forEach(value => {
            imgs.push(value.images.standard_resolution.url)
          });
          // staore the results in the state
          commit('setWallImages', imgs);

          if (response.data.pagination.next_url) {
            return getImages(response.data.pagination.next_url)
          }
        })
        .catch(error => {
          console.log(error)
        });
    }
    getImages();
  }
}