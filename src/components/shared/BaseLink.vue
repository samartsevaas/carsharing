<template>
  <div class="base-link">
    <a class="base-link__item-regular_blackBg" :class="[setColor]" href=""
      ><slot></slot> </a>
  </div>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    fontColor: {
      type: String,
      validator: (fontColor) => ["light-gray", "main-green"].includes(fontColor),
      default: "light-gray",
    },
  },
  computed: {
    setColor() {
      return `base-link__item-regular_blackBg_fontColor-${this.fontColor}`;
    },
  },
};
</script>

<style lang="scss">
.base-link__item-regular {
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: $black;
  &_whiteBg{
  &:hover {
    color: $main-accent;
  }
  &:active {
    color: $main-accent;
  }
  };
  &_blackBg_fontColor{
    &-main-green{
      &:hover {
    color: $gray-light;
  }
  &:active {
    color: $gray-light;
  }
    }
    &-light-gray{
      color: $gray-light;
  &:hover {
    color: $main-accent;
  }
  &:active {
    color: $main-accent;
  }
    }
  }
}

</style>
