<!--顶部导航组件-->
<template>
  <div class="container">
    <p class="logo">
      管理后台
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
    methods: {
      menuSwitch(){
        this.$emit("changeMenuStatus");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">
  @import "../assets/style/base";

  .container {
    height: 48px;
    width: 100%;
    background-color: $color-top-blue;
  }

  .logo {
    width: 220px;
    height: 100%;
    color: white;
    line-height: 48px;
    text-indent: 16px;
    display: inline-block;
    float: left;
    border-right: 0.5px dashed #eef1f7;
    cursor: pointer;
  }

  .menu_switch {
    display: inline-block;
    width: 48px;
    height: 48px;
    background-image: url("../assets/images/icon_3_line.png");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
</style>
