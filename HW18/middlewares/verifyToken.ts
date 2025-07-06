import { Request, Response, NextFunction } from "express";
import type { UserRole } from "../src/types/User";

export interface AuthPayload {
    id: number;
    email: string;
    role: UserRole;
}