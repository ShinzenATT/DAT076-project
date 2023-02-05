import express, { Request, Response } from "express";
import { makeTaskService } from "../service/sampleService";
import { Task } from "../model/task";

const taskService = makeTaskService();

export const taskRouter = express.Router();

taskRouter.get("/", async (
    req: Request<{}, {}, {}>,
    res: Response<Array<Task> | String>
) => {
    try {
        const tasks = await taskService.getTasks();
        res.status(200).send("hello world");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

taskRouter.put("/", async (
    req: Request<{}, {}, { description : string }>,
    res: Response<Task | string>
) => {
    try {
        const description = req.body.description;
        if (typeof(description) !== "string") {
            res.status(400).send(`Bad PUT call to ${req.originalUrl} --- description has type ${typeof(description)}`);
            return;
        }
        const newTask = await taskService.addTask(description);
        res.status(201).send(newTask);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
})

taskRouter.put("/:id", async (
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