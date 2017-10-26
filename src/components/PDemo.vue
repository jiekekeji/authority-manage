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
    <div class="option-parent">
      <el-row :gutter="0">
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>

        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-date-picker
              v-model="value1"
              type="date"
              align="center"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="success">成功按钮</el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="info">信息按钮</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>

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
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
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
    height: 800px;
    background-color: azure;
  }

  .el-row {
    /*margin-bottom: 5px;*/
    /*&:last-child {*/
    /*margin-bottom: 0;*/
    /*}*/
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    /*border-radius: 4px;*/
    min-height: 36px;
    padding: 5px;
  }

  .row-bg {
    /*padding: 10px 0;*/
    background-color: #f9fafc;
  }

</style>
