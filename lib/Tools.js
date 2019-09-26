/**
 * @description: 特殊工具工厂类, 就是可能不会在页面中使用的工具类,只作用于main.js中,可能只会被使用一次
 * @author: yx
 */
import KeepAlive from "./KeepAlive.js";
import ForbidScaling from "./ForbidScaling.js";
export default class Tools {
  constructor() {
    // new.target 模拟抽象类 不让外部new
    if (new.target === Tools) {
      throw new Error("抽象类不能实例化!");
    }
  }
  static KeepAlive(option) {
    return KeepAlive.getInstance(option);
  }
  static ForbidScaling(option) {
    return ForbidScaling.getInstance(option);
  }
}
