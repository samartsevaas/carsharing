<template>
  <div :link="link" class="order-location">
    <div class="order-location__search">
      <div class="order-location-text">
        <div class="order-location-city">Город</div>
        <div class="order-location-pick">Пункт Выдачи</div>
      </div>
      <div class="order-location__input">
        <base-search-input
          placeholder="Введите город"
          v-model="currentCity"
          @input="updateCurrentCity"
          :id="1"
        >
          <template #options>
            <option
              v-for="item in allCities"
              :key="item.id"
              :value="item.name"
            ></option>
          </template>
        </base-search-input>
        <base-search-input
          placeholder="Введите пункт выдачи"
          :id="2"
          v-model="currentPoint"
          @input="updateCurrentPoint"
          v-show="isInputPointVisible"
        >
          <template #options>
            <option v-for="p in allPoints" :key="p.id">{{ p.address }}</option>
          </template></base-search-input
        >
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
//eslint-disable-next-line no-unused-vars
import BaseSearchInput from "@elements/BaseSearchInput.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  
  name: "OrderLocationViews",
  components: { BaseSearchInput },
  data() {
    return {
      currentCity: '',
      currentPoint: '',
      isInputPointVisible: true
    };
  },
  methods: {
    ...mapActions({
      getListOfPoints: "location/getListOfPoints",
  
    }),
    ...mapMutations({
      setCurrentCity: "location/setCurrentCity",
      setCurrentPoint: "location/setCurrentPoint",
    }),

    updateCurrentCity() {
      this.setCurrentCity(this.currentCity);
    },
    updateCurrentPoint() {
      this.setCurrentPoint(this.currentPoint);
    },
  },
  computed: {
    ...mapGetters("location", ["allCities"]),
    ...mapGetters("location", ["allPoints"]),

    link() {
      return "location";
    },
    getCurrentcityId() {
      return (
        this.allCities.find((item) => item.name === this.currentCity) ?? {}
      ).id;
    },
  },
  watch: {
    async getCurrentcityId(newData) {
      if (newData) {
        await this.getListOfPoints(newData);
        if(!this.allPoints.length){
          alert('Выберите другой город, в выбранном городе отсутствуют пункты выдачи');
          this.isInputPointVisible = false;
          this.currentCity=''
        }else{
          return this.isInputPointVisible = true;
        }
      }
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
