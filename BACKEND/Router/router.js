const express = require("express");
const router = express.Router();
const User = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth");
require("dotenv").config({ path: "./config/.env" });


router.post('/user/signup', async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;
    try {
        if (!username || !phoneNumber || !email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const create = await User.create({ username, phoneNumber, email, password: hashedPassword });
        res.json(create);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_Secret);
        
        // Set JWT in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Send user data without sensitive information
       

        res.json({ message: "Login successful" });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).send("Internal server error");
    }
});


router.get('/user', verifyToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // Send user data without sensitive information
        const userData = {
            id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber
        };
        
        res.json(userData);
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
