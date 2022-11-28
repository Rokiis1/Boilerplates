require("dotenv").config();
import express, { Application } from "express";
import config from "config";
import validateEnv from "./src/utils/validateEnv";
import { AppDataSource } from "./src/utils/data-source";

AppDataSource.initialize()
  .then(async () => {
    validateEnv();

    const app: Application = express();

    const port = config.get<number>("port");
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error: string) => console.log(error));
