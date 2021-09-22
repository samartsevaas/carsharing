<template>
  <nav class="burgerMenu__background-none">
    <ul class="toggleMenu__table">
      <li class="toggleMenu__table__item" v-for="item in items" :key="item.li">
        <a href=""> {{ item.li }} </a>
      </li>
    </ul>
    <div class="toggleMenu__social-icon">
      <social-icon icon="telegram"></social-icon>
      <social-icon icon="facebook"></social-icon>
      <social-icon icon="instagram"></social-icon>
    </div>
  </nav>
</template>

<script>
import SocialIcon from "./SocialIcon.vue";

export default {
  name: "BurgerMenu",
  components: {
    SocialIcon,
  },
  data() {
    return {
      items: [
        { li: "ПАРКОВКА" },
        { li: "СТРАХОВКА" },
        { li: "БЕНЗИН" },
        { li: "ОБСЛУЖИВАНИЕ" },
      ],
    };
  },
};
</script>

<style lang="scss">
.burgerMenu__background-none {
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
.toggleMenu__table__item {
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
.burgerMenu__background {
  display: block;
}
.toggleMenu__social-icon {
  display: flex;
  justify-content: flex-start;
  margin-left: 54px;
}
</style>
