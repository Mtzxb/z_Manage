<template>
  <div class="member-manage">
    <!-- 查询区域 -->
    <div class="search-form">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline" size="mini">
        <el-form-item label="会员ID">
          <el-input v-model="queryParams.id" placeholder="会员ID" clearable></el-input>
        </el-form-item>
        <el-form-item label="会员名称">
          <el-input v-model="queryParams.name" placeholder="会员名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleCurrentChange(1)">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="memberList">
      <el-table-column  prop="id"  label="会员ID"></el-table-column>
      <el-table-column  prop="name"  label="会员名称"></el-table-column>
      <el-table-column  prop="phone"  label="电话"></el-table-column>
      <el-table-column  prop="createTime"  label="注册时间"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page-box">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageInfo.page"
        :page-size="10"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import memeber from './jsAndJson/member' // 引入会员假数据
export default {
  name: 'memberManage',
  data() {
    return {
      queryParams: { // 查询条件
        id: '',
        name: ''
      },
      pageInfo: { // 页面参数
        page: 1
      },
      totalMember: [...memeber], // totalMember 暂存所有会员假数据
      memberList: [], // 会员列表
      total: 0, // 查询出来的符合条件的所有会员总数
    }
  },
  created() {
    this.handleCurrentChange(1)
  },
  methods: {
    onSubmit() {
      const params = {
        ...this.queryParams,
        ...this.pageInfo
      }
      // 筛选出所有符合当前查询条件的数据，并返回总数total
      const result = this.totalMember.filter(item => {
        // 有查询条件就需要比对查询条件，没有就不比对
        return  (!params.name || item.name == params.name) && (!params.id || item.id == params.id)
      })
      this.total = result.length
      // 根据page参数筛选出当前表格中应该展示的10条数据
      this.memberList = result.slice((params.page - 1) * 10, (params.page - 1) * 10 + 10)
    },
    handleCurrentChange(val) {
      this.pageInfo.page = val
      this.onSubmit()
    }
  }
}
</script>
<style lang="scss">
.member-manage{
  .search-form{
    background: #fff;
    margin-bottom: 12px;
    border-radius: 5px;
    padding: 12px;
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
      margin-bottom: 0;
    }
  }
  .page-box{
    margin-top: 0;
    width: 100%;
    text-align: right;
    background-color: #fff;
    padding: 12px 0;
  }
}
</style>