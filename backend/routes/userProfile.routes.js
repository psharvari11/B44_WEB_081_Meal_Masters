const express = require("express");
const UserProfile = require("../models/userProfile.model");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Create or update user profile
router.post("/profile", authMiddleware, async (req, res) => {
  try {
    const { dietaryRestrictions, preferredCuisines, fitnessGoals, allergies } = req.body;

    let profile = await UserProfile.findOne({ userId: req.user._id });

    if (profile) {
      // Update existing profile
      profile.dietaryRestrictions = dietaryRestrictions;
      profile.preferredCuisines = preferredCuisines;
      profile.fitnessGoals = fitnessGoals;
      profile.allergies = allergies;
      await profile.save();
    } else {
      // Create new profile
      profile = new UserProfile({
        userId: req.user._id,
        dietaryRestrictions,
        preferredCuisines,
        fitnessGoals,
        allergies
      });
      await profile.save();
    }

    res.status(200).json({ message: "Profile saved successfully", profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
