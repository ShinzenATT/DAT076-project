import createConnectionPool, {sql} from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema from './generated';

export {sql};

const db = createConnectionPool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres"
});
export default db;

// You can list whatever tables you actually have here:
const {accounts, events} = tables<DatabaseSchema>({
    databaseSchema: require('./generated/schema.json'),
});
export {accounts, events};
