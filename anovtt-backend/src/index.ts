import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { connectDB } from './db.js'
import type { Int32, IntegerType } from 'mongodb';

const HOSTNAME : string          = 'localhost';
const PORT     : number          = 8080;
const app      : express.Express = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.use((req: express.Request, res: express.Response) => {
  console.log(req.headers);
  res.send("hello world");
});

app.listen(PORT, (err: Error | undefined) => {
  console.log(`[*] Starting Server on ${PORT}`);
});
