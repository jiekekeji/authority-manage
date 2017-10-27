<!--主容器-->
<template>
  <div class="parent-top-level">

    <div class="container-left" v-show="leftStatus">
      <div class="container-left-top" ref="containerRightTop">
        <CNavLogo></CNavLogo>
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
        <CNavTop v-on:changeMenuStatus="changeMenuStatus"></CNavTop>
      </div>
      <!--路由切换部分-->
      <div class="container-right-content" v-bind:style="{height: contentHeight + 'px'}">
        <div class="container-right-content-blank">
        </div>
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
  import CNavLogo from "../components/CNavLogo.vue"
  export default {

    data () {
      return {
        contentHeight: 0,
        leftStatus: true,//左侧导航栏的显示状态，默认为显示,
        topHeight: 48,//顶部导航条的高度
        scrollWidth: 0,//滚动条宽度
      }
    },

    components: {
      CNavTop,
      CNavLeft,
      CNavLogo
    },

    beforeRouteEnter  (to, from, next) {

      next()
    },

    beforeRouteLeave (to, from, next) {
      next()
    },

    deactivated () {
      this.$destroy(true);
    },

    watch: {},

    mounted () {
    },

    computed: {},


    activated(){
      this.istenWindinSize();
    },

    methods: {
      //改变左侧导航栏的显示状态
      changeMenuStatus(){
        if (this.leftStatus) {
          this.leftStatus = false;
          return;
        }
        this.leftStatus = true;
//        window.location.reload();
      },

      //监听浏览器视窗大小的变化
      istenWindinSize(){
        let that = this;
        this.scrollWidth = this.getScrollWidth();
        this.contentHeight = window.innerHeight - this.topHeight - this.scrollWidth;
        window.onresize = function () {
          that.contentHeight = parseFloat(window.innerHeight) - parseFloat(that.topHeight) - parseFloat(that.scrollWidth);
          console.log(that.contentHeight);
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

  .parent-top-level {
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
  }

  .container-right-top {
    width: 100%;
    height: 48px;
  }

  .container-right-content {
    overflow: auto;
    display: flex;
    flex-wrap: nowrap
  }

  .container-right-content-router {
    flex-grow: 100;
    overflow: hidden;
  }

  .container-right-content-blank {
    width: 10px;
  }

  .container-right-footer {
    background-color: white;
  }


</style>
