import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

// routes
import userRoute from "./routes/user.routes.js";

app.use("/api/users", userRoute);
app.get("/", (req, res) => {
  res.send("node.js api is running..");
});

export default app;
