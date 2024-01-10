import mongoose from 'mongoose'
const bookSchema=mongoose.Schema({
    //no id-its auto
    name:{type:String,required:true},
    numP:Number,
    author:String,
    userAdded:String,
    // imageUrl:{String , default: "books/pic1.jpg"}
})
export const Book=mongoose.model("books",bookSchema)