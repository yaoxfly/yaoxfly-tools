import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import YxTools from "../lib";
Vue.config.productionTip = false;
//禁止缩放
YxTools.ForbidScaling()
  .setForbidScaling({ preventDefault: true, message: false })
  .then(res => {
    // console.log(res);
    if (res) {
      alert(true);
    }
  });
//KeepAlive 前进刷新 后退缓存
let assembly = ["about", "home"];
YxTools.KeepAlive({ router, assembly });
new Vue({
  router,
  store,
  render: h => h(App),
  created() {}
}).$mount("#app");
