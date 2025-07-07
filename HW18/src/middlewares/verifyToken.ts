import { Request, Response, NextFunction } from "express";
import type { UserRole } from "../types/User";
import jwt from "jsonwebtoken";

export interface AuthPayload {
  id: number;
  email: string;
  role: UserRole;
}

declare module "express" {
  interface Request {
    user?: AuthPayload;
  }
}

export const verifyToken = (req: Request, res: any, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
    req.user = payload;

    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
