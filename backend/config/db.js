import { connect } from "mongoose";
import "dotenv/config"
const connection =async()=>{
    
    try{
        
        await connect(process.env.MONGO_URL)
        // console.log("jot")
        console.log("connected to mongodb");
    }catch(err){
        console.log("err in mongo connection");
    }
}
export default connection