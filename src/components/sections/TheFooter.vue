<template>
  <footer class="main-footer">
    <section class="main-footer__section">
      <div class="main-footer__copyright">© 2016-2019 «Need for drive»</div>
      <div class="main-footer__telephone-link">
        <base-link>8 (495) 234-22-44</base-link>
      </div>
    </section>
  </footer>
</template>

<script>
import BaseLink from "@elements/BaseLink.vue";
export default {
  name: "MainFooter",
  components: {
    BaseLink,
  },
};
</script>
<style scoped lang="scss">
.main-footer {
  margin-top: auto;
  @media (max-width: 430px) {
    margin: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 0;
  }
}
.main-footer__section {
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  @media (max-width: 430px) {
    display: flex;
    position: absolute;
    background: $main-black;
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-end;
  }
}
.main-footer__copyright {
  color: $main-gray;
  font-weight: 300;
  font-size: 13px;
  flex: 1;
  @media (max-width: 430px) {
    margin: 5px;
  }
}
.main-footer__telephone-link {
  font-weight: 500;
  font-size: 14px;
  color: #eeeeee;
  align-self: end;
  @media (max-width: 430px) {
    color: $main-accent;
    margin: 5px;
  }
}
</style>
