<template>
  <div class="container">
    <div class="top">
      <CNavTop></CNavTop>
    </div>
    <div class="left">
      <CNavLeft></CNavLeft>
    </div>
    <div class="right"></div>


  </div>
</template>

<script>
  import CNavTop from "../components/CNavTop.vue"
  import CNavLeft from "../components/CNavLeft.vue"
  export default {
    data () {
      return {}
    },
    components: {
      CNavTop,
      CNavLeft
    },
    activated(){

    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">

  .container {
    display: flex;
    min-width: 1200px;
    width: 100%;
  }

</style>
