<template>
  <div class="order-panel__content main-content__wrapper_nonPaddingBot">
    <div class="order-panel__content-item">
      <router-link to="/order/location">Местоположение</router-link>
    </div>
    <div class="order-panel__content-item">
      <router-link to="/order/models">Модель</router-link>
    </div>
    <div class="order-panel__content-item">
      <router-link to="/order/additionally">Дополнительно</router-link>
    </div>
    <div class="order-panel__content-item">
      <router-link to="/order/result">Итого</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNavigation",
  computed: {
    link() {
      return "/order";
    },
  },
};
</script>

<style lang="scss">
.order-panel {
  border-top: 1px solid $gray-light;
  border-bottom: 1px solid $gray-light;
  @media (max-width: 425px) {
    padding: 0px 10px;
    border: none;
  }
  &__content {
    display: flex;
    &-item {
      position: relative;
      font-weight: 700;
      color: $mainPage_gray;
    }
  }
}
.order-info__results__wrapper {
  border-left: 1px solid $gray-light;
}

.order-panel__content-item:not(:first-child) {
  padding: 8px 16px;
}
.order-panel__content-item:first-child {
  padding: 8px 16px 8px 0px;
}

.order-panel__content-item::after {
  content: "";
  position: absolute;
  border-top: 4px solid transparent;
  border-left: 5px solid $gray-dark;
  border-bottom: 4px solid transparent;
  bottom: 11px;
  right: 0;
}
.order-panel__content div:last-child::after {
  content: none;
}

.order-panel__content-item .router-link-exact-active {
  color: $main-accent !important;
}
</style>
