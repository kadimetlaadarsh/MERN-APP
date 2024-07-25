import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type: Number
    }
},{timestamps:true});
//to use our schema defination we need to convert our blogschema into a Model we can work with To do so we pass it into mongoose.model(modelNmae,schema)
//create Model
const User = mongoose.model('User',userSchema)

export default User;