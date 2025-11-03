import express from 'express';
import http from 'http';

import { testDB } from './db.js'
import type { Int32, IntegerType } from 'mongodb';

const HOSTNAME : string          = 'localhost';
const PORT     : number          = 8080;
const app      : express.Express = express();

app.use((req: express.Request, res: express.Response) => {
  console.log(req.headers);
  testDB();
  res.send("hello world");
});

app.listen(PORT, (err: Error | undefined) => {
  console.log(`[*] Starting Server on ${PORT}`);
});
