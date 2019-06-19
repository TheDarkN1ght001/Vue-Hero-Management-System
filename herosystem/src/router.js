//注册路由

//引入vue
import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router'


//给路由准备对应的组件
import Herolist from '../components/herolist.vue'
import Heroedit from '../components/heroedit.vue'
import Addhero from '../components/addhero.vue'
import Wuqi from '../components/wuqi.vue'
import Jineng from '../components/jineng.vue'

//使用
Vue.use(VueRouter)

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

  //把router暴露给vue
  export default router