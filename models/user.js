import mongoose from 'mongoose';
import Joi from 'joi';
const userSchema=mongoose.Schema({
    //no id-its auto
    userName:{type:String,required:true},
    passwd:{type:String,required:true}
})
export const User=mongoose.model("users",userSchema)