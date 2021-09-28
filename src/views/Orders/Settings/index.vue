<template>
    <Order></Order>
</template>

<script>
import Order from '../../../components/pages/index/Order.vue'
export default{
    name: "OrderViews",
    components: {
        Order
    },
    computed: {
      link () {
          return "/order";
      }
  }
}
</script>
