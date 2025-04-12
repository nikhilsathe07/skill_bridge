import {User} from "../model/authModel.js";
import agron2 from "argon2";
import jwt from "jsonwebtoken";
import "dotenv/config"

const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({message: "Please fill all fields"});
        }
        const findUser=await User.findOne({email})
        if(findUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword = await agron2.hash(password);
        const newUser=new User({
            name,
            email,
            password:hashedPassword,
            role
        })
        await newUser.save()
        res.status(201).json({msg:"User created successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body
    try{
      
       if(!email || !password){
            return res.status(400).json({message:"Please fill all fields"})
        }
        const findUser=await User.findOne({email})
        
        if(!findUser){
            return res.status(400).json({message:"User does not exist"})
        }
        const isMatch=await agron2.verify(findUser.password,password)
        
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token=jwt.sign({id:findUser._id,role: findUser.role ,email:findUser.email},process.env.JWT_SECRET,{expiresIn:"1d"})
        
        res.status(200).json({
            message:"Login successful",
            token
        })
    }catch(err){
        res.status(500).json({message:"Internal server error"})
    }
}

export { register ,login}