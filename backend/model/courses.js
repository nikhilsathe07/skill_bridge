import { Schema,model } from "mongoose";

const courses=new Schema({
    admin:{type:String,required:true},
    courseName:{type:String,required:true},
    courseDuration:{type:String,required:true},
    imageUrl:{type:String},
    description:{type:String},
    students:[{email:{type:String}}]
})
const course=model("course",courses)
export {course}