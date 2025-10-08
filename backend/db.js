import { MongoClient } from "mongodb";


const MONGO_URL = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(MONGO_URL);

export const testDB = async () => {
  try {
    await client.connect();
    const db = client.db('testdb');
    const collection = db.collection('users');
    const result = await collection.insertOne({
      name: "John",
      age: 30
    });

    console.log(`Inserted with _id: ${result.insertedId}`);
  }
  catch (e) {
    client.close();
  }
};
