import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from "../components/Container.vue"
import Parent from "../components/Parent.vue"
import Plogin from "../components/Plogin.vue"
import Pdemo0 from "../components/PDemo0.vue"
import Pdemo1 from "../components/PDemo1.vue"
Vue.use(VueRouter)

//路由映射配置
const routes = [
  {
    path: '/',
    redirect: '/parent/pdemo0'
  },
  {
    path: '/parent',
    component: Parent,
    children: [
      {
        path: "pdemo0",
        component: Pdemo0
      },
      {
        path: "pdemo1",
        component: Pdemo1
      }
    ]
  },
  {
    path: "/plogin",
    component: Plogin,
  },
  {
    path: '/container',
    component: Container,
    children: [
      {
        path: "pdemo0",
        component: Pdemo0
      },
      {
        path: "pdemo1",
        component: Pdemo1
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
