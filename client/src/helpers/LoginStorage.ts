/**
 * Helper for saving login-session
 */

import {LoginSession} from "../../types/Account";

export class LoginStorage{
  // in case user turns of cookies
  private static savedData: LoginSession | null = null

  static get(): LoginSession | null{
    try {
      const data = localStorage.getItem('login')
      if(data === null)
        return null
      return JSON.parse(data)
    } catch (e) {
      console.warn('Cookies are disabled')
      return this.savedData
    }
  }
  static set (data: LoginSession): void{
    this.savedData = data
    try {
      localStorage.setItem('login', JSON.stringify(data))
    } catch (e) {
      console.warn('Cookies are disabled')
    }
  }

  static clear(): void{
    this.savedData = null
    try {
      localStorage.removeItem('login')
    } catch (e) {
      console.warn('Cookies are disabled')
    }
  }
}
