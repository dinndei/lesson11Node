import mongoose from 'mongoose';
export const connectToDB=()=>{
    const mongoURI=process.env.DB_CONNECTION||"mongodb://localhost:27017/library"
    mongoose.connect(mongoURI)
    .then((suc)=>{
        console.log("connected",suc.connection.host)
    })
    .catch(err=>{
        console.log("connection faild -> ",err)
        process.exit(1);
    })
}