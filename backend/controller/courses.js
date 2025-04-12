import { course } from "../model/courses.js";
import jwt from "jsonwebtoken";
import "dotenv/config"
import {v2} from "cloudinary"
import fs from "fs"


v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
export const addCourse=async(req,res)=>{
    console.log("addcourse");
    const {courseName,courseDuration,description}=req.body
    const token=req.headers.authorization
    if(!token){
        return res.status(401).json({message:"token needed"})
    }
    let filePath;
    if(req.file){
        filePath=req.file.path
    }
    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {email}=decoded
        
        let url;
        if (req.file) {
            // Upload the new photo to Cloudinary if provided
            const uploadResponse = await v2.uploader.upload(filePath);
            url = uploadResponse.secure_url;
            fs.unlinkSync(filePath)
        }
        const newcourse=new course({
            admin:email,
            courseName,
            imageUrl:url || "",
            courseDuration,
            description
        })
        await newcourse.save()
        res.status(201).json({message:"course added sucessfully"})
    }catch(err){
        res.status(500).json({messgae:"error in internal server",error:err.message,})
    }
}