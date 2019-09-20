export default class KeepAlive {
  constructor(option) {
    const { router, assembly } = option || {};
    this.router = router;
    this.assembly = assembly;
    this.setKeepAlive();
  }
  setKeepAlive() {
    this.router.beforeEach((to, from, next) => {
      from.meta.keepAlive = true;
      const toArr = this.assembly;
      let fromArr = [...toArr, "null"];
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
