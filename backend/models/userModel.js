const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  dietaryPreferences: [String],
  allergies: [String],
  fitnessGoal: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
