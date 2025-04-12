import express from "express"
import connection from "./config/db.js";
import {router} from "./routes/authRouter.js"
const app=express()
app.use(express.json())
app.use(router)
app.listen(2000,()=>{
    connection()
    console.log("server started at port 2000");
})