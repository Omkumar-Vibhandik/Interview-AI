import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: /^http:\/\/(localhost|127\.0\.0\.1):\d+$/,
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
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 7000;

// app.get("/test", (req, res) => {
//   res.status(200).json ({
//     message: "Backend is working!",
//   });
// });
app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
  connectDB();
});
