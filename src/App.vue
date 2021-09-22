<template>
  <div id="layout">
    <div class="wrapper">
      <div class="page-leftSide">
        <the-header></the-header>
        <base-sidebar></base-sidebar>
        <main-page></main-page>
        <the-footer></the-footer>
      </div>
      <div class="page-rightSide">
        <slider> </slider>
      </div>
    </div>
  </div>
</template>

<script>
import TheFooter from "./components/modules/TheFooter.vue";
import TheHeader from "./components/modules/TheHeader.vue";
import MainPage from "./components/pages/index/MainPage.vue";
import BaseSidebar from "./components/modules/Sidebar.vue";
import Slider from "./components/shared/BaseSlider.vue";
export default {
  name: "App",
  components: {
    BaseSidebar,
    TheHeader,
    MainPage,
    TheFooter,
    Slider,
  },
  data() {
    return {
      list: [
        { backgroundColor: "#3f51b5", width: "100%", height: "100%" },
        { backgroundColor: "#eee", width: "100%", height: "100%" },
        { backgroundColor: "#f44336", width: "100%", height: "100%" },
        { backgroundColor: "#f44458", width: "100%", height: "100%" },
      ],
    };
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
  },
};
</script>
,
<style scoped scss="lang"></style>
