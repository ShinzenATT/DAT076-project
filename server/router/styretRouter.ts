/**
 * Styret Router
 *
 * Express is used to respond to incoming GET, PUT, DELETE and POST HTTP-requests.
 */

// Imports
import express, { Request, Response } from "express";
import { makeStyretService } from "../service/styretService";
import { Styret } from "../model/styret";
import {adminRouter} from "./adminRouter";
import {Committee} from "../model/committee";
import router from "./committeeRouter";

// Constant variables
const styretService = makeStyretService();

export const styretRouter = express.Router();

/**
 * Fetches all Styret-objects
 */
styretRouter.get("/", async (
    req: Request<{}, {}, {}>,
    res: Response<Array<Styret> | String>
) => {
    try {
        const styret = await styretService.getStyret();
        res.status(200).send(styret);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

/**
 * Edits the given Styret-object
 */
styretRouter.put('/', async (req:Request<{}, {}, Styret>, res: Response) => {
    try {
        res.send(await styretService.editStyret(req.body))
    } catch (e) {
        res.status(400).send(e)
    }
});

/**
 * Fetches the specified Styret-object
 */
styretRouter.get('/:name', async (req: Request<{name: string}, {}, {}>, res: Response) => {
    try {
        res.send(await styretService.getStyretInfo(req.params.name))
    } catch (e){
        res.status(404).send(e)
    }
})

/**
 * Deletes the Styret-object matching the given id
 */
styretRouter.delete('/:id', async (req: Request<{id: string}, {}, {}>, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(400).send("param is not a number")
        return
    }
    await styretService.deleteStyret(id)
    res.send()
})