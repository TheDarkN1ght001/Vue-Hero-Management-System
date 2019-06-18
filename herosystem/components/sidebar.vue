<template>
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">

          <router-link to="/herolist" active-class='active' tag='li'>
            <a>英雄管理列表</a>
          </router-link>
          
          <router-link to="/jineng" active-class='active' tag='li'>
            <a>技能管理列表</a>
          </router-link>


          <router-link to="/wuqi" active-class='active' tag='li'>
            <a>武器管理列表</a>
          </router-link>

      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
