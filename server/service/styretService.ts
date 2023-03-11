import { Styret, StyretSerialized } from "../model/styret";
import db, {events, styret} from "../db/database";

export interface IStyretService {

    // Returns the array of all events
    getStyret() : Promise<Array<Styret>>;

    editStyret(
        styret: StyretSerialized
    ) : Promise<Styret>;

    deleteStyret(
        id : number
    ) : Promise<void>;


}

export class StyretService implements IStyretService {
    async getStyret(): Promise<Array<Styret>> {

        const res = await styret(db).find().all();
        return res.map(e => {
            return new Styret(e as Styret)
        })
    }

    async editStyret(data : Styret) : Promise<Styret> {
        const res = await styret(db).insertOrUpdate(['id'], {
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
}

export function makeStyretService() : IStyretService {
    return new StyretService();
}


