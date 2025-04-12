import { register,login } from "../controller/authController.js";
import {Router} from "express"
const router = Router()
router.post("/register", register)
router.post("/login", login)
export {router}