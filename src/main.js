import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faTelegram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret);
library.add(faTelegram);
library.add(faFacebook);
library.add(faInstagram);
library.add(faMapMarkerAlt);
import EasySlider from "vue-easy-slider";

Vue.use(EasySlider);
Vue.use(Vuex);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
