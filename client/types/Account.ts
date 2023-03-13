/**
 * Account & Login session
 *
 * Specifies the variables for the account-type and login session
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
