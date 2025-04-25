const { body } = require("express-validator");

exports.groceryListValidator = [
  body("items").isArray({ min: 1 }).withMessage("Items array is required"),
];
