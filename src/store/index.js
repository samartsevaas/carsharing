import Vue from "vue";
import Vuex from "vuex";
import location from "@modules/LocationData.js";
import models from "@modules/Cars.js";

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
    },
  },
  getters: {
    getOrderData(state, getters, rootState, rootGetters) {
      const { currentCity: city, currentPoint: point } = rootState.location;
      const {
        userChooseModel: model,
        currentColor,
        currentFullTank,
        currentChildSeat,
        currentHandDrive,
      } = rootState.cars;
      const {
        "cars/dateForUser": dateForUser,
        "cars/getRateById": { name },
      } = rootGetters;
      return {
        point: city && `${city}, ${point}`,
        model,
        currentColor,
        dateForUser,
        currentFullTank,
        currentChildSeat,
        currentHandDrive,
        name,
      };
    },
    getFinalPriceForUser(state, getters, rootState, rootGetters) {
      const { "cars/finalPrice": finalPrice } = rootGetters;
      return {
        finalPrice,
      };
    },
  },
});
