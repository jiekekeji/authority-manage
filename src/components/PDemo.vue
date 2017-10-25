<template>
  <div class="parent">
    <!--面包屑-->
    <el-breadcrumb separator="/" class="bread-top">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!--操作表单区域-->
    <div class="option-parent"></div>

    <!--数据表格区域-->


    <!--翻页区域-->
    <div class="pagination-parent">
      <el-pagination
        class="pagination-body"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
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
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped="" type="text/scss">
  @import "../assets/style/base";

  .parent {
    height: 100%;
    width: 100%;
  }

  .option-parent {
    height: 1000px;
    width: 100%;
    background-color: azure;
  }

</style>
