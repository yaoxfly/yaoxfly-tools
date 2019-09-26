/**
 * @description: 禁止缩放 ctrl +/-  禁止ctrl+鼠标滚轮  这个类只需要在main.js中引入 不需要Vue.use
 * @author: yx
 */
export default class ForbidScaling {
  constructor() {}

  //静态方法 增强可读性 单例
  static getInstance() {
    if (!this.instance) {
      //判断这个实例是否存在 不存在就new 否则就输出这个实例
      this.instance = new ForbidScaling();
    }
    return this.instance;
  }

  //禁止滚轮事件
  setForbidScaling(option) {
    const { preventDefault = true, message = true } = option || {};
    this.preventDefault = preventDefault;
    this.message = message;

    //禁止Ctrl + （+/-）组合 监听键盘事件
    return new Promise(resolve => {
      document.addEventListener(
        "keydown",
        event => {
          if (
            (event.ctrlKey === true || event.metaKey === true) &&
            (event.which === 61 ||
              event.which === 107 ||
              event.which === 173 ||
              event.which === 109 ||
              event.which === 187 ||
              event.which === 189)
          ) {
            if (this.preventDefault) {
              event.preventDefault();
            }
            if (this.message) {
              resolve(true);
            }
          }
        },
        false
      );
      //火狐  禁止ctrl+鼠标滚轮组合 监听鼠标事件
      document.addEventListener(
        "DOMMouseScroll",
        event => {
          if (event.ctrlKey === true || event.metaKey) {
            console.log(11);
            if (this.preventDefault) {
              event.preventDefault();
            }

            if (this.message) {
              resolve(true);
            }
          }
        },
        false
      );
      //其他ie,360,google等  禁止ctrl+鼠标 组合 监听鼠标事件
      document.addEventListener(
        "mousewheel",
        event => {
          if (event.ctrlKey === true || event.metaKey) {
            if (this.preventDefault) {
              event.preventDefault();
            }

            if (this.message) {
              resolve(true);
            }
          }
        },
        //新版本的浏览器用这种写法,不然,阻止默认行为无效。
        { passive: false }
      );
    });
  }
}
