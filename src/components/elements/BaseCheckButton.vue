<template>
  <label class="base-checkbox checkbox-styled">
    <input type="checkbox" class="base-checkbox__input" /><span
      class="base-checkbox__button"
    ></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "BaseCheckboxButton",
};
</script>

<style lang="scss">
.base-checkbox {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $mainPage_gray;
  padding-left: 1.7em;
  margin-right: 18px;
  &:hover {
    color: $black;
    cursor: pointer;
  }
}

.base-checkbox__input {
  appearance: none;
  position: absolute;
  background-repeat: no-repeat;
  &:hover + .base-checkbox__button {
    background-image: url(~@/assets/images/checkbox-onfocus.svg);
    background-repeat: no-repeat;
  }
  &:checked + .base-checkbox__button {
    background-image: url(~@/assets/images/checkbox-checked-vector.svg),
      url(~@/assets/images/checkbox-onfocus.svg);
    background-repeat: no-repeat, no-repeat;
  }
}
.base-checkbox__button {
  position: absolute;
  margin-left: -1.7em;
  margin-top: 0.15em; // картинка такая, пришлось добавить
  width: 1em;
  height: 1em;
  background-image: url(~@/assets/images/checkbox-nonfocus.svg);
  background-repeat: no-repeat;
}
.base-checkbox:hover {
  color: $black;
}
.checkbox-styled {
  display: block;
  margin-bottom: 8px;
}
</style>
