const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dietaryRestrictions: [String],
  fitnessGoals: String,
  preferredCuisines: [String],
  allergies: [String],
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
