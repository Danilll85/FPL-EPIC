import dotenv from "dotenv";
import express from "express";
import bookRoutes from "./routes/books";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/books", bookRoutes);
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || "";

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
