/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: +y2ZOeAfA0lDjrq1E5LM1tzkp0C6Rt2UgJ91KgFo9ZeISGw32snnArd5yLMKjiHj7bEN6ci/h0ZnjVOnqiCgyA==
 */

/* eslint-disable */
// tslint:disable

import Accounts, {Accounts_InsertParameters} from './accounts'
import Committees, {Committees_InsertParameters} from './committees'
import Events, {Events_InsertParameters} from './events'

interface DatabaseSchema {
  accounts: {record: Accounts, insert: Accounts_InsertParameters};
  committees: {record: Committees, insert: Committees_InsertParameters};
  events: {record: Events, insert: Events_InsertParameters};
}
export default DatabaseSchema;

function serializeValue(_tableName: string, _columnName: string, value: unknown): unknown {
  return value;
}
export {serializeValue}

export type {
  Accounts,
  Accounts_InsertParameters,
  Committees,
  Committees_InsertParameters,
  Events,
  Events_InsertParameters,
}
