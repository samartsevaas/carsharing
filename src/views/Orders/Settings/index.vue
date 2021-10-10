<template>
  <div class="layout">
    <div class="wrapper">
      <div class="page-full">
        <base-sidebar></base-sidebar>
        <div class="main-content">
          <div class="main-content__wrapper">
            <the-header></the-header>
          </div>
          <base-navigation></base-navigation>
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
import TheOrderSidebar from '@sections/TheOrderSidebar.vue';

export default {
  name: "OrderViews",
  components: {
    BaseSidebar,
    TheHeader,
    BaseNavigation,
    TheOrderSidebar
  },
  computed: {
    link() {
      return "/order";
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
