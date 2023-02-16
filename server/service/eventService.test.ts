import { IEventService, makeEventService } from "./eventService";
import { Event, EventSerialized } from "../model/event";

interface TestService extends IEventService{
    events: Event[]
}

test("Create event", async () => {
    const event: EventSerialized = {
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date().toJSON(),
        end: new Date().toJSON(),
        location: "Lindholmen",
        imagePath: '/'
    };
    const service = makeEventService() as TestService;
    await service.createEvent(event);
    expect(service.events[0]).toStrictEqual(new Event(event));

    await service.createEvent(event);
    event.id = 1;
    expect(service.events[1]).toStrictEqual(new Event(event));
});

test("Get event", async () => {
    const event = new Event({
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date(),
        end: new Date(),
        location: "Lindholmen",
        imagePath: '/'
    });
    const service = makeEventService() as TestService;
    service.events.push(event);
    expect(await service.getEvents()).toStrictEqual([event]);
});

test("Edit event", async () => {
    const event = new Event({
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date(),
        end: new Date(),
        location: "Lindholmen",
        imagePath: '/'
    });
    const service = makeEventService() as TestService;
    service.events.push(new Event(event));
    event.name = "in testing";
    event.description = "ription";
    await service.editEvent(event);

    expect(service.events[0]).toStrictEqual(event);
});

test("Invalid timestamp test", async () => {
    const event: EventSerialized = {
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: "totally not a time",
        end: "totally not a time",
        location: "Lindholmen",
        imagePath: '/'
    };
    const service = makeEventService() as TestService;
    let trip = false;
    try {
        await service.createEvent(event);
    } catch (error) {
        trip = true;
    }
    expect(trip).toBeTruthy();
    trip = false;
    const works = {
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date().toJSON(),
        end: new Date().toJSON(),
        location: "Lindholmen",
        imagePath: '/'
    };
    service.events.push(new Event(works));

    try {
        await service.editEvent(new Event(event))
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
        organizer: 'H-tek',
        start: new Date().toJSON(),
        end: new Date().toJSON(),
        location: "Lindholmen",
        imagePath: '/'
    };
    const service = makeEventService() as TestService;
    service.events.push(new Event(event));
    event.id = 0;
    let trip = false;
    try {
        await service.editEvent(new Event(event));
    } catch (error: any) {
        trip = true;
        expect(error.message).toStrictEqual("Event not found");
    }
    expect(trip).toBeTruthy();
    trip = false;
    
    try {
        await service.deleteEvent(0);
    } catch (error: any) {
        expect(error.message).toStrictEqual("Event not found");
        trip = true;
    }
    expect(trip).toBeTruthy();
});

test("Delete event", async () => {
    const event = new Event({
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date(),
        end: new Date(),
        location: "Lindholmen",
        imagePath: '/'
    });
    const service = makeEventService() as TestService;
    service.events.push(event);
    await service.deleteEvent(0);

    expect(service.events.length).toStrictEqual(0);
});

test("Full event service test", async () => {
    const event: EventSerialized = {
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date().toJSON(),
        end: new Date().toJSON(),
        location: "Lindholmen",
        imagePath: '/'
    };
    const service = makeEventService() as TestService;
    expect(service.events.length).toStrictEqual(0);
    expect(await service.getEvents()).toStrictEqual(service.events);

    await service.createEvent(event);
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    event.description = "wah";
    event.end = new Date().toJSON();
    event.location = "not here";

    await service.editEvent(new Event(event));
    expect((await service.getEvents())[0]).toStrictEqual(new Event(event));

    await service.deleteEvent(0);
    expect((await service.getEvents()).length).toStrictEqual(0);
});