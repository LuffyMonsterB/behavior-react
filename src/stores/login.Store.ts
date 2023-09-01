import { observable } from "mobx";

export class LoginStore {
  role?: string;
  account?: string;
  token?: string;

  constructor() {
    observable(this)
  }

  login({ role, account, password }: { role: string, account: string, password: string }) {
    // http request
    if (role === 'admin' && account === 'admin' && password === '123456') {
      const res = { token: 'wqdjwqoidjwqo' }
      this.role = role
      this.account = account
      this.token = res.token
      localStorage.setItem('role', this.role)
      localStorage.setItem('account', this.account)
      localStorage.setItem('token', this.token)
      return true;
    }
    return false
  }
  logout() {
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    localStorage.removeItem('account')
  }
}