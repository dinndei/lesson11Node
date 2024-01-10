import  express  from "express";
import * as bookController from '../controllers/book.js'
import {authenticate,authenticateAdmin} from '../middlewears/auth.js'

const router=express.Router();
router.get("/",bookController.getAllBooks)
router.get("/:id",bookController.getBookById)
router.delete("/:id",authenticate,bookController.deleteBook)
router.put("/:id",authenticate,bookController.updateBook)
router.post("/",bookController.addBook)
export default router;