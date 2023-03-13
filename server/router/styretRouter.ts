import express, { Request, Response } from "express";
import { makeStyretService } from "../service/styretService";
import { Styret } from "../model/styret";
import {adminRouter} from "./adminRouter";
import {Committee} from "../model/committee";
import router from "./committeeRouter";


const styretService = makeStyretService();

export const styretRouter = express.Router();

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

styretRouter.put('/', async (req:Request<{}, {}, Styret>, res: Response) => {
    try {
        res.send(await styretService.editStyret(req.body))
    } catch (e) {
        res.status(400).send(e)
    }
});

styretRouter.get('/:name', async (req: Request<{name: string}, {}, {}>, res: Response) => {
    try {
        res.send(await styretService.getStyretInfo(req.params.name))
    } catch (e){
        res.status(404).send(e)
    }
})

styretRouter.delete('/:id', async (req: Request<{id: string}, {}, {}>, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(400).send("param is not a number")
        return
    }
    await styretService.deleteStyret(id)
    res.send()
})
