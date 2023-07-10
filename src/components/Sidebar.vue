<template>
  <div class="slider">
    <div class="app-title">XX管理系统</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router>
      <el-menu-item v-for="(item, index) in routerData" :key="item.name + index" :index="item.path">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerData: []
    }
  },
  mounted() {
    this.creatRouterList()
  },
  methods: {
    // 获取路由表
    creatRouterList() {
      const routerData = this.$router.options.routes[0].children
      this.routerData = [...routerData]
    },
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handSelect(key, keyPath) {
    // },
  }
}
</script>
<style lang="scss">
.slider{
  height: 100%;
  .app-title{
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }
}
</style>