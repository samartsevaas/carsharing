<template>
<div>
    <div class="order-check">
        <div class="order-check_left">
            <div class="order-check-title">
          <div>Город</div>
          <div>Пункт выдачи</div>
        </div>
        <div class="order-check-city">
            <input type="search">
            <input type="search" placeholder="Начните вводить текст">
        </div>
        </div>
        <div class="order-check_right"></div>
    </div>
      <div class="order-info__option-map">
          <div class="order-info__option-map-choose">Выбрать на карте: </div>
          <img src="@/assets//map.jpg">
      </div>
</div>
</template>

<script>

export default{
    name: "OrderLocation",
}
</script>
<style lang="scss" scoped>
.order-check{
    display: flex;
}
.order-check-title, .order-check-city{
display: flex;
    flex-direction: column;
    flex: 0.5;
}
.order-check-title{
    align-items: flex-end;
        margin-top: 5px;
    & div{
        padding: 10px;
    }
}
.order-check-city{
    align-items: flex-start;
    & input {
        width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    text-overflow: ellipsis;
    padding: 10px;
    margin-left: 10px;
    }
}
.order-check_left{
    display: flex;
}
.order-info__option-map{
    margin-left: 32px;
    &-choose{
        margin: 40px 0px 20px 0px;
    }
}
</style>
