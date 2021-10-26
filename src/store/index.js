import Vue from "vue";
import Vuex from "vuex";
import location from "@modules/LocationData.js";
import models from "@modules/Cars.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    location: {
      namespaced: true,
      ...location,
    },
    cars: {
      namespaced: true,
      ...models,
    }
  },
  getters: {
    getOrderData(state, getters, rootState) {
      const { currentCity: city, currentPoint: point} = rootState.location;
      const { userChooseModel: model } = rootState.cars;
      return {
        point: city && `${city}, ${point}`,
        model
      };
    },
  },
});
