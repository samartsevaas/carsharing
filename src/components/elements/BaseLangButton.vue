<template>
  <button type="button" class="lang-button">Рус</button>
</template>

<script>
export default {
  name: "LangButton",
};
</script>

<style lang="scss">
.lang-button {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: $main-accent;
  font-weight: 700;
  margin-top: auto;
  margin-left: 4px;

  &:hover {
    border: 1px solid $gray-light;
    color: $gray-light;
  }
  &:active {
    border: 1px solid $gray-light;
    color: $main-accent;
  }
  @media (max-width: 430px) {
    display: none;
  }
}
</style>
