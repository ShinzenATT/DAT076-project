import {Committee} from "../model/committee";
import db, {accounts, committees} from "../db/database";
import {anyOf} from "@databases/pg-typed";
import {Styret} from "../model/styret";

export interface ICommitteeService{
    getCommittees(): Promise<{name: string, type: string, logo_url: string | null }[]>

    getCommitteeInfo(name: string): Promise<Committee>

    editCommittee(data: Committee): Promise<Committee>

    removeCommittee(id: number, deleteAccount:boolean): Promise<void>
}

export class CommitteeService implements ICommitteeService{
    async editCommittee(data: Committee): Promise<Committee> {
        const res = committees(db).insertOrUpdate(['id'], {
            id: data.id,
            fullname: data.fullname,
            type: data.type,
            description: data.description,
            facebook: data.facebook,
            instagram: data.instagram,
            website: data.website,
            logo_url: data.logo_url,
            banner_url: data.banner_url
        })
        return new Committee({...data, ...res})
    }

    async getCommitteeInfo(name: string): Promise<Committee> {
        const acc = await accounts(db).findOneRequired({name: name})
        const res = await committees(db).findOneRequired({id: acc.id})
        return new Committee({
            id: acc.id,
            name: acc.name,
            fullname: res.fullname,
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

    async getCommitteesInfo(): Promise<Array<Committee>> {
        const data = await committees(db).find().all()

        return data.map(e => {
            return new Committee(e as Committee)
        })
    }

    async removeCommittee(id: number, deleteAccount: boolean): Promise<void> {
        await committees(db).delete({id})
        if(deleteAccount){
            await accounts(db).delete({id, admin: false})
        }
    }

}
