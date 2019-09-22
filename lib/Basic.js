/**
 * @description: 被子类继承,可对子类做些公共配置的基类
 * @author: yx
 */
export default class Basic {
  //类名前缀 用于特殊要求的类名 比如针对 uni element 等特殊框架封装的js方法。
  static prefix = "$Yx";
  //被注册类名用户不是特殊的工具,如果没有在子类中设置className那么这个就会被公共的继承。
  static className = "$YxTest";
}
