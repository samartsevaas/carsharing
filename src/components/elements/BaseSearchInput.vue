<template>
  <div class="base-search">
    <slot></slot>
    <input
      class="base-search__input"
      type="search"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "BaseSearchInput",
  props: {
    placeholder: {
      type: String,
      default: "Введите текст",
    },
  },
};
</script>
<style lang="scss">
.base-search {
  display: flex;
}
.base-search__input {
  width: 100%;
  border: none;
  border-bottom: 1px solid $gray-dark;
  padding: 0px 0px 3px 8px;
  margin-top: 8px;
  &::placeholder {
    color: $gray-dark;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
