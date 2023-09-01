import React from "react";
import { LoginStore } from "./login.Store";

// 声明一个root store
class RootStore {

  loginStore: LoginStore;

  constructor() {
    // 对子模块进行实例化
    this.loginStore = new LoginStore()
  }
}

//使用context机制完成统一方法封装
const rootStore = new RootStore()
const context = React.createContext(rootStore)
// 通过¨useContext拿到rootStore实例对象，然后返回
// 只要调用useStore()就能拿到rootStore
const useStore = () => React.useContext(context)
export { useStore }