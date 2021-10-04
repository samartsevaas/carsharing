<template>
  <div :link="link" class="layout">
    <div class="wrapper">
      <div class="page-left-side">
        <base-sidebar></base-sidebar>
        <div class="main-content main-content__wrapper">
          <the-header></the-header>
          <main-content></main-content>
          <the-footer></the-footer>
        </div>
      </div>
      <div class="page-right-side">
        <Slider id="slider" :autoplay="false">
          <SliderItem v-for="(slide, index) in list" :key="index">
            <div class="base-slider__info main-content__wrapper">
              <span class="base-slider__info-service">{{ slide.service }}</span>
              <span class="base-slider__info-slogan">{{ slide.slogan }}</span>
              <div>
                <base-button
                  :theme="slide.btnColor"
                  class="base-slider__info_button"
                  >Подробнее</base-button
                >
              </div>
            </div>
            <picture class="slider-img">
              <source :srcset="slide.srcAvif" type="image/avif" />
              <img :src="slide.src" />
            </picture>
          </SliderItem>
        </Slider>
      </div>
    </div>
  </div>
</template>
<script>
import TheFooter from "@sections/TheFooter.vue";
import TheHeader from "@sections/TheHeader.vue";
import MainContent from "@pages/main/MainContent.vue";
import BaseSidebar from "@sections/TheSidebar.vue";
import BaseButton from "@elements/BaseButton.vue";
import { MENU_ITEMS } from "@/constants/common.js";

export default {
  name: "MainViews",
  components: {
    BaseSidebar,
    TheHeader,
    MainContent,
    TheFooter,
    BaseButton
  },
  data() {
    return {
      list: MENU_ITEMS,
    };
  },
  computed: {
    link() {
      return "/main";
    },
  },
};
</script>
<style lang="scss">
#slider {
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
  justify-content: center;
  @media (max-width: 1000px) {
    background-position-x: center;
  }
  @media (max-width: 1024px) {
    top: 0px;
    padding: 78px;
  }
  &-service {
    font-weight: 500;
    font-size: 40px;
    color: $whiteTextColor;
  }
  &-slogan {
    color: $gray-light;
    font-weight: 300;
    font-size: 24px;
    margin-top: 20px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  &_button {
    margin-top: 30px;
  }
}
.slider-btn {
  width: 70px;
  &:hover {
    background: rgba(8, 110, 55, 0.32) !important;
    .slider-icon {
      border-left-color: $gray-light !important;
      border-bottom-color: $gray-light !important;
    }
  }
}
.slider-img {
  height: 100%;
}
.slider-indicator-icon {
  background-color: $gray-light !important;
}
.slider-indicator-active {
  background-color: $main-accent !important;
}
</style>
