<template>
  <section class="main-page">
    <div class="main-page__info">
      <span class="main-page__info-service">Каршеринг</span>
      <span class="main-page__info-slogan">Need for drive</span>
      <div class="main-page__info-slogan_long">
        <span>Поминутная аренда авто твоего города</span>
      </div>
      <div>
        <base-button theme="main-green"
          ><router-link to="/order/location"
            >Забронировать</router-link
          ></base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@elements/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "MainContent",
};
</script>

<style scoped lang="scss">
.main-page {
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    display: flex;
height: 100%;
justify-content: center;
align-items: center;
  }
}
.main-page__info {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.main-page__info-service,
.main-page__info-slogan {
  font-family: "Roboto", sans-serif;
  font-size: 70px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 45px;
  }
  @media (max-width: 430px) {
    font-size: 32px;
    margin: 0px 10px 0px 10px;
  }
}
.main-page__info-slogan {
  color: $main-accent;
}
.main-page__info-slogan_long {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 26px;
  color: $mainPage_gray;
  margin: 34px 0 44px;
  @media (max-width: 430px) {
    font-size: 18px;
    margin-top: 17px;
    margin-bottom: 22px;
    width: 70%;
    margin: 0px 10px 30px 10px;
  }
}
</style>
