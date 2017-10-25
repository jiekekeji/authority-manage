<!--主容器-->
<template>
  <div class="container-all">
    <!--顶部导航条-->
    <div class="top">
      <CNavTop v-on:changeMenuStatus="changeMenuStatus"></CNavTop>
    </div>
    <!--占位行防止被顶部导航条挡住-->
    <div class="blank-line"></div>

    <!--主体内容-->
    <div class="content">

      <!--左边的菜单栏-->
      <div id="container-left"
           v-bind:style="{height: contentHeight + 'px',width:leftWidth }">
        <CNavLeft :menuStatus="menuStatus"></CNavLeft>
      </div>

      <!--右边的内容区域-->
      <div id="container-right" v-bind:style="{height: contentHeight + 'px' }">
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
        contentHeight: 0,
        menuStatus: true,//左侧导航栏的显示状态，默认为显示,
        topHeight: 48,//顶部导航条的高度
        leftWidth: "auto",//左边容器的宽度
      }
    },

    components: {
      CNavTop,
      CNavLeft
    },

    activated(){
      this.istenWindinSize();
    },

    beforeRouteLeave (to, from, next) {
      next();
    },

    methods: {
      //改变左侧导航栏的显示状态
      changeMenuStatus(){
        if (this.menuStatus) {
          this.menuStatus = false;
          this.leftWidth = "220px"
          return;
        }
        this.leftWidth = "auto"
        this.menuStatus = true;
      },

      //监听浏览器视窗大小的变化
      istenWindinSize(){
        let that = this;
        this.contentHeight = window.innerHeight - this.topHeight;
        window.onresize = function () {
          that.contentHeight = window.innerHeight - this.topHeight;
        };
      }
    }
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
    z-index: 1000;

  }

  /*占位行*/
  .blank-line {
    width: 100%;
    height: 48px;
  }

  /*导航条下的主体内容*/
  .content {
    width: 100%;
    display: flex;
  }

  //左侧导航栏
  #container-left {
    max-width: 220px;
    overflow: auto;
    background-color: #eef1f7;
  }

  //右侧内容区域
  #container-right {
    flex-grow: 100;
    min-width: 980px;
    overflow: auto;
    background-color: darkseagreen;
  }


</style>
