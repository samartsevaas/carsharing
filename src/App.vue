<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions({
      getListOfCities: "location/getListOfCities",
    }),
  },
  async mounted() {
    await this.getListOfCities();
  },
};
</script>

<style lang="scss"></style>
