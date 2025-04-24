const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weekStart: { type: Date, required: true },
  meals: [{
    date: { type: Date, required: true },
    type: { type: String, enum: ["breakfast", "lunch", "dinner", "snack"], required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }
  }]
}, { timestamps: true });

const MealPlan = mongoose.model("MealPlan", mealPlanSchema);
module.exports = MealPlan;
