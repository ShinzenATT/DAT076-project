import express from "express";

import {taskRouter} from "./router/sampleRouter";

const app = express();
const PORT : number = 8080;

app.use(express.json());
app.use("/task", taskRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
