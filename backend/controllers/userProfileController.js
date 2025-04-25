const UserProfile = require("../models/userProfile.model.js");

// Upsert: Create or update user profile
// Upsert: Create or update user profile
exports.upsertUserProfile = async (req, res) => {
  try {
    const { dietaryRestrictions, fitnessGoals, preferredCuisines, allergies } = req.body;
    const userId = req.user._id;

    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId }, // ✅ use the correct field name
      { dietaryRestrictions, fitnessGoals, preferredCuisines, allergies },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: "Failed to save profile", details: error.message });
  }
};

// Fetch user profile
exports.getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user._id }).populate("userId", "name email"); // ✅ match the schema

    if (!profile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.status(200).json({
      name: profile.userId.name,
      email: profile.userId.email,
      dietaryRestrictions: profile.dietaryRestrictions,
      preferredCuisines: profile.preferredCuisines,
      fitnessGoals: profile.fitnessGoals,
      allergies: profile.allergies
    });
    
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch profile", details: error.message });
  }
};
