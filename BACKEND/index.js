const express = require('express');
const app = express();
const PORT = 8000;
const connectDatabas = require('./Database/db.js');
const userRoutes = require('./Router/router.js');
const Incident = require('./model/incident');  // Better variable name

// Load environment variables before connecting to the database
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/.env" });
}

connectDatabas();

// Middleware (Must be before routes)
app.use(express.json()); // Ensures JSON data is parsed
app.use(express.urlencoded({ extended: true })); // Handles form data

// Routes
app.use('/api', userRoutes);

app.post('/incident', async (req, res) => {
    try {
        let { incident_id, Title, description, Incident_Name, Incident_type, createdAt } = req.body;
        
        // Optional: Validate required fields
        if (!incident_id || !Title || !Incident_Name || !Incident_type) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        let createe = await Incident.create({
            incident_id, 
            Title,
            description,
            Incident_Name,
            Incident_type,
            createdAt,
        });

        res.status(201).json(createe); // Use 201 status for successful resource creation
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
