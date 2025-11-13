import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.route.js";

const HOSTNAME: string = "localhost";
const PORT: number = 8080;
const app: express.Express = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, (err: Error | undefined) => {
  console.log(`[*] Starting Server on ${PORT}`);
});
