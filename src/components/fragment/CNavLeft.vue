<!--顶部导航组件-->
<template>
  <div class="parent">
    <el-menu default-active="2" class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             theme="light"
             :router="true"
             :unique-opened="true"
             :collapse="menuStatus">
      <el-menu-item index="/parent/pdemo">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>


    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      menuStatus: false
    },
    watch: {
      "menuStatus": function () {
        console.log("sdss", this.menuStatus);
      }
    },
    components: {},
    activated(){

    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">

  .parent {
    height: 100%;
    display: block;
  }
</style>
