<template>
  <div>
    <!-- 头部tophead -->
    <Tophead></Tophead>

    <!-- 侧边栏sidebar -->
    <Sidebar></Sidebar>

    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Tophead from '../components/tophead'
import Sidebar from '../components/sidebar'
export default {
  components:{
    Tophead,
    Sidebar
  }
};

</script>

<style>
</style>
