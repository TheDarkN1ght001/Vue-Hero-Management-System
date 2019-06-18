<template>
  <div>
    <!-- 头部tophead -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">英雄管理系统</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse"></div>
      </div>
    </nav>

    <!-- 侧边栏sidebar -->
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active">
          <a href="#">
            英雄管理列表
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <a href="#">技能管理列表</a>
        </li>
        <li>
          <a href="#">武器管理列表</a>
        </li>
      </ul>
    </div>

 <!-- 内容 -->
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
  </div>

 
  
</template>

<script>
export default {};
</script>

<style>
</style>
