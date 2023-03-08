import express from "express";
import eventRouter from "./router/eventRouter";
import accountRouter from "./router/accountRouter";
import committeeRouter from "./router/committeeRouter";

export const app = express();

app.use(express.json());
app.use("/event", eventRouter);
app.use('/account', accountRouter);
app.use('/committee', committeeRouter);
