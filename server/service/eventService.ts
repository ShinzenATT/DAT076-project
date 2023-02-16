import { Event, EventSerialized } from "../model/event";

export interface IEventService {

    // Returns the array of all events
    getEvents() : Promise<Array<Event>>;

    // Creates a new event and adds it to the servers event-array
    createEvent(
        event: EventSerialized
    ) : Promise<Event>

    editEvent(
        event: Event
    ) : Promise<Event>;

    deleteEvent(
        id : number
    ) : Promise<void>;
}

class EventService implements IEventService {
    events : Array<Event> = [];

    async getEvents() : Promise<Array<Event>> {
        return this.events;
    }

    async createEvent(
       data: EventSerialized
    ) : Promise<Event> {
        data.id = this.events.length;
        const event = new Event(data);
        this.events.push(event);
        return event;
    }


    async deleteEvent(
        id : number
    ) : Promise<void>{
        let result = this.events.findIndex(e => e.id === id);

        if(result === -1){
            throw new Error("Event not found");
        }
        this.events.splice(result, 1);
    }

    async editEvent(
        newEvent: Event
    ) : Promise<Event> {
            const current = this.events.find(e => e.id === newEvent.id)
            if(current == null){
                throw new Error("Event not found")
            }

            current.organizer = newEvent.organizer;
            current.name = newEvent.name;
            current.location = newEvent.location;
            current.start = newEvent.start;
            current.end = newEvent.end;
            current.description = newEvent.description;
            current.imagePath = newEvent.imagePath;

            return current;
    }
}

export function makeEventService() : IEventService {
    return new EventService();
}
