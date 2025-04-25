const express = require("express");
const router = express.Router();
const {
  createMealPlan,
  getMealPlans,
  updateMealPlan,
  deleteMealPlan,
} = require("../controllers/mealPlanController.js");
const { authenticateUser } = require("../middlewares/auth.middleware.js");
const { mealPlanValidator } = require("../validators/mealPlanValidator.js");

router.post("/", authenticateUser, mealPlanValidator, createMealPlan);
router.get("/", authenticateUser, getMealPlans);
router.put("/:id", authenticateUser, mealPlanValidator, updateMealPlan);
router.delete("/:id", authenticateUser, deleteMealPlan);

module.exports = router;
