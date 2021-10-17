import axios from "axios";

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
    getListOfCities({ state, commit }) {
      axios({
        type: "get",
        url: `https://api-factory.simbirsoft1.com/api/db/city`,
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      }).then((response) => commit("getListOfCities", response.data.data));
    },
    //eslint-disable-next-line no-unused-vars
    getListOfPoints({ state, commit }, cityId) {
      axios({
        type: "get",
        url: `https://api-factory.simbirsoft1.com/api/db/point?cityId=${cityId}`,
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      }).then((response) => commit("getListOfPoints", response.data.data));
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
