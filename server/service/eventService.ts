import { Event, EventSerialized } from "../model/event";
import db, {accounts, events} from "../db/database";
import {greaterThan} from "@databases/pg-typed";
import {start} from "repl";

export interface IEventService {

    // Returns the array of all events
    getEvents() : Promise<Array<Event>>;

    // Creates a new event and adds it to the servers event-array
    createEvent(
        event: EventSerialized
    ) : Promise<Event>

    editEvent(
        event: EventSerialized
    ) : Promise<Event>;

    deleteEvent(
        id : number
    ) : Promise<void>;
}

class EventService implements IEventService {
    async getEvents() : Promise<Array<Event>> {
        const res = await events(db).find({start: greaterThan(new Date())}).all();
        const organizers = (await accounts(db).find().select('name', 'id').all());

        return res.map(e => {
            return new Event({
                ...e,
                organizer: organizers.find(o => o.id === e.hostid)?.name ?? 'unknown'
            } as Event)

        })
    }

    async createEvent(
       data: EventSerialized
    ) : Promise<Event> {
        const res = (await events(db).insert({
            name: data.name,
            location: data.location,
            description: data.description,
            hostid: (data.organizer as number),
            start: new Date(data.start),
            stop: new Date(data.stop),
            imagepath: data.imagepath
        }))[0]

        return new Event({
            ...res,
            organizer: (await accounts(db).findOne({id: res.hostid}))?.name ?? 'unknown'
        } as Event);
    }


    async deleteEvent(
        id : number
    ) : Promise<void>{
        await events(db).delete({id});
    }

    async editEvent(
        newEvent: EventSerialized
    ) : Promise<Event> {
            const res = await events(db).update({id: newEvent.id}, {
                name: newEvent.name,
                location: newEvent.location,
                description: newEvent.description,
                start: new Date(newEvent.start),
                stop: new Date(newEvent.stop),
                hostid: newEvent.organizer as number,
                imagepath: newEvent.imagepath
            });

            if(res.length <= 0){
                throw new Error("Event not found");
            }

            return new Event({
                ...res[0],
                organizer: (await accounts(db).findOne({id: newEvent.organizer as number}))?.name ?? 'unknown'
            } as Event);
    }
}

export function makeEventService() : IEventService {
    return new EventService();
}
