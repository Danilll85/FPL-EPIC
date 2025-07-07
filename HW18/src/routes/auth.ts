import { Router, Request, Response } from "express";
import { users } from "../data/user";
import bcrypt from "bcryptjs";
import { User } from "../types/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface RegisterBody {
  email: string;
  password: string;
}

interface LoginBody {
  email: string;
  password: string;
}

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET as string;

const TOKEN_EXP = process.env.TOKEN_EXP || "15m";

router.post("/register", async (req: Request<{}, {}, RegisterBody>, res: any) => {
  const { email, password } = req.body;
  const foundUser = users.find((user) => user.email == email);

  if (foundUser) {
    return res.status(409).json({ message: "User exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  const isAdmin = true;

  const newUser = {
    id: Date.now(),
    email,
    passwordHash: hash,
    role: isAdmin ? 'admin' : 'user',
  };

  users.push(newUser as User);

  res.status(201).json({ id: newUser.id, email: newUser.email });
});

router.post("/login", async (req: Request<{}, {}, LoginBody>, res: any) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email == email);

  if (!user) {
    return res.status(401).json({ message: "user doesn't exists" });
  }

  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    return res.status(401).json({ message: "Not valid credentials" });
  }

  const token = jwt.sign({ id: user, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: TOKEN_EXP as any });

  res.json({ token: `Bearer ${token}` });
});

export default router;
