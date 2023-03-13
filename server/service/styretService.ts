import { Styret, StyretSerialized } from "../model/styret";
import db, {accounts, events, styret} from "../db/database";
import {Account} from "../model/account";
import {Committee} from "../model/committee";

export interface IStyretService {

    // Returns the array of all events
    getStyret() : Promise<Array<Styret>>;
    getStyretInfo(name: string): Promise<Styret>
    editStyret(styret: Styret): Promise<Styret>;
    deleteStyret(id: number) : Promise<void>;


}

export class StyretService implements IStyretService {
    async getStyret(): Promise<Array<Styret>> {

        const res = await styret(db).find().all();
        return res.map(e => {
            return new Styret(e as Styret)
        })
    }

    async editStyret(data : Styret) : Promise<Styret> {
        const res = await styret(db).update({id: data.id}, {
            id: data.id,
            name: data.name,
            post: data.post,
            email: data.email,
            description: data.description,
            imagepath: data.imagepath
        })
        return new Styret({...data, ...res})
    }

    async deleteStyret(id : number) : Promise<void> {
        await styret(db).delete({id})
    }

    async getStyretInfo(name: string): Promise<Styret> {
        const res = await styret(db).findOneRequired({name: name})
            return new Styret({
                name : res.name,
                id : res.id,
                post: res.post,
                description: res.description,
                email: res.email,
                imagepath: res.imagepath
            })

    }
}

export function makeStyretService() : IStyretService {
    return new StyretService();
}


