import  express  from "express";
import * as userController from '../controllers/user.js'
import {authenticate,authenticateAdmin} from '../middlewears/auth.js'

const router=express.Router();

router.post("/",userController.addUser)
router.post("/login",authenticate,userController.login)
router.get("/",authenticateAdmin,userController.getAllUsers)

export default router;