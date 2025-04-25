const { body } = require("express-validator");

exports.nutritionLogValidator = [
  body("date").notEmpty().withMessage("Date is required"),
  body("calories").isNumeric().withMessage("Calories must be a number"),
];
