<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <div class="modal__title">
        <slot name="title"></slot>
      </div>
      <div class="modal__button">
        <slot name="confirm"> </slot>
        <slot name="cancel"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  transition: background 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  padding: 24px;
}
.modal__title {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin-bottom: 32px;
}
.modal__button {
  display: flex;
  justify-content: space-around;
  & :first-child {
    margin-right: 16px;
  }
}
</style>
