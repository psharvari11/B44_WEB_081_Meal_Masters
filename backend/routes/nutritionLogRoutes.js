const express = require("express");
const router = express.Router();
const {
    createLog,
    getLogs,
  updateNutritionLog,
  deleteNutritionLog,
} = require("../controllers/nutritionLogController");
const { authenticateUser } = require("../middlewares/auth.middleware.js");
const { nutritionLogValidator } = require("../validators/nutritionLogValidator.js");

router.post("/", authenticateUser, nutritionLogValidator, createLog);
router.get("/", authenticateUser, getLogs);
router.put("/:id", authenticateUser, nutritionLogValidator, updateNutritionLog);
router.delete("/:id", authenticateUser, deleteNutritionLog);

module.exports = router;
