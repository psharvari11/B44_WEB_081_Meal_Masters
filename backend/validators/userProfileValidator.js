const { body } = require("express-validator");

exports.userProfileValidator = [
  body("dietaryRestrictions").isArray(),
  body("fitnessGoals").notEmpty().withMessage("Fitness goals required"),
];
