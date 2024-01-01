import {Book,bookValid} from '../models/book.js'
import mongoose from 'mongoose'
export const getAllBooks= async (req,res)=>{
    let {name,numP,author}=req.query;
    try{
        let allbooks;
        let so={};
        if(name)
        so.name=name;
        if(numP)
        so.numP=numP;
        if(author)
        so.author=author;
     allbooks=await Book.find(so);
        res.json(allbooks);
    }
    catch{
        res.status(400).send("sorry but error");
    }
}
export const getBookById= async (req,res)=>{
    try{
        let {id}=req.params;
            if(!mongoose.isValidObjectId(id))
            return res.status(400).send("wrong id structure");
        let book=await Book.findById(id);
        if(!book)
        return res.status(404).send("not found - book w/ such id");
        res.json(book);
    }
    catch{
        res.status(400).send("sorry but error in book"+err.message);
    }
}
    export const deleteBook= async (req,res)=>{
        try{
            let {id}=req.params;
            if(!mongoose.isValidObjectId(id))
            return res.status(400).send("wrong id structure");
            let deletedbook=await Book.findByIdAndDelete(id);
            if(!deletedbook)
            return res.status(40).send("no book with such an id to delete");
            return res.json(deletedbook);
        }
        catch{
            res.status(400).send("sorry but error");
        }
    }
    export const updateBook= async (req,res)=>{
        try{
            let {id}=req.params;
            if(!mongoose.isValidObjectId(id))
            return res.status(400).send("wrong id structure");
            let book=await Book.findById(id);
            if(!book)
            return res.status(40).send("no book w/ such id to update");
            book.name=req.body.name||book.name;
            book.numP=req.body.numP||book.numP;
            book.author=req.body.author||book.author;
            await book.save();
            res.json(book);

        }
        catch{
            res.status(400).send("error in update");
        }
    
    }
    export const addBook= async (req,res)=>{
        let {name,numP,author}=req.body;
            if(!name||!numP)
            return res.status(400).send("missing parameters");
        try{
            let sameBook=await Book.find({name,numP,});
            if(!sameBook||sameBook.length>0)
              res.status(409).send("already have ur book ♥");
            let newBook=new Book({name,numP,author});
            await newBook.save();
             res.status(201).send("workes!");

        }
        catch{
            res.status(400).send("error in adding new book");
        }
    }
        export const BooksBetween= async (req,res)=>{
            let {min,max}=req.query;
            try{
                let allbooks;
                let so={};
                if(min)
                so.numP={$gte:min};
                if(max)
                so.numP={$lte:max};
             allbooks=await Book.find(so);
                res.json(allbooks);
            }
            catch{
                res.status(400).send("error in adding new book");
            }
    }
