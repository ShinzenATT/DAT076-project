import {Committee} from "../model/committee";
import db, {accounts, committees} from "../db/database";
import {anyOf} from "@databases/pg-typed";

export interface ICommitteeService{
    getCommittees(): Promise<{name: string, type: string, logo_url: string | null }[]>

    getCommitteeInfo(name: string): Promise<Committee>

    editCommittee(data: Committee): Promise<Committee>

    removeCommittee(name: string, deleteAccount:boolean): Promise<void>
}

class CommitteeService implements ICommitteeService{
    editCommittee(data: Committee): Promise<Committee> {
        return Promise.resolve(undefined);
    }

    async getCommitteeInfo(name: string): Promise<Committee> {
        const acc = await accounts(db).findOneRequired({name: name})
        const res = await committees(db).findOneRequired({id: acc.id})
        return new Committee({
            name: acc.name,
            email: acc.email,
            type: res.type,
            description: res.description,
            facebook: res.facebook,
            instagram: res.instagram,
            website: res.website,
            logo_url: res.logo_url,
            banner_url: res.banner_url
        })
    }

    async getCommittees(): Promise<{ name: string; type: string; logo_url: string | null }[]> {
        const data = await committees(db).find().select("id", "logo_url", "type").all()
        const names = await accounts(db).find({id: anyOf(data.map(e => e.id))}).select("id", "name").all()

        return data.map(e => {
            return {
                name: names.find(n => n.id === e.id)?.name ?? 'unknown',
                type: e.type,
                logo_url: e.logo_url
            }
        });
    }

    removeCommittee(name: string, deleteAccount: boolean): Promise<void> {
        return Promise.resolve(undefined);
    }

}
