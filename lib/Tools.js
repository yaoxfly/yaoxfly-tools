import KeepAlive from "./KeepAlive.js";
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
}
