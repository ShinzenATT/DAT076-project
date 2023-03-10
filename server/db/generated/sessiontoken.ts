/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: 7E/9lEH6tm3tg44m4XsF5tpbtHOhp9/mw4QucVvqysn9DrlNIiOU4zb6AIZ2wbZZ6hwfkfXTTlw4fwXV6LmrHg==
 */

/* eslint-disable */
// tslint:disable

import Accounts from './accounts'

interface Sessiontoken {
  account: Accounts['id']
  /**
   * @default (CURRENT_TIMESTAMP + 180::double precision * '00:01:00'::interval)
   */
  expires: Date
  /**
   * @default gen_random_uuid()
   */
  token: string & {readonly __brand?: 'sessiontoken_token'}
}
export default Sessiontoken;

interface Sessiontoken_InsertParameters {
  account: Accounts['id']
  /**
   * @default (CURRENT_TIMESTAMP + 180::double precision * '00:01:00'::interval)
   */
  expires?: Date
  /**
   * @default gen_random_uuid()
   */
  token?: string & {readonly __brand?: 'sessiontoken_token'}
}
export type {Sessiontoken_InsertParameters}
