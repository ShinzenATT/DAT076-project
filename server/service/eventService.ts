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
    ) : Promise<Event>
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
}

export function makeEventService() : IEventService {
    return new EventService();
}