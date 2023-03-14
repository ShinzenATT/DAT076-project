/**
 * Event Router
 *
 * Express is used to respond to incoming GET, PUT, DELETE and POST HTTP-requests.
 */

// Imports
import express, { Request, Response } from "express";
import { makeEventService } from "../service/eventService";
import { Event, EventSerialized } from "../model/event";

// Constant variables
const eventService = makeEventService();
const eventRouter = express.Router();

export default eventRouter;

/**
 * Fetches all events
 */
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

/**
 * Creates new event
 */
eventRouter.post("/", async (
    req: Request<{}, {}, EventSerialized>,
    res: Response<Event | string>
) => {
    try {
        const newEvent = await eventService.createEvent(req.body);
        res.status(201).send(newEvent);
    } catch (e: any) {
        res.status(400).send(e.message);
    }
});

/**
 * Edits given event
 */
eventRouter.put('/', async (req: Request<{},{}, EventSerialized>, res: Response<Event | string>) => {
    try {
        let event = await eventService.editEvent(req.body);
        res.send(event);
    } catch (e: any) {
        res.status(400).send(e.message);
    }
});

/**
 * Deletes event matching given id
 */
eventRouter.delete('/:id', async (req: Request<{id:string},{},{}>, res: Response ) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send("param is not a number")
        return
    }

    await eventService.deleteEvent(id);
    res.send();
});