import express, { Request, Response } from "express";
import { makeEventService } from "../service/eventService";
import { Event } from "../model/event";

const eventService = makeEventService();

export const eventRouter = express.Router();

eventRouter.get("/", async (
    req: Request<{}, {}, {}>,
    res: Response<Array<Event> | String>
) => {
    try {
        const events = await eventService.getEvents();
        res.status(200).send(events);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

eventRouter.post("/", async (
    req: Request<{}, {}, {
        organizer : string,
        name : string,
        location : string,
        start : string,
        stop : string,
        description : string,
        image : string,
        id : number
    }>,
    res: Response<Event | string>
) => {
    try {
        const newEvent = await eventService.createEvent(
            req.body.organizer,
            req.body.name,
            req.body.location,
            req.body.start,
            req.body.stop,
            req.body.description,
            req.body.image);
        res.status(201).send(newEvent);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});


/*
eventRouter.put("/:id", async (
    req: Request<{ id: string }, {}, { done: boolean }>,
    res: Response<string>
) => {

    try {
        if (req.params.id == null) {
            res.status(400).send(`Bad PUT call to ${req.originalUrl} --- missing id param`);
            return;
        }
        if (typeof (req.body.done) !== "boolean") {
            res.status(400).send(`Bad PUT call to ${req.originalUrl} --- field 'done' has type ${typeof(req.body.done)}`);
            return;
        }
        if (req.body.done === false) {
            res.status(405).send(`Bad PUT call to ${req.originalUrl} --- Marking tasks as not done not implemented yet`);
            return;
        }
        const index = parseInt(req.params.id, 10);
        if (! (index >= 0)) {
            res.status(400).send(`Bad PUT call to ${req.originalUrl} --- id number must be a non-negative integer`);
            return;
        }

        const completed = await taskService.markDone(index);

        if (!completed) {
            res.status(404).send(`No task with index ${index}`)
            return;
        }
        res.status(200).send("Task set to done");

    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
*/
