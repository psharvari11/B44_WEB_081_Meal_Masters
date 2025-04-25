const { body } = require("express-validator");

exports.recipeValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("ingredients").isArray({ min: 1 }).withMessage("At least one ingredient is required"),
  body("instructions").notEmpty().withMessage("Instructions are required"),
];
