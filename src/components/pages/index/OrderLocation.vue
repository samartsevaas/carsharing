<template>
  <div>
    <div class="order-check">
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
        <img :src="require('@/assets/map.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderLocation",
};
</script>
<style lang="scss" scoped>
.order-check {
  display: flex;
  @media (max-width: 700px) {
    display: block;
    margin-top: 20px;
  }
  & input {
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    text-overflow: ellipsis;
    padding: 10px 10px 10px 0px;
  }
}
.order-check-title,
.order-check-city {
  display: flex;
  flex-direction: column;
}
.order-check-title {
  align-items: flex-end;
  font-weight: 300;
  @media (max-width: 730px) {
    display: block;
  }
  &-city,
  &-pick-point {
    padding: 10px 10px 0px 0px;
    margin-top: 11px;

    @media (max-width: 730px) {
      margin-top: 3px;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
}
.order-check-city {
  align-items: flex-start;
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
    margin: 40px 0px 20px 0px;
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
