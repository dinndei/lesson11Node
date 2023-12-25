import mongoose from 'mongoose'
const bookSchema=mongoose.Schema({
    //no id-its auto
    name:{type:String,required:true},
    numP:Number,
    author:String
})
export const Book=mongoose.model("books",bookSchema)