<template>
  <div id="layout">
    <div class="wrapper">
      <div class="page-left-side">
        <the-header></the-header>
        <base-sidebar></base-sidebar>
        <main-page></main-page>
        <the-footer></the-footer>
      </div>
      <div class="page-right-side">
        <Slider id="slider"
      :autoplay="false">
          <SliderItem
        v-for="(slide, index) in list"
        :key="index"
      >
      <div class="base-slider__info">
      <span class="base-slider__info-service">{{ slide.service }}</span>
      <span class="base-slider__info-slogan">{{ slide.slogan }}</span>
      <div>
        <base-button :theme="slide.btnColor" class="base-slider__info_button">Подробнее</base-button>
      </div>
    </div>
        <img :src= "slide.src"/>
      </SliderItem>
        </Slider>
      </div>
    </div>
  </div>
</template>

<script>
import TheFooter from "@modules/TheFooter.vue";
import TheHeader from "@modules/TheHeader.vue";
import MainPage from "@pages/index/MainPage.vue";
import BaseSidebar from "@modules/Sidebar.vue";
import BaseButton from "@shared/BaseButton.vue";

export default {
  name: "App",
  components: {
    BaseSidebar,
    TheHeader,
    MainPage,
    TheFooter,
    BaseButton
  },
  data() {
    return {
      list: [
        { src: require("@/assets/slide1.png"), 
          slogan: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
          service: "Парковка",
          btnColor: "dark-green"},
        { src: require("@/assets/slide2.png"),
          slogan: "Полная страховка страховка автомобиля",
          service: "Страховка",
          btnColor: "blue"},
        { src: require("@/assets/slide3.png"),
          slogan: "Полный бак на любой заправке города за наш счёт",
          service: "Бензин",
          btnColor: "red"},
        { src: require("@/assets/slide4.png"),
          slogan: "Автомобиль проходит еженедельное ТО",
          service: "Обслуживание",
          btnColor: "violet"},
      ],
    };
  },
};
</script>
,
<style lang="scss">
#slider{
  width: 100vh !important;
  height: 100vh !important;
  @media (max-width: 1024px) {
   width: 100% !important;
  }
}
.base-slider__info {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  top: 30px;
  padding: 110px;
  @media (max-width: 1000px) {
    background-position-x: center;
  }
  @media (max-width: 1024px) {
    top: 0px;
  padding: 78px;
  }
  &-service{
    font-weight: 500;
    font-size: 40px;
    color: $whiteTextColor;
  }
  &-slogan{
    color: $gray-light;
    font-weight: 300;
    font-size: 24px;
    margin-top: 20px;
    @media (max-width: 1024px) {
      font-size: 20px;
  }
  }
  &_button{
    margin-top: 30px;
  }
}
.slider-btn{
  width: 70px;
  &:hover {
    background: rgba(8, 110, 55, 0.32) !important;
   .slider-icon {
    border-left-color: $gray-light !important;
    border-bottom-color: $gray-light !important;
  }
  }
}

</style>