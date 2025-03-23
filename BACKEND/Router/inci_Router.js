const express=require('express')
const Inci=require("../model/Users");
const { model } = require('mongoose');
const Router=express.Router();

Router.post('/inci',async(req,res)=>{
    const {  incident_id,Title, description, Incident_Name,Incident_type}=req.body;
    try{
        if(!incident_id||!Title,description,Incident_Name,Incident_type){
            return res.status(400).json({message:"Missing required fields" });
        }

        const inci=await inci.create({
            incident_id,
            Title,
            description,
            Incident_Name,
            Incident_type
        })
        res.status(201).json(inci)


    }
    catch{
        res.status(500).json({ message: err.message });
    }
})

Router.get('/inci',async(req,res)=>{
    try{
        const inci=await inci.find()
        res.status(201).json(inci);
    }
    catch{
        res.status(404).json({message:err.message})
    }
})

module.exports=Router
