<template>
  <div class="order-result">
    <div class="order-result-info">
      <div v-if="this.$route.name !== 'confirmed'"></div>
      <div class="confirmed-order" v-else>Ваш заказ подтверждён</div>
      <div class="order-result-info_model">Hyndai, i30N</div>
      <div class="order-result-info_num">К 761 НА 73</div>
      <div class="order-result-info_oil">
        <span>Топливо </span>
        <span>100%</span>
      </div>
      <div class="order-result-info_date">
        <span>Доступна с </span>
        <span>12.06.2019 12:00</span>
      </div>
    </div>
    <div class="order-result-info_car">
      <picture>
        <source srcset="@/assets/images/car3.avif" type="image/avif" />
        <img src="@/assets/images/car3.jpg" />
      </picture>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderResultViews",
};
</script>
<style lang="scss" scoped>
.order-result {
  display: flex;
  max-width: 70%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.confirmed-order {
  line-height: 28.13px;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 8px;
}
.order-result-info_model {
  font-size: 18px;
  line-height: 21px;
}
.order-result-info_num {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid $gray-dark;
  border-radius: 4px;
  padding: 4px 8px;
}
.order-result-info_oil {
  & :first-child {
    font-weight: 700;
  }
}
.order-result-info_date {
  margin-bottom: 0px;
  & :first-child {
    font-weight: 700;
  }
}
.order-result-info {
  & div {
    margin-bottom: 8px;
  }
}
.order-result-info_car {
  @media (max-width: 768px) {
  }
}
</style>
