<!--顶部导航组件-->
<template>
  <div class="container">
    <p class="menu_switch" @click="menuSwitch()"></p>
    <!--面包屑-->
    <ul class="bread-parent">
      <li class="bread-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="bread-item">
        <span>/</span>
        <router-link to="/">商品列表</router-link>
      </li>
      <li class="bread-item">
        <span>/</span>
        <router-link to="/">商品详情</router-link>
      </li>
    </ul>
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

  .menu_switch {
    display: inline-block;
    width: 48px;
    height: 48px;
    background-image: url("../assets/images/icon_3_line.png");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    float: left;
  }

  .el-breadcrumb__item__inner, .el-breadcrumb__item__inner a {
    color: white;
  }
</style>
