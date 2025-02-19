
const express=require('express');
const app=express();
const PORT=8000;
const connectDatabase=require('./Database/db.js');
const User = require('./model/Users');
const inci = require('./model/incident');


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/.env" });
  }


connectDatabase();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/user', async (req, res) => {
    let { Username, PhoneNo, email, createdAt } = req.body;
    let create = await User.create({
        Username,
        PhoneNo,
        email,
        createdAt,
    });
    res.json(create);
});

app.post('/incident', async (req, res) => {
    let {  incident_id, Title,description,Incident_Name,Incident_type,createdAt } = req.body;
    let createe = await inci.create({
        incident_id, 
        Title,description  ,
        Incident_Name,
        Incident_type,
        createdAt,
    });
    res.json(createe);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
