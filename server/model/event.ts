import {Events} from "../db/generated";

/**
 * Event class with constructor
 */

export class Event {
    organizer : string;
    name : string;
    location : string;
    start : Date;
    stop : Date;
    description : string;
    imagepath : string;
    readonly id : number;

    constructor(data: Event | EventSerialized) {
        this.organizer = data.organizer.toString();
        this.name = data.name;
        this.location = data.location;
        this.description = data.description;
        this.imagepath = data.imagepath;
        this.id = data.id;

        // If start or stop date is in string-form it gets translated to JavaScript date format //
        // Throws an error if string is not valid format //
        if(typeof data.start === "string"){
            let d = new Date(data.start);
            if(isNaN(d.getTime())){
                throw new Error("start string is not a valid date format: " + data.start);
            }
            this.start = d;
        } else{
            this.start = data.start;
        }

        if(typeof data.stop === "string"){
            let d = new Date(data.stop);
            if(isNaN(d.getTime())){
                throw new Error("end string is not a valid date format: " + data.stop);
            }
            this.stop = d;
        } else{
            this.stop = data.stop;
        }
    }
}

export interface EventSerialized {
    organizer : string | number;
    name : string;
    location : string;
    start : string;
    stop : string;
    description : string;
    imagepath : string;
    id : number;
}
