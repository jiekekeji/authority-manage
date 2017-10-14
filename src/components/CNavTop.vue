<!--顶部导航组件-->
<template>
  <div class="parent">
    <p class="logo">
      超级管理后台
    </p>

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
  @import "../assets/style/base";

  .parent {
    height: 48px;
    width: 100%;
    background-color: $color-top-blue;
  }

  .logo {
    width: 200px;
    height: 100%;
    color: white;
    line-height: 48px;
    text-indent: 16px;
    border-right: 0.5px dashed #eef1f7;
  }
</style>
