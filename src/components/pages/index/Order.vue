<template>
  <div class="layout">
    <div class="wrapper-order">
        <the-header></the-header>
        <base-sidebar></base-sidebar>
    </div>
    <nav class="order-panel">
        <div class="order-panel__content">
        <div class="order-panel__content-item"><a href="">Местоположение</a></div>
        <div class="order-panel__content-item"><a href="">Модель</a></div>
        <div class="order-panel__content-item"><a href="">Дополнительно</a></div>
        <div class="order-panel__content-item"><a href="">Итого</a></div>
        </div>
    </nav>
    <div class="order-info wrapper-order">
    <div class="order-info__option">
      <router-view></router-view>
    </div>
    <div class="order-info__results__wrapper">
      <div class="order-info__results">
        <div class="order-info__results-final-order">Ваш заказ:</div>
        <div class="order-info__results-pick-point">
          <div class="order-info__results-pick-point-item_1">Пункт выдачи</div>
          <div class="order-info__results-pick-point-item_2"></div>
          <div class="order-info__results-pick-point-item_3">Ульяновск, Нариманова</div>
        </div>
        <div class="order-info__results-final-price">Цена: от 8 000 до 12 000 ₽</div>
        <div class="order-info__results-final-offer">
          <base-button>Выбрать модель</base-button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import TheHeader from "@modules/TheHeader.vue";
import BaseSidebar from "@modules/Sidebar.vue";
import BaseButton from "@shared/BaseButton.vue";


export default {
  name: "Main",
  components: {
    BaseSidebar,
    TheHeader,
    BaseButton
  }
};
</script>

<style lang="scss">
.wrapper-order {
    margin: 20px 25px 20px 80px;
}
.order-panel {
    border-top: 1px solid $gray-light;
    border-bottom: 1px solid $gray-light;
    &__content{
        margin: 20px 25px 20px 98px;
        display: flex;
        &-item{
            padding: 0px 15px;
            position: relative;
        }
    }
}

.order-panel__content-item::after{
    content: "";
    position:absolute;
}

.order-panel__content-item::after{
border-top: 5px solid transparent;
border-left: 10px solid $gray-dark;
border-bottom: 5px solid transparent;
bottom: 3px;
right: -5px;
}
.order-panel__content div:last-child::after{
    content: none;
}
.order-info{
  display: flex;
}
.order-info__option{
  flex: 0.7;
}
.order-info__results__wrapper{
  flex: 0.3;
}
.order-info__results{
  display: flex;
  flex-direction: column;
}
.order-info__results-final-order{
  align-self: flex-end;
}
.order-info__results-pick-point{
  display: flex;
  justify-content: space-between;
  &-item_1{
    display: flex;
  }
  &-item_2{
    border-bottom: 1px dashed $gray-dark;
    flex: 0.8;
  }
}
.order-info__results-final-offer{
  display: flex;
    justify-content: center;
}
</style>

