import {CommitteeService} from "../service/committeeService";
import {makeStyretService} from "../service/styretService";
import {makeEventService} from "../service/eventService";
import express, {Request, Response} from "express";
import {AccountService} from "../service/accountService";

const styretService = makeStyretService();
const committeeService = new CommitteeService();
const eventService = makeEventService();
const accountService = new AccountService();

export const adminRouter = express.Router();

adminRouter.get("/", async(
    req: Request<{}, {}, {}>,
    res: Response<Array<any> | String>
) => {
    try {
        const styret = styretService.getStyret();
        const kommitteer = committeeService.getCommitteesInfo();
        const events = eventService.getEvents();
        const json = {
            styret : styret,
            kommitteer : kommitteer,
            events : events
        }
        let sendValue = JSON.stringify(json)

        res.status(200).send(sendValue)
    } catch(e : any) {
        res.status(400).send(e)
    }
});

adminRouter.get('/:name', async (req: Request<{name : string}, {}, {}>, res: Response) => {
switch (req.params.name) {
        case "styret":
            res.send(await styretService.getStyret());
            break;
        case "kommitteer":
            res.send(await committeeService.getCommitteesInfo());
            break;
        case "events":
            res.send(await eventService.getEvents());
            break;
        case "accounts":
            res.send(await accountService.getAccounts());
            break;
        default:
            res.sendStatus(404)
            break;
    }
})

adminRouter.delete('/:name/:id', async(
    req: Request<{name : string, id: string}, {}, {deleteAccount: boolean} | undefined>,
    res: Response
    ) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send("param is not a number")
        return
    }
        switch (req.params.name) {
            case "kommitteer":
                res.send(await committeeService.removeCommittee(id, req.body?.deleteAccount ?? false));
                break;
            case "styret":
                res.send(await styretService.deleteStyret(id));
                break;
            case "events":
                res.send(await eventService.deleteEvent(id));
                break;
            case "accounts":
                res.send(await accountService.deleteAccount(id));
                break;
            default:
                res.sendStatus(404)
                break;
        }
    });

adminRouter.put('/:name', async(
   req:Request<{name : string}, {}, any>,
   res:Response) => {
        try {
            switch (req.params.name) {
                case "kommitteer":
                    res.send(await committeeService.editCommittee(req.body));
                    break;
                case "styret":
                    res.send(await styretService.editStyret(req.body))
                    break;
                case "events":
                    res.send(await eventService.editEvent(req.body));
                    break;
                case "accounts":
                    try {
                        res.send(await accountService.editAccount(req.body));
                    } catch (e) {
                        res.status(400).send(e)
                    }
                    break;
                default:
                    res.sendStatus(404)
                    break;
            }
        } catch (e) {
            res.status(400).send(e)
        }
    }
);



