## yaoxfly-tools

### 介绍

公共类库

### 安装教程

```
npm i yaoxfly-tools
```

### 使用说明

#### 1. **KeepAlive**

    使用 `KeepAlive` 保持前进 刷新 后退缓存 目前方法用于后台管理系统

- 第一步在 `main.js` 引入

```
import Yxtools from "yaoxfly-tools";
```

- 第二步在 `main.js` 中使用

```
let assembly = ["about", "home"];
YxTools.KeepAlive({ router, assembly });
```

- 第三步在 `router.js` 中左侧包含的菜单中(第一级路由)使用

```
meta: {
 keepAlive: true
}
```

- 第四步在 `router.js` 中左侧包含的菜单中(第一级路由)使用

```
<keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
```

- **Options**
  |参数|说明|类型|可选值|默认值|平台差异|
  |--|--|--|--|--|--|
  |router|vue-router 对象|object|—|—|H5|
  |assembly |左侧菜单栏里的所有值(第一级路由) |array|—|—|H5|

> tips: `Tools.KeepAlive` 固体用法,不可更改 `router`, `assembly` 这两个属性名不可修改 `assembly` 数据里包含的是左侧菜单栏里的所有值(第一级路由)

**注意:**

```
如果是有嵌套的子路由,那么父路由的 <router-view></router-view>
不需要加 <keep-alive>
```

#### 2. **ForbidScaling**

使用 `ForbidScaling` 能够禁止网页缩放并能够做出提示

- 第一步在 `main.js` 引入

```
import Yxtools from "yaoxfly-tools";
```

- 第二步在 `main.js` 中使用

```
let assembly = ["about", "home"];
YxTools.KeepAlive({ router, assembly });
```

```
YxTools.ForbidScaling()
  .setForbidScaling({ preventDefault: true, message: false })
  .then(res => {
    // console.log(res);
    if (res) {
      alert(true);
    }
  });
```

- **Options**
  |参数|说明|类型|可选值|默认值|平台差异|
  |--|--|--|--|--|--|
  |preventDefault|是否阻止缩放行为|boolean|—|true|H5|
  |message|是否需要提示 回调函数 |boolean|—|true|H5|
