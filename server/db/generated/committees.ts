/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: vMpG/ZXw+L/vZsO83vkPQMzMS7lvn4yuvbm2rq/iFT05m2IamKIIL8TnI6dAMkd8PizTOjd1G3XaFQ0IN7CnVQ==
 */

/* eslint-disable */
// tslint:disable

import {Associationtype} from './_enums'
import Accounts from './accounts'

interface Committees {
  banner_url: (string) | null
  description: (string) | null
  facebook: (string) | null
  id: Accounts['id']
  instagram: (string) | null
  logo_url: (string) | null
  type: Associationtype
  website: (string) | null
}
export default Committees;

interface Committees_InsertParameters {
  banner_url?: (string) | null
  description?: (string) | null
  facebook?: (string) | null
  id: Accounts['id']
  instagram?: (string) | null
  logo_url?: (string) | null
  type: Associationtype
  website?: (string) | null
}
export type {Committees_InsertParameters}