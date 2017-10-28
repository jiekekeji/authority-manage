import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from "../components/pages/Parent.vue"
import Index from "../components/pages/Index.vue"

import ZParent from "../components/ZParent.vue"
import ZDemo0 from "../components/ZDemo0.vue"
import ZDemo1 from "../components/ZDemo1.vue"
Vue.use(VueRouter)

//路由映射配置
const routes = [
  {
    path: '/',
    redirect: '/parent/index'
  },
  {
    path: '/parent',
    component: Parent,
    children: [
      {
        path: "index",
        component: Index
      }
    ]
  },

  //模板代码
  {
    path: '/zparent',
    component: ZParent,
    children: [
      {
        path: "zdemo0",
        component: ZDemo0
      },
      {
        path: "zdemo1",
        component: ZDemo1
      }
    ]
  }
]

//创建实例
const router = new VueRouter({
  routes
})

//全局导航钩子,路由进入之前
router.beforeEach((to, from, next) => {
  // if (to.path === "/login") {
  //   next();
  //   return;
  // }
  //
  // if (!utils.isUserLogin()) {
  //   next("/login");
  //   return;
  // }
  next();
})

router.afterEach(route => {
})


export default router
