const express = require("express");
const router = express.Router();
const User = require("../model/Users");

router.post('/user', async (req, res) => {
    try {
        const { Username, PhoneNo, email, createdAt } = req.body;

        if (!Username || !PhoneNo || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const create = await User.create({ Username, PhoneNo, email, createdAt });
        res.json(create);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.delete('/user/:id', async (req, res) => {  // Fixed URL
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
// code bhulgaya toh screen band karde
module.exports = router;
