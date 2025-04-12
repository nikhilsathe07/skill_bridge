import {Schema,model} from "mongoose"
const authSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ["mentor","student"], 
        default: 'student'
    }

})
const User=model("User",authSchema)
export {User}