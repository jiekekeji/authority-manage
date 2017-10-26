<!--主容器-->
<template>
  <div class="container-top-level">

    <div class="container-left">
      <div class="container-left-top">
      </div>
      <!--左侧菜单导航部分-->
      <div class="container-left-content" v-bind:style="{height: contentHeight + 'px'}">
        <CNavLeft></CNavLeft>
      </div>
      <div class="container-left-footer" v-bind:style="{height: scrollWidth + 'px'}">
      </div>
    </div>

    <div class="container-right">
      <div class="container-right-top">
      </div>
      <!--路由切换部分-->
      <div class="container-right-content" v-bind:style="{height: contentHeight + 'px'}">
        <div class="container-right-content-router">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>

        <div class="container-right-content-blank">

        </div>
      </div>
      <div class="container-right-footer" v-bind:style="{height: scrollWidth + 'px'}">
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
        scrollWidth: 0,//滚动条宽度
      }
    },

    components: {
      CNavTop,
      CNavLeft
    },

    activated(){
      this.istenWindinSize();
    },

    methods: {

      //监听浏览器视窗大小的变化
      istenWindinSize(){
        let that = this;
        console.log(that.getScrollWidth())
        this.scrollWidth = this.getScrollWidth();
        this.contentHeight = window.innerHeight - this.topHeight - this.scrollWidth;
        window.onresize = function () {
          console.log(that.getScrollWidth())
          that.contentHeight = window.innerHeight - this.topHeight - this.scrollWidth;
        };
      },

      //获取滚动条宽度
      getScrollWidth() {
        var noScroll, scroll, oDiv = document.createElement("DIV");
        oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
        noScroll = document.body.appendChild(oDiv).clientWidth;
        oDiv.style.overflowY = "scroll";
        scroll = oDiv.clientWidth;
        document.body.removeChild(oDiv);
        return noScroll - scroll;
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">

  .container-top-level {
    min-width: 1200px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap
  }

  /*左边部分*/
  .container-left {
    width: 220px;
    height: auto;
    background-color: #eef1f7;

  }

  .container-left-top {
    width: 220px;
    height: 48px;
    background-color: darkseagreen;
  }

  .container-left-content {
    overflow: auto;
  }

  .container-left-footer {
    background-color: #eef1f7;
  }

  /*右边部分*/
  .container-right {
    width: 980px;
    flex-grow: 100;
    height: auto;
    background-color: bisque;
  }

  .container-right-top {
    width: 100%;
    height: 48px;
    background-color: violet;
  }

  .container-right-content {
    overflow: auto;
    display: flex;
    flex-wrap: nowrap
  }

  .container-right-content-router {
    flex-grow: 100;
  }

  .container-right-content-blank {
    width: 15px;
    background-color: red;
  }

  .container-right-footer {
    background-color: white;
  }


</style>
