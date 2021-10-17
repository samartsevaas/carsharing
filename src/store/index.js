import Vue from "vue";
import Vuex from "vuex";
import location from "@modules/LocationData.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    location: {
      namespaced: true,
      ...location,
    },
  },
  getters: {
    getOrderData(state, getters, rootState) {
      const { currrentCity: city, currrentPoint: point } = rootState.location;
      return {
        city,
        point,
      };
    },
  },
});
