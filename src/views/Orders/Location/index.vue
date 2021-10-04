<template>
  <div>
    <div :link="link" class="order-check">
      <div class="order-check-title">
        <div class="order-check-title-city">Город</div>
        <div class="order-check-title-pick-point">Пункт выдачи</div>
      </div>
      <div class="order-check-city">
        <input
          class="order-check-city-handler"
          type="search"
          placeholder="Начните вводить город выдачи"
        />
        <input
          class="order-check-city-handler-pick"
          type="search"
          placeholder="Начните вводить адрес пункта выдачи"
        />
      </div>
      <div class="order-check_right"></div>
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
export default {
  name: "OrderLocationViews",
  components: {},
  computed: {
    link() {
      return "location";
    },
  },
};
</script>

<style lang="scss" scoped>
.order-check-city-handler-pick::placeholder,
.order-check-city-handler::placeholder {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.order-check {
  display: flex;
  @media (max-width: 700px) {
    display: block;
    margin-top: 20px;
  }
  & input {
    display: flex;
    width: 100%;
    max-width: 224px;
    border: none;
    border-bottom: 1px solid grey;
    text-overflow: ellipsis;
  }
}
.order-check-city-handler {
  padding: 31px 0px 2px 0px;
}
.order-check-city-handler-pick {
  padding: 15px 0px 2px 0px;
}
.order-check-title {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  width: 100%;
  margin-top: 16px;
  max-width: 99px;
  @media (max-width: 730px) {
    display: block;
  }
  &-city,
  &-pick-point {
    padding: 16px 8px 0px 0px;

    align-self: flex-end;

    @media (max-width: 730px) {
      margin-top: 3px;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
}
.order-check-city {
  width: 100%;
  @media (max-width: 730px) {
    display: block;
  }
  @media (max-width: 700px) {
    flex-direction: unset;
  }
}
.order-check_left {
  display: flex;
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
