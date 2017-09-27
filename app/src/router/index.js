import Vue from 'vue'
import Router from 'vue-router'
//1,导入组件
import Home from '@/components/Home'
import Mine from '@/components/Mine'

Vue.use(Router);

//2，注册路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
