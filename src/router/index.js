import Vue from "vue";
import VueRouter from "vue-router";
import MainViews from '../views/Main/index.vue';
import OrderViews from '../views/Orders/Settings/index.vue';
import OrderLocationViews from '../views/Orders/Location/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainViews
  },
  {
    path: "/order",
    name: "Order",
    component: OrderViews,
    children: [
      // при совпадении пути с шаблоном /user/:id
      // в <router-view> компонента User будет показан UserHome
      { path: 'location', component: OrderLocationViews }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
