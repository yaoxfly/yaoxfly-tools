/**
 * @description: 主引入类 引入各种类 并安装导出供第三方使用
 * @author: yx
 */
import Tools from "./Tools"; //直接使用的 在main.js中只使用一次的
import Test from "./Test"; //各种基本工具类
// 基本工具类的以数组保存，便于遍历,可用来安装
const utils = [Test];
// 定义 install 方法
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  // 遍历并注册
  utils.forEach(item => {
    Vue.prototype[item.className] = item;
  });
};
//  全局引用可自动安装
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...utils,
  Tools
};
