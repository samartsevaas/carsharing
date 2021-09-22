<template>
  <div class="main-sidebar">
    <div class="base-sidebar" :class="[fullClass]">
      <burger-button @click.native="classActive"></burger-button>
      <burger-menu v-if="this.visible" :class="[visibleBurgerMenu]">
      </burger-menu>
      <lang-button></lang-button>
    </div>
  </div>
</template>

<script>
import BurgerButton from "../shared/BurgerButton.vue";
import BurgerMenu from "../shared/BurgerMenu.vue";
import LangButton from "../shared/LangButton.vue";

export default {
  name: "BaseSidebar",
  components: {
    BurgerButton,
    BurgerMenu,
    LangButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    fullClass() {
      return this.visible ? "base-sidebar_visible" : " ";
    },
    visibleBurgerMenu() {
      return this.visible ? "burgerMenu__background" : " ";
    },
  },
  methods: {
    classActive: function () {
      this.visible = !this.visible;
      // document.body.style.overflow = (this.visible && 'hidden') || 'auto';
    },
  },
};
</script>
<style scoped lang="scss">
.base-sidebar {
  background: $sideBarBg;
  height: 100%;
  width: 64px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: background 0.3s ease, width 0.3s ease;
  display: flex;
  flex-direction: column;
  @media (max-width: 430px) {
    background: transparent;
  }
}
.base-sidebar_visible {
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(17, 21, 24, 1) 49%,
    rgba(21, 27, 31, 0.8) 100%
  );
  @media (max-width: 768px) {
    background: $black;
  }
}
</style>
