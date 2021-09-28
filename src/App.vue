<template>
<div><router-view></router-view></div>
</template>

<script>
export default{
  name: "App",
  created() {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

<style lang="scss">

</style>
