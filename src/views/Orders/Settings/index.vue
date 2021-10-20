<template>
  <div class="layout">
    <div class="wrapper">
      <div class="page-full">
        <base-sidebar></base-sidebar>
        <div class="main-content">
          <div class="main-content__wrapper">
            <the-header></the-header>
          </div>
          <nav class="order-panel">
            <base-navigation
              v-if="this.$route.name !== 'confirmed'"
            ></base-navigation>
            <div v-else>
              <div class="confirmed-order__wrapper">Заказ номер RU58491823</div>
              <div></div>
            </div>
          </nav>
          <div class="main-content__wrapper_nonPaddingBot">
            <div class="order-info">
              <div class="order-info__option">
                <router-view></router-view>
              </div>
              <the-order-sidebar></the-order-sidebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@sections/TheHeader.vue";
import BaseSidebar from "@sections/TheSidebar.vue";
import BaseNavigation from "@elements/BaseNavigation.vue";
import TheOrderSidebar from "@sections/TheOrderSidebar.vue";

export default {
  name: "OrderViews",
  components: {
    BaseSidebar,
    TheHeader,
    BaseNavigation,
    TheOrderSidebar,
  },
  computed: {
    link() {
      return "/order";
    },
  },
};
</script>
<style lang="scss" scoped>
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
      color: $main-gray;
    }
  }
}
.confirmed-order__wrapper {
  padding: 8px 377px;
  width: 100%;
  line-height: 16.41px;
  font-weight: 700;
  @media (max-width: 1900px) {
    padding: 8px 64px;
  }
  @media (max-width: 430px) {
    padding: 0;
  }
}
</style>
