import { MongoClient, type InsertOneResult, Collection } from "mongodb";


const MONGO_URL = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(MONGO_URL);

interface User {
  name: string,
  age: number
};

export const testDB: () => Promise<void> = async (): Promise<void> => {
  try {
    await client.connect();
    const db = client.db('testdb');
    const collection: Collection<User> = db.collection<User>('users');
    const result: InsertOneResult<User> = await collection.insertOne({
      name: "John",
      age: 30
    });

    console.log(`Inserted with _id: ${result.insertedId}`);
  }
  catch (e) {
    client.close();
  }
};
