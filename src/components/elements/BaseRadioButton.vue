<template>
  <label class="base-radio radio-styled">
    <input
      type="radio"
      :name="name"
      class="base-radio__input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    /><span class="base-radio__button"></span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "BaseRadioButton",
  model: {
    prop: "selected",
    event: "input",
  },
  props: {
    selected: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss">
.base-radio {
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $main-gray;
  padding-left: 1.7em;
  margin-right: 18px;
  &:hover {
    color: $black;
    cursor: pointer;
  }
}

.base-radio__input {
  appearance: none;
  position: absolute;
  &:checked + .base-radio__button {
    background-image: url(~@/assets/images/radio-onfocus.svg);
  }
}
.base-radio__button {
  position: absolute;
  margin-left: -1.7em;
  margin-top: 0.15em; // картинка такая, пришлось добавить
  width: 1em;
  height: 1em;
  background-image: url(~@/assets/images/radio-nonfocus.svg);
  background-repeat: no-repeat;
}
.base-radio:hover {
  color: $black;
}
.radio-styled {
  display: block;
  margin-bottom: 8px;
}
</style>
