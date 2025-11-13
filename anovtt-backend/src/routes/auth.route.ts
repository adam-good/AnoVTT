import { response, Router, type Request, type Response } from "express";
import { connectDB } from "../db.js";
import { type User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { Collection, MongoClient } from "mongodb";

const router: Router = Router();

const BCRYPT_HASH_ROUNDS: number = 10;

router.post(
  "/register",
  async (req: Request, res: Response): Promise<Response> => {
    const { username, email, password } = req.body;
    const hashedPassword: string = await bcrypt.hash(
      password,
      BCRYPT_HASH_ROUNDS,
    );

    try {
      const client: MongoClient = await connectDB();
      const collection: Collection<User> = client
        .db()
        .collection<User>("users");
      const newUser: User = {
        _id: "",
        username,
        email,
        passwordHash: hashedPassword,
      };

      // Check if user exists
      const existingUser: boolean =
        (await collection.findOne({ email, username })) !== null;
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Temp ID scheme until I make a better one
      newUser._id = await bcrypt.hash(
        newUser.username + new Date().toDateString,
        0,
      );
      await collection.insertOne(newUser);
      return res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Server Error" });
    }
  },
);

// Login
router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const client = await connectDB();
    const collection = client.db().collection<User>("users");
    const user = await collection.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ error: "Invalid Credidentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1h" });
    return res
      .status(200)
      .json({ token, user: { username: user.username, email: user.email } });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Server Error" });
  }
});

// TODO: log here
router.post("/logout", async (req: Request, res: Response) => {
  return res.status(200);
});

export default router;
