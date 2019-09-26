/**
 * @description: 禁止缩放 ctrl +/-  禁止ctrl+鼠标滚轮  这个类只需要在main.js中引入 不需要Vue.use
 * @author: yx
 */
export default class ForbidScaling {
  constructor(option) {
    const { preventDefault = true, Message = true } = option || {};
    this.preventDefault = preventDefault;
    this.Message = Message;
    this.setForbidScaling();
  }

  //静态方法 增强可读性 单例
  static getInstance(option) {
    if (!this.instance) {
      //判断这个实例是否存在 不存在就new 否则就输出这个实例
      this.instance = new ForbidScaling(option);
    }
    return this.instance;
  }

  setForbidScaling() {
    //禁止Ctrl + （+/-）组合
    document.addEventListener(
      "keydown",
      function(event) {
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

          if (this.Message) {
            alert(1);
          }
        }
      },
      false
    );

    //火狐  禁止ctrl+鼠标滚轮组合
    document.addEventListener(
      "DOMMouseScroll",
      function(event) {
        if (event.ctrlKey === true || event.metaKey) {
          if (this.preventDefault) {
            event.preventDefault();
          }

          if (this.Message) {
            alert(1);
          }
        }
      },
      false
    );

    //其他ie,360,google等  禁止ctrl+鼠标 组合
    document.addEventListener(
      "mousewheel",
      function(event) {
        if (event.ctrlKey === true || event.metaKey) {
          if (this.preventDefault) {
            event.preventDefault();
          }

          if (this.Message) {
            alert(1);
          }
        }
      },
      //新版本的浏览器才能用这种写法
      { passive: false }
    );
  }
}
