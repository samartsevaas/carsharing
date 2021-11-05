import dayjs from "dayjs";
export default {
  state: {
    cars: [],
    categories: [],
    carsByCategory: [],
    rate: [],
    currentCategory: "",
    userChooseModel: "",
    dateFrom: "",
    dateTo: "",
    currentColor: "",
    currentFullTank: false,
    currentChildSeat: false,
    currentHandDrive: false,
    rateId: "",
  },
  mutations: {
    getListOfCars(state, cars) {
      state.cars = cars;
    },
    getListOfCategories(state, categories) {
      state.categories = categories;
    },
    getcarsByCategory(state, carsByCategory) {
      state.carsByCategory = carsByCategory;
    },
    setCurrentCategory(state, currentCategory) {
      state.currentCategory = currentCategory;
    },
    setUserChooseModel(state, userChooseModel) {
      state.userChooseModel = userChooseModel;
    },
    getRate(state, rate) {
      state.rate = rate;
    },
    setCurrentDateFrom(state, dateFrom) {
      state.dateFrom = dateFrom;
    },
    setCurrentDateTo(state, dateTo) {
      state.dateTo = dateTo;
    },
    setCurrentColor(state, currentColor) {
      state.currentColor = currentColor;
    },
    setCurrentFullTank(state, currentFullTank) {
      state.currentFullTank = currentFullTank;
    },
    setCurrentChildSeat(state, currentChildSeat) {
      state.currentChildSeat = currentChildSeat;
    },
    setCurrentHandDrive(state, currentHandDrive) {
      state.currentHandDrive = currentHandDrive;
    },
    setRateId(state, rateId) {
      state.rateId = rateId;
    },
  },
  actions: {
    async getListOfCars({ commit }) {
      const data = await this.$services.cars.getListOfCars();
      commit("getListOfCars", data);
    },
    async getListOfCategories({ commit }) {
      const data = await this.$services.categories.getListOfCategories();
      commit("getListOfCategories", data);
    },
    async getcarsByCategory({ commit }, currentCategory) {
      const data = await this.$services.currentCategory.getcarsByCategory(
        currentCategory
      );
      commit("getListOfCars", data);
    },
    async getRate({ commit }) {
      const data = await this.$services.rate.getRate();
      commit("getRate", data);
    },
  },
  getters: {
    allCars(state) {
      let carsImg = [];
      state.cars.forEach((car) => {
        if (car.thumbnail.path.includes("base64")) {
          carsImg.push(car);
        }
      });
      return carsImg;
    },
    selectedModelfromUser(state, getters) {
      return (
        getters.allCars.find((itm) => itm.name === state.userChooseModel) ?? {}
      );
    },
    selectedModelColorfromUser(state, getters) {
      return (
        getters.allCars.find((itm) => itm.name === state.userChooseModel) ?? {}
      ).colors;
    },
    convertTimestamp(state) {
      if (!state.dateFrom || !state.dateTo) return "";
      const dateToPrep = dayjs(state.dateTo);
      const dateFromPrep = dayjs(state.dateFrom);
      let minutesForFinalPrice = dateToPrep.diff(dateFromPrep, "minute");
      let remainMinuteFromDay = minutesForFinalPrice % 1440;
      let fullDays = Math.floor(minutesForFinalPrice / 1440);
      return {
        remainMinuteFromDay,
        fullDays,
        minutesForFinalPrice,
      };
    },
    dateForUser(state) {
      if (!state.dateFrom || !state.dateTo) return "";
      const dateToPrep = dayjs(state.dateTo);
      const dateFromPrep = dayjs(state.dateFrom);
      let hoursForUser = dateToPrep.diff(dateFromPrep, "hour");
      const daysForUser = Math.floor(hoursForUser / 24);
      hoursForUser = hoursForUser - daysForUser * 24;
      return `${daysForUser} д и ${hoursForUser} ч`;
    },
    getRateForUser(state) {
      let rateForUser = [];
      state.rate.forEach((itm) => {
        if (
          itm.id === "60b958582aed9a0b9b7ed3d6" ||
          itm.id === "5fd91571935d4e0be16a3c44"
        ) {
          rateForUser.push(itm);
        }
      });
      return rateForUser;
    },
    getRateById(state, getters) {
      if (!state.rateId)
        return {
          price: 0,
          name: null,
        };
      const {
        price,
        rateTypeId: { name },
      } = getters.getRateForUser.find((item) => item.id === state.rateId);
      return {
        price,
        name,
      };
    },
    getAddFuncValueForPrice(state) {
      const listOfAddFunc = [
        state.currentFullTank,
        state.currentChildSeat,
        state.currentHandDrive,
      ];
      const getTrueValuesFromList = listOfAddFunc.filter(Boolean);
      return +getTrueValuesFromList.length * 300;
    },
    getRateValueForPrice(state, getters) {
      let priceByRate = null;
      if (state.rateId === "60b958582aed9a0b9b7ed3d6") {
        priceByRate =
          getters.convertTimestamp.fullDays * getters.getRateById.price +
          getters.convertTimestamp.remainMinuteFromDay * 7;
      } else {
        priceByRate =
          getters.convertTimestamp.minutesForFinalPrice *
          getters.getRateById.price;
      }
      return priceByRate;
    },
    finalPrice(state, getters) {
      return getters.getAddFuncValueForPrice + getters.getRateValueForPrice;
    },
  },
};
