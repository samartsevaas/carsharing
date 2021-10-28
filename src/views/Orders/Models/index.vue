<template>
  <div>
    <nav class="order-models__navigation"> 
      <base-radio-button v-model="currentCategory" v-for="(c, idx) in categories" :key="idx" 
       :value='c.id'
       @input="updateCurrentCategory">
      <slot>{{c.name}}</slot>
      </base-radio-button>
    </nav>
    <div class="order-models__wrapper">
      <div class="order-models__item-wrapper">
        <div
          class="order-models__item"
          v-for="(car, index) in allCars"
          :key="index"
          :class="{ 'order-models__item_active': userChooseModel === car.name }"
        >
        
          <div class="order-models__item-info">
            <div class="order-models__item-info-model">
            <label for="order-models__item-info-model-input">
              {{ car.name }}
              <input class="order-models__item-info-model-input" type="radio" v-model="userChooseModel" 
              :value="car.name" 
              @change="updateUserChooseModel">
             </label>
            </div>
            <div class="order-models__item-info-price">
              {{ car.priceMax }}
            </div>
            <div class="order-models__item-info-price">
              {{ car.priceMin }}
            </div>
          </div>
          <div class="order-models__item-img">
            <picture class="slider-img">
              <img :src="car.thumbnail.path" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BaseRadioButton from "@elements/BaseRadioButton.vue";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  components: { BaseRadioButton },
  name: "OrderModelsViews",
  data() {
    return {
      currentCategory: '',
      userChooseModel: '',
      isChecked: false
    };
  },
  methods: {
    ...mapActions({
      getListOfCars: 'cars/getListOfCars',
      getListOfCategories: 'cars/getListOfCategories',
      getcarsByCategory: 'cars/getcarsByCategory'
    }),
    ...mapMutations({
      setCurrentCategory: 'cars/setCurrentCategory',
      setUserChooseModel: 'cars/setUserChooseModel'
    }),
    async updateCurrentCategory() {
      this.setCurrentCategory(this.currentCategory);
      await this.getcarsByCategory(this.currentCategory);
    },
    updateUserChooseModel(){
      this.setUserChooseModel(this.userChooseModel)
    },
    checkModel(){
    this.isChecked = !this.isChecked;
  },
  },
  computed:{
    ...mapGetters({
      allCars: 'cars/allCars'
    }),
    ...mapState({
      categories:state=>state.cars.categories
    })
  },
  async mounted () {
    await this.getListOfCars();
    await this.getListOfCategories();
  },
};
</script>
<style lang="scss" scoped>

.order-models__navigation {
  display: flex;
  margin: 32px 0px 48px 0px;
}

.order-models__wrapper {
  display: flex;
  width: 100%;
}
.order-models__item-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 75%;
}

.order-models__item {
  flex-basis: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 0 0 0 $gray-light, 0 1px 0 0 $gray-light,
    1px 1px 0 0 $gray-light, 1px 0 0 0 $gray-light inset,
    0 1px 0 0 $gray-light inset;
  padding: 16px 16px 17px 16px;
  &:hover,
  &:active {
    position: relative;
    box-shadow: 0px 0 0 0 $main-accent, 0 -1px 0 0 $main-accent inset,
      -1px 1px 0 0 $main-accent inset, 1px 0 0 0 $main-accent inset,
      0 1px 0 0 $main-accent inset;
  }

  &_active {
    box-shadow: 0px 0 0 0 $main-accent, 0 -1px 0 0 $main-accent inset,
      -1px 1px 0 0 $main-accent inset, 1px 0 0 0 $main-accent inset,
      0 1px 0 0 $main-accent inset;
  }
}
.order-models__item-info {
  &-model {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0em;
  }
  &-price {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
    color: $gray-dark;
  }
  &-model-input{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
    right: 0;
    margin: auto;
        top: 0;
    bottom: 0;
}
}
.order-models__item-img {
  display: flex;
  justify-content: center;
  & img{
    max-width: 200px;
  }
}
.radio-styled {
  display: block;
}
</style>
