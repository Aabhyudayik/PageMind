// this file will describe the layout of the data ; the schema
import mongoose from "mongoose"
let userSchema=mongoose.Schema({
    name:String, email:string, password:string
});
let Capsule= mongoose.model("User",userSchema)
export default Capsule