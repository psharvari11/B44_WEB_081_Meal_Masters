const mongoose = require("mongoose");

const nutritionLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: String,
  meals: [
    {
      recipeId: mongoose.Schema.Types.ObjectId,
      calories: Number,
      protein: Number,
      carbs: Number,
      fats: Number
    }
  ]
});

module.exports = mongoose.model("NutritionLog", nutritionLogSchema);
