<!--顶部导航组件-->
<template>
  <div class="parent">


  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {},
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

  .parent {
    height: 36px;
    width: 100%;
    background-color: rebeccapurple;
  }

</style>
