<template>
  <div class="container">
    <div class="top">
      <CNavTop></CNavTop>
    </div>
    <div class="content">
      <div class="content-left">
        <CNavLeft></CNavLeft>
      </div>
      <div class="content-right">

      </div>
    </div>


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
    flex-flow: row wrap;
    min-width: 1200px;
  }

  .top {
    width: 100%;
    height: auto;
  }

  .content {
    width: 100%;
    height: 90px;
    display: flex;
    flex-flow: nowrap;
  }

  .content-left {
    height: 200px;
    width: 200px;
  }

  .content-right {
    flex-grow: 1;
    min-width: 100px;
    /*background-color: rosybrown;*/
  }

</style>
