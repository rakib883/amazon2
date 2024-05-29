import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    useName:{
        type:String,
        require:[true,"inter your user name"]
    },
    userGmail:{
        type:String,
        require:[true],
        unique:true
    },
    userPassword:{
        type:String,
        require:[true]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = models.User || model("User", userSchema);

export default User