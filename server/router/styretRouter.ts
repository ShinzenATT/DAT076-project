import express, { Request, Response } from "express";
import { makeStyretService } from "../service/styretService";
import { Styret } from "../model/styret";


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
