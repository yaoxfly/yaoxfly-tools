import Tool from "./Tools.js";

export default class Test3 extends Tool {
  constructor(name) {
    super("Test3");
    this.name = name;
    this.viewPage = ["首页2", "通讯录2", "发现页2"];
  }

  rsName() {
    return "Test3";
  }
}
