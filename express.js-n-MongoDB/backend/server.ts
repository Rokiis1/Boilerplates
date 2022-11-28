import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
const path = require("path");
const { logger } = require("./src/middleware/logEvents");
const connectDB = require("./src/config/dbConn");
require("dotenv").config();

const app: Application = express();

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors());

app.use(express.urlencoded({ extended: false }));

// Middleware for json
app.use(express.json());

// Routes
import employees from "./src/routes/employees";
import users from "./src/routes/users";

app.use("/api/v1/employees", employees);
app.use("/api/v1/employees", users);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "src", "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

const PORT: string | undefined = process.env.PORT;
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
