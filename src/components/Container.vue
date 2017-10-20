<!--主容器-->
<template>
  <div class="container">
    <!--顶部导航条-->
    <div class="top">
      <CNavTop></CNavTop>
    </div>
    <!--主体内容-->
    <div class="content">
      <!--左边的菜单栏-->
      <div class="content-left">
        <CNavLeft></CNavLeft>
      </div>
      <!--右边的内容区域-->
      <div class="content-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
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

  /*导航条*/
  .top {
    width: 100%;
    height: 48px;
  }

  /*导航条下的主体内容*/
  .content {
    display: flex;
    flex-flow: nowrap;
    position: fixed;
    top: 48px;
    width: 100%;
    bottom: 0px;
    .content-left {
      width: 200px;
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      background-color: #eef1f7;
    }

    .content-right {
      flex-grow: 1;
      min-width: 1000px;
      position: absolute;
      top: 0px;
      left: 200px;
      right: 0px;
      bottom: 0px;
    }
  }


</style>
