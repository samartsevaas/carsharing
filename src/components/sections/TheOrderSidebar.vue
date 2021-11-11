<template>
  <div class="order-info__results">
    <base-modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:title> Подтвердить заказ </template>
      <template v-slot:confirm>
        <base-button theme="main-green" @click="confirmedOrder"
          >Подтвердить</base-button
        >
      </template>
      <template v-slot:cancel>
        <base-button theme="red" @click="closeModal">Вернуться</base-button>
      </template>
    </base-modal>
    <div class="order-info__results-final-order">Ваш заказ:</div>
    <div
      class="order-info__results-pick-point"
      v-for="(item, key) in getOrderData"
      :key="key"
      v-show="item"
    >
      <div class="order-info__results-pick-point-item_1">
        {{ $options.textMap[key] }}
      </div>
      <div class="order-info__results-pick-point-item_2"></div>
      <div class="order-info__results-pick-point-item_3">
        <div>{{ typeof item === "boolean" ? "Да" : item }}</div>
      </div>
    </div>
    <div
      class="order-info__results-final-price"
      v-for="(itm, index) in getFinalPriceForUser"
      :key="index"
      v-show="itm"
    >
      <span>Цена: {{ itm }} ₽ </span>
    </div>
    <div class="order-info__results-final-offer">
      <base-button
        class="temporaryVisual fullWidth"
        v-on="getButtonConfig.events"
        :disabled="!getButtonConfig.disabled"
        :theme="getButtonConfig.class"
      >
        {{ getButtonConfig.text }}
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@elements/BaseButton.vue";
import BaseModal from "@elements/BaseModal.vue";
import { mapGetters, mapState, mapActions } from "vuex";
//eslint-disable-next-line no-unused-vars
const TEXT_MAP = {
  point: "Пункт выдачи",
  model: "Модель",
  currentColor: "Цвет",
  dateForUser: "Длительность аренды",
  isFullTank: "Полный бак",
  isNeedChildChair: "Детское кресло",
  isRightWheel: "Правый руль",
  name: "Тариф",
};

export default {
  textMap: TEXT_MAP,
  name: "TheOrderSidebar",
  components: {
    BaseButton,
    BaseModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapState({
      currentCity: (state) => state.location.currentCity,
      currentPoint: (state) => state.location.currentPoint,
      userChooseModel: (state) => state.cars.userChooseModel,
      currentColor: (state) => state.cars.currentColor,
      rateId: (state) => state.cars.rateId,
      dateFrom: (state) => state.cars.dateFrom,
      dateTo: (state) => state.cars.dateTo,
    }),
    ...mapGetters({
      getOrderData: "getOrderData",
      getFinalPriceForUser: "getFinalPriceForUser",
      confirmedOrderStatus: "order/confirmedOrderStatus",
    }),
    buttonConfig() {
      return {
        location: {
          text: "Выбрать модель",
          disabled: this.currentCity && this.currentPoint,
          events: {
            click: () => {
              this.$router.push("models");
            },
          },
          class: "main-green",
        },
        models: {
          text: "Дополнительно",
          disabled:
            this.currentCity && this.currentPoint && this.userChooseModel,
          events: {
            click: () => {
              this.$router.push("additionally");
            },
          },
          class: "main-green",
        },
        additionally: {
          text: "Итого",
          disabled:
            this.currentCity &&
            this.currentPoint &&
            this.userChooseModel &&
            this.currentColor &&
            this.dateFrom &&
            this.dateTo &&
            this.rateId,
          events: {
            click: () => {
              this.$router.push("result");
            },
          },
          class: "main-green",
        },
        result: {
          text: "Подтвердить заказ",
          disabled:
            this.currentCity &&
            this.currentPoint &&
            this.userChooseModel &&
            this.currentColor &&
            this.dateFrom &&
            this.dateTo &&
            this.rateId,
          events: {
            click: () => {
              this.showModal();
            },
          },
          class: "main-green",
        },

        confirm: {
          text: "Отменить",
          disabled: true,
          class: "red",
        },
      };
    },
    getButtonConfig() {
      const [, , getCurrentKey] = this.$route.path.split("/");
      return this.buttonConfig[getCurrentKey] || this.buttonConfig.confirm;
    },
  },
  methods: {
    showModal: function () {
      this.isModalVisible = true;
    },
    closeModal: function () {
      this.isModalVisible = false;
    },
    confirmedOrder: function () {
      this.closeModal();
      this.$router.push("confirmed");
    },
    ...mapActions({
      getOrderStatus: "order/getOrderStatus",
    }),
  },
  async mounted() {
    await this.getOrderStatus();
  },
};
</script>
<style lang="scss">
.order-info {
  display: flex;
  height: 100%;
  @media (max-width: 840px) {
    display: block;
  }
}
.order-info__option {
  flex: 0.7;
  margin-top: 32px;
  @media (max-width: 425px) {
    margin-left: 64px;
  }
}

.order-info__results {
  display: flex;
  flex-direction: column;
  padding: 32px 0px 0px 32px;
  border-left: 1px solid $gray-light;
  width: 100%;
  flex: 0.3;
  @media (max-width: 700px) {
    padding: 0;
    border: none;
  }
  &-final-order {
    align-self: flex-end;
    margin: 20px 0px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    @media (max-width: 425px) {
      font-size: 14px;
      & button {
        font-size: 14px;
      }
    }
  }
}

.order-info__results-pick-point {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  &-item_1 {
    display: flex;
    align-self: flex-end;
    font-weight: 300;
  }
  &-item_2 {
    border-bottom: 1px dashed $gray-dark;
    flex: 0.8;
    margin-bottom: 4px;
  }
  &-item_3 {
    display: flex;
    flex-direction: column;
    color: $main-gray;
    font-weight: 300;
    & div {
      align-self: flex-end;
    }
  }
}
.order-info__results-final-price {
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 400;
  & span {
    font-weight: 500;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
}
.order-info__results-final-offer {
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}
</style>
