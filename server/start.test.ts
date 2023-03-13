import { Server } from "http";
import { EventSerialized } from "./model/event";
import { app } from "./start";
import fetch from "node-fetch";
import db, {accounts, events, sql} from "./db/database";

let server: Server;

beforeAll(async () => {
    await accounts(db).delete({})
    await accounts(db).insert({name: "user", email: "a@b.c", password: "test", id: 1})
    await events(db).delete({});
    await db.query(sql`ALTER SEQUENCE events_id_seq RESTART WITH 1;`)
})

beforeEach(() => {
    return new Promise((resolve, reject) => {
        server = app.listen(8080, () => {
            console.log("server started at port 8080")
            resolve(undefined)
        });
    })
});

afterEach(() => {
    return new Promise((resolve, reject) => {
    server.close(e => {
        console.log(e ?? "server closed")
        if(e){
            reject(e)
        } else{
            resolve(undefined)
        }
    })
    })
});

test("Event routes", async () => {
    expect(await (await fetch("http://localhost:8080/events")).json()).toStrictEqual([]);

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

    const post = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });

    event.organizer = 'user';

    expect(post.status).toStrictEqual(201);
    expect(await post.json()).toStrictEqual(event);
    expect(await (await fetch("http://localhost:8080/events")).json()).toStrictEqual([event]);

    event.name = "in testing";
    event.description = "woah";
    event.location = "anywhere else";
    event.imagepath = "/image.png";
    event.organizer = 1;
    event.stop = new Date(Date.now() + 100000).toJSON();

    const put = await fetch("http://localhost:8080/events", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });

event.organizer = 'user';

    expect(put.status).toStrictEqual(200);
    expect(await put.json()).toStrictEqual(event);
    expect(await (await fetch("http://localhost:8080/events")).json()).toStrictEqual([event]);

    const del = await fetch("http://localhost:8080/events/" + 1, {
        method: "DELETE"
    });
    expect(del.status).toStrictEqual(200);
    expect(await (await fetch("http://localhost:8080/events")).json()).toStrictEqual([]);
});
