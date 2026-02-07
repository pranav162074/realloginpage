const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Prevents duplicate accounts
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

// --- SECURITY MIDDLEWARE ---
// This function runs automatically EVERY TIME you save a user
userSchema.pre('save', async function() { // Removed 'next' from arguments
    if (!this.isModified('password')) return; // Removed 'next()'

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        // No need to call next() here when using async
    } catch (error) {
        throw error; // Mongoose will catch this and stop the save
    }
});

// --- HELPER METHOD ---
// This allows you to check if a typed password matches the hashed one in the DB
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);