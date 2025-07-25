const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["reader", "developer", "admin", "editor", "author"], default: "developer" }
});

module.exports = mongoose.model("user", userSchema);