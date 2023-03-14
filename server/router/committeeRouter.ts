/**
 * Committee Router
 *
 * Express is used to respond to incoming GET, PUT, DELETE and POST HTTP-requests.
 */

// Imports
import {CommitteeService} from "../service/committeeService";
import express, {Request, Response} from "express";
import {Committee} from "../model/committee";

// Constant variables
const committeeService = new CommitteeService()
const router = express.Router()

export default router

/**
 * Fetches committees
 */
router.get('/', async (req, res) => {
    res.send(await committeeService.getCommittees())
})

/**
 * Fetches committees information
 */
router.get('/getCommitteesInfo', async (req, res) => {
    res.send(await committeeService.getCommitteesInfo())
})

/**
 * Fetches specified committee information
 */
router.get('/:name', async (req: Request<{name: string}, {}, {}>, res: Response) => {
    try {
        res.send(await committeeService.getCommitteeInfo(req.params.name))
    } catch (e){
        res.status(404).send(e)
    }
})

/**
 * Edit given committee
 */
router.put('/', async (req:Request<{}, {}, Committee>, res: Response) => {
    try {
        res.send(await committeeService.editCommittee(req.body))
    } catch (e) {
        res.status(400).send(e)
    }
})

/**
 * Deletes committee matching specified id
 */
router.delete('/:id', async (req: Request<{id: string}, {}, {deleteAccount: boolean} | undefined>, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(400).send("param is not a number")
        return
    }
    await committeeService.removeCommittee(id, req.body?.deleteAccount ?? false)
    res.send()
})
