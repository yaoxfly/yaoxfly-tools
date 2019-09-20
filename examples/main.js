import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tools from "../lib/Tools";
Vue.config.productionTip = false;
// Vue.prototype.$Tools = Tools;
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const res = Tools.Test1().rsName();
    console.log(res);
  }
}).$mount("#app");
