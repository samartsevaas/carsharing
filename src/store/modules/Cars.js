export default {
  state: {
    cars: [],
    categories: [],
    carsByCategory:[],
    currentCategory:'',
    userChooseModel:''
  },
  mutations: {
    getListOfCars(state, cars) {
      state.cars = cars;
    },
    getListOfCategories(state, categories) {
      state.categories = categories;
    },
    getcarsByCategory(state, carsByCategory){
      state.carsByCategory = carsByCategory
    },
    setCurrentCategory(state,currentCategory){
      state.currentCategory = currentCategory
    },
    setUserChooseModel(state,userChooseModel){
      state.userChooseModel = userChooseModel
    }
  },
  actions: {
      async getListOfCars({commit}){
          const data = await this.$services.cars.getListOfCars();
          commit('getListOfCars', data)
      },
      async getListOfCategories({commit}){
        const data = await this.$services.categories.getListOfCategories();
        commit('getListOfCategories', data)
    },
    async getcarsByCategory({commit}, currentCategory){
      const data = await this.$services.currentCategory.getcarsByCategory(currentCategory);
      commit('getListOfCars', data)
  },
  },
  getters: {
    allCars(state) {
      let carsImg = [];
        state.cars.forEach(car => {
          if (car.thumbnail.path.includes('base64')){
            carsImg.push(car)
          }
        });
        return carsImg
      },
  },
};
