/**
 * Test for the eventService class
 */

// Imports
import { IEventService, makeEventService } from "./eventService";
import { Event, EventSerialized } from "../model/event";
import db, {accounts, events, sql} from "../db/database";
import {Events} from "../db/generated";

// Happens once before the tests run //
// - Deletes all accounts
// - Adds a test account
// - Deletes all events
// - Changes the sequence generator parameters
beforeAll(async () => {
    await accounts(db).delete({})
    await accounts(db).insert({name: "user", email: "a@b.c", password: "test", id: 1})
    await events(db).delete({});
    await db.query(sql`ALTER SEQUENCE events_id_seq RESTART WITH 1;`)
})

// Happens after each test //
// - Deletes all events
// - Changes the sequence generator parameters
afterEach(async () => {
    await events(db).delete({})
    await db.query(sql`ALTER SEQUENCE events_id_seq RESTART WITH 1;`)
});

// Happens after all tests are done //
// - Deletes all events
// - Changes the sequence generator parameters
afterAll(async () => {
    await events(db).delete({})
    await db.query(sql`ALTER SEQUENCE events_id_seq RESTART WITH 1;`)
})

// Tests the 'getEvents()' method
test("Get event", async () => {

    // Creates a test-event
    const event ={
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 'user',
        start: new Date(Date.now() + 100000),
        stop: new Date(Date.now() + 100000),
        location: "Lindholmen",
        imagepath: '/'
    };

    // Creates an eventService object and inserts the test-event
    const service = makeEventService();
    await events(db).insert({
        id: event.id,
        name: event.name,
        location: event.location,
        description: event.description,
        start: event.start,
        stop: event.stop,
        imagepath: event.imagepath,
        hostid: 1
    })

    // Checks that the test-event and the fetched event are the same
    expect(await service.getEvents()).toStrictEqual([new Event(event)]);
});

/**
 * TODO:
 * This class shouldn't be reliant on a local variable placed in Service.events
 * This class should only access public classes in Service.
 * You test a module through its public interface.
 * An example here is line 69
 */


// Tests the 'createEvent()' method
test("Create event", async () => {

    // Creates a test-event
    const event: EventSerialized = {
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date(Date.now() + 100000).toJSON(),
        stop: new Date(Date.now() + 100000).toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };

    // Creates an eventService object and creates the test-event
    const service = makeEventService();
    await service.createEvent(event);

    // Sets the event organizer to 'user'
    event.organizer = 'user'

    // Checks if fetched event and the test-event are the same
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    event.organizer = 1;
    await service.createEvent(event);
    event.id = 2;
    event.organizer = 'user';
    expect((await service.getEvents())[1]).toStrictEqual(new Event(event));

});

// Tests the 'editEvent()' method
test("Edit event", async () => {
    const event: EventSerialized ={
        id: 1,
        name: 'test',
        description: 'desc',
        organizer: 1,
        start: new Date(Date.now() + 100000).toJSON(),
        stop: new Date(Date.now() + 100000).toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await events(db).insert({
        id: event.id,
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
        start: new Date(Date.now() + 100000).toJSON(),
        stop: new Date(Date.now() + 100000).toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    await events(db).insert({
        name: event.name,
        location: event.location,
        description: event.description,
        start: new Date(Date.now() + 100000),
        stop: new Date(Date.now() + 100000),
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
        start: new Date(Date.now() + 100000).toJSON(),
        stop: new Date(Date.now() + 100000).toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    await events(db).insert({
        id: event.id,
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
        start: new Date(Date.now() + 100000),
        stop: new Date(Date.now() + 100000),
        location: "Lindholmen",
        imagepath: '/'
    });
    const service = makeEventService();
    await events(db).insert({
        id: event.id,
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
        start: new Date(Date.now() + 100000).toJSON(),
        stop: new Date(Date.now() + 100000).toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };
    const service = makeEventService();
    expect((await service.getEvents()).length).toStrictEqual(0);

    await service.createEvent(event);
    event.organizer = 'user';
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    event.description = "wah";
    event.stop = new Date(Date.now() + 100000).toJSON();
    event.location = "not here";
    event.organizer  = 1;

    await service.editEvent(event);
    event.organizer = 'user';
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    await service.deleteEvent(1);
    expect((await service.getEvents()).length).toStrictEqual(0);

});
