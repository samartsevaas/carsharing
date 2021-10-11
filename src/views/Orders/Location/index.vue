<template>
  <div :link="link" class="order-location">
    <div class="order-location__search">
      <div class="order-location-text">
        <div class="order-location-city">Город</div>
        <div class="order-location-pick">Пункт Выдачи</div>
      </div>
      <div class="order-location__input">
        <base-search-input placeholder="Ввеедите город"></base-search-input>
        <base-search-input
          placeholder="Введите пункт выдачи"
        ></base-search-input>
      </div>
    </div>
    <div class="order-info__option-map">
      <div class="order-info__option-map-choose">Выбрать на карте:</div>
      <div class="order-info__option-img">
        <img :src="require('@/assets/images/map.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSearchInput from "@elements/BaseSearchInput.vue";
export default {
  name: "OrderLocationViews",
  components: { BaseSearchInput },
  computed: {
    link() {
      return "location";
    },
  },
};
</script>

<style lang="scss" scoped>
.order-location {
  display: flex;
  flex-direction: column;
}
.order-location__search {
  max-width: 40%;
  display: flex;
  margin-top: 32px;
  @media (max-width: 1024px) {
    max-width: 60%;
  }
  @media (max-width: 768px) {
    max-width: 88%;
  }
}
.order-location-text {
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
}
.order-location-city {
  display: flex;
  justify-content: end;
  margin-top: 13px;
  flex: 1;
}
.order-location-pick {
  display: flex;
  margin-top: 13px;
  flex: 1;
}
.order-location__input {
  flex: 1;
}
.order-info__option-map {
  &-choose {
    margin: 48px 0px 16px 0px;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    display: none;
  }
}
.order-info__option-img {
  overflow: hidden;
  display: table;
  width: 75%;
  & img {
    max-width: 100%;
    height: auto;
  }
}
</style>
