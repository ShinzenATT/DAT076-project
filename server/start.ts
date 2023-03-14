/**
 * Imports all necessary routers and other parts and exports it as the variable 'app'
 * This can and is then imported as the single variable, in 'index.ts'
 */

import express from "express";
import eventRouter from "./router/eventRouter";
import accountRouter from "./router/accountRouter";
import committeeRouter from "./router/committeeRouter";
import cors from "cors";
import {styretRouter} from "./router/styretRouter";
import {adminRouter} from "./router/adminRouter";
import SwaggerUI from 'swagger-ui-express'
import YAML from "yamljs";

export const app = express();

app.use(express.json());
app.use(cors());
app.use('/spec', SwaggerUI.serve, SwaggerUI.setup(YAML.load('api-spec.yml')))
app.use("/events", eventRouter);
app.use("/styret", styretRouter);
app.use('/account', accountRouter);
app.use('/committee', committeeRouter);
app.use('/admin', adminRouter)

