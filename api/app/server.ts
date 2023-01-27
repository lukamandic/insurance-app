import express from "express";
import cors from "cors";
import { appConfig } from "../config/app-config";
import { errorHandler } from "./common/errorHandler";

import * as mongoose from 'mongoose';

const connectionString = 'mongodb://mongodb:27017/insurance'

mongoose.connect(connectionString)
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.log('Error connecting to MongoDB:', err))

export const server = express();

server.use(cors());
server.use(express.json());

export * from './routes'

server.use(errorHandler());

server.listen(appConfig.PORT, () => {
  console.log("Server listening on port", appConfig.PORT);
});
