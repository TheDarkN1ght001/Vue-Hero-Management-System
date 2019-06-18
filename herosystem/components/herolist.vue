<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">英雄管理列表</h1>
    <button type="button" class="btn btn-success" @click.prevent='add'>添加英雄信息</button>
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
          <tr v-for='(item,index) in datalist' :key='index'>
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
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
//引入axios
import axios from 'axios'

export default {
    data() {
        return {
            //服务器地址
            url:'http://localhost:4399/heros',
            //数据源
            datalist:[]
        }
    },
    methods: {
        //数据渲染封装
        getdata(){
            axios({
                method:'GET',
                url:this.url
            }).then(res=>{
                let{status,data}=res
                if(status==200){
                    this.datalist=data
                }
            })
        },
        add(){
            //编程式导航
            this.$router.push('/addhero')
        }
    },
    mounted() {
        this.getdata()
    },
};
</script>

<style>
</style>
