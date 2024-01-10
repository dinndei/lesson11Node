import mongoose from 'mongoose';
export const connectToDB=()=>{
    const mongoURI=process.env.DB_CONNECTION||"mongodb+srv://dinn0533:<password>@firstdb.9dizht5.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(mongoURI)
    .then((suc)=>{
        console.log("connected",suc.connection.host)
    })
    .catch(err=>{
        console.log("connection faild -> ",err)
        process.exit(1);
    })
}