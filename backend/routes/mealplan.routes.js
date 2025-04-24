const express = require("express");
const MealPlan = require("../models/MealPlan.model");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Create/Update weekly meal plan
router.post("/meal-plan", authMiddleware, async (req, res) => {
  try {
    const { weekStart, meals } = req.body;

    let plan = await MealPlan.findOne({ userId: req.user._id, weekStart });

    if (plan) {
      plan.meals = meals;
      await plan.save();
    } else {
      plan = new MealPlan({ userId: req.user._id, weekStart, meals });
      await plan.save();
    }

    res.status(200).json({ message: "Meal plan saved", plan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get meal plan for the week
router.get("/meal-plan", authMiddleware, async (req, res) => {
  try {
    const { weekStart } = req.query;
    const plan = await MealPlan.findOne({ userId: req.user._id, weekStart }).populate("meals.recipe");

    if (!plan) return res.status(404).json({ message: "No plan found" });

    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
