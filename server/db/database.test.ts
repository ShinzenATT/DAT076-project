import db from "./database";
import * as tables from "./database"
import {TableHelper} from "@databases/pg-typed";

// tests if all orm objects can select from the database
test("database connection test", async () => {
    for (const key in tables) {
        if(key !== 'default' && key !== 'sql'){
            const t: TableHelper<any, any> = (tables as  any)[key];
            const res = await t(db).find().all();
            expect(res).toBeDefined()
        }
    }
});
