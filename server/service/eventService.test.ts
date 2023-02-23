import { IEventService, makeEventService } from "./eventService";
import { Event, EventSerialized } from "../model/event";
import db, {accounts, events} from "../db/database";
import {Events} from "../db/generated";

beforeAll(async () => {
    await accounts(db).insert({name: "user", email: "a@b.c", password: "test"})
    await events(db).delete({});
})

afterEach(async () => await events(db).delete({}));

test("Get event", async () => {
    const event ={
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'user',
        start: new Date(),
        stop: new Date(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: event.start,
        stop: event.stop,
        imagepath: event.imagepath,
        hostid: 1
    })
    expect(await service.getEvents()).toStrictEqual([new Event(event)]);
});

test("Create event", async () => {
    const event: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await service.createEvent(event);
    event.organizer = 'user'
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    event.organizer = 1;
    await service.createEvent(event);
    event.id = 2;
    event.organizer = 'user';
    expect((await service.getEvents())[1]).toStrictEqual(new Event(event));
});

test("Edit event", async () => {
    const event: EventSerialized ={
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: new Date(event.start),
        stop: new Date(event.stop),
        imagepath: event.imagepath,
        hostid: 1
    } as Events)
    event.name = "in testing";
    event.description = "ription";
    await service.editEvent(event);
    event.organizer = 'user'

    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));
});

test("Invalid timestamp test", async () => {
    const event: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: "totally not a time",
        stop: "totally not a time",
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService() ;
    let trip = false;
    try {
        await service.createEvent(event);
    } catch (error) {
        trip = true;
    }
    expect(trip).toBeTruthy();
    trip = false;
    const works: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 'user',
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: new Date(event.start),
        stop: new Date(event.stop),
        imagepath: event.imagepath,
        hostid: 1
    } as Events)

    try {
        await service.editEvent(event)
    } catch (error) {
        trip = true;
    }
    expect(trip).toBeTruthy();
})

test("Event not found test", async () => {
    const event: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: new Date(event.start),
        stop: new Date(event.stop),
        imagepath: event.imagepath,
        hostid: 1
    } as Events);

    event.id = 2;
    let trip = false;
    try {
        await service.editEvent(event);
    } catch (error: any) {
        trip = true;
        expect(error.message).toStrictEqual("Event not found");
    }
    expect(trip).toBeTruthy();
});

test("Delete event", async () => {
    const event = new Event({
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 'user',
        start: new Date(),
        stop: new Date(),
        location: "Lindholmen",
        imagepath: '/'
    });
    const service = makeEventService();
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: new Date(event.start),
        stop: new Date(event.stop),
        imagepath: event.imagepath,
        hostid: 1
    } as Events)
    await service.deleteEvent(1);

    expect((await service.getEvents()).length).toStrictEqual(0);
});

test("Full event service test", async () => {
    const event: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    expect((await service.getEvents()).length).toStrictEqual(0);

    await service.createEvent(event);
    event.organizer = 'user';
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    event.description = "wah";
    event.stop = new Date().toJSON();
    event.location = "not here";
    event.organizer  = 1;

    await service.editEvent(event);
    event.organizer = 'user';
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    await service.deleteEvent(0);
    expect((await service.getEvents()).length).toStrictEqual(0);
});
