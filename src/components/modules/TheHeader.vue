<template>
  <header class="main-header">
    <div class="main-header__info">
      <div class="main-header__info-logo">
        <span>Need for drive</span>
      </div>
      <div class="main-header__info-city">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <span><a href="">Ульяновск</a></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.main-header {
  margin: 32px;
  @media (max-width: 430px) {
    margin: 0;
  }
}
.main-header__info {
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  @media (max-width: 430px) {
    display: block;
    flex: 1;
    margin: 10px 10px 0px 10px;
  }
}
.main-header__info-logo {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: $main-accent;
  align-self: end;
  @media (max-width: 430px) {
    display: flex;
    justify-content: end;
  }
}
.main-header__info-city {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: $gray-light;
  align-self: end;
  & a:hover {
    color: $main-accent;
  }
  & a:active {
    color: $main-accent;
  }
  & a {
    color: $gray-light;
    padding-left: 5px;
  }
  @media (max-width: 430px) {
    display: flex;
    justify-content: end;
  }
}
</style>
