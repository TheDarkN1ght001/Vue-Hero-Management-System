<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">英雄管理列表</h1>
    <button type="button" class="btn btn-success">添加英雄信息</button>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>阿卡丽</td>
            <td>女</td>
            <td>
              <a href="#">删除</a>
              <a href="#">编辑</a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
