import { Event } from "../model/event";

export interface IEventService {

    // Returns the array of all events
    getEvents() : Promise<Array<Event>>;

    // Creates a new event and adds it to the servers event-array
    createEvent(
        organizer : string,
        name : string,
        location : string,
        start : Date,
        stop : Date,
        description : string,
        image : string,
        id : number
    ) : Promise<Event>;

    editEvent(
        organizer : string,
        name : string,
        location : string,
        start : Date,
        stop : Date,
        description : string,
        image : string,
        id : number
    ) : Promise<Event>;

    deleteEvent(
        id : number
    ) : Promise<boolean>;
}

class EventService implements IEventService {
    events : Array<Event> = [];

    async getEvents() : Promise<Array<Event>> {
        return this.events;
    }

    async createEvent(
        organizer : string,
        name : string,
        location : string,
        start : Date,
        stop : Date,
        description : string,
        image : string,
        id : number
    ) : Promise<Event> {
        const event = new Event(organizer, name, location, start, stop, description, image, id);
        this.events.push(event);
        return event;
    }

    async deleteEvent(
        id : number
    ) : Promise<any>{
        try {
            this.events.splice(id, 1);
        }catch (e){
            return false;
        }
        return true


    }

    async editEvent(
        organizer : string,
        name : string,
        location : string,
        start : Date,
        stop : Date,
        description : string,
        image : string,
        id : number
    ) : Promise<any> {

        try{

            for(let i = 0; i < this.events.length; i++){
                let current = this.events[i];

                if(current.id == id) {

                    current.organizer = organizer;
                    current.name = name;
                    current.location = location;
                    current.start = start;
                    current.stop = stop;
                    current.description = description;
                    current.imagePath = image;

                    this.events[i] = current;
                    return current;
                }
            }
        } catch (e) {
            reportError(e)
        }

        return undefined;
    }
}

export function makeEventService() : IEventService {
    return new EventService();
}