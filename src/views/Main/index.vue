<template>
    <MainHead :link="link"></MainHead>
</template>
<script>
import MainHead from "../../components/pages/index/Main.vue"

export default{
    name: "MainViews",
    components: {
        MainHead
    },
    computed: {
      link () {
          return "/main";
      }
  }
}
</script>

