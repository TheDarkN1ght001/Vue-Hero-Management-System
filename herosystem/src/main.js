import Vue from 'vue'
import App from './App.vue'

//引入bootstrap样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//引入index.css样式文件 （给模板用的）
import '../src/assets/css/index.css'

//引入封装好的router
import router from './router'

//引入axios
import axios from 'axios'

//将axios作为Vue的实例属性添加到构造器
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
