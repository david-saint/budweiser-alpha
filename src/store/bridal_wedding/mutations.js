export default {
  setBrideImage(state, image) {
    state.image = image
  },
  setWallImages(state, images) {
    images.forEach(value => {
      state.wallImages.push(value);
    })
  }
}