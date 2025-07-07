import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth"
import profileRouter from "./routes/profile"
import adminRouter from "./routes/admin"

dotenv.config();

const app = express();
app.use(express.json());
app.use('/auth', authRouter);
app.use('/profile', profileRouter); 
app.use('/admin', adminRouter);

const PORT = process.env.PORT || "";

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
