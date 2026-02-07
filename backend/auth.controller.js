const User = require('./user.model');
const jwt = require('jsonwebtoken');

// This pulls the secret from your .env file
const JWT_SECRET = process.env.JWT_SECRET;

// --- REGISTER LOGIC ---
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ email, password });
        await newUser.save(); // Make sure 'await' is here!

        res.status(201).json({ success: true, message: "User registered!" });
    } catch (error) {
        console.log("REGISTER ERROR:", error); // ADD THIS LINE
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

// --- LOGIN LOGIC ---
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, token, message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};