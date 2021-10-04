import Vue from "vue";
import VueRouter from "vue-router";
import MainViews from "../views/Main/index.vue";
import OrderViews from "../views/Orders/Settings/index.vue";
import OrderLocationViews from "../views/Orders/Location/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainViews,
  },
  {
    path: "/order",
    name: "Order",
    component: OrderViews,
    children: [{ path: "location", component: OrderLocationViews }],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
