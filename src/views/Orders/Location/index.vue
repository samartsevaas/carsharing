<template>
  <order-location :link="link"></order-location>
</template>

<script>
import OrderLocation from "@pages/index/OrderLocation.vue";
export default {
  name: "OrderLocationViews",
  components: {
    OrderLocation,
  },
  computed: {
    link() {
      return "location";
    },
  },
};
</script>
