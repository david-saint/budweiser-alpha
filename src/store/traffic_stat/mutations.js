export default {
  // set the color of the traffic intensity
  setTrafficColor(state, color) {
    state.color = color
  },
  setTrafficCar(state, car) {
    state.car = car
  },
  setTrafficWalk(state, walk) {
    state.walk = walk
  },
  setTrafficTrain(state, train) {
    state.train = train
  },
  setTrafficOrign(state, origin) {
    state.origin = origin
  }
}