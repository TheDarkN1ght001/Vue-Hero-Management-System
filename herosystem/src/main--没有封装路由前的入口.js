import Vue from 'vue'
import App from './App.vue'

//引入bootstrap样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//引入index.css样式文件 （给模板用的）
import '../src/assets/css/index.css'

//引入vue-router
import Vuerouter from 'vue-router'
//使用vue-router
Vue.use(Vuerouter)

//给路由准备对应的组件
import Herolist from '../components/herolist.vue'
import Heroedit from '../components/heroedit.vue'
import Addhero from '../components/addhero.vue'
import Wuqi from '../components/wuqi.vue'
import Jineng from '../components/jineng.vue'
import VueRouter from 'vue-router';
//创建路由选项
let routes = [
  { path: '/herolist', component: Herolist },
  { path: '/wuqi', component: Wuqi },
  { path: '/jineng', component: Jineng },
  { path: '/addhero', component: Addhero },
  { path: '/heroedit/:id', component: Heroedit }
]
//创建路由对象
let router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
