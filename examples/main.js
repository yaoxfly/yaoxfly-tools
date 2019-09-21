import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Yxtool from "../lib";
Vue.config.productionTip = false;
let assembly = ["about", "home"];
Yxtool.Tools.KeepAlive({ router, assembly });
new Vue({
  router,
  store,
  render: h => h(App),
  created() {}
}).$mount("#app");
