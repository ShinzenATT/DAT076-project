/**
 * Events
 *
 * Specifies the variables for the event-type.
 */

import {Committee} from "./committees";

export interface Event {
  organizer : Committee | number | string;
  name : string;
  location : string;
  start : string;
  stop : string;
  description : string;
  imagepath : string | null;
  id : number;
}
