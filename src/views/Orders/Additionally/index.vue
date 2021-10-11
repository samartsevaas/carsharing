<template>
  <div class="order-additionally">
    <div class="order-additionally__section">
      <div class="order-additionally__section-title">Цвет</div>
      <div class="order-additionally__section-radio">
        <base-radio-button>Любой</base-radio-button>
        <base-radio-button>Красный</base-radio-button>
        <base-radio-button>Голубой</base-radio-button>
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
          <base-search-input
            placeholder="Введите дату и время"
          ></base-search-input>
          <base-search-input
            placeholder="Введите дату и время"
          ></base-search-input>
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
        <base-radio-button>Поминутно, 7₽/мин</base-radio-button>
        <base-radio-button>На сутки, 1999 ₽/сутки</base-radio-button>
      </div>
    </div>
    <div class="order-additionally__section">
      <div class="order-additionally__section-title_margin-top">Доп услуги</div>
      <div class="order-additionally__section-check">
        <base-check-button>Полный бак, 500р</base-check-button>
        <base-check-button>Детское кресло, 200р</base-check-button>
        <base-check-button>Правый руль, 1600р</base-check-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRadioButton from "@elements/BaseRadioButton.vue";
import BaseSearchInput from "@elements/BaseSearchInput.vue";
import BaseCheckButton from "@elements/BaseCheckButton.vue";

export default {
  name: "OrderAdditionallyViews",
  components: {
    BaseRadioButton,
    BaseSearchInput,
    BaseCheckButton,
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
