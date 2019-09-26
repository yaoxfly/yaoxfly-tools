/**
 * @description: 前进,刷新后退缓存 这个类只需要在main.js中引入 不需要 Vue.use
 * @author: yx
 */
export default class KeepAlive {
  constructor(option) {
    const { router, assembly } = option || {};
    this.router = router;
    this.assembly = assembly;
    this.setKeepAlive();
  }

  //静态方法 增强可读性 单例
  static getInstance(option) {
    if (!this.instance) {
      //判断这个实例是否存在 不存在就new 否则就输出这个实例
      this.instance = new KeepAlive(option);
    }
    return this.instance;
  }

  setKeepAlive() {
    this.router.beforeEach((to, from, next) => {
      from.meta.keepAlive = true;
      const toArr = this.assembly;
      let fromArr = [...toArr, "null"];
      //使用组件的name来判定
      if (toArr.indexOf(to.name) > -1 && fromArr.indexOf(from.name) > -1) {
        from.meta.keepAlive = false;
      }
      if (fromArr.indexOf(from.name) <= -1) {
        from.meta.keepAlive = false;
      }
      next();
    });
  }
}
