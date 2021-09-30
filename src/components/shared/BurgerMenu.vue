<template>
  <nav class="burger-menu__background-none">
    <ul class="toggle-menu__table">
      <li
        class="toggle-menu__table__item"
        v-for="item in items"
        :key="item.service"
      >
        <a href=""> {{ item.service }} </a>
      </li>
    </ul>
    <div class="toggle-menu__social-icon">
      <social-icon icon="telegram"></social-icon>
      <social-icon icon="facebook"></social-icon>
      <social-icon icon="instagram"></social-icon>
    </div>
  </nav>
</template>

<script>
import { MENU_ITEMS } from "@constants/common.js";
import SocialIcon from "./SocialIcon.vue";

export default {
  name: "BurgerMenu",
  components: {
    SocialIcon,
  },
  data() {
    return {
      items: MENU_ITEMS,
    };
  },
};
</script>

<style lang="scss">
.burger-menu__background-none {
  position: relative;
  margin-left: 23px;
  margin-top: 150px;
  display: none;
  @media (max-width: 425px) {
    margin-left: -42px;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
}
.toggle-menu__table__item {
  list-style-type: none;
  background-color: transparent;
  overflow-x: hidden;
  margin: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 32px;
  padding: 5px 10px;
  & a:visited {
    color: $gray-light;
  }
  & a:hover {
    color: $main-accent;
    transition: color 0.3s ease;
  }
  @media (max-width: 425px) {
    font-size: 22px;
  }
}
.burger-menu__background {
  display: block;
}
.toggle-menu__social-icon {
  display: flex;
  justify-content: flex-start;
  margin-left: 54px;
}
</style>
