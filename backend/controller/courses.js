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
  
  export const addCourse = async (req, res) => {
    const { courseName, courseDuration, description } = req.body;
  
    const rawToken = req.headers.authorization;
    if (!rawToken) {
      return res.status(401).json({ message: "Token needed" });
    }
  
    const token = rawToken// Bearer token
  
    let filePath;
    if (req.file) {
      filePath = req.file.path;
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { email, name } = decoded;
  
      let url = "";
      if (req.file) {
        const uploadResponse = await v2.uploader.upload(filePath);
        url = uploadResponse.secure_url;
        fs.unlinkSync(filePath); // remove local file after upload
      }
  
      const newCourse = new course({
        admin: email,
        name: name,
        courseName,
        imageUrl: url,
        courseDuration,
        description,
      });
  
      await newCourse.save();
  
      res.status(201).json({ message: "Course added successfully" });
    } catch (err) {
      console.error("Add Course Error:", err.message);
      res.status(500).json({
        message: "Error in internal server",
        error: err.message,
      });
    }
  };
  

export const getCourse=async(req,res)=>{
    try{
        const allCourses=await course.find().select("-email")
        res.status(200).json({data:allCourses})
    }catch(err){
        res.status(500).json({message:"internal server error in get courses"})
    }
}