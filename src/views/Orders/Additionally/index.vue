<template>
  <div class="order-additionally">
    <div class="order-additionally__section">
      <div class="order-additionally__section-title">Цвет</div>
      <div class="order-additionally__section-radio">
        <base-radio-button
          v-for="(color, idx) in selectedModelColorfromUser"
          :key="idx"
          :value="color"
          name="color"
          v-model="currentColor"
          @input="updateCurrentColor"
        >
          <slot>{{ color }}</slot>
        </base-radio-button>
      </div>
    </div>
    <div class="order-additionally__section">
      <div class="order-additionally__section-title_margin-top">
        Датa аренды
      </div>
      <div class="order-additionally__section-search">
        <div class="order-additionally__section-text">
          <div class="order-additionally__section-date_from">C</div>
          <div class="order-additionally__section-date_to">По</div>
        </div>
        <div class="order-additionally__section-input">
          <date-picker
            v-model="dateFrom"
            type="datetime"
            format="DD.M.YYYY, HH:mm"
            placeholder="Введите дату и время"
            value-type="timestamp"
            :minute-step="30"
            @input="updateCurrentDateFrom"
          ></date-picker>
          <date-picker
            v-model="dateTo"
            type="datetime"
            format="DD.M.YYYY, HH:mm"
            placeholder="Введите дату и время"
            value-type="timestamp"
            :minute-step="30"
            @input="updateCurrentDateTo"
          ></date-picker>
        </div>
      </div>
    </div>
    <div class="order-additionally__section">
      <div class="order-additionally__section-title_margin-top">Тариф</div>
      <div
        class="
          order-additionally__section-radio
          order-additionally__section-radio_column
        "
      >
        <base-radio-button
          v-for="rate in getRateForUser"
          name="rate"
          :key="rate.id"
          :value="rate.id"
          @input="setRateId(currentRate)"
          v-model="currentRate"
        >
          {{ rate.rateTypeId.name }}, {{ rate.price }}₽ /
          {{ rate.rateTypeId.unit }}</base-radio-button
        >
      </div>
    </div>
    <div class="order-additionally__section">
      <div class="order-additionally__section-title_margin-top">Доп услуги</div>
      <div class="order-additionally__section-check">
        <base-check-button
          v-model="currentFullTank"
          @input="updateCurrentFullTank"
          >Полный бак/{{ $options.addFunction.fullTank }}₽</base-check-button
        >
        <base-check-button
          v-model="currentChildSeat"
          @input="updateCurrentChildSeat"
          >Детское кресло/{{
            $options.addFunction.childSeat
          }}₽</base-check-button
        >
        <base-check-button
          v-model="currentHandDrive"
          @input="updateCurrentHandDrive"
          >Правый руль/{{ $options.addFunction.rightDrive }}₽</base-check-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseRadioButton from "@elements/BaseRadioButton.vue";
import BaseCheckButton from "@elements/BaseCheckButton.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
const ADDITIONAL_FUNCTION = {
  fullTank: 300,
  childSeat: 300,
  rightDrive: 300,
};
export default {
  addFunction: ADDITIONAL_FUNCTION,
  name: "OrderAdditionallyViews",
  components: {
    BaseRadioButton,
    BaseCheckButton,
    DatePicker,
  },
  data() {
    return {
      currentColor: "",
      dateFrom: null,
      dateTo: null,
      currentFullTank: "",
      currentChildSeat: "",
      currentHandDrive: "",
      currentRate: "",
    };
  },
  computed: {
    ...mapGetters({
      selectedModelColorfromUser: "cars/selectedModelColorfromUser",
      selectedModelfromUser: "cars/selectedModelfromUser",
      getRateForUser: "cars/getRateForUser",
      getRateById: "cars/getRateById",
    }),
    ...mapState({
      userChooseModel: (state) => state.cars.userChooseModel,
    }),
  },
  methods: {
    ...mapMutations({
      setCurrentDateFrom: "cars/setCurrentDateFrom",
      setCurrentDateTo: "cars/setCurrentDateTo",
      setCurrentColor: "cars/setCurrentColor",
      setRateId: "cars/setRateId",
      setCurrentFullTank: "cars/setCurrentFullTank",
      setCurrentChildSeat: "cars/setCurrentChildSeat",
      setCurrentHandDrive: "cars/setCurrentHandDrive",
    }),
    ...mapActions({
      getRate: "cars/getRate",
    }),
    updateCurrentDateFrom() {
      this.setCurrentDateFrom(this.dateFrom);
    },
    updateCurrentDateTo() {
      this.setCurrentDateTo(this.dateTo);
    },
    updateCurrentColor() {
      this.setCurrentColor(this.currentColor);
    },
    updateCurrentAddFuncPrice() {
      this.setCurrentAddFuncPrice(this.currentFullTank);
    },
    updateCurrentFullTank() {
      this.setCurrentFullTank(this.currentFullTank);
    },
    updateCurrentChildSeat() {
      this.setCurrentChildSeat(this.currentChildSeat);
    },
    updateCurrentHandDrive() {
      this.setCurrentHandDrive(this.currentHandDrive);
    },
  },
  async mounted() {
    await this.getRate();
  },
};
</script>

<style lang="scss" scoped>
.order-additionally {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  max-width: 32.7%;
  @media (max-width: 768px) {
    max-width: 88%;
  }
}
.order-additionally__section-title {
  margin-bottom: 16px;
}
.order-additionally__section-title_margin-top {
  margin: 32px 0px 8px 0px;
}
.order-additionally__section-radio {
  display: flex;
}
.order-additionally__section-radio_column {
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
}
.order-additionally__section-search {
  display: flex;
}
.order-additionally__section-text {
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  justify-content: space-evenly;
}
.order-additionally__section-date_from {
  display: flex;
  justify-content: end;
  margin-top: 8px;
}
.order-additionally__section-date_to {
  display: flex;
  margin-top: 8px;
}
.order-additionally__section-input {
  width: 100%;
}
.order-additionally__section-check {
  @media (max-width: 768px) {
    display: flex;
  }
}
</style>
