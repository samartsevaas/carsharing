<template>
  <div class="base-slider-info">
    <span class="base-slider-info-service">123</span>
    <span class="base-slider-info-slogan">345</span>
    <div class="base-slider-info-slogan_long">
      <span>Поминутная аренда авто твоего города</span>
    </div>
    <div>
      <base-button :class="[main - green]">Подробнее</base-button>
    </div>
  </div>
</template>
<script>
import BaseButton from "@shared/BaseButton.vue";
import { MENU_ITEMS } from "@constants/common.js";

export default {
  name: "BaseSliderInfo",
  components: {
    BaseButton,
  },
  data() {
    return {
      services: {
        item: MENU_ITEMS,
      },
    };
  },
};
</script>

<style lang="scss">
.base-slider-info {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 1000px) {
    background-position-x: center;
  }
}
</style>
