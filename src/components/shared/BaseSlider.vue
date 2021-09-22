<template>
  <section class="main-page__base-slider"></section>
</template>
<script>
export default {
  name: "BaseSlider",
};
</script>

<style lang="scss">
.main-page__base-slider {
  background-image: url("~@/assets/jp-valery-1052513-unsplash.png");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1000px) {
    background-position-x: center;
  }
}
</style>
