import express from "express";
import eventRouter from "./router/eventRouter";
import accountRouter from "./router/accountRouter";
import committeeRouter from "./router/committeeRouter";
import cors from "cors";
import {styretRouter} from "./router/styretRouter";

export const app = express();

app.use(express.json());
app.use(cors());
app.use("/event", eventRouter);
app.use("/styret", styretRouter);
app.use('/account', accountRouter);
app.use('/committee', committeeRouter);

