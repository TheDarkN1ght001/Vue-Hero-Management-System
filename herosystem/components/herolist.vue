<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">国际犯罪分子管理列表</h1>
    <button type="button" class="btn btn-success" @click.prevent="add">添加犯罪分子</button>
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
          <tr v-for="(item,index) in datalist" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="#" @click.prevent="del(item.id)">删除</a>
              <a href="#" @click.prevent="edit(item.id)">编辑</a>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//引入axios
import axios from "axios";

export default {
  data() {
    return {
      //服务器地址
      url: "http://localhost:4399/heros",
      //数据源
      datalist: []
    };
  },
  methods: {
    //数据渲染封装
    getdata() {
      axios({
        method: "GET",
        url: this.url
      }).then(res => {
        let { status, data } = res;
        if (status == 200) {
          this.datalist = data;
        }
      });
    },
    //跳转进入新增英雄路由
    add() {
      //编程式导航
      this.$router.push("/addhero");
    },
    //删除英雄
    del(index) {
      if (confirm("你确定要删除吗！！！")) {
        axios({
          method: "DELETE",
          url: `${this.url}/${index}`
        }).then(res => {
          if (res.status == 200) {
            this.getdata();
          }
        });
      }
    },
    //路由跳转到编辑页面
    edit(index) {
      // 编程式导航
      this.$router.push("/heroEdit/" + index);
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style>
 td {
     color: #dd5044;
     font-size: 50px;
 }
 th {
     font-weight: 700;
     color: blue;
     font-size: 50px;
     font-style: italic;
 }
 tr:hover {
     background-color: skyblue !important;
 }
 h1 {
     color: red;
     font-weight: 700;
     font-size: 50px;
 }
 button {
     width: 250px;
     height: 70px;
     font-size: 30px !important;
 }
</style>
