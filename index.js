import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import connectDatabase from "./config/database.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDatabase();

app.use("/api", router);

app.listen(env.port, () => {
  console.log(`Listening on port ${env.port}`);
});
