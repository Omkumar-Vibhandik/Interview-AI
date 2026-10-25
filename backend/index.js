import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// app.get("/", (req, res) => {
//   return res.json({ message: "server Started" });
// });

app.use(express.json());
app.use(cookieParser());

// create API
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
  connectDB();
});
