<template>
  <div class="socialIcon">
    <font-awesome-icon :icon="['fab', setSocialIcon]" />
  </div>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: {
      type: String,
      validator: (icon) => ["telegram", "instagram", "facebook"].includes(icon),
    },
  },
  computed: {
    setSocialIcon() {
      return this.icon;
    },
  },
};
</script>

<style lang="scss">
.socialIcon {
  padding-right: 24px;
  font-size: 25px;
}
.socialIcon svg {
  color: $backGroundSocialIcon;
  &:hover {
    color: $main-accent;
  }
}
</style>
