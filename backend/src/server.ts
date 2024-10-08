import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import transactionRouter from "./routes/transactionRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

if (!process?.env?.MONGO_CONNECTION_URI) {
  console.log("No environment file found");
}

mongoose
  .connect(process.env.MONGO_CONNECTION_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/transaction", transactionRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
