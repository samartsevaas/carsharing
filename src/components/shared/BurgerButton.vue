<template>
  <div class="toggleMenu">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>

export default {
  name: "BurgerButton",
  components:{
    
  }
};
</script>

<style lang="scss">
.toggleMenu {
  position: relative;
  margin-top: 35px;
  margin-left: 17px;
  @media (max-width: 430px) {
    margin-top: 15px;
    margin-left: 10px;
  }
}
.toggleMenu input {
  display: block;
  width: 30px;
  height: 32px;
  position: absolute;
  opacity: 0;
  z-index: 2;
}
.toggleMenu span {
  display: block;
  width: 24px;
  height: 4px;
  background-color: $backGroundBurgerButton;
  position: relative;
  border-radius: 2px;
  margin-bottom: 4px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  @media (max-width: 430px) {
    background-color: $main-black;
  }
}
.toggleMenu span:first-child {
  transform-origin: 0% 0%;
}
.toggleMenu span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
.toggleMenu input:checked ~ span {
  opacity: 1;
  transform: rotate(-45deg) translate(-5px, 4px);
  background: #ffffff;
}
.toggleMenu input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
.toggleMenu input:checked ~ span:nth-last-child(2) {
  transform: rotate(45deg) translate(0, -1px);
}
</style>
