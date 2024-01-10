import express from "express";
import { config } from "dotenv";
import bookrouter from "./routes/book.js";
import userrouter from "./routes/user.js";
import mongoose from "mongoose";
import { connectToDB } from './config/dbConfig.js';
import cors from "cors"
import { errorHandling } from "./middlewears/errorHandling.js";
config();//env
connectToDB();
const app = express();

app.use(cors());
app.use(express.json())
app.use("/book", bookrouter)
app.use("/user", userrouter)
app.use(errorHandling);
app.use(express.static('images'))
let port = process.env.PORT || 4000;
app.listen(port, console.log(`app is listening on port ${port}`));