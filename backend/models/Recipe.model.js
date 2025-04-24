const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  instructions: String,
  calories: Number,
  macros: {
    protein: Number,
    carbs: Number,
    fat: Number
  },
  dietaryTags: [String], // e.g., vegetarian, gluten-free
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // optional for user-submitted recipes
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
