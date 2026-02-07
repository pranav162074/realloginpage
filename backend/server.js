require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./auth.controller');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

// Connect to MongoDB using the URI from your .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ Database connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});