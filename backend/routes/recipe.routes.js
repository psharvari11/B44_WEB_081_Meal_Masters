const express = require("express");
const Recipe = require("../models/Recipe.model");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Create a new recipe
router.post("/recipes", authMiddleware, async (req, res) => {
  try {
    const { title, description, ingredients, instructions, calories, macros, dietaryTags } = req.body;

    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      calories,
      macros,
      dietaryTags,
      createdBy: req.user._id
    });

    await recipe.save();
    res.status(201).json({ message: "Recipe created", recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all recipes (with filter by dietaryTags)
router.get("/recipes", async (req, res) => {
  try {
    const { tag } = req.query;
    const query = tag ? { dietaryTags: tag } : {};
    const recipes = await Recipe.find(query);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
