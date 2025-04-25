const express = require("express");
const router = express.Router();
const {
  upsertGroceryList,
  getGroceryList
} = require("../controllers/groceryListController");
const { authenticateUser } = require("../middlewares/auth.middleware.js");
const { groceryListValidator } = require("../validators/groceryListValidator.js");

router.post("/", authenticateUser, groceryListValidator, upsertGroceryList);
router.get("/", authenticateUser, getGroceryList);

module.exports = router;
