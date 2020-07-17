import Vue from 'vue'
import VueRouter from 'vue-router'
import Pizzas from '../views/Pizzas.vue'
import guard from '../userlib/UserGuardService'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Pizzas',
    component: Pizzas
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ingredients" */ '../views/Ingredients.vue'),
    meta:{
      role:'admin'
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/pizzas/add',
    name: 'AddPizza',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addPizza" */ '../views/AddPizza.vue')
  },
 {
  path: '/pizzas/edit/:idPizza',
  name: 'EditPizza',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "editPizza" */ '../views/EditPizza.vue')
 }
  ]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//si estas autorizado (por ejem ingredientes) accede, sino te redirige a login
router.beforeEach(async (to, from, next) => {
  const { role } = to.meta || {}
  const isAuthorize = await guard(role)
  if (!isAuthorize) {
    next({ name: 'Login' })
  }
  else {
    next();
  }

})
export default router
