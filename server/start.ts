import express from "express";
import { eventRouter } from "./router/eventRouter";

export const app = express();

app.use(express.json());
app.use("/event", eventRouter);