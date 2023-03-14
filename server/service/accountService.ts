/**
 * Account Service
 *
 * Defines methods for communication with the database
 */

// Imports
import {Account} from "../model/account";
import db, {accounts, sessiontoken} from "../db/database";
import {Accounts_InsertParameters} from "../db/generated";
import {lessThan} from "@databases/pg-typed";

// Interface
export interface IAccountService{
    login(email: string, password: string): Promise<{token: string, account: Account}>
    getAccountInfo(id: number): Promise<Account>
    getAccounts(): Promise<Account[]>
    createAccount(data: Accounts_InsertParameters): Promise<Account>
    editAccount(data: Account): Promise<Account>
    checkToken(token: string): Promise<number | null>
    deleteAccount(id: number): Promise<void>
}

// Class definition
export class AccountService implements IAccountService{

    async checkToken(token: string): Promise<number | null> {
        await sessiontoken(db).delete({expires: lessThan(new Date())})
        return (await sessiontoken(db).findOne({token}))?.account ?? null;
    }

    async createAccount(data: Accounts_InsertParameters): Promise<Account> {
        const account = await accounts(db).insert(data)
        return new Account({
            ...account[0],
            password: undefined
        })
    }

    async getAccountInfo(id: number): Promise<Account> {
        const res = await accounts(db).findOneRequired({id})
        return new Account({
            ...res,
            password: undefined
        })
    }

    async login(email: string, password: string): Promise<{ token: string; account: Account }> {
        const account = await accounts(db).findOne({email, password})
        if(account == null){
            throw new Error("credentials did not match")
        }
        const token = await sessiontoken(db).insert({account: account.id})
        return {
            token: token[0].token,
            account: new Account({
                ...account,
                password: undefined
            })
        }
    }

    async editAccount(data: Account): Promise<Account> {
        const res = await accounts(db).update({id: data.id}, data)
        if(res.length === 0){
            throw new Error('Account not found')
        }
        return new Account({
            ...res[0],
            password: undefined
        });
    }

    async getAccounts(): Promise<Account[]> {
        const data = await accounts(db).find().select('id', 'name', 'email', 'admin').all()
        return data.map((account) => new Account({
            ...account,
            password: undefined
        }))
    }

    async deleteAccount(id: number): Promise<void> {
        await accounts(db).delete({id})
    }
}
