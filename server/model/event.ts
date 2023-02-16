export class Event {
    organizer : string;
    name : string;
    location : string;
    start : Date;
    end : Date;
    description : string;
    imagePath : string;
    readonly id : number;

    constructor(data: Event | EventSerialized) {
        this.organizer = data.organizer;
        this.name = data.name;
        this.location = data.location;
        this.description = data.description;
        this.imagePath = data.imagePath;
        this.id = data.id;

        if(typeof data.start === "string"){
            let d = new Date(data.start);
            if(isNaN(d.getTime())){
                throw new Error("start string is not a valid date format: " + data.start);
            }
            this.start = d;
        } else{
            this.start = data.start;
        }

        if(typeof data.end === "string"){
            let d = new Date(data.end);
            if(isNaN(d.getTime())){
                throw new Error("end string is not a valid date format: " + data.end);
            }
            this.end = d;
        } else{
            this.end = data.end;
        }
    }
}

export interface EventSerialized {
    organizer : string;
    name : string;
    location : string;
    start : string;
    end : string;
    description : string;
    imagePath : string;
    id : number;
}