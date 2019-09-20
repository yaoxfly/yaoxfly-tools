import Test1 from "./Test1.js";
import Test2 from "./Test1.js";
import Test3 from "./Test1.js";
export default class Tools {
  constructor() {
    // new.target 模拟抽象类 不让外部new
    if (new.target === Tools) {
      throw new Error("抽象类不能实例化!");
    }
  }

  static Test1(option) {
    return new Test1(option);
  }

  static Test2(option) {
    return new Test2(option);
  }
  static Test3(option) {
    return new Test3(option);
  }
}
