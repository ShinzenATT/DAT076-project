/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: PWtXhwRyJIemWqD1PAyY0tdVohHNtYemOcVM0xTEsxEgVB6vKq0dehK3/YJk3AuTOit66XxcvZZkkp80Y0eHOg==
 */

/* eslint-disable */
// tslint:disable

interface Accounts {
  /**
   * @default false
   */
  admin: boolean
  email: string
  /**
   * @default nextval('accounts_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'accounts_id'}
  name: string
  password: string
}
export default Accounts;

interface Accounts_InsertParameters {
  /**
   * @default false
   */
  admin?: boolean
  email: string
  /**
   * @default nextval('accounts_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'accounts_id'}
  name: string
  password: string
}
export type {Accounts_InsertParameters}
