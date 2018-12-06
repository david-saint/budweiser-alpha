export default {
	getSupportersImages({ state, commit, rootState }) {
    function getImages (url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${rootState.coke_token}`) {
      // call the endpoint
      axios.get(url)
        .then(response => {
          // defactor the response
          const data = response.data.data;
          // create dummy array
          const images = new Array();
          // loop through all the images
          data.forEach(value => {
            // push the url of the image into the dummy array
            images.push(value.images.low_resolution.url);
          });
          // store the results in the state
          commit('setNaijaImages', images);

          if (response.data.pagination.next_url) {
            return getImages(response.data.pagination.next_url)
          }
        })
        .catch(error => {
          console.log(error)
        });
        setTimeout(function () {
          getImages();
        }, 30000);
    }
    getImages();
  }
}