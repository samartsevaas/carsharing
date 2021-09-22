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
.base-link__item-regular_whiteBg {
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: $black;
  &:hover {
    color: $main-accent;
  }
  &:active {
    color: $main-accent;
  }
}

.base-link__item-regular_blackBg {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 13px;
}

.base-link__item-regular_blackBg_fontColor-main-green {
  color: $main-accent;
  &:hover {
    color: $gray-light;
  }
  &:active {
    color: $gray-light;
  }
}
.base-link__item-regular_blackBg_fontColor-light-gray {
  color: $gray-light;
  &:hover {
    color: $main-accent;
  }
  &:active {
    color: $main-accent;
  }
}
</style>
