import Vue from "vue";
import VueRouter from "vue-router";
import MainViews from "@views/Main/index.vue";
import OrderViews from "@views/Orders/Settings/index.vue";
import OrderLocationViews from "@views/Orders/Location/index.vue";
import OrderModelsViews from "@views/Orders/Models/index.vue";
import OrderAdditionallyViews from "@views/Orders/Additionally/index.vue";
import OrderResultViews from "@views/Orders/Results/index.vue";
import OrderConfirmedViews from "@views/Orders/Confirmed/index.vue";
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
    children: [
      { path: "location", component: OrderLocationViews },
      { path: "models", component: OrderModelsViews },
      { path: "additionally", component: OrderAdditionallyViews },
      { path: "result", component: OrderResultViews },
      { path: "confirmed", component: OrderConfirmedViews },
    ],
  },
  // {
  //   path: "/confirmed",
  //   name: "ConfirmedOrder",
  //   component: OrderViews,
  //   children: [{ path: "/", component: OrderResultViews, name: "confirmed" }],
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
