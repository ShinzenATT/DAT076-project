import { Event } from "../model/event";

export interface IEventService {

    // Returns the array of all events
    getEvents() : Promise<Array<Event>>;

    // Creates a new event and adds it to the servers event-array
    createEvent(
        organizer : string,
        name : string,
        location : string,
        start : string,
        stop : string,
        description : string,
        image : string
    ) : Promise<Event>

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
        start : string,
        stop : string,
        description : string,
        image : string
    ) : Promise<Event> {
        const event = new Event(organizer, name, location, new Date(start), new Date(stop), description, image, this.events.length);
        this.events.push(event);
        return event;
    }

    // TODO do not return false on error, throw error instead
    async deleteEvent(
        id : number
    ) : Promise<any>{
        try {
            // TODO check for empty array instead of  exception
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
    ) : Promise<Event> {
            const current = this.events.find(e => e.id === id)
            if(current == null){
                // TODO maybe use boolean return instead
                throw new Error("Event  not found")
            }

            current.organizer = organizer;
            current.name = name;
            current.location = location;
            current.start = start;
            current.stop = stop;
            current.description = description;
            current.imagePath = image;

            return current;
    }
}

export function makeEventService() : IEventService {
    return new EventService();
}
