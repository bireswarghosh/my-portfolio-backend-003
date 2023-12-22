import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';

// import path from "path";
export const app = express();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);



// app.use(cors({
//     origin: 'http://localhost:3001',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
//   }));
  

// app.use(cors({
//     origin: 'http://localhost:3001' // This allows your frontend to access the backend
//   }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);



app.use(express.static("build"));

// app.use(express.static(path.resolve("./frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });
