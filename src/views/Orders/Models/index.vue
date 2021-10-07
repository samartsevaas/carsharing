<template>
  <div>
    <nav class="order-models__navigation">
      <base-radio-button>Все модели</base-radio-button>
      <base-radio-button>Эконом</base-radio-button>
      <base-radio-button>Премиум</base-radio-button>
    </nav>
    <div class="order-models__wrapper">
      <div class="order-models__item-wrapper">
        <div
          class="order-models__item"
          v-for="(car, index) in lists"
          :key="index"
        >
          <div class="order-models__item-info">
            <div class="order-models__item-info-model">
              {{ car.model }}
            </div>
            <div class="order-models__item-info-price">
              {{ car.price }}
            </div>
          </div>
          <div class="order-models__item-img">
            <picture class="slider-img">
              <source :srcset="car.srcAvif" type="image/avif" />
              <img :src="car.src" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MODEL_CARS } from "@/constants/common.js";
import BaseRadioButton from "@elements/BaseRadioButton.vue";
export default {
  components: { BaseRadioButton },
  name: "OrderModelsViews",
  data() {
    return {
      lists: MODEL_CARS,
    };
  },
};
</script>
<style lang="scss" scoped>
.order-models__navigation {
  display: flex;
  margin: 32px 0px 48px 0px;
}

.order-models__wrapper {
  display: flex;
  width: 100%;
}
.order-models__item-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 75%;
}

.order-models__item {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0 0 0 $gray-light, 0 1px 0 0 $gray-light,
    1px 1px 0 0 $gray-light, 1px 0 0 0 $gray-light inset,
    0 1px 0 0 $gray-light inset;
  padding: 16px 16px 17px 16px;
  &:hover,
  &:active {
    position: relative;
    box-shadow: 1px 0 0 0 $main-accent, 0 1px 0 0 $main-accent,
      1px 1px 0 0 $main-accent, 1px 0 0 0 $main-accent inset,
      0 1px 0 0 $main-accent inset;
  }
}
.order-models__item-info {
  &-model {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0em;
  }
  &-price {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
    color: $gray-dark;
  }
}
.order-models__item-img {
  display: flex;
  justify-content: center;
}
.radio-styled {
  display: block;
}
</style>
