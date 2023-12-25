import express  from "express";
import { config } from "dotenv";
import bookrouter from "./routes/book.js";
import mongoose from "mongoose";

config ();//env

const app = express ();
const mongoURI = process.env.DB_CONNECTION ||
"mongodb://localhost:27017/library";
mongoose.connect(mongoURI)
        .then((suc)=>{
            console.log("mongodb connected successfully!!"+
            suc.connection.host)

        }).catch(err=>{
            console.log("cannot connect mongodb")
            console.log(err)
            process.exit(1)
        })
        app.use(express.json())
        app.use("/book",bookrouter)

        let port=process.env.PORT||4000;
        app.listen(port,console.log(`app is listening on port ${port}`));