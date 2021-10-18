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
  @media (max-width: 1024px) {
    margin: 9px 0 0 0;
  }
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
  font-weight: 700;
  font-size: 30px;
  color: $main-accent;
  align-self: flex-end;
  @media (max-width: 430px) {
    display: flex;
    justify-content: flex-end;
  }
}
.main-header__info-city {
  font-size: 14px;
  font-weight: 400;
  color: $main-gray;
  align-self: flex-end;
  & a:hover {
    color: $main-accent;
  }
  & a:active {
    color: $main-accent;
  }
  & a {
    color: $main-gray;
    padding-left: 5px;
  }
  & svg {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    margin-right: 4px;
  }
  @media (max-width: 430px) {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
