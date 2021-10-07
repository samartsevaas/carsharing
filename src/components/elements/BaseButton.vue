<template>
  <component
    :is="definedTag.tag"
    class="base-button"
    :class="[getTheme]"
    v-bind="definedTag.atributes"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    theme: {
      type: String,
      validator: (theme) =>
        ["red", "blue", "dark-green", "violet", "main-green"].includes(theme),
      default: "main-green",
    },
    href: {
      type: String,
      default: "",
    },
  },
  computed: {
    getTheme() {
      return `base-button_${this.theme}`;
    },
    isDisabled() {
      return !this.term;
    },
    definedTag() {
      if (this.href) {
        return {
          tag: "router-link",
          atributes: {
            to: this.href,
          },
        };
      }
      return {
        tag: "button",
        atributes: {
          type: "button",
        },
      };
    },
  },
};
</script>

<style lang="scss">
.base-button {
  height: 48px;
  min-width: 250px;
  outline: none;
  border-radius: 8px;
  border: none;
  color: $backGroundBurgerButton;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 21.09px;
  @media (max-width: 425px) {
    width: 100%;
    border-radius: 0;
  }
}

.base-button_main-green {
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  &:hover {
    background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
  }
  &:active {
    background: linear-gradient(90deg, #076432 2.61%, #013c27 112.6%);
  }
}

.base-button_dark-green {
  background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
  &:hover {
    background: linear-gradient(90deg, #298675 0%, #27a138 100%);
  }
  &:active {
    background: linear-gradient(90deg, #298675 0%, #27a138 100%);
  }
}

.base-button_blue {
  background: linear-gradient(90deg, #132949 0%, #0c7b67 100%);
  &:hover {
    background: linear-gradient(90deg, #324e77 0%, #1d947e 100%);
  }
  &:active {
    background: linear-gradient(90deg, #324e77 0%, #1d947e 100%);
  }
}

.base-button_red {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  &:hover {
    background: linear-gradient(90deg, #6d481e 0%, #9e2054 100%);
  }
  &:active {
    background: linear-gradient(90deg, #6d481e 0%, #9e2054 100%);
  }
}

.base-button_violet {
  background: linear-gradient(90deg, #281349 0%, #720c7b 100%);
  &:hover {
    background: linear-gradient(90deg, #3d1c72 0%, #a215af 100%);
  }
  &:active {
    background: linear-gradient(90deg, #3d1c72 0%, #a215af 100%);
  }
}
.base-button_not-active {
  background: linear-gradient(90deg, #281349 0%, #720c7b 100%);
}
</style>
