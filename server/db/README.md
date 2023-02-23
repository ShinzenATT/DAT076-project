#  Database
### Generating types
```bash
npx @databases/pg-schema-cli --database postgresql://postgres:postgres@localhost:5432/postgres --directory db/generated
```
The database link may be altered to match credentials. `database.ts` needs to be updated to export any new tables made.

### Table definitions
Definitions are done in `server.sql` which is also loaded by the docker container.
The container can be run by using `docker-compose up` at project root or using the `docker run`  command that targets the Dockerfile.
