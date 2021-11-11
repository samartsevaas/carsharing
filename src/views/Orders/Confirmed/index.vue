<template>
  <div class="order-result">
    <div class="order-result-info">
      <div class="confirmed-order">Ваш заказ подтверждён</div>
      <div class="order-result-info_model">{{ dataFromServer.carId.name }}</div>
      <div class="order-result-info_num">{{ dataFromServer.carId.number }}</div>
      <div class="order-result-info_oil" v-if="dataFromServer.isFullTank">
        <span>Топливо </span>
        <span>100 %</span>
      </div>
      <div class="order-result-info_oil" v-else>
        <span>Топливо</span>
        <span> {{ selectedModelfromUser.carId.tank }} %</span>
      </div>
      <div class="order-result-info_date">
        <span>Доступна с </span>
        <span>{{ dateForUserFromServer() }}</span>
      </div>
    </div>
    <div class="order-result-info_car">
      <picture>
        <img
          :src="dataFromServer.carId.thumbnail.path"
          class="order-result-info_car-img"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "OrderConfirmedViews",
  computed: {
    ...mapState({
      sendOrderData: (state) => state.order.sendOrderData,
    }),
    ...mapGetters({
      dataFromServer: "order/dataFromServer",
    }),
  },
  methods: {
    ...mapActions({
      getOrderDataFromServer: "order/getOrderDataFromServer",
    }),
    dateForUserFromServer() {
      let dateMillisec = dayjs(this.dateForUserFromServer.dateFrom);
      let dateForUser = dateMillisec.format("HH:mm DD.MM.YYYY");
      return dateForUser;
    },
  },
  async created() {
    const id = this.sendOrderData.id;
    await this.getOrderDataFromServer(id);
  },
};
</script>
<style lang="scss" scoped>
.order-result {
  display: flex;
  max-width: 70%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.confirmed-order {
  line-height: 28.13px;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 8px;
}
.order-result-info_model {
  font-size: 18px;
  line-height: 21px;
}
.order-result-info_num {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid $gray-dark;
  border-radius: 4px;
  padding: 4px 8px;
}
.order-result-info_oil {
  & :first-child {
    font-weight: 700;
  }
}
.order-result-info_date {
  margin-bottom: 0px;
  & :first-child {
    font-weight: 700;
  }
}
.order-result-info {
  & div {
    margin-bottom: 8px;
  }
}
.order-result-info_car {
  @media (max-width: 768px) {
  }
  & .order-result-info_car-img {
    width: 300px;
    height: 200px;
    object-fit: contain;
  }
}
</style>
