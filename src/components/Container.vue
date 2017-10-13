<template>
  <div class="container">
    <CNavTop></CNavTop>


  </div>
</template>

<script>
  import CNavTop from "../components/CNavTop.vue"
  export default {
    data () {
      return {}
    },
    components: {
      CNavTop
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


</style>
