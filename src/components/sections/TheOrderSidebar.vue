<template>
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
                  <base-button
                    class="temporaryVisual fullWidth"
                    href="/order/models"
                  >
                    Выбрать модель
                  </base-button>
                </div>
              </div>
</template>

<script>
import BaseButton from "@elements/BaseButton.vue";

export default {
  name: "TheOrderSidebar",
  components: {
    BaseButton
  }
};
</script>
<style lang="scss">

.order-info {
  display: flex;
  height: 100%;
  @media (max-width: 700px) {
    display: block;
  }
}
.order-info__option {
  flex: 0.7;
  margin-top: 32px;
  @media (max-width: 425px) {
    margin-left: 64px;
  }
}

.order-info__results {
  display: flex;
  flex-direction: column;
  padding: 32px 0px 0px 32px;
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
    line-height: 21.09px;
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
</style>
