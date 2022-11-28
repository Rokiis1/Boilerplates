import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response, NextFunction } from "express";
import http from "http";
import { ServerSocket } from "./src/utils/socket";

const app: Express = express();
const httpServer = http.createServer(app);
const port = 4000;

new ServerSocket(httpServer);

/** Healthcheck */
app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ hello: "world!" });
});

/** Socket Information */
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ users: ServerSocket.instance.users });
});

/** Error handling */
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

httpServer.listen(port, () => console.info(`Server is running`));
