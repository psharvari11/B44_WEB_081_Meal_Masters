const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  calories: { type: Number, default: 0 },
  macros: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fat: { type: Number, default: 0 }
  },
  cuisine: { type: String }, // e.g., Italian, Indian
  dietType: { type: String }, // e.g., keto, vegan
  dietaryTags: [{ type: String }], // e.g., vegetarian, gluten-free
  allergies: [{ type: String }], // e.g., nuts, dairy
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional for user-submitted recipes
  isPublic: { type: Boolean, default: true }, // can be toggled by admins
  favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // to support favorites
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
