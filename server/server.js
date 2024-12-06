import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// create db connnection
mongoose
  .connect(
    "mongodb+srv://shantuingale:shantuingale@mern-ecom.xhty0.mongodb.net/"
  )
  .then(() => console.log("MongoDB is connected !!"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
