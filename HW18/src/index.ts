import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth"
import profileRouter from "./routes/profile"

dotenv.config();

const app = express();
app.use(express.json());
app.use('/auth', authRouter);
app.use('/profile', profileRouter); 

const PORT = process.env.PORT || "";

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
