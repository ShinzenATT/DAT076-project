/**
 * Specifies the interface for Account & LoginSession
 */

export interface Account {
  id: number
  name: string
  email: string
  admin: boolean
  password?: string | undefined
}

export interface LoginSession {
  token: string
  account: Omit<Account, 'password'>
}
