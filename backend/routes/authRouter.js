import { register,login } from "../controller/authController.js";
import {Router} from "express"
import { profileMulter } from "../middleware/multer.js";
import { addCourse } from "../controller/courses.js";
const router = Router()
router.post("/register", register)
router.post("/login", login)

router.post("/coursePost",profileMulter.single("image"),addCourse)
export {router}