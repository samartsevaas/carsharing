export default {
  state: {
    orderStatus: [],
    sendOrderData: {},
  },
  mutations: {
    getOrderStatus(state, orderStatus) {
      state.orderStatus = orderStatus;
    },
    sendOrderData(state, sendOrderData) {
      state.sendOrderData = sendOrderData;
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
  },
  getters: {
    confirmedOrderStatus(state) {
      return (
        state.orderStatus.find(
          (status) => status.id === "5e26a1f0099b810b946c5d8b"
        ) ?? {}
      );
    },
  },
};
