const express = require("express");
const router = express.Router();
const User = require("../model/Users");
const bcrypt=require("bcrypt");
const jwt =require('jsonwebtoken');
const SECRET_KEY="your_secret_key"
const verifyToken=require('../Middleware/mid')

router.post('/user', async (req, res) => {
    const { Name,  email,phoneNumber,password } = req.body;
    try {
        if (!Name || !phoneNumber|| !email || !password ) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const saltRounds=10;
        const haash=await bcrypt.hash(password,saltRounds)

        const create = await User.create({ Name, phoneNumber, email,password:haash });
        res.json(create);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


});

router.post('/user/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"user not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token=jwt.sign({id: user._id,email:user.email, },SECRET_KEY)
        res.cookie("authcookie",token,{
            httpOnly: true,       
            secure: true,         
            sameSite: "strict",   
            maxAge: 24 * 60 * 60 * 1000 
        });
    }
    catch (err) {
        console.error("Login error:", err);
        res.status(500).send("Internal server error");
    }

})



router.get('/user',verifyToken, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.delete('/user/:id', async (req, res) => {  
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;