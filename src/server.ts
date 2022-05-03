import fs from "fs";
import path from "path";
import express from "express";
import morganBody from "morgan-body";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import homeRota from "./Routes/home";
import CEP from "./Routes/CEP";
import { JWTDecode } from "./Middleware/JWTDecode";

const app = express();
const swaggerDocument = require("../swagger.json");

app.use(bodyParser.json());

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", `express.log`),
  { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.use("/", homeRota);
app.use("/CEP", JWTDecode("ChaveCEP"), CEP);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/log", express.static("./src/logs"));
app.use("/index", express.static("./src/index"));

module.exports = app;
