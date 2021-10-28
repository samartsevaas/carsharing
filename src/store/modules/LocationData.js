export default {
  state: {
    cities: [],
    points: [],
    currentCity: "",
    currentPoint: "",
  },
  mutations: {
    getListOfCities(state, cities) {
      state.cities = cities;
    },
    getListOfPoints(state, points) {
      state.points = points;
    },
    setCurrentCity(state, city) {
      state.currentCity = city;
    },
    setCurrentPoint(state, point) {
      state.currentPoint = point;
    },
  },
  actions: {
    //eslint-disable-next-line no-unused-vars
    async getListOfCities({ commit }) {
      const data = await this.$services.city.getListOfCities();
      commit("getListOfCities", data);
    },
    //eslint-disable-next-line no-unused-vars
    async getListOfPoints({ commit }, cityId) {
      const data = await this.$services.point.getListOfPoints(cityId);
      commit("getListOfPoints", data);
    },
  },
  getters: {
    allCities(state) {
      return state.cities;
    },
    allPoints(state) {
      return state.points;
    },
  },
};
