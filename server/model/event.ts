export class Event {
    organizer : string;
    name : string;
    location : string;
    start : Date;
    stop : Date;
    description : string;
    imagePath : string;
    readonly id : number;

    constructor(organizer : string,
                name : string,
                location : string,
                start : Date,
                stop : Date,
                description : string,
                image : string,
                id : number,
                ) {
        this.organizer = organizer;
        this.name = name;
        this.location = location;
        this.start = start;
        this.stop = stop;
        this.description = description;
        this.imagePath = image;
        this.id = id;
    }
}