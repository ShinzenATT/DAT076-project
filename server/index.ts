import { app } from "./start";

/**
 * App Variables
 */

const PORT : number = 8080;


/**
 * Server activation
 */

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
