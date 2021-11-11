import Vue from "vue";
import Vuex from "vuex";
import location from "@modules/LocationData.js";
import models from "@modules/Cars.js";
import order from "@modules/Order.js";

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
    order: {
      namespaced: true,
      ...order,
    },
  },
  getters: {
    getOrderData(state, getters, rootState, rootGetters) {
      const { currentCity: city, currentPoint: point } = rootState.location;
      const {
        userChooseModel: model,
        currentColor,
        isFullTank,
        isNeedChildChair,
        isRightWheel,
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
        isFullTank,
        isNeedChildChair,
        isRightWheel,
        name,
      };
    },
    getFinalPriceForUser(state, getters, rootState, rootGetters) {
      const { "cars/finalPrice": finalPrice } = rootGetters;
      return {
        finalPrice,
      };
    },
    dataForServer(state, getters, rootState, rootGetters) {
      const { dateFrom, dateTo } = rootState.cars;
      const {
        "cars/selectedModelfromUser": selectedModelfromUser,
        "location/getCurrentPointForServer": pointId,
        "location/getCurrentCityForServer": cityId,
      } = rootGetters;
      return {
        dateFrom,
        dateTo,
        selectedModelfromUser,
        pointId,
        cityId,
      };
    },
  },
});
