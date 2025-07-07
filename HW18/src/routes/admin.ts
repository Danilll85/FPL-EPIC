import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
import { json } from "stream/consumers";
import { users } from "../data/user";

const router = Router();

router.get("/users", verifyToken, (req: any, res: any) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  return res.json(users);
});

export default router;
