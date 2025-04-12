import { Schema,model } from "mongoose";

const courses=new Schema({
    courseName:{type:String,required:true},
    courseDuration:{type:String,required:true},
    imageUrl:{type:String},
    description:{type:String},
    students:[{email:{type:String}}]
})
const course=model("course",courses)
export {course}