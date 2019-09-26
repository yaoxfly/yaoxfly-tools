import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import YxTool from "../lib";
Vue.config.productionTip = false;
let assembly = ["about", "home"];
Vue.use(YxTool);

console.log(YxTool.Tools.ForbidScaling());
YxTool.Tools.KeepAlive({ router, assembly });
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log(this.$YxTest.getTest());
  }
}).$mount("#app");
