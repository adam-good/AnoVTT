import express from 'express';
import http from 'http';

import { testDB } from './db.js'

const HOSTNAME = 'localhost';
const PORT = 8080;

const app = express();

app.use((req, res) => {
  console.log(req.headers);
  testDB();
  res.send("hello world");
});

app.listen(PORT, (err) => {
  console.log(`[*] Starting Server on ${PORT}`);
});
