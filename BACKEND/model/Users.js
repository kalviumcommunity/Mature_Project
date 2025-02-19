const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    Username:{
        type:String,
        required: [true, "Please enter your name!"],
    },
    email:{
        type: String,
        required: [true, "Please enter your email!"],
      },
    PhoneNo:{
        type:Number,
        required:[true,"Please enter your email"]
    },  
    createdAt:{
        type: Date,
        default: Date.now(),
       }

})

module.exports=mongoose.model("user",UserSchema);
