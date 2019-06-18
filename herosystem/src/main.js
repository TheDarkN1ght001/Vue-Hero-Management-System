import Vue from 'vue'
import App from './App.vue'

//引入bootstrap样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//引入index.css样式文件 （给模板用的）
import '../src/assets/css/index.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
