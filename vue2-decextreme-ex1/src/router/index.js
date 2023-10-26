import Vue from "vue";
import VueRouter from "vue-router";
import DxEx1 from "../views/DxEx1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/DxEx1",
  },
  {
    path: "/DxEx1",
    name: "DxEx1",
    component: DxEx1,
  },
  {
    path: "/DxEx2",
    name: "DxEx2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DxEx2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
