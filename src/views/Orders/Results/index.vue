<template>
  <div class="order-result">
    <div class="order-result-info">
      <!-- <div v-if="this.$route.name !== 'confirmed'"></div> -->
      <!-- <div class="confirmed-order" v-else>Ваш заказ подтверждён</div> -->
      <div class="order-result-info_model">
        {{ selectedModelfromUser.name }}
      </div>
      <div class="order-result-info_num">
        {{ selectedModelfromUser.number }}
      </div>
      <div class="order-result-info_oil" v-if="isFullTank">
        <span>Топливо </span>
        <span>100 %</span>
      </div>
      <div class="order-result-info_oil" v-else>
        <span>Топливо</span>
        <span> {{ selectedModelfromUser.tank }} %</span>
      </div>
      <div class="order-result-info_date">
        <span>Доступна с </span>
        <span>{{ dateForUserConfirmed }}</span>
      </div>
    </div>
    <div class="order-result-info_car">
      <picture>
        <img
          :src="selectedModelfromUser.thumbnail.path"
          class="order-result-info_car-img"
        />
      </picture>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "OrderResultViews",
  methods: {
    ...mapActions({
      sendOrderData: "order/sendOrderData",
    }),
    createRequestParams() {
      const {
        isFullTank,
        isNeedChildChair,
        isRightWheel,
        currentColor: color,
      } = this.getOrderData;
      const {
        dateFrom,
        dateTo,
        pointId,
        cityId,
        selectedModelfromUser: carId,
      } = this.dataForServer;
      const { finalPrice: price } = this.getFinalPriceForUser;

      return {
        color,
        isFullTank,
        isNeedChildChair,
        isRightWheel,
        carId,
        dateFrom,
        dateTo,
        price,
        pointId,
        cityId,
        orderStatusId: this.orderStatusId,
      };
    },
  },
  computed: {
    ...mapGetters({
      selectedModelfromUser: "cars/selectedModelfromUser",
      dateForUserConfirmed: "cars/dateForUserConfirmed",
      orderStatusId: "order/confirmedOrderStatus",
      getOrderData: "getOrderData",
      getFinalPriceForUser: "getFinalPriceForUser",
      dataForServer: "dataForServer",
    }),
    ...mapState({
      isFullTank: (state) => state.cars.isFullTank,
    }),
  },
  async created() {
    const request = this.createRequestParams();
    await this.sendOrderData(request);
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
