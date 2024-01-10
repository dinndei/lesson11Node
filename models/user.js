import mongoose from 'mongoose';
import Joi from 'joi';
import * as roleTypes from './roleTypes.js'
const userSchema=mongoose.Schema({
    //no id-its auto
    userName:{type:String,required:true},
    passwd:{type:String,required:true},
    role:{type:String,default:roleTypes.USER},
}, { timestamps: true })

export const User=mongoose.model("users",userSchema)