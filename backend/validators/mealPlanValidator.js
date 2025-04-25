const { body } = require("express-validator");

exports.mealPlanValidator = [
  body("weekStart").notEmpty().withMessage("Week start date is required"),
  body("meals").isArray({ min: 1 }).withMessage("Meals array is required"),
];
