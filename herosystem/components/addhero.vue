<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">英雄添加</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="name"
          v-model="addHero.name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="exampleInputPassword1"
          value="男"
          v-model="addHero.gender"
        >男
        <input type="radio" id="exampleInputPassword1" value="女" v-model="addHero.gender">女
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="add">点击新增英雄</button>
    </form>
  </div>
</template>

<script>
// 引入 axios
// import axios from "axios";
export default {
  data() {
    return {
      url: "http://localhost:4399/heros",
      //新增英雄
      addHero: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    add() {
      this.$http({
        method: "POST",
        url: this.url,
        data: this.addHero
      }).then(res => {
        let { status } = res;
        if (status === 201) {
          alert("添加成功");
          this.$router.push("/herolist");
        } else {
          alert("添加失败");
        }
      });
    }
  }
};
</script>

<style>
</style>
