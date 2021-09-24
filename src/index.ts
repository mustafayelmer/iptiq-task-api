//region imports
import * as dotenv from "dotenv";
import express from 'express';
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import {taskManager, TaskMode} from "@yelmer-samples/iptiq-task-manager";
import {TaskController} from "./TaskController";
dotenv.config();
//endregion imports

//region express
const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
taskManager.initialize(1000, TaskMode.DEFAULT);
(new TaskController()).route(app);
//endregion express

//region run
const port = process.env.HTTP_PORT ?? 8080;
app.listen(port, () => {
    console.log('Server started', {port, name: process.env.npm_package_name, version: process.env.npm_package_version});
});
//endregion run