<template>
  <div class="layout-slider">
    <div class="view-content">
      <!-- 侧边菜单部分 -->
      <sidebar class="sidebar-container" />
      <!-- 右边窗口，路由 -->
      <router-view class="views-dom app-container" />
    </div>
  </div>
</template>
<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'layout',
  components: {
    sidebar
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.layout-slider{
  height: 100%;
  .view-content{
    display: flex;
    height: 100%;
    .sidebar-container{
      flex: 0 0 250px;
      height: 100%;
    }
    .views-dom{
      flex: 1;
      height: 100%;
    }
    .app-container{
      padding: 12px;
      background-color: #eee;
    }
  }
}
</style>