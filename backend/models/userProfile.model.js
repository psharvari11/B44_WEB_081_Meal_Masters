const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dietaryRestrictions: [String], // e.g., ["vegetarian", "gluten-free"]
  preferredCuisines: [String],   // e.g., ["Indian", "Italian"]
  fitnessGoals: { type: String }, // e.g., "weight loss", "muscle gain"
  allergies: [String]            // e.g., ["peanuts", "dairy"]
}, {
  timestamps: true
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);
module.exports = UserProfile;
