import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import router from "./router";
import { connectDb } from "./utils";

dotenv.config();
const app = express();

app.use(cors({
  credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router());

const server = http.createServer(app);
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");

  connectDb();
});