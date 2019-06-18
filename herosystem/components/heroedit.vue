<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">英雄编辑</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="name"
          v-model="editHero.name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="exampleInputPassword1"
          value="男"
          v-model="editHero.gender"
        >男
        <input type="radio" id="exampleInputPassword1" value="女" v-model="editHero.gender">女
      </div>
      <button type="submit" class="btn btn-success" @click.prevent='edit'>点击编辑英雄</button>
    </form>
  </div>
</template>

<script>
// 引入 axios
import axios from "axios";
export default {
  data() {
    return {
      url: "http://localhost:4399/heros",
      //要修改的英雄
      editHero: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    //根据ID获取默认数据
    getDataById() {
      const id = this.$route.params.id;
      axios({
        method: "GET",
        url: `${this.url}/${id}`
      }).then(res => {
        if (res.status == 200) {
          this.editHero.name = res.data.name;
          this.editHero.gender = res.data.gender;
        }
      });
    },
    //修改后的数据提交到服务器
    edit() {
      const id = this.$route.params.id;
      axios({
        method: "PUT",
        url: `${this.url}/${id}`,
        data:this.editHero
      }).then(res=>{
          if(res.status==200){
              alert('更新英雄成功！')
              this.$router.push('/herolist')
          }
      })
    }
  },
  mounted() {
      //根据ID获取默认数据
    this.getDataById();
  }
};
</script>

<style>
</style>
