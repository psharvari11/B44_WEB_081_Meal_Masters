const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController.js");
const { authenticateUser } = require("../middlewares/auth.middleware.js");
const { recipeValidator } = require("../validators/recipeValidator.js");

router.post("/", authenticateUser, recipeValidator, createRecipe);
router.get("/", authenticateUser, getRecipes);
router.get("/:id", authenticateUser, getRecipeById);
router.put("/:id", authenticateUser, recipeValidator, updateRecipe);
router.delete("/:id", authenticateUser, deleteRecipe);

module.exports = router;
