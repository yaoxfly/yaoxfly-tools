# yaoxfly-tools

#### 介绍

包含公共方法 公共类库

#### 安装教程

```
npm i yaoxfly-tools
```

#### 使用说明

1.  KeepAlive

    使用 KeepAlive 保持前进 刷新 后退缓存 目前方法用于后台管理系统

- 第一步在 main.js 引入

```
import Yxtool from "yaoxfly-tools";
```

- 第二步在 main.js 中使用

```
let assembly = ["about", "home"];
Yxtool.Tools.KeepAlive({ router, assembly });
```

- 第三步在 router.js 中左侧包含的菜单中(第一级路由)使用

```
meta: {
 keepAlive: true
}
```

- 第四步在 router.js 中左侧包含的菜单中(第一级路由)使用

```
<keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
```

> tips: Tools.KeepAlive 固体用法,不可更改 router, assembly 这两个属性名不可修改 assembly 数据里包含的是左侧菜单栏里的所有值(第一级路由)

**注意:**

```
如果是有嵌套的子路由,那么父路由的 <router-view></router-view> 不需要加 <keep-alive>
```
