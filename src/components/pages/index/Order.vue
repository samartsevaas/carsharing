<template>
  <div class="layout">
    <div class="wrapper">
      <div class="page-full">
        <base-sidebar></base-sidebar>

        <div class="main-content">
          <div class="main-content__wrapper">
            <the-header></the-header>
          </div>
          <nav class="order-panel">
            <div
              class="order-panel__content main-content__wrapper_nonPaddingBot"
            >
              <div class="order-panel__content-item">
                <router-link to="/order/location">Местоположение</router-link>
              </div>
              <div class="order-panel__content-item"><a href="">Модель</a></div>
              <div class="order-panel__content-item">
                <a href="">Дополнительно</a>
              </div>
              <div class="order-panel__content-item"><a href="">Итого</a></div>
            </div>
          </nav>
          <div class="main-content__wrapper_nonPaddingBot">
            <div class="order-info">
              <div class="order-info__option">
                <router-view></router-view>
              </div>
              <div class="order-info__results">
                <div class="order-info__results-final-order">Ваш заказ:</div>
                <div class="order-info__results-pick-point">
                  <div class="order-info__results-pick-point-item_1">
                    Пункт выдачи
                  </div>
                  <div class="order-info__results-pick-point-item_2"></div>
                  <div class="order-info__results-pick-point-item_3">
                    <div>Ульяновск</div>
                    <div>Нариманова</div>
                  </div>
                </div>
                <div class="order-info__results-final-price">
                  <span>Цена:</span> от 8 000 до 12 000 ₽
                </div>
                <div class="order-info__results-final-offer">
                  <base-button class="temporaryVisual"
                    >Выбрать модель</base-button
                  >
                </div>
              </div>
            </div>
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
    BaseButton,
  },
};
</script>

<style lang="scss">
.order-info__results__wrapper {
  border-left: 1px solid $gray-light;
}
.order-panel {
  border-top: 1px solid $gray-light;
  border-bottom: 1px solid $gray-light;
  &__content {
    display: flex;
    &-item {
      position: relative;
    }
  }
}
.order-panel__content-item:not(:first-child) {
  padding: 15px;
}
.order-panel__content-item:first-child {
  padding: 15px 15px 15px 0px;
}

.order-panel__content-item::after {
  content: "";
  position: absolute;
  border-top: 5px solid transparent;
  border-left: 10px solid $gray-dark;
  border-bottom: 5px solid transparent;
  top: 20px;
  right: -5px;
}
.order-panel__content div:last-child::after {
  content: none;
}
.order-info {
  display: flex;
  height: 100%;
  @media (max-width: 700px) {
    display: block;
  }
}
.order-info__option {
  flex: 0.7;
}

.order-info__results {
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px 30px;
  border-left: 1px solid $gray-light;
  width: 100%;
  flex: 0.3;
  @media (max-width: 700px) {
    padding: 0;
    border: none;
  }
  &-final-order {
    align-self: flex-end;
    margin: 20px 0px;
    font-weight: 500;
    font-size: 18px;
    @media (max-width: 425px) {
      font-size: 14px;
      & button {
        font-size: 14px;
      }
    }
  }
}

.order-info__results-pick-point {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  &-item_1 {
    display: flex;
    align-self: flex-end;
    font-weight: 300;
  }
  &-item_2 {
    border-bottom: 1px dashed $gray-dark;
    flex: 0.8;
    margin-bottom: 4px;
  }
  &-item_3 {
    display: flex;
    flex-direction: column;
    color: $gray-light;
    font-weight: 300;
    & div {
      align-self: flex-end;
    }
  }
}
.order-info__results-final-price {
  margin: 20px 0px;
  font-size: 16px;
  font-weight: 400;
  & span {
    font-weight: 500;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
}
.order-info__results-final-offer {
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}
.temporaryVisual {
  background: $gray-light !important;
}
</style>
