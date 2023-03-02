import { Server } from "http";
import { EventSerialized } from "./model/event";
import { app } from "./start";
import fetch from "node-fetch";

let server: Server;

beforeEach(() => {
    server = app.listen(8080, () => console.log("server started at port 8080"));
});

afterEach(() => {
    server.close(e => console.log(e ?? "server closed"));
});

test("Event routes", async () => {
    expect(await (await fetch("http://localhost:8080/event")).json()).toStrictEqual([]);

    const event: EventSerialized = {
        id: 0,
        name: 'test',
        description: 'desc',
        organizer: 'H-tek',
        start: new Date().toJSON(),
        stop: new Date().toJSON(),
        location: "Lindholmen",
        imagepath: '/'
    };

    const post = await fetch("http://localhost:8080/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });
    expect(post.status).toStrictEqual(201);
    expect(await post.json()).toStrictEqual(event);
    expect(await (await fetch("http://localhost:8080/event")).json()).toStrictEqual([event]);

    event.name = "in testing";
    event.description = "woah";
    event.location = "anywhere else";
    event.imagepath = "/image.png";
    event.stop = new Date().toJSON();

    const put = await fetch("http://localhost:8080/event", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
    });
    expect(put.status).toStrictEqual(200);
    expect(await put.json()).toStrictEqual(event);
    expect(await (await fetch("http://localhost:8080/event")).json()).toStrictEqual([event]);

    const del = await fetch("http://localhost:8080/event", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: 0})
    });
    expect(del.status).toStrictEqual(200);
    expect(await (await fetch("http://localhost:8080/event")).json()).toStrictEqual([]);
});
