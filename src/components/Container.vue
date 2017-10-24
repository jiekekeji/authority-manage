<!--主容器-->
<template>
  <div class="container-all">
    <!--顶部导航条-->
    <div class="top">
      <CNavTop></CNavTop>
    </div>
    <div class="zhanwei">
    </div>
    <!--主体内容-->
    <div class="content">
      <!--左边的菜单栏-->
      <div class="content-left" id="container-left" v-bind:style="{height: contentHeight + 'px' }">
        <CNavLeft></CNavLeft>
      </div>
      <!--右边的内容区域-->
      <div class="content-right" id="container-right" v-bind:style="{height: contentHeight + 'px' }">
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
      return {
        contentHeight: 0
      }
    },
    components: {
      CNavTop,
      CNavLeft
    },
    activated(){
      let that = this;
      this.contentHeight = window.innerHeight;
      window.onresize = function () {
        that.contentHeight = window.innerHeight;
      };
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">

  .container-all {
    min-width: 1200px;
    width: 100%;
  }

  /*导航条*/
  .top {
    width: 100%;
    height: 48px;
    position: fixed;
    top: 0px;

  }

  /*占位行*/
  .zhanwei {
    width: 100%;
    height: 48px;
  }

  /*导航条下的主体内容*/
  .content {
    width: 100%;
    display: flex;
  }

  //左侧导航栏
  .content-left {
    width: 220px;
    overflow: auto;
    background-color: #eef1f7;
  }

  //右侧内容区域
  .content-right {
    flex-grow: 100;
    min-width: 980px;
    overflow: auto;
    background-color: darkseagreen;
  }


</style>
