import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Yxtool from "../lib";
Vue.config.productionTip = false;
let assembly = ["about", "home"];
Vue.use(Yxtool);

Yxtool.Tools.KeepAlive({ router, assembly });
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log(this.$YxTest.getTest());
  }
}).$mount("#app");
