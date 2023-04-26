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

if (!process.env.PORT) {
  console.log(`port not specified`);
  process.exit(1);
}

const port: number = parseInt(process.env.PORT, 10)

const app = express();
app.use(cors({
  credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router());

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);

  connectDb();
});