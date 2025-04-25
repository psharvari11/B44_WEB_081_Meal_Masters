const express = require("express");
const router = express.Router();
const {
  upsertUserProfile,
  getUserProfile
} = require("../controllers/userProfileController.js");
const { authenticateUser } = require("../middlewares/auth.middleware.js");
const { userProfileValidator } = require("../validators/userProfileValidator.js");

router.post("/", authenticateUser, userProfileValidator, upsertUserProfile);
router.get("/", authenticateUser, getUserProfile);

module.exports = router;
