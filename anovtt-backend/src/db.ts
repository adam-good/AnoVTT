import { MongoClient } from "mongodb";


const MONGO_URL = 'mongodb://127.0.0.1:27017'
//const client = new MongoClient(MONGO_URL);

interface User {
  name: string,
  age: number
};

export const connectDB = async () => {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  return client;
};

