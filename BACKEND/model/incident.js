const mongoose=require('mongoose');
const incidentSchema=mongoose.Schema({
    incident_id:{
        type:Number,
    },
    Title:{
        type:String
    },
    description:{
        type:String,
        minlength:30,
        maxlength:300,
    },
    Incident_Name:{
        type:String
    },
    Incident_type:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now(),
       }
       


})
module.exports=mongoose.model("inci",incidentSchema);
       