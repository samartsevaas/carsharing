export default {
  state: {
    orderStatus: [],
    sendOrderData: {},
    getOrderDataFromServer: {},
  },
  mutations: {
    getOrderStatus(state, orderStatus) {
      state.orderStatus = orderStatus;
    },
    sendOrderData(state, sendOrderData) {
      state.sendOrderData = sendOrderData;
    },
    getOrderDataFromServer(state, getOrderDataFromServer) {
      state.getOrderDataFromServer = getOrderDataFromServer;
    },
  },
  actions: {
    //eslint-disable-next-line no-unused-vars
    async getOrderStatus({ commit }) {
      const data = await this.$services.order.getOrderStatus();
      commit("getOrderStatus", data);
    },
    async sendOrderData({ commit }, params) {
      const data = await this.$services.order.sendOrderData(params);
      commit("sendOrderData", data);
    },
    async getOrderDataFromServer({ commit }, orderId) {
      const data = await this.$services.order.getOrderDataFromServer(orderId);
      commit("getOrderDataFromServer", data);
    },
  },
  getters: {
    confirmedOrderStatus(state) {
      return (
        state.orderStatus.find(
          (status) => status.id === "5e26a1f0099b810b946c5d8b"
        ) ?? {}
      );
    },
    dataFromServer(state) {
      return state.getOrderDataFromServer;
    },
  },
};
