import { Router } from "express";
import { AuthPayload, verifyToken } from "../middlewares/verifyToken";

const router = Router();

type RequestType = Request & { user?: AuthPayload };

router.get("/", verifyToken, (req: RequestType, res: any) => {  
  res.json({
    message: "Secure profile data",
    user: req.user,
  });
});


export default router;
