/**
 * Account Router
 *
 * Express is used to respond to incoming GET, PUT, DELETE and POST HTTP-requests.
 */

// Imports
import {AccountService} from "../service/accountService";
import express, {Request, Response} from "express";
import {Accounts_InsertParameters} from "../db/generated";

// Constant variables
const accountService = new AccountService()
const router = express.Router()

export default router

/**
 * Login
 */
router.post('/login', async (req: Request<{}, {}, {email: string, password: string}>, res: Response) => {
    try {
        const value = await accountService.login(req.body.email, req.body.password)
        res.send(value)
    } catch (e: any){
        res.status(400).send(e)
    }
})

/**
 * Create account
 */
router.post('/register', async (req: Request<{}, {}, Accounts_InsertParameters>, res: Response) => {
    try {
        const value = await accountService.createAccount(req.body)
        res.send(value)
    } catch (e) {
        res.status(400).send(e)
    }
})
