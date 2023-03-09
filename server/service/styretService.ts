import { Styret } from "../model/styret";
import db, {events, styret} from "../db/database";

export interface IStyretService {

    // Returns the array of all events
    getStyret() : Promise<Array<Styret>>;
/*
    editStyret(
        styret: StyretSerialized
    ) : Promise<Event>;

    deleteStyret(
        id : number
    ) : Promise<void>;

 */
}

class StyretService implements IStyretService {
    async getStyret(): Promise<Array<Styret>> {

        const res = await styret(db).find().all();
        return res.map(e => {
            return new Styret(e as Styret)
        })
    }
}

export function makeStyretService() : IStyretService {
    return new StyretService();
}

